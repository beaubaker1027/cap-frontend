import React, {Component} from 'react';

import {
  getFromStorage,
} from '../../utils/storage';

import user from '../../services/userservice/user-service';

var withUserUpdate = function(WrappedComponent){
  return class extends Component{
    constructor(props){
      super(props);
      this.state={
        user:null
      };
    }

    onUserChanged = (user) => {
      this.setState({
        user:user
      })
    }

    componentDidMount(){
      getFromStorage('user')
        .then((token) => {
          if(!token) return
          this.setState({
            user: token
          })
        }).catch((err) => {
          console.warn(err);
        })
      user.on('userUpdated', (user)=>{
        this.onUserChanged(user);
      });
    }

    componentWillUnmount(){
      user.off('userUpdated', this.onUserChanged);
    }

    render(){
      return(<WrappedComponent {...this.props} userName={this.state.user}/>)
    }
  }
}

export default withUserUpdate;
