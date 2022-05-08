import { OrderBy } from './order-by.pipe';

describe('OrderBy', () => {
  it('create an instance', () => {
    const pipe = new OrderBy();
    expect(pipe).toBeTruthy();
  });
});
