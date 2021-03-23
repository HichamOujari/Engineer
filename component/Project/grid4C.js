import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import Link from "next/link"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class Grid4C extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <li data-aos="fade-down" className={style.Grid4C}>
          <p data-aos="fade-up" className={style.title}>Explore Service</p>
          <p data-aos="fade-down" className={style.sousTitle}>{this.props.data.title}</p>
          <Link href={this.props.data.lien}><p className={style.GoFor} >READ <ArrowRightAltIcon /></p></Link>
      </li>
    );
  }
}
