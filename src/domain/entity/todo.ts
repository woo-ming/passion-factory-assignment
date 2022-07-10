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
    completed,
    completedAt = null,
    createdAt,
    updatedAt,
  }: {
    id?: number;
    name: string;
    completed: boolean;
    completedAt?: Date | null;
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

  modify({ completed, name }: { completed?: boolean; name?: string }): void {
    if (completed) {
      this.completed = completed;
      this.completedAt = completed ? new Date() : null;
    }
    if (name) this.name = name;
  }
}
