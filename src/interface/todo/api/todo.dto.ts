import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Todo } from 'src/domain/entity/todo';

export class RetrieveTodoListDto {
  @ApiProperty()
  @IsNumber()
  limit: number;
  @ApiProperty()
  @IsNumber()
  skip: number;
}

export class StoreTodoListDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsBoolean()
  completed: boolean;
}

export class TodoMainDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  completed: boolean;
  @ApiProperty()
  completedAt: Date | null;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.name = todo.name;
    this.completed = todo.completed;
    this.completedAt = todo.completedAt;
    this.createdAt = todo.createdAt;
    this.updatedAt = todo.updatedAt;
  }
}

export class ModifyTodoDto {
  @ApiPropertyOptional()
  @IsString()
  name?: string;
  @ApiPropertyOptional()
  @IsBoolean()
  completed?: boolean;
}
