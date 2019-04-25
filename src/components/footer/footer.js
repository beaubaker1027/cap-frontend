import React, { Component } from 'react';
import './styles.css';
import theme from '../../theme.js'

class Footer extends Component {

  render() {
    return (
      <footer className="App-footer" style={{backgroundColor:theme.capBlue}}>
        <div className='footer-left'>
        hello
        </div>
        <div className='footer-right'>
        hi
        </div>
      </footer>
    );
  }
}

export default Footer;
