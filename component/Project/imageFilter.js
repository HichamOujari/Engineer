import React, { Component } from 'react';
import Link from "next/link"
import style from '../../styles/Service.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default class ImageFilter extends Component {
  render() {
    return (
      <div onMouseLeave={(e)=>{
        document.getElementById("CardProjectFilter"+this.props.id).style.display="none"
    }} onMouseMove={(e)=>{
        document.getElementById("CardProjectFilter"+this.props.id).style.display="flex"
    }} className={style.ImageFilter}>
          <img src={this.props.data.image} className={style.Image} />
          <div id={"CardProjectFilter"+this.props.id}  className={style.content}>
              <p className={style.title}>{this.props.data.title}</p>
              <p className={style.text}>{this.props.data.text}</p>
              <Link href={this.props.data.lien}><ArrowRightAltIcon className={style.gofor} /></Link>
          </div>
      </div>
    );
  }
}
