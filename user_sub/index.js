import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './schemas/schema.js';
import { resolvers } from './resolver/resolver.js';
import { sequelize } from './db/db.js';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http'

const app = express();
const httpserver = http.createServer(app);
const server = new ApolloServer({
    schema:buildSubgraphSchema({ typeDefs, resolvers })
});

await server.start();

const schemaEndpoint = '/user';

  app.get(schemaEndpoint, (req, res)=>{
    const file = fs.readFileSync('./user.graphql');
    res.type('application/txt');
        res.charset = 'UTF-8';
        res.write(file);
        res.end();
    });

app.use(
  '/graphql',
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

sequelize.sync().then(async ()=> {
    await new Promise((resolve) => httpserver.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  })




