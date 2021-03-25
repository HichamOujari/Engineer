import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import Link from "next/link"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class Contact extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.contact}>
          <div data-aos="fade-in" className={style.left}>
              <p data-aos="fade-down" className={style.title}>Our Locatiion</p>
              <p data-aos="fade-up" className={style.content}>{this.props.data.infos.location}</p>
              <p className={style.title}>Quick Contact</p>
              {this.props.data.infos.email.map((ele,index)=>{
                  return (<p className={style.content} key={index}>{ele}</p>)
              })}
              <p data-aos="fade-up" className={style.NumTitle}>CALL US TODAY</p>
              <p data-aos="fade-up" className={style.title}>{this.props.data.infos.num}</p>
              <ul className={style.SocialMedia}>
                <li><Link href={this.props.data.infos.fb}><TwitterIcon/></Link></li>
                <li><Link href={this.props.data.infos.twitter}><FacebookIcon/></Link></li>
                <li><Link href={this.props.data.infos.linkedin}><LinkedInIcon/></Link></li>
                <li><Link href={this.props.data.infos.youtube}><YouTubeIcon/></Link></li>
              </ul>
          </div>
          <div className={style.right}>
              <p className={style.title}>Appointment Form</p>
              <p className={style.sousTitle}>Request A Quote</p>
              <form  className={style.form}>
                  <input type="text" required name="name" placeholder="Name" />
                  <input type="email" required name="email" placeholder="Email" />
                  <input type="phone" required name="phone" placeholder="Phone" />
                  <select name="service" placeholder="Services">
                      <option>Choose service</option>
                      {this.props.data.services.map(((ele,index)=>{
                        return (<option value={ele} key={index}>{ele}</option>)
                      }))}
                  </select>
                  <textarea placeholder="Message"></textarea>
                  <div className={style.Submit_check}>
                    <button>Send Now <ArrowRightAltIcon /></button>
                    <p className={style.Check}><input id="checkPolice" type="checkbox" /> <label htmlFor="checkPolice">I accept the privacy and terms</label></p>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}
