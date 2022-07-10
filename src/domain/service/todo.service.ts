import { Inject, Injectable } from '@nestjs/common';
import { TodoDITokens } from '../di/todo-di-tokens';
import { Todo } from '../entity/todo';
import { TodoRepository } from '../repository/todo.repository';

export interface TodoService {
  retrieveAll(dto: { limit: number; skip: number }): Promise<Todo[]>;
  retrieveById(id: number): Promise<Todo>;
  completeTodo(
    id: number,
    dto: { completed?: boolean; name?: string },
  ): Promise<Todo>;
  storeTodo(todo: Todo): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}

@Injectable()
export class TodoServiceImpl implements TodoService {
  constructor(
    @Inject(TodoDITokens.TodoRepository)
    private readonly todoRepository: TodoRepository,
  ) {}

  async retrieveAll(dto: { limit: number; skip: number }): Promise<Todo[]> {
    return this.todoRepository.findAll(dto);
  }

  async retrieveById(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async completeTodo(
    id: number,
    { completed, name }: { completed: boolean; name: string },
  ): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id);
    todo.modify({ completed, name });

    return await this.todoRepository.store(todo);
  }

  async storeTodo(todo: Todo): Promise<Todo> {
    return this.todoRepository.store(todo);
  }

  async deleteTodo(id: number): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
