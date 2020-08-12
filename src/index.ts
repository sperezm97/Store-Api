import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import { config } from 'dotenv';
import typeDefs from './schemas';
import resolvers from './resolvers';

config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT || 8000 }, () => {
  console.log('subio graphjQ:');
});
