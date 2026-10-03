# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Show the first failed condition

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Add an explanation for why each nonmatching rule failed, using structured result fields.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: A level mismatch and a minutes mismatch are distinguishable without interpreting prose.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** A level mismatch and a minutes mismatch are distinguishable without interpreting prose.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Add a fifth bounded rule

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Choose a new documented threshold within the existing vocabulary and place it deliberately.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Tests cover overlap at the new boundary and explain its priority.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Tests cover overlap at the new boundary and explain its priority.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Compare two participants

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Evaluate a small fixture list independently and render one result per participant ID.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: One invalid participant cannot be confused with another participant's no-match result.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** One invalid participant cannot be confused with another participant's no-match result.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Add table-order controls

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Let the learner move a rule up or down in a practice copy and rerun the same fixture.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Only precedence changes; rule IDs and conditions remain stable.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Only precedence changes; rule IDs and conditions remain stable.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Reject duplicate IDs clearly

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Improve the validation error to identify the duplicated ID without exposing an unrelated participant value.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: A table with two guided IDs produces a useful diagnostic before choosing any winner.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** A table with two guided IDs produces a useful diagnostic before choosing any winner.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Build a boundary matrix

**User need:** As a learner or user of Decision Table Builder, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Create examples immediately below, at and above every unique minute threshold.

**Implementation plan:**

1. Trace `decide` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Expected winners are authored from the rule table, not calculated by calling decide in the test setup.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Expected winners are authored from the rule table, not calculated by calling decide in the test setup.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
