import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    it('converts decimal to integer', () => {
        expect(toInteger(3.9)).to.equal(3);
    });
});