import classes from './all-posts-item.module.css'
import React from "react";
import Link from 'next/link'
import Image from 'next/image'

const AllMyPostItem = ({posts}) => {
const { date, title, excerpt, image, slug, category} = posts

const formattedDate =new Date(date).toLocaleDateString('en-US', {
    day:'numeric',
    month:'long',
    year:'numeric',
})

const LinkPath = `/blog/${slug}`


  return  <li className={classes.li}>
    <div className={classes.item}>
        <div className={classes.content}>
        <Link href={LinkPath}><a><h3 className={classes.h3}>{title}</h3></a></Link>
            <time className={classes.time}>{formattedDate}</time>
            <p className={classes.p}>
              {excerpt}
            </p>
            <p className={classes.tag}>{category}</p>
        </div>
    </div>
  </li>;
};

export default AllMyPostItem;
