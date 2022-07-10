import { Todo } from '../entity/todo';

export interface TodoRepository {
  findAll({ limit, skip }: { limit: number; skip: number }): Promise<Todo[]>;
  findOne(id: number): Promise<Todo | null>;
  store(todo: Todo): Promise<Todo>;
}
