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
      <ul data-aos="fade-up" className={style.ProjectMain}>
          {this.props.data.map((ele,index)=>{
              return (<li data-aos="fade-down" key={index}>
                  <img data-aos="fade-up" className={style.img} src={ele.image} />
                  <ProjectCard data-aos="fade-down" className={style.Content} data={ele} />
              </li>)
          })}
      </ul>
    );
  }
}
