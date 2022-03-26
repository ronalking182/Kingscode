import React from "react";
import classes from "./main-navigation.module.css"
import Link from 'next/link'
import Image from 'next/image'
import DarkMode from '../icons/dark-mode'

const MainNavigation = () => {
  return <nav className={classes.nav}>
         <div className={classes.logo}> <Link href="/">
            <a><h1 className={classes.h1}>  <Image src='/images/logo.png' alt='logo' width='35' height='35'/> KingsCode</h1></a></Link></div>
         <div>
         <ul className={classes.ul}>
                <li> <Link href="/about">About</Link> </li>
                <li> <Link href="/blog">Post</Link> </li>
               <li> <DarkMode/> </li>
            </ul>
         </div>
  </nav>;
};

export default MainNavigation;



