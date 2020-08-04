import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    products: [Products]
  }

  extend type Mutation {
    createProducts(Products: ProductsInput): Products!
    updateProducts(_id: ID!,label: String, status: Status): Products!
    deleteProducts(_id: ID!)
  }

  input ProductsInput {
    identification: String
    label: String!
    status: Status!
  }

  enum Status {
    ACTIVE
    INACTIVE
  }

  type Products {
    _id: ID!
    identification: String
    label: String
    status: Status
  }
`;
