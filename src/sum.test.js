import { expect } from 'chai';  // Use import for chai
import { sum } from './sum.js'; // Also use import for your own module

describe('sum function', () => {
  it('should add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });

  it('should add -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).to.equal(0);
  });
});