import Link from 'next/link'

import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      {/* {!compact && (
        <Image
          src={post.frontmatter.image}
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded'
        />
      )} */}
      <div className='flex justify-between items-center'>
        <span className='font-light text-gray-600'>
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className='mt-2'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-2xl text-gray-700 font-bold hover:underline'>
            {post.frontmatter.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-600'>{post.frontmatter.excerpt}</p>
      </div>

      {!compact && (
        <button className='flex justify-between items-center mt-6'>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-white-600 hover:text-gray-700'>Read More</a>
          </Link>
        </button>
      )}
    </div>
  )
}
