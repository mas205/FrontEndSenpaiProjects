const {GraphQLServer} = require('graphql-yoga');

const port = 3002;

const typeDefs = `
type Query {
    info: String!
}
`;

const resolvers = {
    Query: {
        info: () => `Prueba de concepto node graphql`
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start({port:port})

console.log(`This server is running on localhost:${port}`);