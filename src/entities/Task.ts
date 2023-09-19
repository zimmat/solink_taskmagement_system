import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { User } from './User';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
