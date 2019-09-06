const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    products: [Product]
  }
`;

const customTypes = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    category: String!
    vendor: String!
    brand: String!
    variants: [Variant]!
  }
  type Variant {
    id: ID!
    size: String!
    color: String
    price: Int!
  }
`;

exports.typeDefs = [rootTypes, customTypes];
