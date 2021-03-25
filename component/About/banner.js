import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import Link from "next/link"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class Banner extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  
  render() {
    return (
      <div className={style.Banner}>
          <div className={style.content}>
              <p className={style.title}>Get a Quote</p>
              <p className={style.sousTitle}>Build Your Future Today</p>
              <p className={style.quote}>Pellentesque ex ex, suscipit et lectus at, mollis tempus ligula. Praesent sagittis eros orci, at sodales dolor rutrum</p>
              <Link href={this.props.data.lien}><p className={style.goFor}>Appointment <ArrowRightAltIcon /></p></Link>
          </div>
          <img data-aos="fade-down" className={style.image} src={this.props.data.image} />
          <div className={style.Services}>
              <div className={style.Service}>
                  <p className={style.left}>01</p>
                  <div className={style.right}>
                      <p className={style.title}>{this.props.data.sousComp[0].title}</p>
                      <p className={style.desc}>{this.props.data.sousComp[0].desc}</p>
                  </div>
              </div>
              <div  className={style.Service}>
                  <p className={style.left}>02</p>
                  <div className={style.right}>
                      <p className={style.title}>{this.props.data.sousComp[1].title}</p>
                      <p className={style.desc}>{this.props.data.sousComp[1].desc}</p>
                  </div>
              </div>
              <div data-aos="fade-in" className={style.Service}>
                  <p className={style.left}>03</p>
                  <div className={style.right}>
                      <p className={style.title}>{this.props.data.sousComp[2].title}</p>
                      <p className={style.desc}>{this.props.data.sousComp[2].desc}</p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
