import Head from 'next/head'
import style from '../styles/About.module.css'
import Nav from "../component/nav"
import Footer from "../component/footer"
import AboutMain from "../component/About/aboutMain"
import Banner from "../component/About/banner"
import Contact_Skills from "../component/About/contact_Skills"

export default function About() {
  const aboutMain = {
    yearsExperience : 25,
    quote : {
      image : "/about/1.png",
      text : "enean tristique felis sed tellus aliquam pharetra. Nulla vel sapien vel metus feugiat euismod",
      name:"Sean Bradshaw,",
      post:"CEO"
    },
    desc : "Proin efficitur non ligula vitae porta. Pellentesque accumsan ullamcorper erat nec luctus. Sed at fermentum velit. Mauris tempor ante quis augue vestibulum ullamcorper. Donec volutpat ante ut condimentum porta",
    lien:"/about",
    image:"/about/1.png"
  }
  const banner = {
    lien:"/price",
    image:"/about/header1.png",
    sousComp:[
      {
        title:"Kind Consultation",
        desc:"Etiam ac leo at quam aliquet"
      },{
        title:"Kind Consultation",
        desc:"Etiam ac leo at quam aliquet",
      },{
        title:"Kind Consultation",
        desc:"Etiam ac leo at quam aliquet"
      },
    ]
  }

  const skills = [
    {
      title:"High Quality Build",
      desc: "Pellentesque nec efficitur felis. Nam sit amet ultrices diam",
      icon:"/about/icons/Shape.png"
    },{
      title:"Unique Idea",
      desc: "Pellentesque nec efficitur felis. Nam sit amet ultrices diam",
      icon:"/about/icons/paint.png"
    },{
      title:"Modern Equiptment",
      desc: "Pellentesque nec efficitur felis. Nam sit amet ultrices diam",
      icon:"/about/icons/tourn.png"
    },
  ]
  const services=["Service1","Service2","Service3","Service4"]
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Nav isHome={0}/>
      <div className={style.HeaderAbout}>
        <img src="/about/header1.png" className={style.Image}/>
        <div className={style.Content}>
          <p className={style.title}>About Us</p>
          <p className={style.sousTitle}>Home / About</p>
        </div>
        <div className={style.Num}>
          <p className={style.title}>Call Us Today</p>
          <p className={style.main}>+ 1 634 7638 654</p>
        </div>
      </div>
      <AboutMain  data={aboutMain} />
      <Banner data={banner}/>
      <Contact_Skills data={skills}  services={services}/>
      <Footer />
    </div>
  )
}
