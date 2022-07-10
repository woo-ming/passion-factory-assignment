export class Todo {
  id?: number;
  name: string;
  completed: boolean;
  completedAt: Date | null;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({
    id,
    name,
    completed = false,
    completedAt,
    createdAt,
    updatedAt,
  }: {
    id?: number;
    name: string;
    completed?: boolean;
    completedAt: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.completedAt = completedAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  complete(): void {
    this.completed = true;
    this.completedAt = null;
  }
}
