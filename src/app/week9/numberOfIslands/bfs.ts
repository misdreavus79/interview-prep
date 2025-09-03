// Number of Islands -> BFS
const NEIGHBOR_DIRECTIONS: number[][] = [
    // Down
    [1, 0],
    // Up
    [-1, 0],
    // Right
    [0, 1],
    // Left
    [0, -1]
];

function numberOfIslands(grid: string[][]) {
    // If the grid has length of zero, return zero
    if (grid.length === 0) {
        // if grid.length is zero, grid[0].length cannot be greater than zero.
        return 0;
    }

    // Set up the structures we'll need:
    // 1: Visited Set
    const visited = new Set < string > ();
    // 2: Queue to hold the actual nodes.
    const bfsQueue = new Queue < [number, number] > ();
    // 3: Optional parent list (a set?) to track shortest path.

    // 4: Number of islands
    let islands = 0;

    // For later calculations
    const totalRows = grid.length;
    const totalColumns = grid[0].length;

    // Nested for (or while) loop for both rows and columns
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            // First we check if we have visited this node
            if (grid[row][column] === "1" && !visited.has(`${row},${column}`)) {
                visited.add(`${row},${column}`)
                // islands++ is wonky so I'm staying away from it.
                islands += 1;
                bfsQueue.enqueue([row, column]);

                // Now that we've done the adding things, the next natural step is to keep going.
                // But do we keep going from here, or do we start over from the enqueued point?
                // OOOOH, there's a third loop. Wow, how is this algorithim efficient?
                while (!bfsQueue.isEmpty()) {
                    // dequeue whatever we just put in the queue
                    const [currentRow, currentColumn] = bfsQueue.dequeue()!;
                    // There's another loop here to check all neighbors
                    for (const [rowOffset, columnOffset] of NEIGHBOR_DIRECTIONS) {
                        // So this direction mini-array is to check agains the grid using the current index
                        // This is the part of the video where they were checking S->A, etc.
                        const neighborRow = currentRow + rowOffset;
                        const neighborColumn = currentColumn + columnOffset;

                        // I don't know why this matters yet, but the algorighm is starting to make sense.
                        const rowInBounds = neighborRow >= 0 && neighborRow < totalRows;
                        const columnInBounds = neighborColumn >= 0 && neighborColumn < totalColumns;

                        // Check if we're still in bounds
                        if (!rowInBounds || !columnInBounds) {
                            continue;
                        }

                        // We need to do the same checks as we do in the outer layer.
                        // So let's check if it's land, then add it to the visited list.
                        if (grid[neighborRow][neighborColumn] === "1" && !visited.has(`${neighborRow},${neighborColumn}`)) {
                            visited.add(`${neighborRow},${neighborColumn}`);
                            // We don't increase islands because this is part of the same island.
                            bfsQueue.enqueue([neighborRow, neighborColumn]);
                        } else {
                            continue;
                        }
                    }
                }
            } else {
                continue;
            }
        }
    }
}

// I'm going to define a queue and a stack here so I can use them later in other problems.
// Representing it as an array for now.
class Queue<T> {
    private data: T[];

    constructor(data: T[] = []) {
        this.data = data;
    }
    enqueue(item: T): void {
        // Whatever we add to the queue always goes last
        this.data.push(item);
    }
    dequeue(): T | undefined {
        // pop is for stacks
        return this.data.shift();
    }
    isEmpty(): boolean {
        return this.data.length === 0;
    }
    peek(): T | undefined {
        return this.data[0];
    }
    size(): number {
        return this.data.length;
    }
}

export class Stack<T> {
    private items: T[];

    constructor(initialItems: T[] = []) {
        this.items = initialItems;
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();        // LIFO
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

/***
 * Mental Cheat Sheet for BFS/DFS
 * 
 1.  Decide traversal style:
    • BFS → queue, level order      (good for shortest path, flood fill)
    • DFS → stack/recursion         (good for reachability, topological sort)

2.  Core skeleton:
       mark start as visited
       enqueue/push start

       while frontier not empty:
           current ← pop/dequeue
           for each neighbor of current:
               if neighbor is in-bounds / allowed / not visited:
                    mark visited (at enqueue!)
                    enqueue neighbor
           (update distance/parent/counter as the problem demands)

3.  Extras by problem type:
    • Counting components   → bump counter when starting new BFS/DFS
    • Shortest path grid    → store distance or parent map
    • Multi-source spread   → seed queue with all starts
 */
