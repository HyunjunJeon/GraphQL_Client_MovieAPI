import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {   
        # 너무 느려.....
        # movies(limit: 10, orderBy: "asc"){
        #     id
        #     title
        # }
        movies{
            id
            title
            medium_cover_image
        }
    }
`
