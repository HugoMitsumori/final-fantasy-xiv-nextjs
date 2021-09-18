import axios from 'axios'
import axiosRetry from 'axios-retry'

const XIV_API_URL = 'https://xivapi.com'
const XIV_API_KEY = process.env.XIV_API_KEY

axiosRetry(axios, { retries: 3 })

const getResource = async (path: string) => {
  return axios.get(`${XIV_API_URL}/${path}?private_key=${XIV_API_KEY}`)
}

const fetchItemsList = async () => {
  const itemsList = (await getResource('item')).data
  itemsList['Results'].forEach((item) => {
    item['Icon'] = XIV_API_URL + item['Icon']
  })
  return itemsList
}

export {
  fetchItemsList,
}
