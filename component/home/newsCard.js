import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import AOS from "aos"

export default class NewsCard extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.NewsCard}>
          <img data-aos="fade-up" src={this.props.data.image} className={style.img} />
          <div data-aos="fade-down" className={style.content}>
              <p className={style.title}>{this.props.data.title}</p>
              <div className={style.then}>
                  <p>{this.props.data.date}</p>
                  <p>{this.props.data.by}</p>
              </div>
          </div>
      </div>
    );
  }
}
