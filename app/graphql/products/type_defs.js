const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    products(page: Int = 1, limit: Int = 20, orderBy: OrderProductsBy, filter: String): ProductsPaginated
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
  type ProductsPaginated {
    products: [Product]
    current_count: Int!
    current_page: Int!
    next_page: Int!
    total_count: Int!
    total_pages: Int!
  }
`;

const enums = gql`
  enum OrderProductsBy {
    VENDOR
    CATEGORY
  }
`;

exports.typeDefs = [rootTypes, customTypes, enums];
