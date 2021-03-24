import Head from 'next/head'
import style from '../../styles/Service.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
import React,{Component} from "react"
import AOS from "aos"
import Grid4C from "../../component/Project/grid4C"
import SingleServiceContent from "../../component/Project/singleServiceContent"


export default class SingleServices extends Component {
  //Other service 
  GridInfo = [
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
  ]

  //SingleService => (id,title,text,images(id,image),elements(id,title,text))
  ImageContent = ["/service/singleService/1.png","/service/singleService/2.png","/service/singleService/3.png",]
  SingleServiceData = {
    title : "Petrolieum & Gas Refinery",
    text:"Duis pretium aliquet est, non tristique augue suscipit sed. Mauris euismod ac diam sit amet dapibus. Aliquam posuere turpis sed feugiat laoreet. Phasellus dui dolor, volutpat vel blandit vel, laoreet vitae ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eleifend nulla non ligula sodales, sed congue est elementum. Sed id eros eu arcu dignissim finibus.<br> Suspendisse leo urna, imperdiet rutrum nisi nec, blandit accumsan metus. Nam vestibulum, metus et fermentum aliquet, erat libero congue odio, vitae interdum felis orci a augue. Duis egestas iaculis mauris. Maecenas ornare neque id enim suscipit, a hendrerit nibh accumsan.<br> Integer cursus turpis quis metus elementum convallis. Sed tempus turpis in augue iaculis, nec bibendum ex euismod. Aenean sodales euismod dignissim. Fusce elementum fermentum sapien eu fringilla. Duis in mattis nisi. Praesent ut gravida nibh. Quisque hendrerit odio est, sed commodo nisl rhoncus aliquam.",
    elements : [
      {
        title : "How would I go about planning for my retirement?",
        text:"Suspendisse dapibus ligula a ligula luctus, quis pulvinar ipsum vulputate. Mauris ultricies luctus aliquam. Nunc ut pulvinar arcu. Praesent hendrerit cursus lectus maximus elementum. In vulputate odio augue, eget pharetra metus gravida rutrum. Fusce quis tempor erat"
      },{
        title : "Can I use trademarked names in my items?",
        text:"Suspendisse dapibus ligula a ligula luctus, quis pulvinar ipsum vulputate. Mauris ultricies luctus aliquam. Nunc ut pulvinar arcu. Praesent hendrerit cursus lectus maximus elementum. In vulputate odio augue, eget pharetra metus gravida rutrum. Fusce quis tempor erat"
      },{
        title : "Can I use trademarked names in my items?",
        text:"Suspendisse dapibus ligula a ligula luctus, quis pulvinar ipsum vulputate. Mauris ultricies luctus aliquam. Nunc ut pulvinar arcu. Praesent hendrerit cursus lectus maximus elementum. In vulputate odio augue, eget pharetra metus gravida rutrum. Fusce quis tempor erat"
      },{
        title : "Can I use trademarked names in my items?",
        text:"Suspendisse dapibus ligula a ligula luctus, quis pulvinar ipsum vulputate. Mauris ultricies luctus aliquam. Nunc ut pulvinar arcu. Praesent hendrerit cursus lectus maximus elementum. In vulputate odio augue, eget pharetra metus gravida rutrum. Fusce quis tempor erat"
      },
    ]
  }
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render(){
    return (
      <div>
        <Head>
          <title>Single Service</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Nav isHome={0}/>
        <div data-aos="fade-down" className={style.HeaderProject}>
          <img data-aos="fade-up" src="/about/header1.png" className={style.Image}/>
          <div  data-aos="fade-in" className={style.Content}>
            <p data-aos="fade-right" className={style.title}>Single Service</p>
            <p data-aos="fade-down" className={style.sousTitle}>Home / Services / Single Service</p>
          </div>
          <div data-aos="fade-up" className={style.Num}>
            <p className={style.title}>Call Us Today</p>
            <p className={style.main}>+ 1 634 7638 654</p>
          </div>
        </div>
        <ul data-aos="fade-down" className={style.ImageContent}>
          {this.ImageContent.map((ele,index)=>{
            return (<li key={index}><img data-aos="fade-up" className={style.Image} src={ele} /></li>)
          })}
        </ul>
        <SingleServiceContent data-aos="fade-up" data={this.SingleServiceData} />
        <div data-aos="fade-down" className={style.GridsSection}>
          <div data-aos="fade-up" className={style.top}>
              <p data-aos="fade-up" className={style.title}>Other Services</p>
              <ul data-aos="fade-down" className={style.Ele}>
                  {this.GridInfo.map((ele,index)=>{
                      return (<Grid4C data-aos="fade-down"data={ele} key={index} />)
                  })}
              </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
