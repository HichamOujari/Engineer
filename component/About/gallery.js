import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import AOS from "aos"

export default class Gallery extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <ul data-aos="fade-down" className={style.Gallery}>
          {this.props.data.map((ele,index)=>{
              return (<li><img  data-aos="fade-up" className={style.img}  src={ele} key={index} /></li>)
          })}
      </ul>
    );
  }
}