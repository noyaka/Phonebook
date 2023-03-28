const express = require('express');
// const { buildSchema } = require('graphql');
const expressGraphQL = require('express-graphql').graphqlHTTP

// GraphQL Schema
// const schema = buildSchema(`
//     type Query {
//         message: String
//     }
// `);

// // Root resolver
// var root = {
//     message: () => 'Hello Wold!'
// };

// Create an expres server and a GraphQL endpoint
var app = express();
app.use('/graphql', expressGraphQL ({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const APP_PORT = 3000;

app.listen(APP_PORT, ()=> {
    console.log(`App listening on port ${APP_PORT}`);
});