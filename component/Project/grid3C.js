import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import Link from "next/link"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class Grid3C extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  
  render() {
    return (
      <li data-aos="fade-down" className={style.Grid3C} >
          <img data-aos="fade-up" src={this.props.data.image} className={style.Image} />
          <div data-aos="fade-down" className={style.INFO}>
              <p data-aos="fade-down" className={style.title}>{this.props.data.title}</p>
              <p data-aos="fade-up" className={style.desc}>{this.props.data.desc}</p>
              <Link href={this.props.data.lien}><p className={style.GofOR}>READ <ArrowRightAltIcon /></p></Link>
          </div>
      </li>
    );
  }
}
