import fn from './index'

describe('Challenge 20: Find missing and duplicate gifts', () => {
    it('Test 01', () => {
        const received = ['puzzle', 'car', 'doll', 'car']
        const expected = ['car', 'puzzle', 'doll', 'ball']
        const result = fn(received, expected)
        const expectedRes = {
            missing: { ball: 1 },
            extra: { car: 1 },
        }

        expect(result).toEqual(expectedRes)
    })
    it('Test 02', () => {
        const received = ['book', 'train', 'kite', 'train']
        const expected = ['train', 'book', 'kite', 'ball', 'kite']
        const result = fn(received, expected)
        const expectedRes = {
            missing: { ball: 1, kite: 1 },
            extra: { train: 1 },
        }

        expect(result).toEqual(expectedRes)
    })
    it('Test 03', () => {
        const received = ['bear', 'bear', 'car']
        const expected = ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
        const result = fn(received, expected)
        const expectedRes = {
            missing: { puzzle: 1, car: 2 },
            extra: {},
        }

        expect(result).toEqual(expectedRes)
    })
    it('Test 04', () => {
        const received = ['bear', 'bear', 'car']
        const expected = ['car', 'bear', 'bear']
        const result = fn(received, expected)
        const expectedRes = {
            missing: {},
            extra: {},
        }

        expect(result).toEqual(expectedRes)
    })
})
