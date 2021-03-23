import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import Link from "next/link"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AOS from "aos"

export default class TeamCard extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.TeamCard}>
          <img data-aos="fade-up" src={this.props.data.image} className={style.image}/>
          <div className={style.Infos}>
              <ul className={style.SocialMedia}>
                  <li data-aos="fade-down"><Link href={this.props.data.tw}><TwitterIcon /></Link></li>
                  <li data-aos="fade-up"><Link href={this.props.data.fb}><FacebookIcon /></Link></li>
                  <li data-aos="fade-right"><Link href={this.props.data.linkedin}><LinkedInIcon /></Link></li>
              </ul>
              <h3 data-aos="fade-down" className={style.name}>{this.props.data.name}</h3>
              <p data-aos="fade-up" className={style.post}>{this.props.data.post}</p>
          </div>
      </div>
    );
  }
}
