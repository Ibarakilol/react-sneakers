import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <div className="page">
      <Head>
        <title>React Sneakers</title>
        <meta name="description" content="Магазин лучших кроссовок" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {children}
      </main>
    </div>
  )
}
