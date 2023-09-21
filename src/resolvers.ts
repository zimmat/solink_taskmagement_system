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
    taskFiltered: async (_, { completed }, { dataSource }) => {
      const taskRepository = dataSource.getRepository(Task);
      const tasksFiltered = await taskRepository.find({ where: { completed } });
      return tasksFiltered;
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
    markTaskComplete: async (_, { taskId }, { dataSource }) => {
      const taskRepository = dataSource.getRepository(Task);
      const task = await taskRepository.findOne(taskId);
      if (!task) {
        throw new Error(`Task with ID ${taskId} not found`);
      }
      task.completed = true;
      const updatedTask = await taskRepository.save(task);
      return updatedTask;
    }
  }
}

export { resolvers };