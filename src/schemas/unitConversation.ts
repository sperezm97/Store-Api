import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    units: [UnitConversation]
  }

  extend type Mutation implements Units {
    createUnitConversation(UnitConversation: UnitConversationInput): UnitConversation!
    updateUnitConversation(_id: ID!,label: String, status: Status): UnitConversation!
    deleteUnitConversation(_id: ID!)
  }

  input UnitConversationInput {
    label: String!
    status: Status!
  }

  interface Units {
    code: String!
    message: String!
  }

  enum Status {
    ACTIVE
    INACTIVE
  }

  type UnitConversation {
    _id: ID!
    label: String
    status: Status
  }
`;
