# Week 1 — Arrays & Two Pointers + RSC Streaming List

**Outcome for the week**

- **Algo (off-repo):** I practice **Two Pointers** with 6–8 targeted problems (including 1 timed attempt).
- **Demo (in repo `/week/1`):** I ship a **Server Components streaming** page with skeletons, an **optimistic “favorite”** toggle via a **server action**, proper **ARIA live** status, and quick **Lighthouse** + **axe** checks.
- **Coursera (~3h):** I complete core modules that support this week’s work.
- **SD drill (20–30 min):** I sketch the cache layers and invalidation for an “items feed.”

---

## What to do on GreatFrontEnd / LeetCode (off-repo, ~2–3h)

I solve **6–8 problems** that exercise the **Two Pointers** pattern.

**Core six**
1. **Two Sum (sorted input)** — two pointers outward/inward  
2. **Valid Palindrome** — skip non-alphanumerics; two pointers inward  
3. **Remove Duplicates from Sorted Array** — read/write pointer  
4. **Move Zeroes** — stable compaction via read/write  
5. **Best Time to Buy/Sell Stock I** — running min + max profit (single pass)  
6. **Merge Two Sorted Arrays** — three-pointer from the end

**If time (pick 1–2)**
- **Reverse Vowels of a String**  
- **Is Subsequence**

> After each problem (1–2 min), I note one **pattern label** (e.g., “read/write pointer”) and one **pitfall** (off-by-one, empty input). I do **one** core problem in **timed mode (30 min)**.

---

## What to study on Coursera (target ~3h)

**Primary spine this week**
- **Princeton Algorithms, Part I — Week 1:** Union-Find & introductory analysis (for the algorithms foundation).

**Supplemental, focused mini-modules (pick 1–2 segments that serve the demo)**
- **UMich Web Accessibility — Announcements/Live Regions:** ARIA `aria-live` usage and labeling basics.  
- **Google Web Performance — Metrics:** LCP/CLS fundamentals for skeletons and image sizing.

> I watch at 1.25× and jot **one actionable takeaway** per module that I’ll apply in the demo.

---

## What to build in the Next.js repo (4–5h)

**Route:** `/week/1` • **Tech:** Server Components with **streaming**, **server actions**, **MSW** mocks, **next/image**.

### 0) Scope & setup (10–15 min)
- Create `app/week/1/` with `page.tsx`, `actions.ts`, `ItemList.tsx`, `Skeletons.tsx`.  
- MSW handlers for `GET /api/items` and `POST /api/items/:id/favorite`.

### 1) Streaming list with skeletons (60–75 min)
- Server-fetch items (mocked). Add a **slow** sub-section (e.g., “Recommended”) with an intentional delay so the page **streams**.  
- Wrap the slow area in suspense with `Skeletons` as fallback.  
- Use `next/image` with explicit `width`/`height` to prevent CLS.

**Acceptance**
- [ ] On first load, skeletons appear before the slow content paints.  
- [ ] Lighthouse shows **CLS ≈ 0.00** locally.

### 2) Optimistic “favorite” toggle via server action (45–60 min)
- In `actions.ts`, export `toggleFavorite(itemId: string)` as a **server action**; flip the `favorite` flag in the mock/store.  
- In a Client wrapper, apply **optimistic UI**: instantly flip ★, call the action, **rollback on error**, and show a toast.

**Acceptance**
- [ ] UI toggles immediately; a failure path restores prior state.

### 3) Accessibility & announcements (20–30 min)
- Button text swaps between **“Add to favorites”** / **“Remove from favorites.”**  
- Add an `aria-live="polite"` region announcing “Added to favorites” / “Removed from favorites.”  
- Ensure focus remains on the button after click.

**Acceptance**
- [ ] Axe scan shows **no violations** for the page.  
- [ ] Screen reader announces status changes.

### 4) Smoke tests + perf check (30–40 min)
- **Playwright:** visit `/week/1`, see skeletons → list; toggle ★; reload and confirm state via mock/refetch.  
- **Lighthouse:** attach a report (JSON artifact in CI) with **LCP < 2.5s**.

---

## GFE Front-End concept to practice (60–90 min, off-repo)

I pick **2–3** small, form/interaction-centric GFE challenges that support this week’s demo:

- **Accessible status message** — live updates via `aria-live="polite"` (not color alone).  
- **Toggle button with stateful label** — “Add to favorites” ↔ “Remove from favorites”, correct `aria-pressed` if applicable.  
- **Skeleton loader** — layout-stable placeholder that avoids CLS (fixed dimensions).

---

## System-Design drill (20–30 min)

**Prompt:** Model the “items feed” cache.  
- Draw the layers (browser memory → SW cache → CDN → origin).  
- Note invalidation triggers (favorite change, new items), and which layers revalidate vs purge.  
- Write one policy decision (e.g., “tag-based revalidation for `/items`”).

I snap a photo/screenshot of the sketch and save it under `/docs/sd/week-01-cache.png`.

---

## Suggested timeline

### Evening (2–3h)
1. **GFE/LeetCode (90–105 min):** 4–5 Two-Pointer problems; 30-min timed attempt on one.  
2. **Coursera (40–50 min):** Live regions + LCP/CLS mini-segments.  
3. **Repo (10–20 min):** Scaffold `/week/1` and MSW handlers.

### Weekend (4–5h)
1. **Coursera (60–70 min):** Princeton Algo I — Week 1 (notes: 3 takeaways).  
2. **Repo build (2.5–3h):** Streaming list → optimistic favorite → `aria-live`.  
3. **Tests & metrics (30–40 min):** Playwright, axe, Lighthouse.  
4. **SD drill (20–30 min):** cache sketch + one policy decision.  
5. **Wrap (10 min):** Short README section: *what it shows*, *trade-offs*, *next steps*.

---

## Definition of Done (paste into the page/README)

- [ ] **Algo:** 6–8 Two-Pointer problems solved off-repo + 1 timed.  
- [ ] **Coursera:** ~3h across Princeton W1 (+ any a11y/perf mini-segments).  
- [ ] **Demo:** `/week/1` streams with skeletons; optimistic ★ with rollback.  
- [ ] **A11y:** Buttons labeled; announcements via `aria-live="polite"`; axe clean.  
- [ ] **Perf:** Local Lighthouse **LCP < 2.5s**; **CLS ≈ 0.00**.  
- [ ] **Tests:** Playwright happy path passes.  
- [ ] **SD:** Cache layers sketch saved with 1 policy decision.  
- [ ] **Retro:** 2 bullets (Keep / Change) + 1 applied Coursera takeaway.
- [ ] Produce a **one-pager cheat sheet** mapping `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)` to **front-end examples** (e.g., DOM measurements, layout thrash, sort vs stable sort).