export const MANGA_QUERY = `query ($id: Int!) {

    Media(id:$id, type: MANGA) {
        id
        description
    \t\tvolumes
    \t\t
    \t\tcharacters {
    \t\t  edges {
    \t\t    node {
              id
              name {
               full
              }
              age
              image {
                medium
              }
            }
            
    \t\t  }
    \t\t}
    \t\ttrailer {
    \t\t  id
          site
          thumbnail
    \t\t}
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