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
  <div className={classes.container}>
      <span className={classes.t}><h2>Courses</h2></span>
      <span className={classes.show}>
      <ul className={classes.ul}>
              {categories && categories.map((category, index)=> (
                 (
                    <Link key={index} href={`/blog/courses/${category.toLowerCase()}`}>
                        <a className={classes.course}>
                            <li>{category}</li>
                        </a>
                    </Link>
                 )
              ))}
          </ul>
      </span>
      <span onClick={handleOpenNav} className={classes.ham}><Menu/></span>
  </div>
      <span className={openNav ? `${classes.sub_nav}`: `${classes.sub_nav_close} `}>
          <Link href='/'>
              <a><p onClick={handleOpenNav} className={classes.home}>Home</p></a>
          </Link>
      <ul className={classes.lists}>
              {categories && categories.map((category, index)=> (
                 (
                    <Link key={index} href={`/blog/courses/${category.toLowerCase()}`} className={openNav ? `${classes.remove}`: `${classes.showMe} `} >
                        <a className={classes.course}>
                            <li onClick={handleOpenNav}>{category}</li>
                        </a>
                    </Link>
                 )
              ))}
          </ul>
      </span>
  </>
};

export default Courses;
