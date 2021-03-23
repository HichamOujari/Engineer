import React, { Component } from 'react';
import style from '../../styles/About.module.css'
import Link from "next/link"
import SkillsCard from "./skillsCard"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AOS from "aos"

export default class Contact_Skills extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-down" className={style.Contact_Skills}>
        <div data-aos="fade-in" className={style.left}>
            <p className={style.title}>Appointment Form</p>
            <p className={style.sousTitle}>Request A Quote</p>
            <form data-aos="fade-left" className={style.form}>
                <input type="text" required name="name" placeholder="Name" />
                <input type="email" required name="email" placeholder="Email" />
                <input type="phone" required name="phone" placeholder="Phone" />
                <select name="service" placeholder="Services">
                    <option>Choose service</option>
                    {this.props.services.map(((ele,index)=>{
                      return (<option value={ele} key={index}>{ele}</option>)
                    }))}
                </select>
                <textarea placeholder="Message"></textarea>
                <div className={style.Submit_check}>
                  <button>Send Now <ArrowRightAltIcon /></button>
                  <p className={style.Check}><input id="checkPolice" type="checkbox" /> <label htmlFor="checkPolice">I accept the privacy and terms</label></p>
                </div>
            </form>
        </div>
        <div data-aos="fade-right" className={style.right}>
          {this.props.data.map((ele,index)=>{
            return (<SkillsCard data={ele} key={index} />)
          })}
        </div>
      </div>
    );
  }
}
