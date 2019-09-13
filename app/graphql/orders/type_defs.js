const { gql } = require('apollo-server');

const rootTypes = gql`
  extend type Mutation {
    order(order: OrderInput!): Order
  }
  extend type Query {
    orders(page: Int = 1, limit: Int = 20): OrdersPaginated
  }
`;

const customTypes = gql`
  type Order {
    id: ID!
    variants: [Variant]!
    deliveryAddress: String!
    totalAmount: Int!
    user: User!
  }
  type OrdersPaginated {
    orders: [Order]
    current_count: Int!
    current_page: Int!
    next_page: Int!
    total_count: Int!
    total_pages: Int!
  }
`;

const inputTypes = gql`
  input OrderInput {
    deliveryAddress: String!
    userId: ID!
    variants: [ID]!
  }
`;

exports.typeDefs = [rootTypes, customTypes, inputTypes];
