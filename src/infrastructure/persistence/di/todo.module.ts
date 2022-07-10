import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoDITokens } from 'src/domain/di/todo-di-tokens';
import { TodoEntity } from '../entity/todo.entity';
import { TodoRepositoryImpl } from '../repostiroy/todo.repository';
const persistenceProviders: Provider[] = [
  {
    provide: TodoDITokens.TodoRepository,
    useClass: TodoRepositoryImpl,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [...persistenceProviders],
  exports: [TypeOrmModule, ...persistenceProviders],
})
export class TodoPersistenceModule {}
