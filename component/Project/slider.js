import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import ProjectCard from "./projectCard"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
import AOS from "aos"

export default class Slider extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <li data-aos="fade-down" className={style.Slider}>
          <img data-aos="fade-up" src={this.props.data.image} className={style.Image} />
          <div data-aos="fade-down" className={style.INFO}>
              <p data-aos="fade-up"className={style.title} >{this.props.data.title}</p>
              <p data-aos="fade-down"className={style.desc} >{this.props.data.desc}</p>
              <Link href={this.props.data.lien}><ArrowRightAltIcon className={style.GoFor} /></Link>
          </div>
      </li>
    );
  }
}
