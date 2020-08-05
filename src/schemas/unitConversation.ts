import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    units: [UnitConversation]
    unit(_id: ID!): UnitConversation
  }

  extend type Mutation {
    createUnit(label: String, status: Status): UnitConversation!
    updateUnit(_id: ID!, label: String, status: Status): UnitConversation!
    deleteUnit(_id: ID!): UnitConversation
  }

  type UnitConversation {
    _id: ID!
    label: String
    status: Status
    createdAt: Date
    updatedAt: Date
  }
`;
