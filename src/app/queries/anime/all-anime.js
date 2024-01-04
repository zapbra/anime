export const ALL_ANIME_QUERY = `
    query ($query: String) {
    AnimeSearch: Page {
      media(search: $query, type: ANIME, sort: POPULARITY_DESC) {
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