import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import ProjectCard from "./projectCard"
import AOS from "aos"

export default class ProjectMain extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <ul className={style.ProjectMain}>
          {this.props.data.map((ele,index)=>{
              return (<li key={index}>
                  <img className={style.img} src={ele.image} />
                  <ProjectCard data-aos="fade-down" className={style.Content} data={ele} />
              </li>)
          })}
      </ul>
    );
  }
}
