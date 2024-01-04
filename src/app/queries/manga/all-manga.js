export const ALL_MANGA_QUERY = `query ($page: Int) {
  Page($query: String, page: $page) {
    pageInfo{
      total
      perPage
    }
  
    media (type: MANGA, search: $query, sort: POPULARITY_DESC) {
      id
      title {
        english
      }
      coverImage {
        large
      }
    }
  
  }
}
`;