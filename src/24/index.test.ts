import fn from './index'

describe('Challenge 22: Generate gift combinations', () => {
    const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
    }

    const tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' },
    }
    const tree3 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '🎁' },
    }

    const tree4 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' },
    }

    it('Test 01', () => {
        const result = fn(tree1, tree2)
        const expected = [true, '🎄']

        expect(result).toEqual(expected)
    })

    it('Test 01', () => {
        const result = fn(tree1, tree3)
        const expected = [false, '🎄']

        expect(result).toEqual(expected)
    })

    it('Test 01', () => {
        const result = fn(tree1, tree4)
        const expected = [false, '🎄']

        expect(result).toEqual(expected)
    })
})
