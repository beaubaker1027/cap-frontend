import React from 'react';
import './styles.css';
import theme from '../../theme.js'

const Drawer = function(props){

    return (
      <div className='page'>
        <div id='drawer' className='content' style={props.toggle?{bottom:'auto',top:'100%'}:undefined}>
        <a className='link-buttons' href='/' style={{backgroundColor:theme.capRed, display:props.isUser? 'block':'none'}}>
          Home
        </a>
        <a style={{backgroundColor:theme.capRed}}className='link-buttons' href='/login'>
          Login
        </a>
        <a style={{backgroundColor:theme.capRed}}className='link-buttons' href='/settings'>
          Settings
        </a>
        </div>
      </div>
    );
}

export default Drawer
