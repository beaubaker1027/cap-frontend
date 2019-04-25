import React, { Component } from 'react';
import './styles.css';

import Header from '../header/header'
import Footer from '../footer/footer'
import Searchbar from '../searchbar/searchbar'

class Landing extends Component {

  constructor(props){
    super(props)
    this.state= {
    }
  }

  render() {
    return (
      <div className='page'>
        <Header/>
          <div id='settings' className='content'>
              <Searchbar/>
            <h1>Settings</h1>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default Landing;
