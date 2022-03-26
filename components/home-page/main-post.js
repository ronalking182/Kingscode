import classes from './main-post.module.css'
import MainPostItem from './main-post-item'
import Link from 'next/link'

const MainPost = ({posts, categories}) => {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Git: 'green',
    Java: 'purple',
    Blog: 'red',
  }

  return (
    <>
      <div className={classes.main_Container}>
        <span className={classes.post}>
        <h1 className='text-5xl  p-5 font-bold'>Latest Posts</h1>
                <span className={classes.list_post}>
            {posts.map((post, index) =>{
              return<ul key={index} className={classes.ul} ><MainPostItem  post={post}/></ul>
            })}
            </span>
        </span>
        <span className={classes.anything}>
          
          <span className={classes.tag}>
            <p className={classes.about}> 
            <h4>About</h4>
            I &rsquo;m a computer science student with a diverse set of software and web development skills. Web programming is a hobby of mine that I can never get enough of... <Link href='/about'><a>read more</a></Link>
            </p>
          </span>
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
        </span>
        
    </div>
    <Link href='/blog'>
    <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
      All Posts
    </a>
  </Link></>
  )
}

export default MainPost