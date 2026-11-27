import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    it('returns true for empty array', () => {
        expect(isEmpty([])).to.equal(true);
    });
});