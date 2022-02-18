import { useState } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import Slider from '../components/Slider'
import ProductList from '../components/ProductList'

export default function Home({ sneakers }) {
  const [search, setSearch] = useState('')
  const products = sneakers.filter((item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)

  return (
    <Layout>
      <div className="wrapper">
        <Slider />
        <section className="catalog">
          <div className="catalog__header">
            <h1 className="catalog__title title">Все кроссовки</h1>
            <form className="catalog__search">
              <input className="catalog__search-input" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Поиск..." />
            </form>
          </div>
          <ProductList products={products} />
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data: sneakers } = await axios.get('http://localhost:3000/api/sneakers')

  return {
    props: {
      sneakers
    }
  }
}
