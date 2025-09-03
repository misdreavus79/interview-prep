# Interview Prep
24-week playbook to get ready for front end, software engineering interview.

## Weekly Schedule
Overall schedule for the 24 weeks. Specifics for each week available in their own week folders.


| Wk | Algorithm focus (practice externally)                  | Demo focus (build in repo)                                   | Repo deliverables (acceptance)                                                        |
| -- | ------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 1  | Arrays & **Two Pointers**                              | **RSC streaming list** + optimistic ★ via server action      | `/week/1` streams with skeletons; optimistic toggle + rollback; aria-live; LCP < 2.5s |
| 2  | **Sliding Window**                                     | **Multi-step form** (RHF + Zod, save/resume)                 | Labels/ids correct; happy-path RTL tests; client+server validation                    |
| 3  | **Hash Map / Set**                                     | **TanStack Query** basics (query+mutation+invalidate)        | MSW handlers; offline toggle; optimistic update test                                  |
| 4  | **Stacks & Queues**                                    | **Design tokens & theming** (tokens → CSS vars)              | Button/Input variants; dark mode; contrast ≥ 4.5:1; Chromatic snapshot                |
| 5  | **Linked Lists**                                       | **Virtualized infinite grid**                                | 60 FPS scroll; memory stable; Playwright scroll test                                  |
| 6  | **Binary Search**                                      | **Accessible data table** (sort/filter/paginate)             | Proper table semantics; keyboard nav; RTL sort tests                                  |
| 7  | **Heaps / Priority Queue**                             | **Compound dialog patterns** (Modal/Drawer/Toast)            | Focus trap/return; ESC/backdrop; axe clean                                            |
| 8  | **Sorting patterns**                                   | **Upload manager** (chunk/pause/resume; worker hashing)      | Worker unit test; recover after refresh; error UI                                     |
| 9  | **Trees DFS/BFS**                                      | **Realtime presence chat** (WS/SSE mock)                     | Typing indicator; reconnect UI; ordering preserved                                    |
| 10 | **Recursion / Backtracking**                           | **Live metrics dashboard** (streaming updates)               | Stream resumes after fail; CPU idle ≥ 70% when idle                                   |
| 11 | **Graphs** (BFS/DFS, undirected/directed)              | **GraphQL client** (fragments, cursor pagination)            | MSW GraphQL contract tests; correct pageInfo handling                                 |
| 12 | **Topological sort**                                   | **Auth + security** (cookies, CSRF, gates, CSP)              | Protected routes; headers verified in test; CSRF blocked                              |
| 13 | **Shortest paths** (Dijkstra/BF)                       | **Image pipeline** (`next/image`, AVIF/WebP)                 | No layout shift; hero LCP < 2.5s; preconnect as needed                                |
| 14 | **Union-Find + MST**                                   | **Perf budgets & code-split**                                | ≤ 1 MB JS/route; Next stats artifact in CI; prefetch/preconnect                       |
| 15 | **DP I** (1D: LIS/house-robber)                        | **Web Workers for heavy tasks**                              | Main thread tasks < 50ms; cancelation supported                                       |
| 16 | **DP II** (2D: grid/edit distance)                     | **Accessible combobox** (listbox/typeahead)                  | SR labels/announcements; full keyboard e2e                                            |
| 17 | **Greedy** patterns                                    | **Testing I** (RTL+MSW, suspense/boundaries)                 | ≥80% lines on key pages; deterministic error state tests                              |
| 18 | **Intervals & sweep line**                             | **Testing II** (Playwright + visual regression)              | PR blocks on failures; diff artifact saved                                            |
| 19 | **Bit manipulation**                                   | **Resilience patterns** (retry w/ jitter, offline queue)     | Backoff timing unit tests; offline replay e2e                                         |
| 20 | **Tries & string algos** (prefix/suffix; optional KMP) | **i18n & RTL** (ICU, numbers/dates, mirrored layout)         | Locale snapshots; `dir` switch correctness                                            |
| 21 | **Monotonic stack/queue**                              | **Caching modes showcase** (CSR/SSR/ISR, tags, SWR)          | Docs page with diagrams; invalidation demo works                                      |
| 22 | **Segment/Fenwick tree** (intro)                       | **Background jobs UI** (queued/running/failed)               | Retry & backoff UI flows tested; notifications                                        |
| 23 | **Mixed review** (timed sets)                          | **Story deck (behavioral)** (STAR cards, print-ready)        | Filter by theme; print CSS; export to PDF                                             |
| 24 | **Mock interviews**                                    | **Portfolio hub & polish** (`/demos` + badges, final deploy) | All checks green in CI; retro + README per demo                                       |
