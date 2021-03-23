import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import Link from "next/link"
import NewsCard from "./newsCard"
import AOS from "aos"

export default class HomeFooter extends Component {
    componentDidMount(){
        AOS.init({duration:2000});
    }
  render() {
    return (
      <div  className={style.HomeFooter}>
          <div data-aos="fade-down" className={style.left}>
              <div className={style.INFO}>
                  <img src="/logoColor.png" className={style.logo}/>
                  <p className={style.desc}>{this.props.data.desc}</p>
                  <div className={style.menu}>
                      <div data-aos="fade-up" className={style.left}>
                          <p className={style.title}>Quick Links</p>
                          <Link href="/about"><p className={style.Ele}>About Company</p></Link>
                          <Link href="/service"><p className={style.Ele}>Our Services</p></Link>
                          <Link href="/project"><p className={style.Ele}>Our Projects</p></Link>
                          <Link href="/contact"><p className={style.Ele}>Contacts</p></Link>
                      </div>
                      <div data-aos="fade-up" className={style.right}>
                      <p className={style.title}>Clients Support</p>
                          <Link href="/career"><p className={style.Ele}>Careers</p></Link>
                          <Link href="/process"><p className={style.Ele}>Our Process</p></Link>
                          <Link href="/faq"><p className={style.Ele}>FAQs</p></Link>
                          <Link href="/testimonials"><p className={style.Ele}>Client Testimonials</p></Link>
                          <Link href="/blog"><p className={style.Ele}>Our Blog</p></Link>
                      </div>
                  </div>
                  <p className={style.PoweredBy}>Merkulove © Dustro Template All rights reserved Copyrights 2020</p>
              </div>
              <img src="/home/header1.png" className={style.bg}/>
          </div>
          <div data-aos="fade-up" className={style.right}>
              <p className={style.title}>Our News</p>
              <div className={style.News}>
                  {this.props.data.News.map((ele,index)=>{
                      return <NewsCard data={ele} key={index}/>
                  })}
              </div>
          </div>
      </div>
    );
  }
}
