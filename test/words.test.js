import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
    it('splits sentence into words', () => {
        expect(words('hello world'))
            .to.deep.equal(['hello', 'world']);
    });
});