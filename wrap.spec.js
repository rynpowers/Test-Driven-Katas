const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('should not modify string if maxLen longer than the string', () => {
    expect(wrap('hello', 20)).to.equal('hello');
  });
  it('should break up words correctly', () => {
    const word =
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
    const result =
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.';
    expect(wrap(word, 20)).to.equal(result);
  });
});
