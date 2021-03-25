import React, { Component } from 'react';
import Image from "next/image"
import Link from "next/link"
import style from "../../styles/Home.module.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class ImageHeader extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
        <div data-aos="flip-in" className={style.ImageHeader} id={"HeaderImage"+this.props.index}>
            <img src={this.props.data.image} className={style.Image} />
            <div className={style.content}>
                <h3 className={style.title}>{this.props.data.title}</h3>
                <Link href={this.props.data.lien}><p className={style.goFor}>Learn more <span><ArrowRightAltIcon/></span></p></Link>
            </div>
        </div>
    );
  }
}
