import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    invoices: [Invoice]
  }

  extend type Mutation {
    createInvoice(Invoice: InvoiceInput): Invoice!
    updateInvoice(_id: ID!,label: String, status: Status): Invoice!
    deleteInvoice(_id: ID!)
  }

  input InvoiceInput {
    identification: String
    label: String
    product: Product
    quantity: Number
    unit: UnitConversation
    status: Status
  }

  enum Status {
    ACTIVE
    INACTIVE
  }

  type Invoice {
    _id: ID!
    identification: String!
    label: String!
    product: Product!
    quantity: Number!
    unit: UnitConversation!
    status: Status!
  }
`;
