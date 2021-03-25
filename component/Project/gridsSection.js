import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import Grid4C from "./grid4C"
import Grid3C from "./grid3C"
import AOS from "aos"

export default class GridsSection extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div className={style.GridsSection}>
          <div data-aos="fade-up" className={style.top}>
              <p data-aos="fade-up" className={style.title}>Services Grid 4 Columns</p>
              <ul className={style.Ele}>
                  {this.props.data.first.map((ele,index)=>{
                      return (<Grid4C data={ele} key={index} />)
                  })}
              </ul>
          </div>
          <div className={style.bottom}>
                <p className={style.title}>Services Grid 3 Columns</p>
                <ul className={style.Ele}>
                    {this.props.data.second.map((ele,index)=>{
                        return (<Grid3C  data={ele} key={index} />)
                    })}
                </ul>
          </div>
      </div>
    );
  }
}
