import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AOS from "aos"

export default class TextCardDisplayer extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
    render() {
    return (
      <div data-aos="fade-down" className={style.TextCardDisplayer}>
          <div data-aos="fade-up" className={style.Gtitle}>
              <p data-aos="fade-up" className={style.Title}>{this.props.data.title}</p>
              <p data-aos="fade-down" className={style.Icon}><AddIcon/></p>
            </div>
          <div data-aos="fade-down" className={style.Content}>{this.props.data.text}</div>
      </div>
    );
  }
}
