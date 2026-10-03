# M017: deeper debugging casebook

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The incidents below are hypothetical teaching scenarios based on realistic mistakes in this codebase. They are not claims that the shipped reference is broken. Reproduce a proposed defect only on a disposable practice branch. Keep an observed failure separate from a likely explanation; the point of an experiment is to make those two agree or disagree.

## Incident 1: The last matching rule wins

**Fictional report:** A learner says, “The last matching rule wins.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Replace first-match selection with repeated overwrite in a loop.

**Starting experiment:** Evaluate a new learner with 45 minutes.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `decide` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js: table order defines precedence.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “The last matching rule wins” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 2: An empty field behaves like a real quantity

**Fictional report:** A learner says, “An empty field behaves like a real quantity.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Remove the blank check before Number conversion.

**Starting experiment:** Clear minutes and evaluate.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `decide` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/app.js: distinguish absent input before numeric parsing.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “An empty field behaves like a real quantity” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 3: A duplicate rule identity goes unnoticed

**Fictional report:** A learner says, “A duplicate rule identity goes unnoticed.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Remove the rule-ID Set check.

**Starting experiment:** Append a second rule with an existing ID but a different label.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `decide` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. For a static page, translate this distinction into the correct content with the wrong CSS rule versus incorrect markup or a missing target. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js: validate the whole table before evaluating it.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “A duplicate rule identity goes unnoticed” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## When a proposed repair fails

Stop adding edits. Compare the new symptom with the old one and inspect the diff. Decide whether the experiment rejected your hypothesis or whether the repair failed to change the intended boundary. Revert only your own experimental change if needed, preserve other work, and try the next discriminating input.

## A useful help request

```text
Project: Decision Table Builder; suspected owner: public/core.js / decide.
Expected / observed: [exact difference].
Smallest reproduction: [inputs, actions and environment].
Hypothesis A predicts: [observation].
Hypothesis B predicts: [different observation].
Experiment already run and real output: [fill in].
Suggest one next experiment, not a rewrite. Separate facts from hypotheses.
```
