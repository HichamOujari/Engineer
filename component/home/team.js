import React, { Component } from 'react';
import style from '../../styles/Home.module.css'
import TeamCard from "./teamCard"

export default class Team extends Component {
  render() {
      const listProf = this.props.data.map((ele,index)=>{
          return (<li key={index}><TeamCard data={ele}/></li>)
      })
    return (
      <div className={style.team_}>
            <div className={style.Team}>
                <p className={style.title}>OUR TEAM</p>
                <p className={style.sousTitle}>BestProfessionals</p>
                <ul className={style.Listteam}>
                    {listProf}
                </ul>
            </div>
            <div className={style.bg} />
      </div>
    );
  }
}
