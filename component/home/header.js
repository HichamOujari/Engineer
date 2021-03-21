import React, { Component } from 'react';
import style from "../../styles/Home.module.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ImageHeader from "../home/imageHeader";

export default class Header extends Component {
  render() {
        const listImage = this.props.data.map((ele,index)=>{
            return (<ImageHeader key={index} index={index} data={ele}/>)
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
        <div className={style.header}>
            {listImage}
            <ul className={style.dotes}>
                {listDote}
            </ul>
        </div>
    );
  }
}
