import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import AOS from "aos"

export default class Gallery extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <ul className={style.Gallery}>
          {this.props.data.map((ele,index)=>{
              return (<li key={index} ><img   className={style.img}  src={ele} /></li>)
          })}
      </ul>
    );
  }
}