import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import cors from 'cors';

config();
const app = express();
app.use(cors());

const schema = {};
const resolvers = {};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
