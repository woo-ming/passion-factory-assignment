import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryColumn()
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
