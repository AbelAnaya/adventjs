import fn from './index'

describe('Challenge 19: Stack magical boxes to deliver gifts', () => {
    it('Test 01', () => {
        const weight = 1
        const result = fn(weight)
        const expected = ` _ \n|_|`

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const weight = 2
        const result = fn(weight)
        const expected = ` ___ \n|___|`

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const weight = 3
        const result = fn(weight)
        const expected = ` _ \n|_|_\n|___|`

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const weight = 4
        const result = fn(weight)
        const expected = ` ___ \n|___|\n|___|`

        expect(result).toEqual(expected)
    })

    it('Test 05', () => {
        const weight = 5
        const result = fn(weight)
        const expected = ` _____ \n|     |\n|_____|`

        expect(result).toEqual(expected)
    })

    it('Test 06', () => {
        const weight = 6
        const result = fn(weight)
        const expected = ` _ \n|_|___\n|     |\n|_____|`

        expect(result).toEqual(expected)
    })

    it('Test 08', () => {
        const weight = 18
        const result = fn(weight)
        const expected = ` _ \n|_|_\n|___|_\n|     |\n|_____|___\n|         |\n|_________|`

        expect(result).toEqual(expected)
    })
})
