export default function generateGiftSets(gifts: string[]): string[][] {
    const giftSet: string[][] = []

    gifts.forEach((item) => {
        giftSet.push([item])
    })

    for (let combinations = 1; combinations < gifts.length; ++combinations) {
        giftSet.forEach((array) => {
            gifts.forEach((gift) => {
                const giftSetIteration = new Set(array)
                giftSetIteration.add(gift)

                const giftArr = Array.from(giftSetIteration)

                let included = false
                giftSet.forEach((arr) => {
                    if (JSON.stringify(arr.toSorted()) === JSON.stringify(giftArr.toSorted())) {
                        included = true
                    }
                })

                if (!included) {
                    giftSet.push(giftArr)
                }
            })
        })
    }

    return giftSet
}
