import { gql } from 'apollo-server-express';

export default gql`
  scalar Date

  extend type Query {
    departments: [Department]
    department(_id: ID!): Department
  }

  extend type Mutation {
    addDepartment(label: String!, status: Status): Department!
    updateDepartment(_id: ID!, label: String, status: Status): Department!
    deleteDepartment(_id: ID): ID
  }

  enum Status {
    ACTIVE
    INACTIVE
  }

  type Department {
    _id: ID!
    label: String
    status: Status
    createdAt: Date
    updatedAt: Date
  }
`;
