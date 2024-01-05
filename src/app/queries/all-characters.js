export const ALL_CHARACTERS_QUERY = `
query ($page: Int, $query: String) {
    Page (page: $page) {
    pageInfo {
        total
        perPage
    }
      characters (search: $query) {
        id
        name {
          full
        }
        image {
          medium
          large
        }
      }
    }
  }
`;
