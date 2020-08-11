import { gql } from 'apollo-server-express';
import departments from './departments';
import invoice from './invoice';
import products from './products';
import suppliers from './suppliers';
import units from './unitConversation';

const link = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [link, departments, units, suppliers];
