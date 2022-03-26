import React from 'react'
import classes from './featured-post.module.css'
import FeaturedItem from './featured-item'

const FeaturedPosts = ({posts}) => {
    return (
        <section className={classes.featured}>
        <h2>Featured Posts</h2>
      {<ul className={classes.grid}>
    {posts.map( (post) => <FeaturedItem key={post.slug} post={post} />)}
    </ul>}
    </section>
  )
}

export default FeaturedPosts