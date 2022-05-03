import Head from 'next/head'
// import Header from './Header'
import Search from './Search'
import MainNavigation from './layout/main-navigation'
import Footer from './layout/footer'

export default function Layout({ keywords, description, children }) {
  return (
    <div>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3988453389418073"
     crossorigin="anonymous"></script>
      </Head>
      <MainNavigation/>
      {/* <Search /> */}
      <main>
        {children}
      <Footer/>
      </main>
    </div>
  )
}

Layout.defaultProps = {
  description: 'The best info and news in programming, coding and software development',
  keywords:'html, css, javascript, react java how to find the average of an array in java, how to get the average of an array in java'
}

