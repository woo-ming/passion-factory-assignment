import { Module, Provider } from '@nestjs/common';
import { TodoPersistenceModule } from 'src/infrastructure/persistence/di/todo.module';
import { TodoServiceImpl } from '../service/todo.service';
import { TodoDITokens } from './todo-di-tokens';

const serviceProviders: Provider[] = [
  {
    provide: TodoDITokens.TodoService,
    useClass: TodoServiceImpl,
  },
];

@Module({
  imports: [TodoPersistenceModule],
  providers: [...serviceProviders],
  exports: [...serviceProviders],
})
export class DomainUserModule {}
