import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: Int
    name: String
    Tasks: [Task]
  }

  type Task {
    id: Int
    title: String
    description: String
    completed: Boolean
    userId: Int
  }

  type Query {
    users: [User]
    tasks: [Task]
    taskFiltered(completed: Boolean!): [Task]
  }

  type Mutation {
    createUser(name: String!): User
    createTask(title: String!, description: String, userId: Int!): Task
    markTaskComplete(id: Int): Task
  }
`;

