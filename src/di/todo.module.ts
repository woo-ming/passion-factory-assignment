import { Module } from '@nestjs/common';
import { TodoFacade } from 'src/application/todo.service';
import { DomainTodoModule } from 'src/domain/di/todo.module';
import { TodoController } from 'src/interface/todo/api/todo.controller';

@Module({
  imports: [DomainTodoModule],
  providers: [TodoFacade],
  controllers: [TodoController],
})
export class TodoModule {}
