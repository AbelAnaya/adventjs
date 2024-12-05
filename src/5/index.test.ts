import fn from './index'
import { Shoe } from './index'

describe('Challenge 05: Return sizes that have a correct pair of left and right shoes', () => {
    it('Test 01', () => {
        const shoes: Shoe[] = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 },
        ]

        const result: Array<number> = fn(shoes)
        const expected = [38, 42]

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const shoes: Shoe[] = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
        ]
        const result: Array<number> = fn(shoes)
        const expected = [38, 38]

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const shoes: Shoe[] = [
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 43 },
        ]

        const result: Array<number> = fn(shoes)
        const expected = []

        expect(result).toEqual(expected)
    })
})
