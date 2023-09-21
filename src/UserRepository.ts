import { Repository } from 'typeorm';
import { User } from '../src/entities/User'

export class UserRepository {
  constructor(private readonly userRepository: Repository<User>) {}
  async createUser(name: string): Promise<User> {
    const newUser = this.userRepository.create({ name });
    return await this.userRepository.save(newUser);
  }
  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

}
