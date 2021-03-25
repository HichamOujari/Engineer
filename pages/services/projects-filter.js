import Head from 'next/head'
import style from '../../styles/Service.module.css'
import Nav from "../../component/nav"
import Footer from "../../component/footer"
import React,{Component} from "react"
import AOS from "aos"
import ImageFilter from "../../component/Project/imageFilter"


export default class SingleServices extends Component {
    ImageContent = {
        type:["All","form","design","industrial","green design"],
        Images :[
            {
                type:"form",
                image:"/service/singleService/1.png",
                title:"Commercial",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"form",
                image:"/service/singleService/2.png",
                title:"Commercial(form)",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"design",
                image:"/service/singleService/3.png",
                title:"Commercial(design)",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"green design",
                image:"/service/singleService/2.png",
                title:"Commercial(green design)",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"industrial",
                image:"/service/singleService/1.png",
                title:"Commercial(industrial)",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"form",
                image:"/service/singleService/2.png",
                title:"Commercial(form)",
                text:"Benoit Architecture",
                lien:"/"
            },{
                type:"green design",
                image:"/service/singleService/3.png",
                title:"Commercial(green design)",
                text:"Benoit Architecture",
                lien:"/"
            },
        ]
    }
    state={
        typeAffiche:0
    }
  
    componentDidMount(){
    AOS.init({duration:2000});
  }
  render(){
    return (
      <div>
        <Head>
          <title>Projects Filter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Nav isHome={0}/>
        <div data-aos="fade-down" className={style.HeaderProject}>
          <img data-aos="fade-up" src="/about/header1.png" className={style.Image}/>
          <div  data-aos="fade-in" className={style.Content}>
            <p data-aos="fade-right" className={style.title}>Projects Filter</p>
            <p data-aos="fade-down" className={style.sousTitle}>Home / Services / Projects Filter</p>
          </div>
          <div data-aos="fade-up" className={style.Num}>
            <p className={style.title}>Call Us Today</p>
            <p className={style.main}>+ 1 634 7638 654</p>
          </div>
        </div>
        <ul data-aos="fade-down" className={style.TypesOfImages}>
          {this.ImageContent.type.map((ele,index)=>{
            return (<li onClick={()=>{
                this.setState({
                    typeAffiche:index
                })
            }} key={index}>{ele}</li>)
          })}
        </ul>
        <ul data-aos="fade-up" className={style.GridProjectFilter} >
            {this.ImageContent.Images.map((ele,index)=>{
                if(this.state.typeAffiche==0 || this.ImageContent.type[this.state.typeAffiche]==ele.type){
                    if(index==0 || index==this.ImageContent.Images.length-1){
                        return (<li key={index} className={style.width70} ><ImageFilter id={index} data={ele} /></li>)
                    }else{
                        return (<li key={index} className={style.width30}><ImageFilter id={index} data={ele} /></li>)
                    }
                }
            })}
        </ul>
        <Footer />
      </div>
    )
  }
}
