import {
  fetchItemsList,
  RawBriefItem,
  RawItemsList,
  XIV_API_URL,
} from '../clients/xivClient'

const transformItem = (rawItem: RawBriefItem): BriefItem => {
  return {
    id: rawItem['ID'],
    name: rawItem['Name'] || 'Item without name',
    thumbnailUrl: `${XIV_API_URL}${rawItem['Icon']}`,
    url: `${XIV_API_URL}${rawItem['Url']}`,
  }
}

const transformItemsList = (rawItemsList: RawItemsList): ItemsPage => {
  const rawPagination = rawItemsList['Pagination']

  return {
    pagination: {
      current: rawPagination['Page'],
      next: rawPagination['PageNext'],
      pageSize: rawPagination['Results'],
      previous: rawPagination['PagePrev'],
      resultsPerPage: rawPagination['ResultsPerPage'],
      totalPages: rawPagination['PageTotal'],
      totalResults: rawPagination['ResultsTotal'],
    },
    results: rawItemsList['Results'].map(transformItem)
  }
}

const getFirstPage = async (): Promise<ItemsPage> => {
  const rawItemsList = await fetchItemsList()
  return transformItemsList(rawItemsList)
}

export {
  getFirstPage,
}
