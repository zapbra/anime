export const MANGA_ANIME_SEARCH = `
    query ($page: Int, $query: String, $type: MediaType) {
      
      Page(page: $page) {
        pageInfo{
          total
          perPage
        }
      
        media (type: $type, search: $query sort: POPULARITY_DESC) {
          id
          title {
            english
            native
          }
          coverImage {
            large
          }
        }
      
      }
    }
`;
