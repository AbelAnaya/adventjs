import fn from './index'

describe("Challenge 07: The Grinch's attack", () => {
    it('Test 01', () => {
        const pkg = 'a(cb)de'
        const result = fn(pkg)
        const expected = 'abcde'

        expect(result).toBe(expected)
    })

    it('Test 02', () => {
        const pkg = 'a(bc(def)g)h'
        const result = fn(pkg)
        const expected = 'agdefcbh'

        expect(result).toBe(expected)
    })

    it('Test 03', () => {
        const pkg = 'abc(def(gh)i)jk'
        const result = fn(pkg)
        const expected = 'abcighfedjk'

        expect(result).toBe(expected)
    })

    it('Test 04', () => {
        const pkg = 'a(b(c))e'
        const result = fn(pkg)
        const expected = 'acbe'

        expect(result).toBe(expected)
    })

    it('Test 05', () => {
        const pkg = 'abc(def)ghi(jkl)'
        const result = fn(pkg)
        const expected = 'abcfedghilkj'

        expect(result).toBe(expected)
    })

    // it('Test 06', () => {
    //     const pkg = ''
    //     const result = fn(pkg)
    //     const expected = ''
    //
    //     expect(result).toBe(expected)
    // })
    //
    // it('Test 07', () => {
    //     const pkg = 'abc'
    //     const result = fn(pkg)
    //     const expected = 'abc'
    //
    //     expect(result).toBe(expected)
    // })
})
