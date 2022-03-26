import React, {Fragment} from "react";
import classes from './post-content.module.css'

import PostHeader from "./post-header";
import marked from 'marked'
import Link from 'next/link'





const PostContent = ({content, categories,  title, image,}) => {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Git: 'green',
    Java: 'purple',
    Blog: 'red',
  }
  return <Fragment>
      <div className={classes.whole_post}>
            <article className={classes.article}>
         <PostHeader title={title} image={image}  />
         <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </article>
          <div className={classes.post_tag}>
          <span className={classes.tag}>
            {categories && categories.map((category, index) =>{
             return <ul key={index} className={classes.tag_class}>
                <Link   href={`/blog/category/${category.toLowerCase()}`} >
                  <a>
                   <li className={`px-2 py-1 bg-${colorKey[category]}-600 text-gray-100 font-bold rounded`}>{category}</li>
                  </a>
                </Link>
              </ul>
            })}
          </span>
          </div>
      </div>
  </Fragment>;
};

export default PostContent;


