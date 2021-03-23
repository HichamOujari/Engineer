import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
import AOS from "aos"

export default class ProjectCard extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.ProjectCard}>
          <p data-aos="fade-up" className={style.title}>{this.props.data.title}</p>
          <p data-aos="fade-down" className={style.desc}>{this.props.data.desc}</p>
          <Link href={this.props.data.lien}><ArrowRightAltIcon  className={style.goFor}/></Link>
      </div>
    );
  }
}