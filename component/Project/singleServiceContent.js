import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import TextCardDisplayer from "./textCardDisplayer"
import Single_Serv_Card from "./single_Serv_Card"
import AOS from "aos"

export default class SingleServiceContent extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.SingleServiceContent}>
          <div data-aos="fade-in" className={style.left}>
              <p data-aos="fade-up" className={style.title}>{this.props.data.title}</p>
              <div data-aos="fade-down" className={style.content}>{this.props.data.text}</div>
              <div data-aos="fade-down" className={style.sousEle}>
                  {this.props.data.elements.map((ele,index)=>{
                      return <TextCardDisplayer data-aos="fade-down" data={ele} id={index} key={index} />
                  })}
              </div>
          </div>
          <div className={style.right}>
              <Single_Serv_Card />
          </div>
      </div>
    );
  }
}
