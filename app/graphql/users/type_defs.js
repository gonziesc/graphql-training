const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    users: [User]
  }
`;

const customTypes = gql`
  type User {
    name: String!
    username: String!
    email: String!
    id: ID!
  }
`;

const inputTypes = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
`;

/* const enums = gql`
  enum UserRoleEnum {
    STANDARD
    ADMIN
  }
`;*/

exports.typeDefs = [rootTypes, customTypes, inputTypes];
