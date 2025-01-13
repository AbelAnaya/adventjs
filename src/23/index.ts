export default function findMissingNumbers(nums: number[]): number[] {
    const missingNumbers: number[] = []

    const maxNumber = Math.max(...nums)

    for (let i = 1; i < maxNumber; ++i) {
        if (!nums.includes(i)) missingNumbers.push(i)
    }

    return missingNumbers
}
