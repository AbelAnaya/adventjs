import fn from './index'

describe('Challenge 14: Weaving the reno', () => {
    it('Test 01', () => {
        const reindeer = [2, 6, 9]
        const stables = [3, 8, 5]

        const result = fn(reindeer, stables)
        const expected = 3

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const reindeer = [1, 1, 3]
        const stables = [1, 8, 4]

        const result = fn(reindeer, stables)
        const expected = 8

        expect(result).toEqual(expected)
    })
})
