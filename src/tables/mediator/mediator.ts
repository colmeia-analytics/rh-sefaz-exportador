export abstract class Mediator<T> {
  abstract execute(data: T): void;
}
