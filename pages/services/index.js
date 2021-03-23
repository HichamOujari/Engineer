import Head from 'next/head'
import style from '../../styles/Project.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
export default function Services() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Nav isHome={0}/>
      <div className={style.HeaderProject}>
        <img src="/about/header1.png" className={style.Image}/>
        <div className={style.Content}>
          <p className={style.title}>Services</p>
          <p className={style.sousTitle}>Home / Services</p>
        </div>
        <div className={style.Num}>
          <p className={style.title}>Call Us Today</p>
          <p className={style.main}>+ 1 634 7638 654</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
