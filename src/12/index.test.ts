import fn from './index'

describe('Challenge 12: How much does the tree cost?', () => {
    it('Test 01', () => {
        const tree = '***'

        const result = fn(tree)
        const expected = 3

        expect(result).toEqual(expected)
    })
})
