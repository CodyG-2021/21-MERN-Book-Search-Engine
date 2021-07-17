const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
		_id: ID
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  input BookInput {
		_id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  } 

  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;