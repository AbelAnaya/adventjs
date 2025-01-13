import fn from './index'

describe('Challenge 22: Generate gift combinations', () => {
    it('Test 01', () => {
        const list = ['car', 'doll', 'puzzle']
        const result = fn(list)
        const expected = [
            ['car'],
            ['doll'],
            ['puzzle'],
            ['car', 'doll'],
            ['car', 'puzzle'],
            ['doll', 'puzzle'],
            ['car', 'doll', 'puzzle'],
        ]

        expect(result).toEqual(expected)
    })

    it('Test 02', () => {
        const list = ['ball']
        const result = fn(list)
        const expected = [['ball']]

        expect(result).toEqual(expected)
    })

    it('Test 03', () => {
        const list = ['game', 'pc']
        const result = fn(list)
        const expected = [['game'], ['pc'], ['game', 'pc']]

        expect(result).toEqual(expected)
    })

    it('Test 04', () => {
        const list = ['apple', 'banana', 'cherry', 'date']
        const result = fn(list)
        const expected = [
            ['apple'],
            ['banana'],
            ['cherry'],
            ['date'],
            ['apple', 'banana'],
            ['apple', 'cherry'],
            ['apple', 'date'],
            ['banana', 'cherry'],
            ['banana', 'date'],
            ['cherry', 'date'],
            ['apple', 'banana', 'cherry'],
            ['apple', 'banana', 'date'],
            ['apple', 'cherry', 'date'],
            ['banana', 'cherry', 'date'],
            ['apple', 'banana', 'cherry', 'date'],
        ]

        expect(result).toEqual(expected)
    })

    it('Test 05', () => {
        const list = ['pen', 'notebook', 'eraser', 'pencil', 'marker']
        const result = fn(list)
        const expected = [
            ['pen'],
            ['notebook'],
            ['eraser'],
            ['pencil'],
            ['marker'],
            ['pen', 'notebook'],
            ['pen', 'eraser'],
            ['pen', 'pencil'],
            ['pen', 'marker'],
            ['notebook', 'eraser'],
            ['notebook', 'pencil'],
            ['notebook', 'marker'],
            ['eraser', 'pencil'],
            ['eraser', 'marker'],
            ['pencil', 'marker'],
            ['pen', 'notebook', 'eraser'],
            ['pen', 'notebook', 'pencil'],
            ['pen', 'notebook', 'marker'],
            ['pen', 'eraser', 'pencil'],
            ['pen', 'eraser', 'marker'],
            ['pen', 'pencil', 'marker'],
            ['notebook', 'eraser', 'pencil'],
            ['notebook', 'eraser', 'marker'],
            ['notebook', 'pencil', 'marker'],
            ['eraser', 'pencil', 'marker'],
            ['pen', 'notebook', 'eraser', 'pencil'],
            ['pen', 'notebook', 'eraser', 'marker'],
            ['pen', 'notebook', 'pencil', 'marker'],
            ['pen', 'eraser', 'pencil', 'marker'],
            ['notebook', 'eraser', 'pencil', 'marker'],
            ['pen', 'notebook', 'eraser', 'pencil', 'marker'],
        ]

        expect(result).toEqual(expected)
    })
})
