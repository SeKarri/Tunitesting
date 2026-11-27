import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
    it('capitalizes first letter', () => {
        expect(upperFirst('hello')).to.equal('Hello');
    });
});