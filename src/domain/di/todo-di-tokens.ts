export class TodoDITokens {
  static readonly TodoRepository: unique symbol = Symbol('TodoRepository');
  static readonly TodoService: unique symbol = Symbol('TodoService');
}
