import Layout from '@/components/Layout'
import { getPosts } from '@/lib/posts'
import MainPosts from '../components/home-page/main-post'


export default function HomePage({ posts, categories}) {
  return (
    <Layout>
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
