import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

export default class TestimonialsCard extends Component {
  render() {
    return (
      <div id={"CardTest"+this.props.id} className={style.TestimonialsCard}>
          <FormatQuoteIcon className={style.Icon}/>
          <p className={style.desc}>{this.props.data.desc}</p>
          <div className={style.WHO}>
            <p className={style.name}>{this.props.data.name}</p>
            <p className={style.post}>{this.props.data.post}</p>
          </div>
      </div>
    );
  }
}
