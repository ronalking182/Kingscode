import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Head from 'next/head';
import Pagination from '@/components/Pagination'
import CategoryList from '@/components/CategoryList'
import { POSTS_PER_PAGE } from '@/config/index'
import { getPosts } from '@/lib/posts'
import MainPost from '@/components/home-page/main-post'
import Courses from '../../../components/layout/courses'

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
       <Head>
        <title>KingsCod blog page</title>
        <meta
          name='description'
          content='blog post relating to programming and web development, productivity and anything coding.'
        />
         <meta name="google-site-verification" content="VZ2m0VG6-L60WpkK2IfZ-97um5R6fu2-OfpoQJcKgx4" />
         </Head>
          <Courses categories={categories}/>
        <MainPost posts={posts} currentPage={currentPage} numPages={numPages}/>
          <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)

  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
