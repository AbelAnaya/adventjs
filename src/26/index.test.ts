import fn from './index'

describe('Challenge 26: Calculate the completed percentage', () => {
    it('Test 01', () => {
        const totalWorked = '01:00:00'
        const totalTime = '03:00:00'
        const result = fn(totalWorked, totalTime)
        const expected = '33%'

        expect(result).toEqual(expected)
    })
    it('Test 02', () => {
        const totalWorked = '02:00:00'
        const totalTime = '04:00:00'
        const result = fn(totalWorked, totalTime)
        const expected = '50%'

        expect(result).toEqual(expected)
    })
    it('Test 03', () => {
        const totalWorked = '01:00:00'
        const totalTime = '01:00:00'
        const result = fn(totalWorked, totalTime)
        const expected = '100%'

        expect(result).toEqual(expected)
    })
    it('Test 04', () => {
        const totalWorked = '00:10:00'
        const totalTime = '01:00:00'
        const result = fn(totalWorked, totalTime)
        const expected = '17%'

        expect(result).toEqual(expected)
    })
    it('Test 05', () => {
        const totalWorked = '01:10:10'
        const totalTime = '03:30:30'
        const result = fn(totalWorked, totalTime)
        const expected = '33%'

        expect(result).toEqual(expected)
    })
    it('Test 06', () => {
        const totalWorked = '03:30:30'
        const totalTime = '05:50:50'
        const result = fn(totalWorked, totalTime)
        const expected = '60%'

        expect(result).toEqual(expected)
    })
})
