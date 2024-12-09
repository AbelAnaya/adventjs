import fn from './index'

describe('Challenge 08: The reno race', () => {
    it('Test 01', () => {
        const indices = [0, 5, -3]
        const length = 10
        const result = fn(indices, length)
        const expected = '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3'

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const indices = [2, -1, 0, 5]
        const length = 8
        const result = fn(indices, length)
        const expected = '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4'

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const indices = [3, 7, -2]
        const length = 12
        const result = fn(indices, length)
        const expected = '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3'

        expect(result).toEqual(expected)
    })
})
