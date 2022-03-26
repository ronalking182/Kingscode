import React from "react";
import AllMyPostItem from "./all-posts-item";
import classes from './all-posts.module.css'
import Footer from '../layout/footer'

const AllPost = (props) => {
    const {posts, categories} = props
  return<>
   <div className={classes.all_my_post}>
   <div className={classes.post}>
       <h1>Posts</h1>
    {posts && posts.map((post, index) =>{
               return <ul key={index}><AllMyPostItem key={index} posts={post} /></ul>
           })
       }
   </div>
   <div className={classes.any}></div>
  </div>;
   <Footer categories={categories} />
   </>
};

export default AllPost;
