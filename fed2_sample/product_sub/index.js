import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './schemas/schema.js';
import { resolvers } from './resolver/resolver.js';
import { sequelize } from './db/db.js';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http'
import cors from 'cors';

const app = express();
const httpserver = http.createServer(app);
const server = new ApolloServer({
    schema:buildSubgraphSchema({ typeDefs, resolvers })
});

await server.start();


const schemaEndpoint = '/product';

  app.get(schemaEndpoint, (req, res)=>{
    const file = fs.readFileSync('./product.graphql');
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
    await new Promise((resolve) => httpserver.listen({ port: 5000 }, resolve));
console.log(`🚀 Server ready at http://localhost:5000/graphql`);
  })