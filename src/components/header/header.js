import React, { Component } from 'react';
import './styles.css';
import theme from '../../theme.js';
import Drawer from '../drawer/drawer.js';
import withUserUpdate from '../userhoc/user-hoc';

class Header extends Component {

  constructor(props){
    super(props)
    this.state= {
      toggleDrawer:false,
      isUser:true,
    }
  }

  componentWillMount(){
    //fetch localHost jwt
    //set isUser state to true/false
  }

  render() {
    return (
        <header style={{backgroundColor:theme.capBlue, color: theme.capRed, position:'relative'}} className="App-header">
            <div className='left'>
              <img className='header-img' src='../../../public/source/burger.png' alt="browser doesnt support this" onClick={() => {this.setState({toggleDrawer:!this.state.toggleDrawer})}}/>
            </div>
            <Drawer
              toggle={this.state.toggleDrawer}
              isUser={this.state.isUser}
              />
            <a className='right' href="/settings">
              <img className='header-img' src='../../../public/source/gear.png' alt="browser doesnt support this"/>
            </a>
        </header>
    );
  }
}

export default withUserUpdate(Header);
