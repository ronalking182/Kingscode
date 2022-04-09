import Layout from '@/components/Layout'
import classes from "../components/posts/about-me-page.module.css"
import { getPosts } from '@/lib/posts'
import Link from 'next/link'



export default function AboutMe({categories}) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Git: 'green',
    Java: 'purple',
    Blog: 'red',
    React: 'orange',
  }

  return (
    <Layout title='About Kingscode'>
  <div className={classes.div_container}>
      <div className={classes.main_content}><h1>Hi there! I &rsquo;m KingDavid Abutanko.</h1>
      <p>
       I &rsquo;m a computer science student with a diverse set of software and web development skills. Web programming is a hobby of mine that I can never get enough of.
I despised programming the first time I attempted it. I felt as if I &rsquo;d never be able to understand what it needed to be a true coder. I was starting to feel like a phony. Because of how and where I learned to program, there is always another vocabulary to learn, another framework to master, and another issue to find and fix. Fortunately, I was able to figure out two things:
</p>
<ul>
    <li> It &rsquo;s enjoyable for me to write about a subject I &rsquo; m interested in.</li>
    <li> I find that writing helps me to organize my thoughts.</li>
</ul>
<p> 
I tried to write a short essay to describe what I had learnt whenever I discovered something new. Even a single paragraph can assist you develop a deeper understanding of what you &rsquo;ve learnt.
That is why this blog exists. It isn &rsquo;t simply for the benefit of others; it has benefited me as well.
      </p>
      <p>
      From reddit to stackoverflow, I &rsquo;m grateful to the large community of programmers who create articles and tutorial videos for their assistance and advise in honing my skills and abilities as a web developer. This website is an attempt on my part to give back to the global programming community. I publish informative information on this blog to help readers improve their lives.
      </p>
      <p>My desire to teach and assist others in becoming better motivated me to write about my experience as a developer. I &rsquo;m delighted it &rsquo;s found a home on this site. I hope you find my content interesting and informative.
      </p>
      <p>
      If you have any questions, comments, or just want to say hello, feel free to drop me a line at kingscode [@] gmail.com (I &rsquo;m avoiding web scrapers and spams, sorry for the weird format!)
      </p></div>
      <div className={classes.side_content}>
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
      categories: uniqueCategories,
    },
  }
}