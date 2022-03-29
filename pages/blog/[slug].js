import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head';
import Layout from '@/components/Layout'
import PostContent from '../../components/posts/post-content'
import { getPosts } from '@/lib/posts'

export default function PostPage({
  frontmatter: { title, date, image,  }, content,  slug, categories}) {

  
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='description' content={excerpt} />
      </Head>
      <Link href='/blog'>Go Back</Link>
      <PostContent 
      slug={slug}
      content={content}
      title={title}
      image={image}
      data={date}
      categories={categories}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      frontmatter,
      content,
      slug,
      categories: uniqueCategories,
    },
  }
}

