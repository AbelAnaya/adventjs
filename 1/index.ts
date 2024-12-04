export default function prepareGifts(gifts: number[]) {
    const uniqueGifts = new Set(gifts)

    const sortedGifts = [...uniqueGifts].sort((a, b) => a - b)

    return sortedGifts
}
