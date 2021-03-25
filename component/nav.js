import React, { Component, useLayoutEffect } from 'react';
import style from "../styles/nav_footer.module.css"
import Link from "next/link"
import Image from "next/image"
import DropDown from "../component/outils/dropDown"

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import AOS from "aos"
export default class Nav extends Component {
    navElements ={
        service : [
            {
                title:"dropDown Service 1",
                href:"/services/single-service/S1"
            },{
                title:"dropDown Service 1",
                href:"/services/single-service/S1"
            },
        ],
        project: [
            {
                title:"Projects List",
                href:"/services/projects"
            },{
                title:"Projects filter",
                href:"/services/projects-filter"
            },
        ],
    }
    state = {
        logo:this.props.isHome===1?"/logoWhite.png":"/logoColor.png"
    }
    socialMedia = ()=>{
        if(this.props.isHome===1){
            return style.top,style.displayNnone
        }
        return style.top
    }
    componentDidMount(){
        AOS.init({duration:2000});
      }
  render() {
    
    return (
        <div className={style.Nav_}>
            <div  data-aos="fade-down" className={this.socialMedia()}>
                <ul data-aos="fade-up" className={style.left}>
                    <Link href="/support"><li>SUPPORT</li></Link>
                    <Link href="/partners"><li>PARTNERS</li></Link>
                    <Link href="/careers"><li>CAREERS</li></Link>
                </ul>
                <ul data-aos="fade-in" className={style.right}>
                    <Link href="/twitter"><li><TwitterIcon/></li></Link>
                    <Link href="/facebook"><li><FacebookIcon/></li></Link>
                    <Link href="/linkedin"><li><LinkedInIcon/></li></Link>
                    <Link href="/youtube"><li><YouTubeIcon/></li></Link>
                </ul>
            </div>
            <div  className={style.nav}>
                <img data-aos="fade-up" className={style.logo} src={this.state.logo} />
                <ul data-aos="fade-down"  id="NavBarElement" className={style.navBar}>
                    <Link href="/"><li><h3>Home</h3></li></Link>
                    <Link href="/about"><li><h3>About</h3></li></Link>
                    <Link href="/services"><li><DropDown title="Services" data={this.navElements.service} /></li></Link>
                    <Link href="/pages"><li><DropDown title="Projects" data={this.navElements.project} /></li></Link>
                    <Link href="/about"><li><h3>Contacts</h3></li></Link>
                </ul>
                <label className={style.IconMenu} htmlFor="CHeckMenu"><MenuIcon/></label>
                <input hidden type="checkbox" onChange={()=>{
                    var menu = document.getElementById("NavBarElement")
                    menu.style.display=menu.style.display=="flex"?"none":"flex";
                }} id="CHeckMenu"/>
            </div>
        </div>
    );
  }
}
