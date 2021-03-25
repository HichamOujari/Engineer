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
      <div className={style.SingleServiceContent}>
          <div  className={style.left}>
              <p data-aos="fade-up" className={style.title}>{this.props.data.title}</p>
              <div className={style.content}>{this.props.data.text}</div>
              <div  className={style.sousEle}>
                  {this.props.data.elements.map((ele,index)=>{
                      return <TextCardDisplayer data={ele} id={index} key={index} />
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
