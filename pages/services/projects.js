import Head from 'next/head'
import style from '../../styles/Project.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
import ProjectMain from "../../component/Project/projectMain"
export default function projects() {

  const listProjects = [
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
  return (
    <div>
      <Head>
        <title>List Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Nav isHome={0}/>
      <div className={style.HeaderProject}>
        <img src="/about/header1.png" className={style.Image}/>
        <div className={style.Content}>
          <p className={style.title}>Projects List</p>
          <p className={style.sousTitle}>Home / Services / Projects List</p>
        </div>
        <div className={style.Num}>
          <p className={style.title}>Call Us Today</p>
          <p className={style.main}>+ 1 634 7638 654</p>
        </div>
      </div>
      <ProjectMain data={listProjects} />
      <Footer />
    </div>
  )
}
