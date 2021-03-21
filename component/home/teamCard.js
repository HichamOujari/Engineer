import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import Link from "next/link"
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class TeamCard extends Component {
  render() {
    return (
      <div className={style.TeamCard}>
          <img src={this.props.data.image} className={style.image}/>
          <div className={style.Infos}>
              <ul className={style.SocialMedia}>
                  <li><Link href={this.props.data.tw}><TwitterIcon /></Link></li>
                  <li><Link href={this.props.data.fb}><FacebookIcon /></Link></li>
                  <li><Link href={this.props.data.linkedin}><LinkedInIcon /></Link></li>
              </ul>
              <h3 className={style.name}>{this.props.data.name}</h3>
              <p className={style.post}>{this.props.data.post}</p>
          </div>
      </div>
    );
  }
}
