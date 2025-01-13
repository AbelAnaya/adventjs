import fn from './index'

describe('Challenge 22: Generate gift combinations', () => {
    it('Test 01', () => {
        const instructions = '+++'
        const result = fn(instructions)
        const expected = 3

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const instructions = '+--'
        const result = fn(instructions)
        const expected = -1

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const instructions = '>+++[-]'
        const result = fn(instructions)
        const expected = 0

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const instructions = '>>>+{++}'
        const result = fn(instructions)
        const expected = 3

        expect(result).toEqual(expected)
    })

    it('Test 05', () => {
        const instructions = '+{[-]+}+'
        const result = fn(instructions)
        const expected = 2

        expect(result).toEqual(expected)
    })

    it('Test 06', () => {
        const instructions = '{+}{+}{+}'
        const result = fn(instructions)
        const expected = 0

        expect(result).toEqual(expected)
    })

    it('Test 07', () => {
        const instructions = '------[+]++'
        const result = fn(instructions)
        const expected = 2

        expect(result).toEqual(expected)
    })

    it('Test 08', () => {
        const instructions = '-[++{-}]+{++++}'
        const result = fn(instructions)
        const expected = 5

        expect(result).toEqual(expected)
    })
})
