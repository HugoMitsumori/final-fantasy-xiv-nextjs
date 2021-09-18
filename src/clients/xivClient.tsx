import axios from 'axios'
import axiosRetry from 'axios-retry'

const XIV_API_URL = 'https://xivapi.com'
const XIV_API_KEY = process.env.XIV_API_KEY

axiosRetry(axios, { retries: 3 })

export interface RawBriefItem {
  Icon: string,
  ID: number,
  Name: string,
  Url: string,
}

export interface RawItemsList {
  Pagination: {
    Page: number,
    PageNext: number|null,
    PagePrev: number|null,
    PageTotal: number,
    Results: number,
    ResultsPerPage: number,
    ResultsTotal: number,
  },
  Results: Array<RawBriefItem>,
}

const getResource = async (path: string) => {
  return axios.get(`${XIV_API_URL}/${path}?private_key=${XIV_API_KEY}`)
}

const fetchItemsList = async (): Promise<RawItemsList> => {
  const itemsList = (await getResource('item')).data
  return itemsList
}

export {
  fetchItemsList,
  XIV_API_URL,
}
