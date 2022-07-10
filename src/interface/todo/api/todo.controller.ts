import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TodoFacade } from 'src/application/todo.service';
import { ApiCommonResponse } from 'src/common/decorator/api-common-response.decorator';
import { Todo } from 'src/domain/entity/todo';
import {
  ModifyTodoDto,
  RetrieveTodoListDto,
  StoreTodoListDto,
  TodoMainDto,
} from './todo.dto';

@ApiTags('todo')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoFacade: TodoFacade) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiCommonResponse({
    schemaType: 'array',
    dto: TodoMainDto,
  })
  async retrieveAll(@Query() dto: RetrieveTodoListDto): Promise<TodoMainDto[]> {
    return (await this.todoFacade.retrieveAll(dto)).map(
      (todo) => new TodoMainDto(todo),
    );
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCommonResponse({
    schemaType: 'object',
    dto: TodoMainDto,
  })
  async storeTodo(@Body() dto: StoreTodoListDto): Promise<TodoMainDto> {
    return new TodoMainDto(await this.todoFacade.storeTodo(new Todo(dto)));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiCommonResponse({
    schemaType: 'object',
    dto: TodoMainDto,
  })
  async retrieveById(@Param('id') id: number): Promise<TodoMainDto> {
    return new TodoMainDto(await this.todoFacade.retrieveById(id));
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiCommonResponse({
    schemaType: 'object',
    dto: TodoMainDto,
  })
  async completeTodo(
    @Param('id') id: number,
    @Body() dto: ModifyTodoDto,
  ): Promise<TodoMainDto> {
    return new TodoMainDto(await this.todoFacade.completeTodo(id, dto));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiCommonResponse({
    schemaType: 'void',
    dto: null,
  })
  async deleteTodo(@Param('id') id: number): Promise<void> {
    await this.todoFacade.deleteTodo(id);
  }
}
