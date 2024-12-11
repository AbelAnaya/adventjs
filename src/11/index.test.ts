import fn from './index'

describe('Challenge 11: Filenames encoded', () => {
    it('Test 01', () => {
        const file = '2023122512345678_sleighDesign.png.grinchwa'

        const result = fn(file)
        const expected = 'sleighDesign.png'

        expect(result).toEqual(expected)
    })
})
