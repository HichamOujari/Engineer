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
    state={
        id:0
    }
  render() {
    return (
      <div className={style.Testimonials}>
          <div data-aos="fade-up" className={style.left}>
              <p className={style.title}>ABOUT US</p>
              <p className={style.sousTitle}>Great Experience for Building Construction & Renovation</p>
              <p className={style.desc}>Fusce vel iaculis leo. Aenean at eros et felis rhoncus tincidunt id sollicitudin eros. Quisque eu blandit nunc. Sed mi turpis, euismod vitae sodales eget, ullamcorper sit amet arcu.</p>
              <Link href="/testimonials"><p className={style.goFor}>Learn more <ArrowRightAltIcon /></p></Link>
          </div>
          <div className={style.right}>
                <div className={style.main}>
                    <div id={"ContentCardTest"} className={style.content}>
                        {this.props.data.map((ele,index)=>{
                            return (<TestimonialsCard id={index} data-aos="fade-up" data={ele} key={index} />)
                        })}
                    </div>
                    <ul className={style.bar}>
                        {this.props.data.map((ele,index)=>{
                            return (<li onClick={()=>{
                                var main = document.getElementById("ContentCardTest")
                                if(this.state.id>index) {
                                    main.scrollLeft=-1*document.getElementById("CardTest1").clientWidth*index
                                }else if(this.state.id<index){
                                    main.scrollLeft=document.getElementById("CardTest1").clientWidth*index
                                }
                                this.setState({
                                    id:index
                                })
                            }} key={index} ></li>)
                        })}
                    </ul>
                </div>
          </div>
      </div>
    );
  }
}
