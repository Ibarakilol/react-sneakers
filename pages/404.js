import Link from 'next/link'
import Layout from '../components/layout'

export default function NotFound() {
  return (
    <Layout>
      <section className="empty">
        <img className="empty__emoji" src="/assets/images/pleading-emoji.svg" alt="Ошибка 404!" />
        <h1 className="empty__title">Ошибка 404!</h1>
        <p className="empty__text">Запрашиваемая страница не найдена</p>
        <Link href="/">
          <a className="empty__btn btn btn--back">Вернуться на главную</a>
        </Link>
      </section>
    </Layout>
  )
}
