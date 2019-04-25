import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

import Header from '../header/header'
import Footer from '../footer/footer'

class Landing extends Component {

  constructor(props){
    super(props)
    this.state= {
    }
  }

  render() {
    return (
      <div className='page'>
        <Header className='header' />
          <div id='landing' className='content'>
            <img className='logo' src={`${process.env.PUBLIC_URL}/source/cap.png`} alt='not supported'/>
            <div className='buttons'>
              <Link className='link-buttons' to='/signup'>
                Sign Up
              </Link>
              <Link className='link-buttons' to='/login'>
                  Log In
              </Link>
            </div>
          </div>
        <Footer className='footer' />
      </div>
    );
  }
}

export default Landing;
