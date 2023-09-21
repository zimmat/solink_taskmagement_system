import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import { connectDB } from '../config/ormconfig'; 

const app = express();
const PORT = process.env.PORT || 3000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const dataSource = await connectDB();
      return { dataSource };
    },
  });

  await server.start();
  server.applyMiddleware({ app });
}

(async () => {
  try {
    // Initialize the Apollo Server and the database connection
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

    await startApolloServer();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();

