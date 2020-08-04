import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import typeDefs from './schemas';
import resolvers from './resolvers';
require('dotenv').config();

const app = express();
app.use(cors());

mongoose.connect(
  process.env.MONGO_URI || '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  err => {
    console.log(err || 'entro la db');
  },
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
