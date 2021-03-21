import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import ProjectComp from "./projectComp"

export default class Project extends Component {
  render() {
    return (
      <ul className={style.Project}>
          <li><img className={style.image} src="/home/projects/1.png" /></li>
          <li className={style.top}><ProjectComp  data={this.props.data[0]}/></li>
          <li><img className={style.image} src="/home/projects/2.png" /></li>
          <li className={style.bottom}><ProjectComp data={this.props.data[1]}/></li>
          <li><img className={style.image} src="/home/projects/3.png" /></li>
          <li className={style.bottom}><ProjectComp  data={this.props.data[2]}/></li>
      </ul>
    );
  }
}
