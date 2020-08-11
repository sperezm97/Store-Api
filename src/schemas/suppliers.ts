import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    suppliers: [Suppliers!]!
    supplier(_id: ID!): Suppliers!
  }

  extend type Mutation {
    createSuppliers(label: String!, identification: String!, status: Status): Suppliers!
    updateSuppliers(_id: ID!, label: String, status: Status): Suppliers!
    deleteSuppliers(_id: ID!): Suppliers
  }

  type Suppliers {
    _id: ID!
    identification: String
    label: String
    status: Status
    createdAt: Date
    updatedAt: Date
  }
`;
