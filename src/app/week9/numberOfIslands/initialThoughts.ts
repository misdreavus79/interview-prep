// Number of Islands

type GridI = string[][];

const DIRECTIONS = [
    // Right
    [1, 0],
    // Left
    [-1, 0],
    // Up
    [0, 1],
    // Down
    [0, -1]
]

function numberOfIslands(grid: GridI) {
    // if the grid is empty, return zero
    // as there are no islands in an empty grid
    // This is most likely going to be the base case as well.
    if (grid.length === 0) {
        return 0;
    }

    // Next, get the number of rows and number of columns on the grid
    // Rows is grid, and columns is grid[0] (dot length of course)
    const rows = grid.length;
    // I need to understand how grid[0] is the columns. 
    const columns = grid[0].length;

    // Need to mark cells as visited.
    // Can use a set to ensure we're not re-adding the same vertices over and over
    const visited = new Set();

    // Initialize number of islands to zero
    const numberOfIslands = 0;

    // Have a nested loop that gets each position
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            // this is where we need to call bfs
            if (grid[row][column] === "1") {
                //This is an island, add it to the visited
                visited.add([row, column])
            }
        }
    }

    // I guess the first run is the naive approach?
    // Nested loops goes through the rows and columns one by one.
    // Python: r in range(rows) so a loop that runs through all the rows
    // Python: c in range(cols) so an inner loop that runs through all the columns
    // In the inner loop, test if the current cell (grid[r][c]) is equal to 1 (string one)
    // If it is, we add its position to the set. <- This is me thinking through the problem.
    // Video ran breadth first search on this column: bfs(r, c)
    // Increment number of islands since we found a 1. But also we need to make sure we haven't seen this one before, so that's where the set is going to come into play.
    // So we're only incrementing the islands, and adding the new one, if grid[r][c] is 1 and r, c are not in the visited set.

    // We return the number of islands when this is done.

    /* Breadth-First Search Function */
    // BFS uses a queue, which I need to come up with in TS.
    // The initial call to BFS is what adds the current pair to the set.
    // It creates a queue, which I'm not sure how it's doing it. Must me a closure thing.
    // It also appends r and c to the queue as well as the visited list.
    // Then we loop through the queue.
    // The directions multi-dimensional array is a list of directions you can go, with direction = [[1, 0] -> right, [-1, 0] -> left, [0, 1] -> up, [0, -1] -> down]
    // using that directions array, we check if r and c are within range.
    // If it is, we apend it to the queue, as well as the visited set
}