const { gql } =  require('graphql-tag');

export const INSERT_USER = gql`
    mutation insertUser($first_name: String!, $last_name: String!, $nickname: String!, $address: !String) {
        insert_user(objects: {first_name: $first_name, last_name: $last_name, nickname: $nickname, address: $address}) {
            returning {
                user_id
                first_name
                last_name
                nickname
                address
            }
        }
    }
`;

export default INSERT_USER;