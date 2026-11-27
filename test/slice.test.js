import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice', () => {
    it('returns selected portion of array', () => {
        expect(slice([1, 2, 3, 4], 1, 3))
            .to.deep.equal([2, 3]);
    });
});