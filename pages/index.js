import Layout from '@/components/Layout'
import Courses from '@/components/layout/courses'
import { getPosts } from '@/lib/posts'
// import MainPosts from '../components/home-page/main-post'
import Head from 'next/head';
import Post from '../components/Post'
import classes from '../components/home-page/main-post.module.css'
import SearchResults from '../components/SearchResults'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'


export default function HomePage({ posts, categories}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const clearContent = (e) =>{
    e.preventDefault()
    if(searchTerm.length > 0){
      setSearchTerm('')
      setSearchResults([])
    }
  }

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()

    
  }, [searchTerm])

 

  return (
    <Layout>
      <Head>
        <title>KingsCod Home Page</title>
        <meta
          name='description'
          content='I post about anything relating to programming and web development.'
        />
         <meta name="google-site-verification" content="VZ2m0VG6-L60WpkK2IfZ-97um5R6fu2-OfpoQJcKgx4" />
         </Head>
      <Courses categories={categories}/>
      {/* <Search /> */}
      <div className={classes.main_Container}>
      <span className={classes.post}>
      <h1 className='text-5xl  p-5 font-bold'>Latest Posts</h1>
      {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
 </span>
 <span className={classes.anything}>
 <span className={classes.tagXX}>
          <div className='container mx-auto flex items-center justify-center  md:justify-center'>
          <div className='relative text-gray-600 w-72 flex justify-center'>
          <form >
            <input
              type='search'
              name='search'
              id='search'
              className='bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts...'
            />

            <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
            <button onClick={clearContent}
            className={classes.btnClearX}
            >clear</button>
          </form>
        </div>
        </div>
          </span>
          <span className={searchResults.length  === 0  ? `${classes.taxN}` : `${classes.tagX}`}>
            <SearchResults results={searchResults} />
          </span>
          {/* <span className={classes.tag}>
            <p className={classes.about}> 
            <h4>About</h4>
            I &rsquo;m a computer science student with a diverse set of software and web development skills. Web programming is a hobby of mine that I can never get enough of... <Link href='/about'><a>read more</a></Link>
            </p>
          </span> */}
        </span>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts: getPosts().slice(0, 6),
      categories:uniqueCategories
    },
  }
}
