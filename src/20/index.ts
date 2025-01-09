interface GiftListFixed {
    missing: Record<string, number>
    extra: Record<string, number>
}

export default function fixGiftList(received: string[], expected: string[]): GiftListFixed {
    const giftListFixed: GiftListFixed = {
        missing: {},
        extra: {},
    }

    for (const gift of expected) {
        const giftIndex = received.indexOf(gift)

        if (giftIndex !== -1) {
            received.splice(giftIndex, 1)
            continue
        }

        giftListFixed.missing[gift] = (giftListFixed.missing[gift] ?? 0) + 1
    }

    for (const gift of received) {
        giftListFixed.extra[gift] = (giftListFixed.extra[gift] ?? 0) + 1
    }

    return giftListFixed
}
