---
name: test-red-green-loop
description:
    Write tests with one subagent, then have a second subagent validate every new or updated test by
    introducing realistic regressions and proving the tests go red before restoring green. Use when
    adding coverage for a branch diff, proving tests are not false positives, doing mutation- style
    validation, or when the user asks to write tests and then verify them by breaking the
    implementation.
---

Run a two-phase test-hardening workflow:

1. One subagent writes or updates tests for the scoped code changes.
2. A second subagent validates those tests by introducing targeted regressions, confirming the tests
   fail for the right reason, and then restoring the code.

The goal is not just green tests. The goal is green tests that have been proven capable of going red
against realistic bugs.

## When to use this skill

Use this skill when:

- the user wants tests for a branch, diff, feature, bug fix, or refactor
- the user explicitly wants proof that tests provide real coverage
- the user asks for mutation-style or regression-style validation
- you need to alternate between writing tests and intentionally breaking the implementation

Do not use this skill when:

- the task is only to explain existing tests
- the task is only to fix a broken test unrelated to recent changes
- the user wants broad property-based or fuzz testing instead of targeted regression proof

## Required workflow

### Phase 1: Freeze scope

Before writing tests:

- identify the authoritative change scope, usually a diff against `main` or another user-specified
  base
- list the changed source files that require coverage
- map each changed behavior to a test target
- do not write tests until the scope is explicit

If the diff is empty, stop and report that there are no branch changes to validate.

### Phase 2: Launch subagent A for test authoring

Use one subagent dedicated to writing tests.

Subagent A must:

- focus on changed behavior only
- prefer extending existing suites before adding new ones when that keeps coverage local and clear
- add at least one normal-path assertion and one negative, edge, or permission-path assertion for
  each changed behavior when appropriate
- use deterministic fixtures, stable clocks, and existing helpers when available
- avoid production edits unless they are absolutely required to make the code testable

After subagent A finishes:

- run the targeted tests for the changed area
- fix test defects or legitimate implementation issues
- reach a clean green state for the targeted test set

### Phase 3: Launch subagent B for regression proving

Use a second subagent dedicated to validating the tests by regression.

Subagent B must:

- introduce one realistic regression at a time
- choose regressions that mirror plausible bugs, such as:
    - flipped conditionals
    - removed auth or permission guards
    - skipped cache invalidation
    - wrong endpoint or payload field
    - missing state rollback
    - deleted trimming or normalization
    - wrong record ID for update or delete
- run only the most relevant targeted test or small test slice for that regression
- confirm the intended test fails
- revert the regression immediately after failure is proven

Do not leave regression edits in the workspace.

### Phase 4: Tighten weak tests

If a regression does not fail a test:

- treat that as missing coverage
- return to subagent A
- strengthen the tests to assert the missing behavior directly
- rerun the targeted suite until green
- rerun subagent B against the improved test

Repeat until every new or updated test has been proven red against at least one realistic bug.

### Phase 5: Final verification

After all regressions are proven and reverted:

- rerun the targeted suite
- rerun the full suite or CI-equivalent command when practical
- summarize:
    - files changed
    - tests added or updated
    - regressions injected
    - which tests failed as proof
    - final green verification

## Operational rules

- keep the mutation surface narrow: one bug, one expected failing test, one revert
- prefer targeted test commands over full-suite runs during regression proof
- never rely on a mutation if it touched the wrong branch or wrong code path; correct the mutation
  target and rerun
- never revert unrelated user changes
- if the codebase uses watch-mode test scripts, prefer deterministic non-watch commands
- keep a traceability record when the task is large enough that the user will want auditability

## Suggested command pattern

Use targeted commands during the loop, then widen out:

- targeted: run the specific new or changed test file or test name
- final: run the broader affected suite
- final verification: run the full test suite or CI-equivalent command

## Suggested subagent prompts

### Subagent A prompt shape

Use a prompt like:

"Write tests for the branch diff against BASE. Focus only on changed behavior. Reuse existing test
patterns and helpers. Reach a green targeted suite without leaving speculative production changes."

### Subagent B prompt shape

Use a prompt like:

"Validate the newly added or updated tests by introducing one realistic regression per behavior,
running the smallest relevant test slice, confirming the expected failure, and reverting the code
immediately after proof. Report any regression that stays green as a test gap."

## Completion criteria

This skill is complete only when all of the following are true:

- the changed behavior has automated coverage
- each new or updated test has been proven capable of failing under a realistic regression
- all regression edits have been reverted
- the final test run is green
