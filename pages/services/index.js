import Head from 'next/head'
import style from '../../styles/Service.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
import Slider from "../../component/Project/slider"
import GridsSection from "../../component/Project/gridsSection"
import React,{ Component } from 'react'
import AOS from "aos"

export default class Services extends Component{
  GridInfo={
    first : [
      {
        title:"Petrolieum & Gas Refinery",
        lien:"/services/single-service"
      },{
        title:"Renovation & Painting",
        lien:"/services/single-service"
      },{
        title:"Home Repair & Design",
        lien:"/services/single-service"
      },{
        title:"Mechanical Engineering",
        lien:"/services/single-service"
      }
    ],
    second:[
      {
        title:"Mechanical Engineering",
        lien:"/services/single-service",
        desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
        image:"/service/1.png"
      },{
        title:"Petrolieum & Gas Refinery",
        lien:"/services/single-service",
        desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
        image:"/service/1.png"
      },{
        title:"Chemical Research",
        lien:"/services/single-service",
        desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
        image:"/service/1.png"
      },
    ]
  }
  Listservices = [
    {
      image :"/service/1.png",
      title:"Research & Analysis",
      desc:"Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
      lien:"/services/single-service"
    },{
      image :"/service/2.png",
      title:"Industry Development",
      desc:"Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
      lien:"/services/single-service"
    },{
      image :"/service/3.png",
      title:"Production Launch",
      desc:"Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
      lien:"/services/single-service"
    },{
      image :"/service/1.png",
      title:"Petrolieum & Gas Refinery",
      desc:"Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus",
      lien:"/services/single-service"
    },
  ]
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render(){
    return (
      <div>
        <Head>
          <title>Services</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Nav isHome={0}/>
        <div data-aos="fade-down" className={style.HeaderProject}>
          <img data-aos="fade-up" src="/about/header1.png" className={style.Image}/>
          <div data-aos="fade-in" className={style.Content}>
            <p data-aos="fade-rigth" className={style.title}>Services</p>
            <p data-aos="fade-down" className={style.sousTitle}>Home / Services</p>
          </div>
          <div data-aos="fade-down" className={style.Num}>
            <p className={style.title}>Call Us Today</p>
            <p className={style.main}>+ 1 634 7638 654</p>
          </div>
        </div>
        <div data-aos="fade-up" className={style.sliders_}>
          <p data-aos="fade-down" className={style.title}>Services Slider</p>
          <ul data-aos="fade-up" className={style.sliders}>
            {this.Listservices.map((ele,index)=>{
              return (<Slider data-aos="fade-down" data={ele} key={index} />)
            })}
          </ul>
        </div>
        <GridsSection data={this.GridInfo}/>
        <Footer />
      </div>
    )
  }
}
