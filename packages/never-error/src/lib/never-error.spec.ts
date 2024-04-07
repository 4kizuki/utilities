import { NeverError } from './never-error';

describe('NeverError', () => {
  it('should work', () => {
    const varName = `xxxxxxxxxx`;
    const value = 33.4 as never;
    expect(new NeverError(value, varName).message.includes(varName)).toBe(true);
    expect(new NeverError(value, varName).message.includes(String(value))).toBe(
      true
    );

    expect(new NeverError(value).message.includes(String(value))).toBe(true);
  });
});
