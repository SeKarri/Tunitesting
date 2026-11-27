import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
    it('converts string to number', () => {
        expect(toNumber('42')).to.equal(42);
    });
});