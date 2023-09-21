import { User } from './entities/User';
import { Task } from './entities/Task';

const resolvers = {
  Query: {
    users: async (_, __, { dataSource }) => {
      const userRepository = dataSource.getRepository(User);
      const users = await userRepository.find();
      return users;
    },
    tasks: async (_, __, { dataSource }) => {
      const taskRepository = dataSource.getRepository(Task);
      const tasks = await taskRepository.find();
      return tasks;
    },
  },
  Mutation: {
    createUser: async (_, { name }, { dataSource }) => {
      const userRepository = dataSource.getRepository(User);
      const newUser = userRepository.create({ name });
      const savedUser = await userRepository.save(newUser);
      return savedUser;
    },
    createTask: async (_, { title, description, user_id }, { dataSource }) => {
      const taskRepository = dataSource.getRepository(Task);
      const newTask = taskRepository.create({title, description, user_id });
      const savedTask = await taskRepository.save(newTask);
      return savedTask;
    },
  },
};

export { resolvers };