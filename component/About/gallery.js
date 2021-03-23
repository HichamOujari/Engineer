import React, { Component } from 'react';
import style from '../../styles/About.module.css'

export default class Gallery extends Component {
  render() {
    return (
      <ul className={style.Gallery}>
          {this.props.data.map((ele,index)=>{
              return (<li><img  className={style.img}  src={ele} key={index} /></li>)
          })}
      </ul>
    );
  }
}