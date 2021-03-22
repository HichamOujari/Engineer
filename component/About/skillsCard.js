import React, { Component } from 'react';
import style from '../../styles/About.module.css'

export default class SkillsCard extends Component {
  render() {
    return (
      <div className={style.SkillsCard}>
          <img src={this.props.data.icon} className={style.left}/>
          <div className={style.right}>
              <p className={style.title}>{this.props.data.title}</p>
              <p className={style.desc}>{this.props.data.desc}</p>
          </div>
      </div>
    );
  }
}
