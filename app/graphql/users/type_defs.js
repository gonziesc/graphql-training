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

exports.typeDefs = [rootTypes, customTypes];
