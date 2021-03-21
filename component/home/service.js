import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from "next/link"
import ServiceComp from "./serviceComp"
export default class Service extends Component {
  render() {
      const listService = this.props.data.map((ele,index)=>{
          return (<ServiceComp key={index} data={ele}/>)
      })
    return (
      <div className={style.services}>
          <div className={style.left}>
              <p className={style.title}>our services</p>
              <p className={style.sousTitle}>We Provide Best Industrial Services</p>
              <p className={style.desc}>Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque</p>
              <Link href="/services"><ArrowRightAltIcon className={style.goFor} /></Link>
          </div>
          <div className={style.right}>
              {listService}
          </div>
      </div>
    );
  }
}
