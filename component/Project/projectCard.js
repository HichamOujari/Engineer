import React, { Component } from 'react';
import style from '../../styles/Project.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
export default class ProjectCard extends Component {
  render() {
    return (
      <div className={style.ProjectCard}>
          <p className={style.title}>{this.props.data.title}</p>
          <p className={style.desc}>{this.props.data.desc}</p>
          <Link href={this.props.data.lien}><ArrowRightAltIcon  className={style.goFor}/></Link>
      </div>
    );
  }
}