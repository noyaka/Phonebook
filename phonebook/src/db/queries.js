import gql from 'graphql-tag';

export const GET_USERS_QUERY = gql`
    query {
        users {
            id
            first_name
            last_name
            nickname
            address
        }
    }
`;

export default GET_USERS_QUERY;