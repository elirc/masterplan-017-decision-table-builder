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

<!-- expanded-story-clinics -->

## Additional planning checkpoints for stories 01–06

[Nine more stories, 07–15](11-NINE-MORE-STORIES.md) · [Expanded workshop map](WORKBOOK-INDEX.md)

Keep the original plans above. The following checkpoints add implementation and review depth without completing the exercise for you.

### Story 01 planning clinic: Show the first failed condition

**Before editing:** restate the boundary in your own words: Add an explanation for why each nonmatching rule failed, using structured result fields. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “A level mismatch and a minutes mismatch are distinguishable without interpreting prose.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.

### Story 02 planning clinic: Add a fifth bounded rule

**Before editing:** restate the boundary in your own words: Choose a new documented threshold within the existing vocabulary and place it deliberately. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “Tests cover overlap at the new boundary and explain its priority.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.

### Story 03 planning clinic: Compare two participants

**Before editing:** restate the boundary in your own words: Evaluate a small fixture list independently and render one result per participant ID. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “One invalid participant cannot be confused with another participant's no-match result.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.

### Story 04 planning clinic: Add table-order controls

**Before editing:** restate the boundary in your own words: Let the learner move a rule up or down in a practice copy and rerun the same fixture. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “Only precedence changes; rule IDs and conditions remain stable.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.

### Story 05 planning clinic: Reject duplicate IDs clearly

**Before editing:** restate the boundary in your own words: Improve the validation error to identify the duplicated ID without exposing an unrelated participant value. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “A table with two guided IDs produces a useful diagnostic before choosing any winner.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.

### Story 06 planning clinic: Build a boundary matrix

**Before editing:** restate the boundary in your own words: Create examples immediately below, at and above every unique minute threshold. Identify the part of `public/core.js` or `public/app.js` that owns it. If your proposed design changes another owner, explain the dependency instead of opening every file for a broad rewrite.

**Acceptance matrix:** write ordinary, boundary and repeat/recovery rows that establish “Expected winners are authored from the rule table, not calculated by calling decide in the test setup.” Include exact starting data or content and the expected retained information. Calculate expected values or inspect meaningful source order independently of the proposed implementation.

**First implementation slice:** make only enough of the change to demonstrate one acceptance row. Inspect the diff and predict the next row before running it. If your first slice is mostly setup or abstraction with no observable result, consider a smaller direct route.

**Review challenge:** sketch a plausible wrong solution that would pass a casual demonstration. Choose a counterexample that exposes its specific weakness. Ask an assistant to critique that example rather than immediately asking it to finish the entire feature.

**Evidence and explanation:** use npm test, plus the relevant real interaction or CLI observation. Record the actual observation and the limit of the check. Finish by naming a design decision you made yourself and explaining why the neighboring original behavior still holds.
