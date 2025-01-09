export default function getCompleted(timeWorked: string, totalTime: string): string {
    const [hWorked, mWorked, sWorked] = timeWorked.split(':').map(Number)
    const [hTotal, mTotal, sTotal] = totalTime.split(':').map(Number)

    const totalWorked = hWorked * 3600 + mWorked * 60 + sWorked
    const totalSch = hTotal * 3600 + mTotal * 60 + sTotal

    return `${Math.round((totalWorked * 100) / totalSch)}%`
}
