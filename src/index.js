const {GraphQLServer} = require('graphql-yoga');

const port = 3002;

const typeDefs = `
type Query {
    info: String!,
    port: Int!
}
`;

const resolvers = {
    Query: {
        info: () => `Prueba de concepto node graphql`,
        port: () => `${port}`
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start({port:port})

console.log(`This server is running on localhost:${port}`);