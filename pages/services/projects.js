import React,{Component} from "react"
import Head from 'next/head'
import style from '../../styles/Service.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
import ProjectMain from "../../component/Project/projectMain"
import AOS from "aos"

export default class projects extends Component {
  // Projects => (id,title,desc,image)
  listProjects = [
    {
      image:"/service/listProject/1.png",
      title:"Institutional Design",
      desc:"Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada",
      lien:"/services/projects/1"
    },{
      image:"/service/listProject/1.png",
      title:"Institutional Design",
      desc:"Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada",
      lien:"/services/projects/1"
    },{
      image:"/service/listProject/1.png",
      title:"Institutional Design",
      desc:"Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada",
      lien:"/services/projects/1"
    },{
      image:"/service/listProject/1.png",
      title:"Institutional Design",
      desc:"Donec ut tempus massa, egestas facilisis augue. Maecenas et ante ac purus feugiat malesuada",
      lien:"/services/projects/1"
    }
  ]
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render(){
    return (
      <div>
        <Head>
          <title>List Projects</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Nav isHome={0}/>
        <div data-aos="fade-down" className={style.HeaderProject}>
          <img data-aos="fade-up" src="/about/header1.png" className={style.Image}/>
          <div data-aos="fade-down" className={style.Content}>
            <p data-aos="fade-right" className={style.title}>Projects List</p>
            <p data-aos="fade-down" className={style.sousTitle}>Home / Services / Projects List</p>
          </div>
          <div data-aos="fade-up" className={style.Num}>
            <p className={style.title}>Call Us Today</p>
            <p className={style.main}>+ 1 634 7638 654</p>
          </div>
        </div>
        <ProjectMain data-aos="fade-down" data={this.listProjects} />
        <Footer />
      </div>
    )
  }
}
