import React, { Component } from 'react';
import {debounce} from 'lodash';
import './styles.css';

export default class Searchbar extends Component {

  constructor(props){
    super(props)

    this.state={

    }
  }

  onChangeText=debounce((text, lenCheck, callback)=>{
    if(text===this.state.lastQuery) return;
    this.setState({lastQuery:text});
    if(!lenCheck) return;
    if(lenCheck(text, 3)){
      return callback(text);
    }
  },750)

  textLenCheck=(text, int)=>{
    return text.length > int
  }

  render(){
    return(
      <div>
        <input
          id='searchBar'
            ref={(ref)=>{this.input=ref}}
          onChange={()=>{
            this.onChangeText(this.input.value, this.textLenCheck, (text)=>{
              return alert(text);
            })
          }}/>
      </div>
    )
  }
}
