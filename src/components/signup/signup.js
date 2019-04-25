import React, { Component } from 'react';
import {debounce} from 'lodash';
import './styles.css';
import Header from '../header/header'
import Footer from '../footer/footer'
import user from '../../services/userservice/user-service'
import theme from '../../theme.js'

import {
  getFromStorage,
} from '../../utils/storage';

import {
  emailValidation,
  userNameValidation,
  passwordValidation
} from '../../utils/validations'

export default class Signup extends Component {

  constructor(props){
    super(props)

    this.state={
      isLoading: true,
      isLoggedIn: false,
      banner: null
    }
  }

  componentDidMount(){
    getFromStorage('token')
      .then((token) => {
        if(token){
          this.setState({
            isLoading: false,
            isLoggedIn: true
          })
        } else {
          this.setState({
            isLoading: false
          })
        }
      }
    ).catch((err)=>{
      console.log(err);
    })
  }

  /**
   * validate text
   * @param { function, promise } strategy
   * @param { string } formText
   * @return { bool } strategySuccess
  */
  validation = debounce((strategy, formText)=>{
    strategy(formText)
      .then((success) => {return success})
      .catch((err) => {
        this.setState({
          banner:err
        })
      })
  }, 500)

  render(){
    if(this.state.isLoading){
      return(
        <h1>Loading...</h1>
      )
    }
    return(
      <div className='page'>
        <Header/>
        <div id='login' className='content'>
          <div className='form' style={{border:'5px solid '+theme.capBlue, backgroundColor:theme.capBlue+'1A'}}>
            <h1>Sign Up</h1>
            <div className='error' style={{color:theme.capRed}}>{this.state.banner && <label className='error-banner'>{this.state.banner}</label>}</div>
            <form>
              <span className='formRow'><input placeholder='Username' className='formInput'/></span>
              <span className='formRow'><input placeholder='Email' className='formInput'/></span>
              <span className='formRow'><input placeholder='Password' className='formInput' type='password'/></span>
              <div className='button-container'><button style={{backgroundColor:theme.capBlue+'80'}} type='submit'>Sign Up</button></div>
            </form>
            <div>
              <h4>Already Have An Account?</h4>
              <a href='/login'>Login</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
