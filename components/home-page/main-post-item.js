import classes from './main-post-item.module.css'
import React from 'react'
import Link from 'next/link'
import CategoryLabel from '../CategoryLabel'

const MainPostItem = ({post, compact}) => {

  return (
    <li className={classes.post}>
    {
        !compact && (<div className={classes.list}>
            <div className={classes.content}>
            <Link href={`/blog/${post.slug}`}><a><h3 className={classes.h3}>{post.frontmatter.title}</h3></a></Link>
                <time className={classes.time}>{post.frontmatter.date}</time>
                <p className={classes.p}>
                {post.frontmatter.excerpt}
                </p>
                <p className={classes.tag}><CategoryLabel>{post.frontmatter.category}</CategoryLabel></p>
            </div>
        </div>)
    }
 </li>
  )
}

export default MainPostItem


  
     
     