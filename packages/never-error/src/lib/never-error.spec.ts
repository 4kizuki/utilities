import { neverError } from './never-error';

describe('neverError', () => {
  it('should work', () => {
    expect(neverError()).toEqual('never-error');
  });
});
