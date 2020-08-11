import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    invoices: [Invoice!]!
    invoice(_id: String): Invoice!
  }

  extend type Mutation {
    createInvoices(invoice: NewInvoice): Invoice!
    updateInvoices(_id: ID!, label: String, status: Status): Invoice!
    deleteInvoices(_id: ID!): Invoice!
  }

  input NewInvoice {
    identification: String
    label: String
    product: ProductId
    quantity: Int
    unit: UnitId
    status: Status
  }

  input ProductId {
    _id: String!
  }

  input UnitId {
    _id: String!
  }

  type Invoice {
    _id: ID!
    identification: String!
    label: String!
    product: Products!
    quantity: Int!
    unit: UnitConversation!
    status: Status!
  }
`;
