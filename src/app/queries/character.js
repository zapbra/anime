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
      description
      dateOfBirth {
        year
        month
        day
      }
      age
      favourites
      media {
       edges {
         node {
          title {
            english
          }
          type
          coverImage {
            large
          }
          startDate {
            year
            month 
            day
          }
          averageScore
        }
       }
     }
    }
  }
`;
