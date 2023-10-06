import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import NumbersValidator from '../../app/number_validator.js';

describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it('should return true when provided with an even number', () => {
    const validationResult = validator.isNumberEven(4);
    expect(validationResult).to.be.equal(true);
  });
  it('should return false when provided with an even number', () => {
    const validationResult = validator.isNumberEven(5);
    expect(validationResult).to.be.equal(false);
  });
  it('Should throw an error when provided with an even number', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
  it('should return an array of even numbers', () => {
    const validationResult = validator.getEvenNumbersFromArray([2, 3, 4, 6]);
    expect(validationResult).to.deep.equal([2, 4, 6]);
  });
  it('No even numbers inside array', () => {
    const validationResult = validator.getEvenNumbersFromArray([3, 5]);
    expect(validationResult).to.deep.equal([]);
  });
  it('should return an array of even numbers', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(['3', 5]);
    }).to.throw('[3,5] is not an array of "Numbers"');
  });
  it('All elements should be numbers', () => {
    const validationResult = validator.isAllNumbers([2, 3, 4, 6]);
    expect(validationResult).to.be.equal(true);
  });
  it('All elements should be numbers', () => {
    const validationResult = validator.isAllNumbers(['2', 3, 4, 6]);
    expect(validationResult).to.be.equal(false);
  });
  it('Not an array', () => {
    expect(() => {
      validator.isAllNumbers('3');
    }).to.throw('[3] is not an array');
  });
  it('Element should be an integer', () => {
    const validationResult = validator.isInteger(2);
    expect(validationResult).to.be.equal(true);
  });
  it('Element should be an integer', () => {
    const validationResult = validator.isInteger(2.5);
    expect(validationResult).to.be.equal(false);
  });
  it('Not a number', () => {
    expect(() => {
      validator.isInteger('3');
    }).to.throw('[3] is not a number');
  });
});
