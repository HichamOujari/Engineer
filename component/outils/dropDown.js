import React, { Component } from 'react';
import style from "../../styles/nav_footer.module.css"
import Link from "next/link"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default class DropDown extends Component {
  render() {
    const listEle = this.props.data.map((ele,index)=>{
        return <Link key={index} href={ele.href}><li>{ele.title}</li></Link>
    })
    return (
      <div className={style.Elements}>
          <h3>{this.props.title}<KeyboardArrowDownIcon className={style.icon}/></h3>
          <ul className={style.DropDown}>
              {listEle}
          </ul>
      </div>
    );
  }
}
