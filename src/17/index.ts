export default function detectBombs(grid: boolean[][]): number[][] {
    const bombs = grid.map((row, row_i) =>
        row.map((_, col_i) => {
            const cellsAround: boolean[] = []

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) {
                        continue
                    }

                    const row_j = row_i + i
                    const col_j = col_i + j

                    if (grid[row_j]) cellsAround.push(grid[row_j][col_j])
                }
            }

            return cellsAround.filter((cell) => cell).length
        })
    )

    return bombs
}
