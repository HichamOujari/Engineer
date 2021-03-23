import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DoneIcon from '@material-ui/icons/Done';
import Link from "next/link"

import AOS from "aos"
import { duration } from '@material-ui/core';

export default class Single_Serv_Card extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.Single_Serv_Card}>
          <div data-aos="fade-in" className={style.front}>
              <DoneIcon className={style.icon} />
              <p data-aos="fade-up" className={style.title}>We’re World's Leading Industry Corporation</p>
              <p data-aos="fade-down" className={style.desc}>Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada</p>
          </div>
          <div data-aos="fade-down" className={style.back}>
                <p data-aos="fade-down" className={style.title}>Get a appointment with our Expert</p>
                <p data-aos="fade-up" className={style.desc}>Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada</p>
                <Link href="/about"><ArrowRightAltIcon className={style.Gofor} /></Link>
          </div>
      </div>
    );
  }
}
