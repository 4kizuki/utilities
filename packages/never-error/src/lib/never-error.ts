export class NeverError extends Error {
  constructor(value: never, name?: string) {
    super(
      name
        ? `Reached an unreachable code. The variable "${name}" was marked as never, but it was actually ${value}.`
        : `Reached an unreachable code. The variable was marked as never, but it was actually ${value}.`
    );
    this.name = 'NeverError';
  }
}
