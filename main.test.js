const assert = require('assert');
const {
  getFirstItemFrom,
  getLastItemFrom,
  getIndex3,
  isLongList,
  firstItemIsNumber,
  secondCharOfThirdString,
} = require('./main.js');

describe('getFirstItemFrom', () => {
  it('returns the first item in an array', () => {
    assert.strictEqual(getFirstItemFrom([1, 1, 2, 3, 5, 8]), 1);
    assert.strictEqual(getFirstItemFrom([-5]), -5);
  });
});

describe('getLastItemFrom', () => {
  it('returns the last item in an array', () => {
    assert.strictEqual(getLastItemFrom([1, 1, 2, 3, 5, 8]), 8);
    assert.strictEqual(getLastItemFrom([-5]), -5);
  });
});

describe('getIndex3', () => {
  it('returns index 3 of an array with at least 4 items', () => {
    assert.strictEqual(getIndex3(['hello', 'darkness', 'my', 'old', 'friend']), 'old');
    assert.strictEqual(getIndex3(['tyrell', 'jumary', 'tyrell', 'wilson', 'carlos']), 'wilson');
  });

  it('returns the last index of an array with fewer than 4 items', () => {
    assert.strictEqual(getIndex3([1, 1, 2]), 2);
    assert.strictEqual(getIndex3([4]), 4);
  });
});

describe('isLongList', () => {
  it('returns true if the array holds more than 10 items', () => {
    assert.strictEqual(isLongList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), true);
    assert.strictEqual(isLongList(['the', 'vowels', 'are', 'a', 'e', 'i', 'o', 'u', 'and', 'sometimes', 'y']), true);
  });

  it('returns true if the array holds exactly 10 items', () => {
    assert.strictEqual(isLongList([10, 9, 8, 7, 6, 4, 3, 2, 1, 0]), true);
    assert.strictEqual(isLongList([10, 9, 8, 7, 6, 4, 3, 2, 1, 0]), true);
  });

  it('returns false if the array holds fewer than 10 items', () => {
    assert.strictEqual(isLongList([10, 8, 7, 6, 4, 3, 2, 1, 0]), false);
  });
});

describe('firstItemIsNumber', () => {
  it('returns true if the first item is a number', () => {
    assert.strictEqual(firstItemIsNumber([1, 1, 2, 3, 5, 8]), true);
    assert.strictEqual(firstItemIsNumber([0]), true);
  });

  it('returns false if the first item is a string', () => {
    assert.strictEqual(firstItemIsNumber(['1']), false);
    assert.strictEqual(firstItemIsNumber(['i am not a number.', 'I am a free man.']), false);
  });

  it(`returns false if the first item is a string, even if its value is 'number'`, () => {
    assert.strictEqual(firstItemIsNumber(['number', 'but', 'secretly', 'a', 'string']), false);
  });

  it('returns false if the first item is a boolean', () => {
    assert.strictEqual(firstItemIsNumber([true, false]), false);
    assert.strictEqual(firstItemIsNumber([false]), false);
  });

  it('returns false if the first item is an array', () => {
    assert.strictEqual(firstItemIsNumber([[]]), false);

    assert.strictEqual(firstItemIsNumber([['inception'], [`wasn't`], [`actually`], [`that`], [`good`]]), false);
  });

  it('returns false if the first item is a function', () => {
    assert.strictEqual(firstItemIsNumber([firstItemIsNumber]), false);
    assert.strictEqual(firstItemIsNumber([getFirstItemFrom, getIndex3]), false);
  });
});

describe('secondCharOfThirdString', () => {
  it(`returns the second character of the third string in the given array`, () => {
    assert.strictEqual(secondCharOfThirdString(['hello', 'there', 'good', 'sir']), 'o');
    assert.strictEqual(secondCharOfThirdString(['yes', 'we', 'have', 'no', 'bananas']), 'a');
  });
});
