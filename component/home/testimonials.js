import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TestimonialsCard from "./testimonialsCard"
import Link from "next/link"

export default class Testimonials extends Component {
  render() {
    return (
      <div className={style.Testimonials}>
          <div className={style.left}>
              <p className={style.title}>ABOUT US</p>
              <p className={style.sousTitle}>Great Experience for Building Construction & Renovation</p>
              <p className={style.desc}>Fusce vel iaculis leo. Aenean at eros et felis rhoncus tincidunt id sollicitudin eros. Quisque eu blandit nunc. Sed mi turpis, euismod vitae sodales eget, ullamcorper sit amet arcu.</p>
              <Link href="/testimonials"><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <div className={style.right}>
                <div className={style.main}>
                    <div className={style.content}>
                        {this.props.data.map((ele,index)=>{
                            return (<TestimonialsCard data={ele} key={index} />)
                        })}
                    </div>
                    <ul className={style.bar}>
                        {this.props.data.map((ele,index)=>{
                            return (<li key={index} ></li>)
                        })}
                    </ul>
                </div>
          </div>
      </div>
    );
  }
}
