export const ANIME_CHARACTERS_BY_PAGE = `
    query ($id: Int! $type: MediaType, $page: Int) {

    Media(id:$id, type: $type) {
       
        characters (page: $page){
          
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
       

    }
}
`;
