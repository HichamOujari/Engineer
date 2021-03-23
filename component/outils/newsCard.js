import React, { Component } from 'react';
import style from "../../styles/nav_footer.module.css"

export default class NewsCard extends Component {
  render() {
    return (
      <div className={style.NewsCard}>
          <p className={style.title}>{this.props.data.title}</p>
          <div className={style.by_date}>
              <p className={style.date}>{this.props.data.date}</p>
              <p className={style.by}>{this.props.data.by}</p>
          </div>
      </div>
    );
  }
}
