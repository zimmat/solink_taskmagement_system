import { Repository } from 'typeorm';
import { Task } from '../src/entities/Task';

export class TaskRepository {
  constructor(private readonly taskRepository: Repository<Task>) {}

  async createTask(title: string, description: string, user_id: number): Promise<Task> {
    const newTask = this.taskRepository.create({title,description,user: { id: user_id }});
    return await this.taskRepository.save(newTask);
  }
  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();
    return tasks;
  }
}






