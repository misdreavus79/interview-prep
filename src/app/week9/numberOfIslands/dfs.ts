// Number of islands -> DFS

type Grid = number[][];

const NEIGHBOR_DIRECTIONS: number[][] = [
    // Right
    [0, 1],
    // Left
    [0, -1],
    // Down
    [1, 0],
    // Up
    [-1, 0]
];

class Stack<T> {
    private items: T[];

    constructor(input: T[] = []) {
        this.items = input;
    }

    add(item: T) {
        this.items.push(item);
    }

    remove() {
        this.items.pop();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

function numberOfIsland(grid: Grid) {
    if (grid.length === 0) {
        return 0;
    }

    // Variables to keep
    let islands = 0;
    const visited = new Set < string > ();
    // const dfsStack = new Stack(); <- Only do if plan to use recursive
    const totalRows = grid.length;
    const totalColumns = grid[0].length;

    function explore(currentRow, currentColumn) {
        // Run basic checks before proceeding

        // check for out of bounds
        if (currentRow < 0 || currentRow >= totalRows) {
            return;
        }
        if (currentColumn < 0 || currentColumn >= totalColumns) {
            return;
        }

        // Check if it matches our criteria
        const pathKey = `${currentRow},${currentColumn}`;
        if (visited.has(pathKey) || grid[currentRow][currentColumn] === 0) {
            return;
        }

        // Add current cell to the list of visited cells
        visited.add(pathKey);

        // Now check neighbors
        for (const [neighborRow, neighborColumn] of NEIGHBOR_DIRECTIONS) {
            const nextRow = currentRow + neighborRow;
            const nextColumn = currentColumn + neighborColumn;
            explore(nextRow, nextColumn);
        }
    }

    // Now do it for everything in the grid
    for (let row = 0; row < totalRows; row++) {
        for (let column = 0; column < totalColumns; column++) {
            // Basic checks again
            const pathKey = `${row},${column}`;
            if (!visited.has(pathKey) && grid[row][column] === 1) {
                islands += 1;
                explore(row, column)
            }
        }
    }

    return islands;
}