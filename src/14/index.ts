export default function minMovesToStables(reindeer: number[], stables: number[]): number {
    reindeer.sort((a, b) => a - b)
    stables.sort((a, b) => a - b)

    const moves = reindeer.reduce((acc, cur, idx) => {
        return (acc += Math.abs(stables[idx] - cur))
    }, 0)

    return moves
}
