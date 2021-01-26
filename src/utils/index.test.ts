import {encodeQuery} from './index'

describe('Utils', () => {
    describe('encodeQuery', () => {
        it('changes \' \' to \'+\'', () => {
            expect(encodeQuery('test t')).toBe('test+t')
        });

        it('changes \'&\' to \'%26\'', () => {
            expect(encodeQuery('test&t')).toBe('test%26t')
        });
    })
})
