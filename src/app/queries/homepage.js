export const HOMEPAGE_QUERY = `query ($query: String, $results: Int) {
    AnimeSearch: Page (perPage: $results) {
      pageInfo {
        total
        perPage
      }
      media(search: $query, type: ANIME, sort: POPULARITY_DESC) {
        id
        description
        averageScore
        favourites
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
    MangaSearch: Page (perPage: $results){
      pageInfo {
        total 
        perPage
      }
      media(search: $query, type: MANGA, sort: POPULARITY_DESC) {
          description
          averageScore
          favourites
            id
            title {
              english
            }
            coverImage {
              large
            }
      }
    }
    
    
  }`;
