import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    products: [Products]
    product(_id: String): Products
  }

  extend type Mutation {
    createProducts(identification: String, label: String!, status: Status!): Products!
    updateProducts(_id: ID!, label: String, status: Status): Products!
    deleteProducts(_id: ID!): Products
  }

  type Products {
    _id: ID!
    identification: String
    label: String
    status: Status
  }
`;
