type FootSide = 'I' | 'R'

export type Shoe = {
    type: FootSide
    size: number
}

export default function organizeShoes(shoes: Shoe[]): number[] {
    let sizes: number[] = []
    let organizedShoes: Record<number, Record<FootSide, number>> = {}

    for (const { size, type } of shoes) {
        organizedShoes[size] ??= { I: 0, R: 0 }
        organizedShoes[size][type]++

        if (organizedShoes[size].I && organizedShoes[size].R) {
            sizes.push(size)

            organizedShoes[size].I--
            organizedShoes[size].R--
        }
    }

    return sizes
}
