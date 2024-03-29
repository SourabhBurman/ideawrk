import { gql } from 'graphql-tag'
const typeDefs = gql`
  type Product @key(fields: "id"){
    id:ID!
    productName: String!
    category: String!
    brand: String!
  }

  type Query {
    products: [Product]!
  }

  type Mutation {
    createProduct(productName:String!, category:String!, brand:String!) : Product
  }
`

export { typeDefs }