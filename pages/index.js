import Head from 'next/head'
import style from '../styles/Home.module.css'
import Nav from "../component/nav"
import Footer from "../component/footer"
import Header from "../component/home/header"
import Service from "../component/home/service"
import Project from "../component/home/project"
import About from "../component/home/about"
import Team from "../component/home/team"
export default function Home() {
  const headerData = [
    {
      image:"/home/header1.png",
      title:"We Provide Best Industrial Services1",
      lien:"/header1"
    },{
      image:"/home/header1.png",
      title:"We Provide Best Industrial Services2",
      lien:"/header1"
    },{
      image:"/home/header1.png",
      title:"We Provide Best Industrial Services3",
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
        </div>
      </div>
      <Footer />
    </div>
  )
}
