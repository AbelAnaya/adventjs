import fn from './index'

describe('Challenge 15: Drawing tables', () => {
    it('Test 01', () => {
        const table = [
            { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' },
            { name: 'Charlie', city: 'New York' },
        ]

        const result = fn(table)
        const expected =
            '+---------+----------+\n| Name    | City     |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+'

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const table = [
            { gift: 'Doll', quantity: 10 },
            { gift: 'Book', quantity: 5 },
            { gift: 'Music CD', quantity: 1 },
        ]

        const result = fn(table)
        const expected =
            '+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+'

        expect(result).toEqual(expected)
    })
})
