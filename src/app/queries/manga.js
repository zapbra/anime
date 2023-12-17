export const MANGA_QUERY = `query ($id: Int!) {

    Media(id:$id, type: MANGA) {
        id
        description
        volumes
        
        characters {
          edges {
            node {
              id
              name {
               full
              }
              age
              image {
                medium
              }
            }
            
          }
        }
        trailer {
          id
          site
          thumbnail
        }
        coverImage {
            extraLarge
        } 
        bannerImage 
        startDate {
            year
            month
            day
        }
        endDate {
            year
            month
            day
        }
        
        title {
            english
        }
        genres
        averageScore
        popularity
        countryOfOrigin
       

    }
}`;