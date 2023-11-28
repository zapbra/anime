export const CHARACTER_QUERY = `
query ($id: Int) {
    Character (id: $id) {
      name {
        full
      }
      image {
        large
      }
      gender
      
      dateOfBirth {
        year
        month
        day
      }
      age
      favourites
    }
  }
`;
