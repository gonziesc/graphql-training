const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Query {
    products(page: Int = 1, limit: Int = 20, filter: ProductFilter): ProductsPaginated
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
    imageUrl: String!
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

const inputTypes = gql`
  input ProductFilter {
    where: ProductWhere
    like: ProductLike
  }

  input ProductWhere {
    id: ID
  }

  input ProductLike {
    name: String
    description: String
    category: String
    vendor: String
    brand: String
  }
`;

exports.typeDefs = [rootTypes, customTypes, inputTypes];
