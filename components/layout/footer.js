import React, {Fragment} from "react";
import classes from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = ({categories}) => {
  return <Fragment>
      <div  className={classes.Footer}>
       <span className={classes.name}>
           <h1 className={classes.h1}>  <Image src='/images/logo.png' alt='logo' width='40' height='40'/> KingsCode</h1>
           <p className={classes.p}>Thanks for reading!</p>
       </span>
       <span className={classes.tag}>
           <span className={classes.main_tag}>
           <Link href="/blog"><a> <p className={classes.fade}>Tutorials</p>
           </a></Link>
           <ul className={classes.ul}>
{categories && categories.map((category, index)=> (
   (
      <Link key={index} href={`/blog/courses/${category.toLowerCase()}`}>
          <a className={classes.course}>
              <li className={classes.li}>{category}</li>
          </a>
      </Link>
   )
))}
</ul> 
           </span>
           <span className={classes.links}>
          <p className={classes.fade}>Links</p>
           <ul className={classes.ul}>
                <li className={classes.li}> <Link href="/about">About</Link> </li>
                <li className={classes.li}> <Link href="/blog">Post</Link> </li>
                <li className={classes.li}> <Link href = "mailto: kingscode@gmail.com.com">Contact</Link> </li>
                <li className={classes.li}> <Link href="/blog">Instagram</Link> </li>
            </ul>
           </span>
       </span>
       <span></span>
       <small className={classes.small}>© 2022-present KingsCode. All Rights Reserved.</small>
      </div>
      </Fragment>;
};

export default Footer;





 