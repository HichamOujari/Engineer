import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TestimonialsCard from "./testimonialsCard"
import Link from "next/link"
import AOS from "aos"

export default class Testimonials extends Component {
    componentDidMount(){
        AOS.init({duration:2000});
    }
  render() {
    return (
      <div data-aos="fade-down" className={style.Testimonials}>
          <div data-aos="fade-up" className={style.left}>
              <p className={style.title}>ABOUT US</p>
              <p className={style.sousTitle}>Great Experience for Building Construction & Renovation</p>
              <p className={style.desc}>Fusce vel iaculis leo. Aenean at eros et felis rhoncus tincidunt id sollicitudin eros. Quisque eu blandit nunc. Sed mi turpis, euismod vitae sodales eget, ullamcorper sit amet arcu.</p>
              <Link href="/testimonials"><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <div data-aos="fade-down" className={style.right}>
                <div className={style.main}>
                    <div data-aos="fade-down" className={style.content}>
                        {this.props.data.map((ele,index)=>{
                            return (<TestimonialsCard data-aos="fade-up" data={ele} key={index} />)
                        })}
                    </div>
                    <ul className={style.bar}>
                        {this.props.data.map((ele,index)=>{
                            return (<li data-aos="fade-down" key={index} ></li>)
                        })}
                    </ul>
                </div>
          </div>
      </div>
    );
  }
}
