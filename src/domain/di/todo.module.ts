import { Module, Provider } from '@nestjs/common';
import { TodoServiceImpl } from '../service/todo.service';
import { TodoDITokens } from './todo-di-tokens';

const serviceProviders: Provider[] = [
  {
    provide: TodoDITokens.TodoService,
    useClass: TodoServiceImpl,
  },
];

@Module({
  imports: [],
  providers: [...serviceProviders],
  exports: [...serviceProviders],
})
export class DomainUserModule {}
