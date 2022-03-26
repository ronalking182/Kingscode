import React from 'react'
import classes from './featured-item.module.css'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedItem = (props) => {
    const { title, image, excerpt, date, slug, category } = props.post
 const formattedDate =new Date(date).toLocaleDateString('en-US', {
     day:'numeric',
     month:'long',
     year:'numeric',
 })

 const LinkPath = `/blog/${slug}`


  return (
    <li className={classes.post}>
    <Link href={LinkPath}>
    <a>
        <div className={classes.image}>
            <Image src={image} alt={title} width={300} height={200} layout="responsive" />
        </div>
        <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
        </div>
    </a>
    </Link> 
 </li>
  )
}

export default FeaturedItem