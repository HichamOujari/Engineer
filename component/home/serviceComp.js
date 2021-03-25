import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
import AOS from "aos"

export default class ServiceComp extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-up" className={style.ServiceComp}>
          <img data-aos="fade-down" src={this.props.data.image} className={style.image}/>
          <div className={style.content}>
              <h3 className={style.title}>{this.props.data.title}</h3>
              <p className={style.desc}>{this.props.data.desc}</p>
              <Link href={this.props.data.lien} ><p className={style.lien}>Read <ArrowRightAltIcon className={style.iconRead}/></p></Link>
          </div>
      </div>
    );
  }
}
