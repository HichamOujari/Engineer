import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"

export default class About extends Component {
  render() {
    return (
      <div className={style.About}>
          <div className={style.left}>
              <p className={style.title}>About Us</p>
              <p className={style.desc}>We're leading Industrial Solution  in Worldwide</p>
              <Link href="/about"><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <img className={style.right} src="/home/header1.png" />
      </div>
    );
  }
}
