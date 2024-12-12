export default function calculatePrice(ornaments: string): number | undefined {
    const ornamentValues = {
        '*': 1,
        o: 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }

    let sum = 0

    ornaments.split('').forEach((ornament, index) => {
        const currentValue = ornamentValues[ornament]
        const nextValue = ornamentValues[ornaments[index + 1]]

        nextValue > currentValue ? (sum -= currentValue) : (sum += currentValue)
    })

    return sum || undefined
}
