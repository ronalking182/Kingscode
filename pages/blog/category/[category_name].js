import fs from 'fs'
import path from 'path'
import Head from 'next/head';
import Layout from '@/components/Layout'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'
import SearchResults from '../../../components/SearchResults'
import classes from '../../../components/home-page/main-post.module.css'
import Post from '../../../components/Post'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Courses from '../../../components/layout/courses'

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

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

  const clearContent = (e) =>{
    e.preventDefault()
    if(searchTerm.length > 0){
      setSearchTerm('')
      setSearchResults([])
    }
  }


  return (
    <Layout>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
          {/* <CategoryList categories={categories} /> */}
          <Courses categories={categories}/>
          <div className={classes.main_Container}>
      <span className={classes.post}>
      <h1 className='text-5xl  p-5 font-bold'>Category</h1>
      {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
 </span>
 <span className={classes.anything}>
 <span className={classes.tagXX}>
          <div className='container mx-auto flex items-center justify-center  md:justify-center'>
          <div className='relative text-gray-600 w-72 flex justify-center'>
          <form>
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
        </span>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}
