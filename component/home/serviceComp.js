import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
export default class ServiceComp extends Component {
  render() {
    return (
      <div className={style.ServiceComp}>
          <img src={this.props.data.image} className={style.image}/>
          <div className={style.content}>
              <h3 className={style.title}>{this.props.data.title}</h3>
              <p className={style.desc}>{this.props.data.desc}</p>
              <Link href={this.props.data.lien} ><p className={style.lien}>Read <ArrowRightAltIcon className={style.iconRead}/></p></Link>
          </div>
      </div>
    );
  }
}
