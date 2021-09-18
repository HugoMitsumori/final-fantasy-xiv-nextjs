import winston from 'winston'
import Head from 'next/head'
import { getFirstPage } from '../services/itemsService'
import { ItemsList } from '../components/organisms'

const log = winston.createLogger({ format: winston.format.json() })
interface ItemsPageProps {
  itemsPage: ItemsPage,
}

const Items = ({ itemsPage }: ItemsPageProps) => {
  return (
    <div>
      <Head>
        <title>Items</title>
      </Head>
      <ItemsList items={itemsPage.results} />
    </div>
  )
}

export const getServerSideProps = async ({ res }) => {
  try {
    const itemsPage = await getFirstPage()

    return {
      props: { itemsPage },
    }
  } catch (err) {
    log.error(err)
    res.status = 502

    return {
      error: 'Error!'
    }
  }  
}

export default Items
