import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    suppliers: [Suppliers]
  }

  extend type Mutation {
    createSuppliers(Suppliers: SuppliersInput): Suppliers!
    updateSuppliers(_id: ID!,label: String, status: Status): Suppliers!
    deleteSuppliers(_id: ID!)
  }

  input SuppliersInput {
    identification: String
    label: String!
    status: Status!
  }

  enum Status {
    ACTIVE
    INACTIVE
  }

  type Suppliers {
    _id: ID!
    identification: String
    label: String
    status: Status
  }
`;
