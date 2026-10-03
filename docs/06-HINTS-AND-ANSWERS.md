# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Show the first failed condition

**Hint 1 — ownership:** Begin from `decide`. Add an explanation for why each nonmatching rule failed, using structured result fields.

**Hint 2 — reasoning:** Revisit the decision “Make precedence visible in data”. Ask yourself: What would need to change if priority were a numeric field instead of list order?

**Answer direction:** A defensible solution demonstrates this observable result: A level mismatch and a minutes mismatch are distinguishable without interpreting prose. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a fifth bounded rule

**Hint 1 — ownership:** Begin from `decide`. Choose a new documented threshold within the existing vocabulary and place it deliberately.

**Hint 2 — reasoning:** Revisit the decision “Separate no match from invalid input”. Ask yourself: Why is Number("") a dangerous boundary shortcut here?

**Answer direction:** A defensible solution demonstrates this observable result: Tests cover overlap at the new boundary and explain its priority. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Compare two participants

**Hint 1 — ownership:** Begin from `decide`. Evaluate a small fixture list independently and render one result per participant ID.

**Hint 2 — reasoning:** Revisit the decision “Use a small rule vocabulary”. Ask yourself: Which new requirement would justify extending the rule vocabulary?

**Answer direction:** A defensible solution demonstrates this observable result: One invalid participant cannot be confused with another participant's no-match result. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Add table-order controls

**Hint 1 — ownership:** Begin from `decide`. Let the learner move a rule up or down in a practice copy and rerun the same fixture.

**Hint 2 — reasoning:** Revisit the decision “Make precedence visible in data”. Ask yourself: What would need to change if priority were a numeric field instead of list order?

**Answer direction:** A defensible solution demonstrates this observable result: Only precedence changes; rule IDs and conditions remain stable. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Reject duplicate IDs clearly

**Hint 1 — ownership:** Begin from `decide`. Improve the validation error to identify the duplicated ID without exposing an unrelated participant value.

**Hint 2 — reasoning:** Revisit the decision “Separate no match from invalid input”. Ask yourself: Why is Number("") a dangerous boundary shortcut here?

**Answer direction:** A defensible solution demonstrates this observable result: A table with two guided IDs produces a useful diagnostic before choosing any winner. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Build a boundary matrix

**Hint 1 — ownership:** Begin from `decide`. Create examples immediately below, at and above every unique minute threshold.

**Hint 2 — reasoning:** Revisit the decision “Use a small rule vocabulary”. Ask yourself: Which new requirement would justify extending the rule vocabulary?

**Answer direction:** A defensible solution demonstrates this observable result: Expected winners are authored from the rule table, not calculated by calling decide in the test setup. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Read nonblank minutes as a number → validate participant input → validate rule IDs and fields → filter matches in table order → choose first or null → render winner plus all matched IDs.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
