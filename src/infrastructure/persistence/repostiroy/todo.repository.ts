import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'src/common/exception/error';
import { Todo } from 'src/domain/entity/todo';
import { TodoRepository } from 'src/domain/repository/todo.repository';
import { DataSource, Repository } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';

@Injectable()
export class TodoRepositoryImpl implements TodoRepository {
  private readonly todoRepository: Repository<TodoEntity>;

  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {
    this.todoRepository = this.dataSource.getRepository(TodoEntity);
  }

  async findAll({
    limit,
    skip,
  }: {
    limit: number;
    skip: number;
  }): Promise<Todo[]> {
    return (
      await this.todoRepository
        .createQueryBuilder()
        .limit(limit)
        .offset(skip)
        .getMany()
    ).map((todoEntity) => new Todo(todoEntity));
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .getOne();

    if (!todo) throw new EntityNotFoundError();

    return new Todo(todo);
  }

  async store(todo: Todo): Promise<Todo> {
    return new Todo(await this.todoRepository.save(todo));
  }

  async delete(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
