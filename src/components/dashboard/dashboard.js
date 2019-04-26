import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

import Header from '../header/header'
import Footer from '../footer/footer'
import Searchbar from '../searchbar/searchbar'

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state= {
      dataSource:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/container')
      .then(response=>response.json())
      .then(responseJson=>{
        console.log(responseJson)
        if(!responseJson.success){
          console.error(responseJson.msg)
          return
        }
        let { data } = responseJson
            this.setState({
              dataSource:data
            })
      })
  }

  renderChildren=(dataSource)=>{
    console.log(dataSource)
      return dataSource.map((item)=>{
        return (
          <div className='renderedContainer'>
            <div className='containerName'>
              { item.name }
            </div>
            <div className='containerUpdate'>
              {new Date(item.updatedAt).toLocaleDateString('en-US',{
                year:'numeric',
                month:'short',
                day:'numeric',
              })}
            </div>
            <div className='containerDropdown'>
              <div>
                more
              </div>
            </div>
          </div>
        )
      })


  }

  render() {
    return (
      <div className='page'>
        <Header className='header' />
          <div id='dashboard' className='content'>
            <div>
              Recently Updated
            </div>
            <div className='oval'>
              <Searchbar/>
            </div>
            <div className='dataContainer'>
              <div>
                {this.renderChildren(this.state.dataSource)}
              </div>
            </div>
          </div>
        <Footer className='footer' />
      </div>
    );
  }
}

export default Dashboard;
