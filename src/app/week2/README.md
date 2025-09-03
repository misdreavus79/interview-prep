# Week 2 — Sliding Window + Multi-Step Form (RHF + Zod)

**Outcome for the week**

- **Algo (off-repo):** Practice **Sliding Window** with 6–8 targeted problems (1 timed).
- **Demo (in repo `/week/2`):** A **multi-step form** using **React Hook Form + Zod** with save-and-resume, client + server validation, accessible errors, and a clean Playwright/axe/Lighthouse check.
- **GFE FE concept:** Forms & validation UX — labels, errors, keyboard flow, and resilient form state.

---

## What to do on GreatFrontEnd / LeetCode (off-repo, ~2–3h)

Solve **6–8 problems** that exercise the **Sliding Window** pattern. Suggested mix:

**Core six**
1. **Maximum Sum Subarray of Size _k_** — fixed window sum with rolling update  
2. **Longest Substring Without Repeating Characters** — grow/shrink window with a set/map  
3. **Permutation in String** (check inclusion) — frequency maps + window length guard  
4. **Find All Anagrams in a String** — frequency diff; zero-count bookkeeping  
5. **Longest Repeating Character Replacement** — window with best-count tracking  
6. **Minimum Window Substring** — classic shrink-to-valid, expand-to-cover

**If time (pick 1–2)**
- **Binary Subarrays With Sum** (treat as window on 0/1 + prefix freq)  
- **Subarray Product Less Than K** (multiplicative window)

> After each: note one **pattern label** (e.g., “grow/shrink with counts”) and one **pitfall** (e.g., shrinking condition). Do **one** core problem in **timed mode (30 min)**.

---

## What to study on Coursera (target ~3h)

- **Algorithmic Toolbox — Week 2:** Divide-and-Conquer & Binary Search (complements reasoning about shrinking/growing search spaces).  
- **Web Accessibility (UMich) — Forms & Controls:** Labels, descriptions, required/invalid states, error messaging, `autocomplete` tokens.  
- **(Optional, if time) React with TypeScript / Forms module:** Controlled vs uncontrolled, schema validation patterns, RHF controller.

> Tip: Write **one actionable takeaway** per module you’ll apply in the demo (e.g., “use `aria-describedby` to tie errors to inputs”).

---

## What to build in your Next.js repo (4–5h)

**Route:** `/week/2`  •  **Tech:** React Hook Form (**RHF**), **Zod**, **Server Actions** (mocked), **localStorage** save-and-resume.

### 0) Scope & steps
- **Steps (3):** Account → Shipping → Review/Confirm  
- **Validation:** Zod schemas per step; client-side on blur/submit; server-side revalidation on final submit  
- **State:** RHF per step + **save-and-resume** (auto-save to `localStorage` every change)  
- **UX:** Stepper/progress, Previous/Next buttons, disable Next until step is valid  
- **Persistence mock:** On final submit, call a **server action** that “saves” and returns a confirmation id

### 1) Accessible form structure (40–60 min)
- Each input has an explicit `<label for>` or `aria-labelledby`  
- Help text & errors are referenced via `aria-describedby`  
- Mark required fields with `required` and convey errors in text (not color alone)

**Acceptance**
- [ ] Screen reader announces labels and errors correctly  
- [ ] Tabbing order is logical; **Enter** submits the current step; **Shift+Tab** works

### 2) Validation (45–60 min)
- Zod schemas: `AccountSchema`, `ShippingSchema`, `ReviewSchema` (can be minimal for review)  
- RHF + Zod resolver per step; show inline errors on blur/submit  
- Final submit calls a **server action** that re-checks the full payload; on error, display a **summary** at the top with in-page links to fields

**Acceptance**
- [ ] Invalid fields block Next/Submit with clear messages  
- [ ] Server error summary links focus the first invalid field

### 3) Save-and-resume (25–35 min)
- Auto-save step data to `localStorage` keyed by step and version  
- “Resume where you left off?” banner if stored data is found; **Restore** or **Discard**

**Acceptance**
- [ ] Refresh mid-flow → “Resume?” prompt restores state and step

### 4) Polish: progress & review (20–30 min)
- Stepper shows current step and completion  
- Review page lists data with an **Edit** link that returns to the correct step with values intact

**Acceptance**
- [ ] Edit from Review returns to the right step with values populated

### 5) Tests & checks (30–40 min)
- **RTL:** field validation, error summary focus, save-and-resume restore  
- **Playwright:** happy path across steps + final submit  
- **axe:** no violations  
- **Lighthouse:** keep **LCP < 2.5s** (avoid heavy client bundles on this page)

---

## What GFE Front-End concept to practice (60–90 min)

Pick **2–3** small, form-centric GFE challenges:

- **Accessible text input with inline error** — label, help text, error region tied via `aria-describedby`  
- **Password strength meter** — live status message (polite), not just color  
- **Custom select (combobox-lite)** — keyboardable, value announcement, roving focus within list  
- **Debounced availability check** — email/username input with 300ms debounce + loading status message  
- **Form progress indicator** — visually and semantically conveys current step (e.g., `aria-current="step"`)

> Keep these **off-repo** as practice; your repo page focuses on the full multi-step flow.

---

## Suggested timeline

### Evening (2–3h)
1. **GFE/LeetCode (90–105 min):** 4–5 Sliding-Window problems; 30-min timed attempt on one  
2. **Coursera (40–50 min):** A11y Forms & Controls + one Toolbox W2 segment  
3. **Repo (10–20 min):** Scaffold `/week/2` and Zod schemas

### Weekend (4–5h)
1. **Repo build (2.5–3h):** Accessible structure → validation → save-and-resume → review/edit  
2. **Tests & checks (30–40 min):** RTL + Playwright + axe + Lighthouse  
3. **Coursera (40–50 min):** Finish Toolbox W2 or React forms module  
4. **Wrap (10 min):** README with “what it shows”, “trade-offs”, “next steps”

---

## Definition of Done (paste into your README)

- [ ] **Algo:** 6–8 Sliding-Window problems solved off-repo + 1 timed  
- [ ] **Coursera:** ~3h across Toolbox W2 + A11y Forms module (and optional React forms)  
- [ ] **Demo:** `/week/2` multi-step form with RHF + Zod; save-and-resume; review/edit  
- [ ] **A11y:** Proper labels, error text, `aria-describedby`, summary links focus fields  
- [ ] **Perf:** Local Lighthouse **LCP < 2.5s** on the form page  
- [ ] **Tests:** RTL validations & restore; Playwright happy path; axe clean
