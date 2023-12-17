export const ANIME_QUERY = `query ($id: Int! $type: MediaType) {

    Media(id:$id, type: $type) {
        id
        description
        trailer {
          id
          site
          thumbnail
        }
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
        episodes
        title {
            english
        }
        genres
        averageScore
        popularity
        countryOfOrigin
        streamingEpisodes {
            title
        }

    }
}`;
