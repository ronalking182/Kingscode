import Head from 'next/head'
// import Header from './Header'
// import Search from './Search'
import MainNavigation from './layout/main-navigation'
import Footer from './layout/footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MainNavigation/>
      <main>
        {children}
      <Footer/>
      </main>
    </div>
  )
}


