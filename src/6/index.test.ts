import fn from './index'

describe('Challenge 06: Is the gift inside the box?', () => {
    it('Test 01', () => {
        const box = ['###', '#*#', '###']
        const result = fn(box)
        const expected = true

        expect(result).toBe(expected)
    })

    it('Test 02', () => {
        const box = ['####', '#* #', '#  #', '####']
        const result = fn(box)
        const expected = true

        expect(result).toBe(expected)
    })

    it('Test 03', () => {
        const box = ['#####', '#   #', '#  #*', '#####']
        const result = fn(box)
        const expected = false

        expect(result).toBe(expected)
    })

    it('Test 04', () => {
        const box = ['#####', '#   #', '#   #', '#   #', '#####']
        const result = fn(box)
        const expected = false

        expect(result).toBe(expected)
    })
})
