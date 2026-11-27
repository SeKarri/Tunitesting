// test/add.test.js

import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {
    it('should add two positive numbers', () => {
        expect(add(6, 4)).to.equal(10);
    });

    it('should add two negative numbers', () => {
        expect(add(-6, -4)).to.equal(-10);
    });

    it('should add positive and negative numbers', () => {
        expect(add(6, -4)).to.equal(2);
    });
});