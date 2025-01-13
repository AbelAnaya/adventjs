import fn from './index'

describe('Challenge 22: Generate gift combinations', () => {
    it('Test 01', () => {
        const numbers = [1, 2, 4, 6]
        const result = fn(numbers)
        const expected = [3, 5]

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const numbers = [4, 8, 7, 2]
        const result = fn(numbers)
        const expected = [1, 3, 5, 6]

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const numbers = [3, 2, 1, 1]
        const result = fn(numbers)
        const expected = []

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const numbers = [5, 5, 5, 3, 3, 2, 1]
        const result = fn(numbers)
        const expected = [4]

        expect(result).toEqual(expected)
    })
})
