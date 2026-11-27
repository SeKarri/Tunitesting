import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk', () => {
    it('splits array into chunks of size 2', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
});