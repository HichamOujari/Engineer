import React, { Component } from 'react';
import style from '../../styles/Service.module.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AOS from "aos"

export default class TextCardDisplayer extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  state={
    Icon:<AddIcon />
  }
  isOpened = 0
    render() {
    return (
      <div className={style.TextCardDisplayer}>
          <div className={style.Gtitle}>
              <p data-aos="fade-up" className={style.Title}>{this.props.data.title}</p>
              <p data-aos="fade-down" onClick={()=>{
                const status = this.isOpened%2==1?"none":"block"
                const Icon = this.isOpened%2==1?<AddIcon />:<RemoveIcon />
                
                document.getElementById("ZoneNum"+this.props.id).style.display=status
                this.setState({
                  Icon:Icon
                })
                this.isOpened++
              }} className={style.Icon}>{this.state.Icon}</p>
            </div>
          <div data-aos="fade-down" id={"ZoneNum"+this.props.id} className={style.Content}>{this.props.data.text}</div>
      </div>
    );
  }
}
