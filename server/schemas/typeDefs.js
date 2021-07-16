// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [bookSchema]
  }

  type bookSchema {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;