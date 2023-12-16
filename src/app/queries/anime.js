export const ANIME_QUERY = `query ($id: Int! $type: MediaType) {

    Media(id:$id, type: $type) {
        id
        description
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
