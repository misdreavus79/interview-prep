# 24-Week “Slow-Cook” (Merged, Extended, & Upgraded)

This repo documents my long-form, demo-first interview prep curriculum. It blends weekly algorithm practice (off-repo) with shippable Next.js demos (in-repo), plus a Coursera spine, light weekly system-design drills, and extended electives—so nothing valuable gets dropped on the floor.

**Time budget:** I allocate 6–8 focused hours/week (≈ one evening + one longer weekend session).

**Weekly rhythm**
- **Algo (off-repo):** 6–8 problems on GFE/LeetCode (I log a 1-line “pattern” + 1-line “pitfall” per problem).
- **Demo (in repo):** one shippable page under `/week/<n>` with tests + a11y/perf checks.
- **Coursera (~3h):** modules that serve the week’s topics.
- **System-Design Drill (20–30 min):** a quick whiteboard sketch; I save a screenshot/photo.

---

## Weeks 1–12 — DSA Foundations + Core Product Demos  
*(Coursera spine: Princeton Algorithms I → II)*

| Wk | Algorithm focus (GFE, off-repo) | Demo focus (repo) | Coursera spine (≈3h) | SD drill (20–30m) | Key deliverables (acceptance) |
|---|---|---|---|---|---|
| 1 | Arrays & Two Pointers | RSC streaming list + optimistic favorite (server action) | Princeton Algo I — W1: Union-Find & Analysis | Model the “items feed” cache: layers + invalidation triggers | `/week/1` streams with skeletons; aria-live status; Lighthouse LCP < 2.5s; axe clean |
| 2 | Sliding Window | Multi-step form (RHF + Zod, save/resume) | Algo I — W2: Stacks & Queues | Form data lifecycle: client cache, server validation, idempotent submit | Labels/ids; error summary focusing first invalid; Playwright happy path |
| 3 | Hash Map / Set | TanStack Query (query/mutate/invalidate, offline) | Algo I — W3: Elementary sorts | SWR vs refetch-on-focus trade-offs | MSW handlers; offline toggle; optimistic rollback test |
| 4 | Stacks & Queues | Design tokens & theming (tokens → CSS vars) | Algo I — W4: Merge/Quick sort | DS theming rollout: dark mode + brand channels | Button/Input variants; contrast ≥ 4.5:1; visual snapshots |
| 5 | Linked Lists | Virtualized infinite grid | Algo I — W5: Priority queues | Scroll perf budget; prefetch strategy | 60 FPS scroll; memory stable; scroll assertions |
| 6 | Binary Search | Accessible data table (sort/filter/paginate) | Algo I — W6: Symbol tables (BSTs) | Sorting semantics, locale collation, stable sort plan | Proper table semantics; keyboard nav; RTL sort tests |
| 7 | Heaps / Priority Queue | Dialogs suite (Modal/Drawer/Toasts, focus mgmt) | Princeton Algo II — W1: Undirected graphs | Global overlay architecture; focus return diagram | ESC/backdrop behavior; no focus loss; axe clean |
| 8 | Sorting patterns | Upload manager (chunk/pause/resume; worker hashing) | Algo II — W2: Directed graphs | Backpressure + retry for uploads; failure states | Worker unit test; resume after refresh; error UI |
| 9 | Trees DFS/BFS | Realtime chat/presence (WS/SSE mock) | Algo II — W3: Minimum Spanning Trees | Reconnection strategy + presence model | Typing indicator; reconnect UI; ordering preserved |
| 10 | Backtracking | Live metrics dashboard (stream updates) | Algo II — W4: Shortest Paths | Push vs pull; fan-out & throttling | Stream resumes after fail; CPU idle ≥ 70% when idle |
| 11 | Graphs (traversals) | Testing Strategy I (RTL + MSW, error/suspense) | Algo II — Strings I (tries/TST) | Error boundaries map; critical path tests | ≥80% lines on key pages; deterministic error-state tests |
| 12 | Topological sort | Testing Strategy II (Playwright + visual reg) | Algo II — Strings II (substring search) or catch-up | Visual diff gate; flaky test triage | PR blocks on regressions; diff artifact saved |

---

## Weeks 13–16 — Delivery Excellence (A11y + Perf) & DS Governance  
*(Coursera spine: Google Web Performance → UMich Web Accessibility)*

| Wk | Algorithm focus | Demo focus | Coursera spine | SD drill | Key deliverables |
|---|---|---|---|---|---|
| 13 | Shortest paths (Dijkstra/BF) | Image pipeline (`next/image`, AVIF/WebP, zero CLS) | Google Web Perf — Metrics deep-dive (LCP/CLS/INP) | Hero loading strategy + preconnect map | Hero LCP < 2.5s; CLS ≈ 0.00; preconnect audits |
| 14 | Union-Find + MST | Perf budgets & code-split | Web Perf — Optimizing JS & delivery | Route-level budget diagram + bundle risk list | Next stats in CI; prefetch/preconnect; ≤ 1 MB JS/route |
| 15 | DP I (1D: LIS/robber) | Web Workers for heavy tasks + cancellation | UMich Web A11y — Intro & POUR | Main-thread budget design (≤ 50 ms) | Worker offload verified; cancel path tested |
| 16 | DP II (2D: grid/edit distance) | Accessible Combobox (listbox/typeahead) **+ DS Governance Docs** | UMich Web A11y — Forms & Widgets | Combobox state & ARIA map; DS versioning/deprecation plan | Keyboard e2e; SR announcements; **RFC + ADR + versioning policy** published |

---

## Weeks 17–18 — GIS / Mapping Mini-Track *(kept from my legacy plan)*

| Wk | Algorithm focus | Demo focus | Coursera spine | SD drill | Key deliverables |
|---|---|---|---|---|---|
| 17 | Greedy patterns | Mapbox GL overlay (UAV-style layer, tokens theme) | GIS & Mapping — Course 1 (basics/projections) | Tile caching & viewport fetch plan | Themed map; accessible controls; mapping-why notes |
| 18 | Intervals & Sweep-line | Cartography theming (token-driven styles) | GIS — Course 2 (cartography & styling) | Data reduction for dense layers (cluster/LOD) | Token-driven style switch; DS tokens across web + map story |

---

## Weeks 19–22 — Resilience, i18n, and Platform SD

| Wk | Algorithm focus | Demo focus | Coursera spine | SD drill | Key deliverables |
|---|---|---|---|---|---|
| 19 | Bit manipulation | Resilience patterns (retry w/ jitter, offline queue) | Web Perf — Lab vs Field data; user-centric metrics | Failure budgets & backoff math | Backoff timing unit tests; offline replay e2e |
| 20 | Tries & string algos | i18n & RTL (ICU, numbers/dates, mirrored layout) | Web Perf — Performance culture & CI | Locale data flows & dir switching | Locale snapshots; `dir` correctness; copy-audit checklist |
| 21 | Monotonic stack/queue | Caching modes showcase (CSR/SSR/ISR, tags, SWR) | Review buffer / capstone module | Cache-invalidation whiteboard for `/feed` | Docs page with diagrams; invalidation demo works |
| 22 | Fenwick/Segment tree (intro) | Background jobs UI (queued/running/failed) | Review buffer | Queue design: retries, DLQ, idempotency | Progress & retry UX; notification patterns tested |

---

## Weeks 23–24 — Story Deck, Peer Review & Portfolio Polish

| Wk | Algorithm focus | Demo focus | Coursera spine | SD drill | Key deliverables |
|---|---|---|---|---|---|
| 23 | Mixed review (timed set) | Story Deck (STAR cards, print-ready) | Elective review | Architecture Q&A drill (5 prompts) | Filter by theme/impact; print CSS; PDF export |
| 24 | Mock interviews | Portfolio hub & polish (`/demos` + badges) **+ Peer-Review** | — | System recap: draw platform “browser → DB” | All green in CI; **5-min recorded walkthrough**; lightweight peer review |

---

# Extensions (Weeks 25–30) — Legacy Highlights Kept Intact

These weeks capture non-overlapping gems from my earlier curriculum so nothing is lost. I can run them immediately after Week 24 or spread them across the next quarter.

| Wk | Algorithm focus | Demo / Project focus | Coursera / Track | SD drill | Key deliverables |
|---|---|---|---|---|---|
| 25 | Sliding Window (applied) | Real-time Search-Suggest widget integrating sliding-window-driven debounce/backpressure | Princeton Algo I/II — review segment | Read vs write paths for search; cache invalidation | Widget demo + perf notes |
| 26 | Intervals & Sweep-line | Calendar “Meeting Rooms” component + **Intl.Collator** codemod replacing naive sorts | Algorithms II — Graphs recap | Event timeline model; conflict resolution | Repo PR with codemod + calendar demo |
| 27 | Graphs — Topo/BFS (applied) | Mini Kanban → use topo-sort to persist column order | Algorithms II — Topo/Shortest Paths recap | Consistency model for ordering + persistence | Recorded architecture walkthrough |
| 28 | Design Systems packaging | Style-Dictionary token pipeline; port Button/Drawer/Pagination; publish **`@eli/ds-core`** | Meta React Advanced — Design Systems module (or elective) | Release/version strategy; theming tiers | Versioned npm package + docs site stub |
| 29 | System Design playbook | Front-End SD Playbook (GFE) → governance one-pager for interviews | GFE System Design Playbook (non-Coursera) | CDN/cache layers & data lifecycle diagram | 1-page PDF: DS governance & platform architecture |
| 30 | Capstone & story | Peer-review presentation + **5-min STAR video** (A11y/Perf/DS impact) | Coursera capstone peer review (elective) | End-to-end system recap & Q&A | Polished video + peer feedback notes |

---

## Always-on weekly add-ons (lightweight)

- **System-Design drill (20–30 min):** follow the column prompts; save the sketch.
- **Behavioral note (5 min):** add one bullet to a STAR story each week.
- **Retro (5 min):** “Keep / Change” + one Coursera takeaway I actually applied.

---

## Post-Plan Maintenance & OSS

- **Monthly:** one timed algorithm set + one DS component code review (I pick from weeks 4, 6, 7, 16).
- **Quarterly:** one small OSS PR to a headless UI library (Radix, Ark, React Aria, TanStack).
- **Evergreen:** keep budgets in CI (≤ 1 MB/route, LCP < 2.5s) and run axe on new pages.

---

## Using Coursera Effectively

| Tip | Why |
|-----|-----|
| **Audit mode first** — skim videos at 1.25×; decide if projects are worth enrollment. | Keeps the weekly load light. |
| **Pair certificates with portfolio pieces** — ship React widgets or token pipelines alongside badges. | Demonstrates practical application, not just coursework. |
| **Leverage discussion forums** — treat them as async mock interviews; post TypeScript solutions and solicit critique. | Builds explanation skills. |

---

## FAQ

- **Swap Princeton for a JS-first DSA option?**  
  Yes. UCSD’s *Data Structures & Algorithms* (language-agnostic) pairs well with TypeScript.

- **Hourly load for Coursera modules?**  
  ~2–3 h video + 1–2 h quizzes/project per week — fits the 6–8 h budget.

- **What if I fall behind?**  
  Blocks are modular; I finish the current Coursera module before advancing. GFE problems can slide.

---

## Why This Works Long-Term

1. **Spaced repetition** — core patterns resurface across demos and applied projects.  
2. **Project anchoring** — algorithm concepts power tangible React/DS features.  
3. **Story building** — weekly retros feed directly into interview-ready STAR narratives.  
4. **Dual-platform synergy** — GFE sharpens speed; Coursera provides depth; this repo proves impact.

---

### End-state deliverables

- A polished **portfolio hub** linking 25–30 demos with Lighthouse/axe badges.  
- **Design System tokens + components** (packaged as `@eli/ds-core`) with governance docs.  
- Typed **algorithm pattern notes** (patterns + pitfalls) in a notes repo.  
- **5–6 founder-friendly STAR stories** tying speed, automation, and accessibility to impact.  
- A **front-end system-design playbook** (cache layers, data lifecycle, queues/backoff, i18n/RTL, ISR/CSR/SSR).
