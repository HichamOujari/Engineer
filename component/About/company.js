import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import Link from "next/link"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"
  
  
export default class Company extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }render() {
    return (
      <div data-aos="fade-up" className={style.Company}>
          <div data-aos="fade-down" className={style.left}>
              <p className={style.title}>OUR COMPANY</p>
              <p className={style.sousTitle}>{this.props.data.title}</p>
              <p className={style.desc}>{this.props.data.desc}</p>
              <Link href={this.props.data.lien}><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <div data-aos="fade-left" className={style.right}>
              <div className={style.images}>
                  {this.props.data.images.map((ele,index)=>{
                      return (<img src={ele} className={style.img} key={index} />)
                  })}
              </div>
              <ul className={style.doted}>
                  {this.props.data.images.map((ele,index)=>{
                      return (<li key={index} ></li>)
                  })}
              </ul>
          </div>
      </div>
    );
  }
}
