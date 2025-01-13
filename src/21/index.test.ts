import fn from './index'

describe('Challenge 21: Calculate the height of the Christmas tree', () => {
    it('Test 01', () => {
        const tree = {
            value: '🎁',
            left: {
                value: '🎄',
                left: {
                    value: '⭐',
                    left: null,
                    right: null,
                },
                right: {
                    value: '🎅',
                    left: null,
                    right: null,
                },
            },
            right: {
                value: '❄️',
                left: null,
                right: {
                    value: '🦌',
                    left: null,
                    right: null,
                },
            },
        }
        const result = fn(tree)
        const expected = 3

        expect(result).toEqual(expected)
    })
})
