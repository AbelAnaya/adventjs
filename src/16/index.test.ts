import fn from './index'

describe('Challenge 16: Cleaning the snow path', () => {
    it('Test 01', () => {
        const snow = 'zxxzoz'
        const result = fn(snow)
        const expected = 'oz'

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const snow = 'abcdd'
        const result = fn(snow)
        const expected = 'abc'

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const snow = 'zzz'
        const result = fn(snow)
        const expected = 'z'

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const snow = 'a'
        const result = fn(snow)
        const expected = 'a'

        expect(result).toEqual(expected)
    })
})
