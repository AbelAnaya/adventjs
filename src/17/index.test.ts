import fn from './index'

describe('Challenge 17: Grinchs bombs', () => {
    it('Test 01', () => {
        const grid = [
            [true, false, false],
            [false, true, false],
            [false, false, false],
        ]
        const result = fn(grid)
        const expected = [
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 1],
        ]

        expect(result).toEqual(expected)
    })
})
