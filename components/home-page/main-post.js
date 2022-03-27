import classes from './main-post.module.css'
import MainPostItem from './main-post-item'
import Link from 'next/link'
import Pagination from '@/components/Pagination'
const MainPost = ({posts, currentPage, numPages}) => {

  return (
    <>
      <div className={classes.main_Container}>
        <span className={classes.post}>
        <h1 className='text-5xl  p-5 font-bold'>Latest Posts</h1>
                <span className={classes.list_post}>
                <ul className={classes.ul} >
            {posts.map((post, index) =>{
              return<MainPostItem  key={index} post={post}/>
            })}
            </ul>
            </span>
        </span>
        <span className={classes.anything}>
          <span className={classes.tag}>
            <p className={classes.about}> 
            <h4>About</h4>
            I &rsquo;m a computer science student with a diverse set of software and web development skills. Web programming is a hobby of mine that I can never get enough of... <Link href='/about'><a>read more</a></Link>
            </p>
          </span>
        </span>
    </div>
   {numPages && <Pagination currentPage={currentPage} numPages={numPages} /> } 
    <Link href='/blog'>
    <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
      All Posts
    </a>
  </Link>
  </>
  )
}

export default MainPost