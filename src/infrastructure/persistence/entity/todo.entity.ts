import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ length: 255 })
  name: string;
  @Column({ type: 'boolean' })
  completed: boolean;
  @Column({ type: 'datetime', nullable: true })
  completedAt: Date | null;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;
}
