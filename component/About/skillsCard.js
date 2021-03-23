import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import AOS from "aos"

export default class SkillsCard extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.SkillsCard}>
          <img data-aos="fade-in" src={this.props.data.icon} className={style.left}/>
          <div data-aos="fade-up"  className={style.right}>
              <p data-aos="fade-left"  className={style.title}>{this.props.data.title}</p>
              <p data-aos="fade-right"  className={style.desc}>{this.props.data.desc}</p>
          </div>
      </div>
    );
  }
}
