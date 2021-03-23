import React, { Component } from 'react';
import style from '../../styles/Project.module.css'
import ProjectCard from "./projectCard"

export default class ProjectMain extends Component {
  render() {
    return (
      <ul className={style.ProjectMain}>
          {this.props.data.map((ele,index)=>{
              return (<li key={index}>
                  <img className={style.img} src={ele.image} />
                  <ProjectCard className={style.Content} data={ele} />
              </li>)
          })}
      </ul>
    );
  }
}
