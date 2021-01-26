import {encodeQuery} from './index'

describe('Utils', () => {
    describe('encodeQuery', () => {
        it('changes \' \' to \'+\'', () => {
            expect(encodeQuery('test t')).toBe('test+te')
        });

        it('changes \'&\' to \'%26\'', () => {
            expect(encodeQuery('test&t')).toBe('test%26te')
        });
    })
})
