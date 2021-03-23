import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import ProjectComp from "./projectComp"
import AOS from "aos"

export default class Project extends Component {
  componentDidMount(){
    AOS.init({duration:1000});
  }
  render() {
    return (
      <ul data-aos="fade-down" className={style.Project}>
          <li><img data-aos="fade-up" className={style.image} src="/home/projects/1.png" /></li>
          <li className={style.top}><ProjectComp data-aos="fade-down" data={this.props.data[0]}/></li>
          <li><img className={style.image} src="/home/projects/2.png" /></li>
          <li className={style.bottom}><ProjectComp data-aos="fade-up" data={this.props.data[1]}/></li>
          <li><img className={style.image} src="/home/projects/3.png" /></li>
          <li className={style.bottom}><ProjectComp data-aos="fade-up" data={this.props.data[2]}/></li>
      </ul>
    );
  }
}
