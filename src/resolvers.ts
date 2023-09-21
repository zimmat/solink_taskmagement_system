import { User } from './entities/User';
import { Task } from './entities/Task';

const resolvers = {
  Query: {
    users: async (_, __, { dataSource }) => {
      try {
        const userRepository = dataSource.getRepository(User);
        const users = await userRepository.find();
        return users;
      } catch (error) {
        console.error("Error fetching users:", error.message);
        throw error;
      } finally {
        if (dataSource) {
          dataSource.release();
        }
      }
    },
    tasks: async (_, __, { dataSource }) => {
      try {
        const taskRepository = dataSource.getRepository(Task);
        const tasks = await taskRepository.find();
        return tasks;
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
        throw error;
      } finally {
        if (dataSource) {
          dataSource.release();
        }
      }
    },
    taskFiltered: async (_, { completed }, { dataSource }) => {
      try {
        const taskRepository = dataSource.getRepository(Task);
        const tasksFiltered = await taskRepository.find({ where: { completed } });
        return tasksFiltered;
      } catch (error) {
        console.error("Error fetching filtered tasks:", error.message);
        throw error;
      } finally {
        if (dataSource) {
           dataSource.release();
        }
      }
    },
  },
  Mutation: {
    createUser: async (_, { name }, { dataSource }) => {
      try {
        const userRepository = dataSource.getRepository(User);
        const newUser = userRepository.create({ name });
        const savedUser = await userRepository.save(newUser);
        return savedUser;
      } catch (error) {
        console.error("Error while creating user:", error.message);
        throw error;
      } finally {
        if (dataSource) {
          dataSource.release();
        }
      }
    },
    createTask: async (_, { title, description, user_id }, { dataSource }) => {
      try {
        const taskRepository = dataSource.getRepository(Task);
        const newTask = taskRepository.create({ title, description, user_id });
        const savedTask = await taskRepository.save(newTask);
        return savedTask;
      } catch (error) {
        console.error("Create task error :", error.message);
        throw error;
      } finally {
        dataSource.release();
      }
    },
    markTaskComplete: async (_, { taskId }, { dataSource }) => {
      try {
        const taskRepository = dataSource.getRepository(Task);
        const task = await taskRepository.findOne(taskId);
        if (!task) {
          throw new Error(`Task with ID ${taskId} not found`);
        }
        task.completed = true;
        const updatedTask = await taskRepository.save(task);
        return updatedTask;
      } catch (error) {
        console.error("Mark task complete error :", error.message);
        throw error;
      } finally {
        dataSource.release();
      }
    }
  }
}

export { resolvers };