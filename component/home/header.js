import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ImageHeader from "../home/imageHeader";
import AOS from "aos"

export default class Header extends Component {
    componentDidMount(){
        AOS.init({duration:2000});
    }
  render() {
        const listImage = this.props.data.map((ele,index)=>{
            return (<ImageHeader data-aos="flip-down" key={index} index={index} data={ele}/>)
        })
        const listDote = this.props.data.map((ele,index)=>{
            return (<li onClick={()=>{
                for(var i=0;i<this.props.data.length;i++){
                    document.getElementById("HeaderImage"+i).style.display="none";
                }
                document.getElementById("HeaderImage"+index).style.display="block"
            }} key={index}></li>)
        })
    return (
        <div data-aos="fade-down" className={style.header}>
            {listImage}
            <ul data-aos="fade-left" className={style.dotes}>
                {listDote}
            </ul>
        </div>
    );
  }
}
