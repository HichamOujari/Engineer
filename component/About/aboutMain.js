import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import Link from "next/link"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class AboutMain extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  
  render() {
    return (
      <div data-aos="fade-down" className={style.AboutMain}>
          <div className={style.left}>
              <img src={this.props.data.image}  className={style.Image}/>
              <div className={style.BlocCount}>
                  <p className={style.count}>{this.props.data.yearsExperience}+</p>
                  <p className={style.sousTitle}>Years of Experience</p>
              </div>
          </div>
          <div className={style.right}>
              <p className={style.title}>About US</p>
              <p className={style.sousTitle}>We're providing the best customer service</p>
              <div className={style.quote}>
                  <img src={this.props.data.quote.image} className={style.ImageQuoter} />
                  <div className={style.Content}>
                      <p className={style.main}>{this.props.data.quote.text}</p>
                      <p className={style.WHO}>{this.props.data.quote.name}, <span>{this.props.data.quote.post}</span></p>
                  </div>
              </div>
              <p className={style.SousDesc}>{this.props.data.quote.desc}</p>
              <Link href={this.props.data.lien}><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
      </div>
    );
  }
}
