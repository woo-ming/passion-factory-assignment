import { Inject, Injectable } from '@nestjs/common';
import { TodoDITokens } from 'src/domain/di/todo-di-tokens';
import { Todo } from 'src/domain/entity/todo';
import { TodoService } from 'src/domain/service/todo.service';

@Injectable()
export class TodoFacade {
  constructor(
    @Inject(TodoDITokens.TodoService)
    private readonly todoService: TodoService,
  ) {}

  async retrieveAll(dto: { limit: number; skip: number }): Promise<Todo[]> {
    return this.todoService.retrieveAll(dto);
  }

  async retrieveById(id: number): Promise<Todo> {
    return this.todoService.retrieveById(id);
  }

  async completeTodo(
    id: number,
    dto: { completed?: boolean; name?: string },
  ): Promise<Todo> {
    return this.todoService.completeTodo(id, dto);
  }

  async storeTodo(todo: Todo): Promise<Todo> {
    return this.todoService.storeTodo(todo);
  }

  async deleteTodo(id: number): Promise<void> {
    return this.todoService.deleteTodo(id);
  }
}
