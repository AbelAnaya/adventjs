import fn from './index'

describe("Challenge 18: Santa's magic agenda", () => {
    const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

    it('Test 01', () => {
        const phone = '34-600-123-456'
        const result = fn(agenda, phone)
        const expected = { name: 'Juan Perez', address: 'Calle Gran Via 12' }

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const phone = '600-987'
        const result = fn(agenda, phone)
        const expected = { name: 'Maria Gomez', address: 'Plaza Mayor 45 Madrid 28013' }

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const phone = '111'
        const result = fn(agenda, phone)
        const expected = null

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const phone = '1'
        const result = fn(agenda, phone)
        const expected = null

        expect(result).toEqual(expected)
    })
})
