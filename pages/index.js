import Head from 'next/head'
import style from '../styles/Home.module.css'
import Nav from "../component/nav"
import Header from "../component/home/header"
import Service from "../component/home/service"
import Project from "../component/home/project"
import About from "../component/home/about"
import Team from "../component/home/team"
import Contact from "../component/home/contact"
import Maps from "../component/home/maps"
import Testimonials from "../component/home/testimonials"
import HomeFooter from "../component/home/homeFooter"
export default function Home() {
  const headerData = [
    {
      image:"/home/header1.png",
      title:"We Provide Best",
      sousTitle:"Industrial Services1",
      lien:"/header1"
    },{
      image:"/home/header1.png",
      title:"We Provide Best",
      sousTitle:"Industrial Services2",
      lien:"/header1"
    },{
      image:"/home/header1.png",
      title:"We Provide Best",
      sousTitle:"Industrial Services3",
      lien:"/header1"
    }
  ]
  const services=[
    {
      title:"Consruction Industry",
      desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
      lien:"/services",
      image:"/home/header1.png"
    },{
      title:"Consruction Industry",
      desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
      lien:"/services",
      image:"/home/header1.png"
    },{
      title:"Consruction Industry",
      desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
      lien:"/services",
      image:"/home/header1.png"
    },{
      title:"Consruction Industry",
      desc:"Pellentesque quis pharetra ipsum. Integer sagittis lectus id pellentesque ultricies",
      lien:"/services",
      image:"/home/header1.png"
    },
  ]
  const projects = [
    {
      title:"Beauty Of Corten	",
      desc:"Duis orci tellus, ultrices at rutrum sollicitudin, pulvinar non lacus. Aliquam imperdiet ipsum ut ligula rutrum interdum",
      lien:"/projects"
    },{
      title:"Beauty Of Corten	",
      desc:"Duis orci tellus, ultrices at rutrum sollicitudin, pulvinar non lacus. Aliquam imperdiet ipsum ut ligula rutrum interdum",
      lien:"/projects"
    },{
      title:"Beauty Of Corten	",
      desc:"Duis orci tellus, ultrices at rutrum sollicitudin, pulvinar non lacus. Aliquam imperdiet ipsum ut ligula rutrum interdum",
      lien:"/projects"
    },
  ]
  const teams=[
    {
      name:"Niko Dery",
      post:"CEO",
      fb:"http://facebook.com",
      tw:"http://twitter.com",
      linkedin:"http://linkedin.com",
      image:"/home/teams/1.png"
    },{
      name:"Niko Dery",
      post:"CEO",
      fb:"http://facebook.com",
      tw:"http://twitter.com",
      linkedin:"http://linkedin.com",
      image:"/home/teams/1.png"
    },{
      name:"Niko Dery",
      post:"CEO",
      fb:"http://facebook.com",
      tw:"http://twitter.com",
      linkedin:"http://linkedin.com",
      image:"/home/teams/1.png"
    },{
      name:"Niko Dery",
      post:"CEO",
      fb:"http://facebook.com",
      tw:"http://twitter.com",
      linkedin:"http://linkedin.com",
      image:"/home/teams/1.png"
    },
  ]
  const contact = {
    infos:{
      location: "Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA",
      email:["dustro@gmail.com","dustro.info@gmail.com"],
      num:"+ 1 634 7638 654",
      twitter:"htpps://twitter.com",
      fb:"http://facebook.com",
      linkedin:"https://linkedin.com",
      youtube:"http://youtube.com"
    },
    services:["Service 1","Service 2","Service 3","Service 4"]
  }
  const TestimonialsInfos = [
    {
      desc: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagi",
      name:"Katy Grey 1",
      post:"CEO Grey Industries"
    },{
      desc: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagi",
      name:"Katy Grey 2",
      post:"CEO Grey Industries"
    },{
      desc: "Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagi",
      name:"Katy Grey 3",
      post:"CEO Grey Industries"
    }
  ]
  const MapsData = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }
  const FotterInfo={
    desc : "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus risus nunc, ultrices sed aliquet sodales, eleifend at est. Orci varius natoque",
    News:[
      {
        title:"Agile Construction Management Building1",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building2",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building3",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building4",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building5",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building6",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building7",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },{
        title:"Agile Construction Management Building8",
        date:"20 Nov 2020",
        by:"Oujari Hicham",
        image:"/home/teams/1.png"
      },
    ]
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={style.Nav_Header_Service}>
        <div className={style.bg}></div>
        <div className={style.content}>
          <Nav isHome={1}/>
          <Header data={headerData}/>
          <Service data={services} />
          <Project data={projects}/>
          <About />
          <Team data={teams}/>
          <Contact data={contact} />
          <Maps data={MapsData}/>
          <Testimonials data={TestimonialsInfos}/>
          <HomeFooter data={FotterInfo}/>
        </div>
      </div>
    </div>
  )
}
