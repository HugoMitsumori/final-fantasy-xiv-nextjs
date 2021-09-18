import Head from 'next/head'
import { fetchItemsList } from '../clients/xivClient'

const ItemRow = ({ item }) => (
  <picture>
    <img src={item['Icon']} />
    <figcaption>{item['Name']}</figcaption>
  </picture>
)

const ItemsList = ({ items }) => (
  <div>
    {items.map((item) => <ItemRow key={item['ID']} item={item} />)}
  </div>
)

const Items = ({ itemsList }) => {
  return (
    <div>
      <Head>
        <title>Items</title>
      </Head>
      <ItemsList items={itemsList["Results"]} />
    </div>
  )
}

export const getServerSideProps = async ({ res }) => {
  try {
    const itemsList = await fetchItemsList()
    console.log(itemsList)

    return {
      props: { itemsList },
    }
  } catch (err) {
    console.log(err)
    res.status = 502

    return {
      error: 'Error!'
    }
  }  
}

export default Items
