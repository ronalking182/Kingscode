import Head from 'next/head'
import Header from './Header'
import Search from './Search'
import MainNavigation from './layout/main-navigation'
import Footer from './layout/footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNavigation/>
      <main >
        {children}
      </main>
      <Footer/>
    </div>
  )
}


Layout.defaultProps = {
  title: 'Welcome to KingsCode',
  keywords: 'development, coding, programming, software development, coding tutorial',
  description: 'The best info and news in programming',
}
