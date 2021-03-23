import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
import AOS from "aos"

export default class About extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-up" className={style.About}>
          <div className={style.left}>
              <p data-aos="zoom-down" className={style.title}>About Us</p>
              <p data-aos="fade-up" className={style.desc}>We're leading Industrial Solution  in Worldwide</p>
              <Link href="/about"><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <img data-aos="zoom-down" className={style.right} src="/home/header1.png" />
      </div>
    );
  }
}
