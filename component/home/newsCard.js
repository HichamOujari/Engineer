import React, { Component } from 'react';
import style from "../../styles/Home.module.css"

export default class NewsCard extends Component {

  render() {
    return (
      <div  className={style.NewsCard}>
          <img  src={this.props.data.image} className={style.img} />
          <div className={style.content}>
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
