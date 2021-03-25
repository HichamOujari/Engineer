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
      <li className={style.Grid3C} >
          <img  src={this.props.data.image} className={style.Image} />
          <div  className={style.INFO}>
              <p  className={style.title}>{this.props.data.title}</p>
              <p  className={style.desc}>{this.props.data.desc}</p>
              <Link href={this.props.data.lien}><p className={style.GofOR}>READ <ArrowRightAltIcon /></p></Link>
          </div>
      </li>
    );
  }
}
