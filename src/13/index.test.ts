import fn from './index'

describe('Challenge 13: Is the robot back?', () => {
    // 'R' // [1, 0]
    // 'RL' // true
    // 'RLUD' // true
    // '*RU' // [2, 1]
    // 'R*U' // [1, 2]
    // 'LLL!R' // [-4, 0]
    // 'R?R' // [1, 0]
    // 'U?D' // true
    // 'R!L' // [2,0]
    // 'U!D' // [0,2]
    // 'R?L' // true
    // 'U?U' // [0,1]
    // '*U?U' // [0,2]'
    // 'R!U?U' // [1,0]
    // 'U?D?U' // true

    it('Test 01', () => {
        const moves = 'R'

        const result = fn(moves)
        const expected = [1, 0]

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const moves = 'RL'

        const result = fn(moves)
        const expected = true

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const moves = 'RLUD'

        const result = fn(moves)
        const expected = true

        expect(result).toEqual(expected)
    })
    it('Test 04', () => {
        const moves = '*RU'

        const result = fn(moves)
        const expected = [2, 1]

        expect(result).toEqual(expected)
    })

    it('Test 05', () => {
        const moves = 'R*U'

        const result = fn(moves)
        const expected = [1, 2]

        expect(result).toEqual(expected)
    })

    it('Test 06', () => {
        const moves = 'LLL!R'

        const result = fn(moves)
        const expected = [-4, 0]

        expect(result).toEqual(expected)
    })

    it('Test 07', () => {
        const moves = 'R?R'

        const result = fn(moves)
        const expected = [1, 0]

        expect(result).toEqual(expected)
    })

    it('Test 08', () => {
        const moves = 'U?D'

        const result = fn(moves)
        const expected = true

        expect(result).toEqual(expected)
    })

    it('Test 09', () => {
        const moves = 'R!L'

        const result = fn(moves)
        const expected = [2, 0]

        expect(result).toEqual(expected)
    })

    it('Test 10', () => {
        const moves = 'U!D'

        const result = fn(moves)
        const expected = [0, 2]

        expect(result).toEqual(expected)
    })

    it('Test 11', () => {
        const moves = 'R?L'

        const result = fn(moves)
        const expected = true

        expect(result).toEqual(expected)
    })

    it('Test 12', () => {
        const moves = 'U?U'

        const result = fn(moves)
        const expected = [0, 1]

        expect(result).toEqual(expected)
    })

    it('Test 13', () => {
        const moves = '*U?U'

        const result = fn(moves)
        const expected = [0, 2]

        expect(result).toEqual(expected)
    })

    it('Test 14', () => {
        const moves = 'R!U?U'

        const result = fn(moves)
        const expected = [1, 0]

        expect(result).toEqual(expected)
    })

    it('Test 15', () => {
        const moves = 'U?D?U'

        const result = fn(moves)
        const expected = true

        expect(result).toEqual(expected)
    })
})
