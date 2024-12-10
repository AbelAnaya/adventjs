import fn from './index'

describe('Challenge 10: The elfish assembler', () => {
    it('Test 01', () => {
        const instructions = [
            'MOV -1 C', // copies -1 to register 'C',
            'INC C', // increments the value of register 'C'
            'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
            'MOV C A', // copies register 'C' to register 'A',
            'INC A', // increments the value of register 'A'
        ]

        const result = fn(instructions)
        const expected = 2

        expect(result).toBe(expected)
    })

    it('Test 02', () => {
        const instructions = ['MOV 0 A', 'INC A']

        const result = fn(instructions)
        const expected = 1

        expect(result).toBe(expected)
    })

    it('Test 03', () => {
        const instructions = ['INC A', 'INC A', 'DEC A', 'MOV A B']

        const result = fn(instructions)
        const expected = 1

        expect(result).toBe(expected)
    })

    it('Test 04', () => {
        const instructions = ['MOV 5 B', 'DEC B', 'MOV B A', 'INC A']

        const result = fn(instructions)
        const expected = 5

        expect(result).toBe(expected)
    })

    it('Test 05', () => {
        const instructions = ['INC C', 'DEC B', 'MOV C Y', 'INC Y']

        const result = fn(instructions)
        const expected = undefined

        expect(result).toBe(expected)
    })

    it('Test 06', () => {
        const instructions = ['MOV 2 X', 'DEC X', 'DEC X', 'JMP X 1', 'MOV X A']

        const result = fn(instructions)
        const expected = -2

        expect(result).toBe(expected)
    })

    it('Test 07', () => {
        const instructions = ['MOV 3 C', 'DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A']

        const result = fn(instructions)
        const expected = -1

        expect(result).toBe(expected)
    })

    it('Test 11', () => {
        const instructions = ['MOV 10 Z', 'DEC Z', 'DEC Z', 'MOV Z A']

        const result = fn(instructions)
        const expected = 8

        expect(result).toBe(expected)
    })

    it('Test 12', () => {
        const instructions = ['JMP A 2', 'MOV -1 B', 'INC B', 'JMP B 1', 'MOV B A']

        const result = fn(instructions)
        const expected = 1

        expect(result).toBe(expected)
    })
})
