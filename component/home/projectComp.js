import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"

export default class ProjectComp extends Component {
  render() {
    return (
      <div className={style.ProjectComp}>
          <h3 className={style.title}>{this.props.data.title}</h3>
          <p className={style.desc}>{this.props.data.desc}</p>
          <Link href={this.props.data.lien}><ArrowRightAltIcon className={style.goFor}/></Link>
      </div>
    );
  }
}
