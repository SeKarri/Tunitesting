import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {
    it('sums values in array', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n, 0))
            .to.equal(6);
    });
});