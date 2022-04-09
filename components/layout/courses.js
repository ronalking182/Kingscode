import React, {useState} from "react";
import classes from "./courses.module.css"
import Menu from '../icons/menu'
import Link from 'next/link'


const Courses = ({categories}) => {
 
  const [openNav, setOpenNav] = useState(false)

  const handleOpenNav = () =>{
      if(openNav){
          setOpenNav(false)
      }else{
          setOpenNav(true)
      }

  }



  return <>
  <div className={openNav ? `${classes.responsive}` :`${classes.container}`}>
      <span className={classes.show}>
      <ul className={ openNav ? `${classes.responsiveUl}` :`${classes.ul}`}>
          {openNav ? categories && categories.map((category, index)=> (
                 (
                    <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                        <a className={classes.course}>
                            <li className={openNav &&`${classes.responsiveLi}` }>{category}</li>
                        </a>
                    </Link>
                 )
              )) :
              <>
               
                     {/* categories && categories.map((category, index)=> (
                        (
                           <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                               <a className={classes.course}>
                                   <li className={openNav &&`${classes.responsiveLi}` }>{category}</li>
                               </a>
                           </Link>
                        ) */}
                 
              <li className={classes.liLink}> <Link href="/about">About</Link> </li>
              <li  className={classes.liLink}> <Link href="/blog">Post</Link> </li>
              <li className={classes.linkShow}>
                 <ul className={classes.ul}>
                 {
                   categories && categories.map((category, index)=> (
                    <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                        <a className={classes.course}>
                                   {category}
                        </a>
                    </Link> 
                   ))   
                  }
                 </ul>
            </li>
              </>
             }
          </ul>
      </span>
      <span onClick={handleOpenNav} className={openNav ? `${classes.responsiveHam}` :`${classes.ham}`}><Menu/></span>
  </div>
      {/* <span className={openNav ? `${classes.sub_nav}`: `${classes.sub_nav_close} `}>
          <Link href='/'>
              <a><p onClick={handleOpenNav} className={classes.home}>Home</p></a>
          </Link>
      <ul className={classes.lists}>
              {categories && categories.map((category, index)=> (
                 (
                    <Link key={index}href={`/blog/category/${category.toLowerCase()}`} className={openNav ? `${classes.remove}`: `${classes.showMe} `} >
                        <a className={classes.course}>
                            <li onClick={handleOpenNav}>{category}</li>
                        </a>
                    </Link>
                 )
              ))}
          </ul>
      </span> */}
  </>
};

export default Courses;
