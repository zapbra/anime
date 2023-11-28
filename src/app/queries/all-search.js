export const ALL_SEARCH_QUERY = `
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
    MangaSearch: Page {
      media(search: $query, type: MANGA, sort: POPULARITY_DESC) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
    CharacterSearch: Page {
      characters(search: $query, sort:FAVOURITES_DESC) {
        id
        name {
          first
          last
        }
        image {
          large
        }
      }
    }
  }
`;
