import React, { Component } from 'react';
import style from "../styles/nav_footer.module.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from "next/link"
import NewsCard from "./outils/newsCard"
import AOS from "aos"

export default class Footer extends Component {
  
  News = [
      {
        title:"Agile Construction Management Building",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
      },{
        title:"Agile Construction Management Building",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
      },{
        title:"Agile Construction Management Building",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
      },{
        title:"Agile Construction Management Building",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
      },
    ]
    componentDidMount(){
      AOS.init({duration:2000});
    }
  render() {
    const listNews = (index)=>{
      return (<>
          <NewsCard data={this.News[index%this.News.length]} />
          <NewsCard data={this.News[(index++)%this.News.length]} />
      </>)
    }
    return (
      <div className={style.Footer}>
        <div  className={style.left}>
          <img data-aos="fade-down" className={style.logo} src="/logoWhite.png" />
          <p data-aos="fade-down" className={style.title}>CALL US TODAY</p>
          <p data-aos="fade-up" className={style.Number}>+ 1 634 7638 654</p>
          <ul className={style.SocialMedia}>
            <Link href="https://twitter.com"><li><TwitterIcon /></li></Link>
            <Link href="https://facebook.com"><li><FacebookIcon /></li></Link>
            <Link href="https://linkedin.com"><li><LinkedInIcon /></li></Link>
            <Link href="https://youtube.com"><li><YouTubeIcon /></li></Link>
          </ul>
          <p data-aos="fade-down" className={style.desc}>Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque a velit</p>
        </div>
        <div  className={style.right}>
          <div className={style.top}>
            <div className={style.First}>
              <p className={style.title}>Quick Links</p>
              <Link href="/about"><p className={style.Ele}>About Company</p></Link>
              <Link href="/services"><p className={style.Ele}>Our Services</p></Link>
              <Link href="/services/projects"><p className={style.Ele}>Our Projects</p></Link>
              <Link href="/price"><p className={style.Ele}>Princings</p></Link>
              <Link href="/about"><p className={style.Ele}>Contacts</p></Link>
            </div>
            <div className={style.Second}>
              <p className={style.title}>Clients Support</p>
              <Link href="/careers"><p className={style.Ele}>Careers</p></Link>
              <Link href="/process"><p className={style.Ele}>Our Process</p></Link>
              <Link href="/faqs"><p className={style.Ele}>FAQs</p></Link>
              <Link href="/testimonial"><p className={style.Ele}>Clients Testimonials</p></Link>
              <Link href="/blog"><p className={style.Ele}>Our Blog</p></Link>
            </div>
            <div className={style.third}>
              <Link href="/news"><p className={style.title}>Our News</p></Link>
              {listNews(0)}
              <ul className={style.dot}>
                <li></li>
                <li></li>
              </ul>
            </div>
            
          </div>
          <p  className={style.bottom}>Merkulove © Dustro Template All rights reserved Copyrights 2020</p>
        </div>
      </div>
    );
  }
}
