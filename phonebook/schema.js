const express = require('express');
const { buildSchema, GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull } = require('graphql');

const expressGraphQL = require('express-graphql').graphqlHTTP

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => {
      return {
        id: {
          type: GraphQLInt,
          resolve (user) {
            return user.id;
          }
        },
        first_name: {
          type: GraphQLString,
          resolve (user) {
            return user.first_name;
          }
        },
        last_name: {
          type: GraphQLString,
          resolve (user) {
            return user.last_name;
          }
        },
        nickname: {
            type: GraphQLString,
            resolve (user) {
              return user.nickname;
            }
        },
        address: {
            type: GraphQLString,
            resolve (user) {
              return user.address;
            }
        }
      };
    }
  });
  
// GraphQL Schema
let schema = buildSchema(`
    type Query {
        user(id: Int!): User
        users(first_name: String): [User]
    }

    type Mutation {
        updateUserFirstName(id: Int!, first_name: String!): User
    }
    
    type User {
        id: Int
        first_name: String
        last_name: String
        nickname: String
        address: String
    }
`);

let usersData = [
    {
        id: 1,
        first_name: 'Noya',
        last_name: 'Topaz',
        nickname: 'Noy-Noy',
        address: 'Center'
    },
    {
        id: 2,
        first_name: 'Roi',
        last_name: 'Topachvily',
        nickname: 'Roy',
        address: 'North'
    }
]

let getUser = function(args) {
    let id = args.id;
    return usersData.filter(user => {
        return user.id == id;
    })[0];
}

let getUsers = function(args) {
    if (args.first_name) {
        let first_name = args.first_name;
        return usersData.filter(user => user.first_name === first_name);
    } else {
        return usersData;
    }
}

let updateUserFirstName = function({id, first_name}) {
    usersData.map(user => {
        if (user.id === id) {
            user.first_name = first_name;
            return user;
        }
    });
    return usersData.filter(user => user.id === id)[0];
}

// Root resolver
let root = {
    user: getUser,
    users: getUsers,
    updateUserFirstName: updateUserFirstName
};

// Create an expres server and a GraphQL endpoint
var app = express();
app.use('/graphql', expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const APP_PORT = 3000;

app.listen(APP_PORT, ()=> {
    console.log(`App listening on port ${APP_PORT}`);
});
