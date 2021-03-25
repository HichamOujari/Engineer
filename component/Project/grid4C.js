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
      <li className={style.Grid4C}>
          <p  className={style.title}>Explore Service</p>
          <p className={style.sousTitle}>{this.props.data.title}</p>
          <Link href={this.props.data.lien}><p className={style.GoFor} >READ <ArrowRightAltIcon /></p></Link>
      </li>
    );
  }
}
