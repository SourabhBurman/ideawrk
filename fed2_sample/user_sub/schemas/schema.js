import { gql } from 'graphql-tag'


const typeDefs = gql`
type User @key(fields: "id"){
    id: ID!
    name: String!
    age: Int
    email: String!
    password: String!
  }


  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(name:String!,age:Int, email:String!, password:String!) : User
  }
`

export { typeDefs }