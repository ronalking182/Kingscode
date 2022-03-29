import Layout from '@/components/Layout'
import Courses from '@/components/layout/courses'
import { getPosts } from '@/lib/posts'
import MainPosts from '../components/home-page/main-post'
import Head from 'next/head';

export default function HomePage({ posts, categories}) {
  return (
    <Layout>
      <Head>
        <title>KingsCod Home Page</title>
        <meta
          name='description'
          content='I post about anything relating to programming and web development.'
        />
      </Head>
      <Courses categories={categories}/>
<MainPosts posts={posts} categories={categories}/>
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
