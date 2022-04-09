import Post from './Post'
// import MainPost from './home-page/main-post'

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>

  return (
    // md:w-6/12
    <div className='relative right-0 z-20 border-4 border-gray-500 bg-white text-black  w-full   rounded-2xl'>
      <div className='p-10'>
        <h2 className='text-2xl mb-3'>{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  )
}
