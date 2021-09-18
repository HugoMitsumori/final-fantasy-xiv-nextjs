interface BriefItem {
  id: number,
  name: string,
  thumbnailUrl: string,
  url: string,
}

interface ItemsPage {
  pagination: {
    current: number,
    next: number|null,
    pageSize: number,
    previous: number|null,
    resultsPerPage: number,
    totalPages: number,
    totalResults: number,
  },
  results: Array<BriefItem>,
}