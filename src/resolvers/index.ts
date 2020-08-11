import { GraphQLScalarType } from 'graphql';
import department from './department';
import invoice from './invoice';
import products from './products';
import suppliers from './suppliers';
import unitConversation from './unitConversation';

const link = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value).toISOString(); // value from the client
    },
    serialize(value: Date) {
      return value.toISOString(); // value sent to the client
    },
  }),
};

export default [link, department, unitConversation, suppliers, products];
