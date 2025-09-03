# Week 1 — Arrays & Two Pointers + RSC Streaming List

**Outcome for the week**

- **Algo (off-repo):** Practice **Two Pointers** with 6–8 targeted problems (1 timed).
- **Demo (in repo `/week/1`):** A **Server Components streaming** page with skeletons, an **optimistic “favorite”** toggle via a **server action**, proper **ARIA live** status, and quick **Lighthouse** + **axe** checks.

---

## What to do on GreatFrontEnd / LeetCode (off-repo, ~2–3h)

Solve **6–8 problems** that exercise Two Pointers. Suggested mix:

**Core six**
1. Two Sum (sorted input) — two pointers outward/inward
2. Valid Palindrome — skip non-alphanumerics; two pointers inward
3. Remove Duplicates from Sorted Array — read/write pointer
4. Move Zeroes — stable compaction via read/write
5. Best Time to Buy/Sell Stock I — running min + max profit (single pass)
6. Merge Two Sorted Arrays — three-pointer from the end

**If time (pick 1–2)**
- Reverse Vowels of a String
- Is Subsequence

> After each problem (1–2 min), note one **pattern label** (e.g., “read/write pointer”) and one **pitfall** (off-by-one, empty input). Do **one** core problem in **timed mode (30 min)**.

---

## What to watch on Coursera (target ~3h)

- **Algorithmic Toolbox — Week 1:** Big-O & growth rates (for the algo side).
- **Web Accessibility (UMich) — Intro + announcements:** ARIA live regions, labeling, keyboard basics (for status updates/semantics).
- **Web Performance Fundamentals (Google) — Metrics:** LCP/CLS basics (for skeleton + image setup).

> Tip: Watch at 1.25× and jot **one actionable takeaway** per module you’ll apply in the demo.

---

## What to build in your Next.js repo (4–5h)

**Route:** `/week/1`  •  **Tech:** Server Components with **streaming**, **server actions**, **MSW** mocks, **next/image**.

### 0) Setup (10–15 min)
- Create folder: `app/week/1/`.
- Add files: `page.tsx`, `actions.ts`, `ItemList.tsx`, `Skeletons.tsx`.
- MSW handlers: `GET /api/items`, `POST /api/items/:id/favorite`.

### 1) Streaming list with skeletons (60–75 min)
- Server-fetch items (mocked). Split a **slow** sub-section (e.g., “Recommended”) that awaits a delayed call so the page **streams**.
- Wrap slow parts with `<Suspense fallback={<Skeletons/>}>`.
- Use `next/image` with explicit `width`/`height` to prevent CLS.

**Acceptance**
- [ ] On first load, skeletons appear before the slow content paints.
- [ ] Lighthouse shows **CLS ≈ 0.00** locally.

### 2) Optimistic “favorite” toggle via server action (45–60 min)
- In `actions.ts`, export `toggleFavorite(itemId: string)` as a **server action**; flip the `favorite` flag in your mock/store.
- In a Client wrapper, apply **optimistic UI**: instantly flip ★, call the action, **rollback on error** and show a toast.

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
- **Playwright:** visit `/week/1`, see skeletons → list; toggle ★; reload and confirm state from mock/refetch.
- **Lighthouse:** record a report (attach JSON to CI artifacts) with **LCP < 2.5s**.

---

## Suggested timeline

### Evening (2–3h)
1. **GFE/LeetCode (90–105 min):** 4–5 Two-Pointer problems; 30‑min timed attempt on one.
2. **Coursera (40–50 min):** A11y announcements module + LCP/CLS basics.
3. **Repo (10–20 min):** Create `/week/1` files and scaffold MSW handlers.

### Weekend (4–5h)
1. **Coursera (60–70 min):** Algorithmic Toolbox W1 at 1.25×; write 3 takeaways.
2. **Repo build (2.5–3h):** Streaming list → optimistic favorite → a11y live region.
3. **Tests & metrics (30–40 min):** Playwright smoke, axe, Lighthouse.
4. **Wrap (10 min):** Short README: *what it shows*, *trade-offs*, *next steps*.

---

## Definition of Done (paste into your README)

- [ ] **Algo:** 6–8 Two-Pointer problems solved off-repo + 1 timed.
- [ ] **Coursera:** ~3h across Toolbox W1, A11y announcements, and LCP/CLS metrics.
- [ ] **Demo:** `/week/1` streams with skeletons; optimistic ★ with rollback.
- [ ] **A11y:** Buttons labeled; announcements via `aria-live="polite"`; axe clean.
- [ ] **Perf:** Local Lighthouse **LCP < 2.5s**; **CLS ≈ 0.00**.
- [ ] **Tests:** Playwright happy path passes.
- [ ] Produce a **one-pager cheat sheet** mapping `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)` to **front-end examples** (e.g., DOM measurements, layout thrash, sort vs stable sort).