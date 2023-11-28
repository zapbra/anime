export const ALL_CHARACTERS_QUERY = `
query  {
    Page {
      characters {
        id
        name {
          first
          last
        }
        image {
          medium
          large
        }
      }
    }
  }
`;
