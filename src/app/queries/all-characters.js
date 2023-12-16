export const ALL_CHARACTERS_QUERY = `
query  {
    Page {
      characters {
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
