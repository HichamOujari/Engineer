import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import TeamCard from "./teamCard"
import AOS from "aos"

export default class Team extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
      const listProf = this.props.data.map((ele,index)=>{
          return (<li key={index}><TeamCard data-aos="fade-down" data={ele}/></li>)
      })
    return (
      <div className={style.team_}>
            <div className={style.Team}>
                <p data-aos="fade-left" className={style.title}>OUR TEAM</p>
                <p data-aos="fade-right" className={style.sousTitle}>BestProfessionals</p>
                <ul data-aos="fade-down" className={style.Listteam}>
                    {listProf}
                </ul>
            </div>
            <div className={style.bg} />
      </div>
    );
  }
}
