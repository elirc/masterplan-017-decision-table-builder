# M017: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

An ordered rule table is executable product policy. Two rules can both be true without the program being broken; the contract must say which wins. Validation asks whether the participant and table are meaningful inputs, while matching asks what those valid inputs imply. Keeping these questions separate prevents missing data from becoming an ordinary no-match result.

## Start from one visible behavior

Read this contract slowly: Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Precedence

The rule selecting a winner when several conditions match.

**Small experiment:** Reverse two overlapping rules and predict the new winner.

Find the part of `decide` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **precedence** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Reverse two overlapping rules and predict the new winner.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: No match

A valid input for which no rule applies.

**Small experiment:** Contrast nine minutes with missing minutes.

Find the part of `decide` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **no match** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Contrast nine minutes with missing minutes.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Rule identity

A stable label for one condition and explanation.

**Small experiment:** Explain why duplicate IDs weaken diagnostics.

Find the part of `decide` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **rule identity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why duplicate IDs weaken diagnostics.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Allowlisted vocabulary

A small set of supported fields and values.

**Small experiment:** Explain why this table needs no eval-based expression language.

Find the part of `decide` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **allowlisted vocabulary** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why this table needs no eval-based expression language.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export const rules = [
  { id: 'guided', level: 'new', min: 30, label: 'Guided build' },
  { id: 'intro', level: 'new', min: 10, label: 'Tiny introduction' },
  { id: 'review', level: 'practiced', min: 45, label: 'Peer review rehearsal' },
  { id: 'recall', level: 'practiced', min: 10, label: 'Recall exercise' },
];
export function decide(input, table = rules) {
  if (!Number.isFinite(input.minutes) || input.minutes < 0 || !['new', 'practiced'].includes(input.level)) throw new TypeError('Provide non-negative minutes and a known experience level.');
  const ids = new Set();
  for (const rule of table) {
    if (!rule.id || ids.has(rule.id) || !['new', 'practiced'].includes(rule.level) || !Number.isFinite(rule.min) || rule.min < 0 || typeof rule.label !== 'string') throw new TypeError('Invalid rule table.');
    ids.add(rule.id);
  }
  const matches = table.filter(rule => input.level === rule.level && input.minutes >= rule.min);
  return { winner: matches[0] ?? null, matchedIds: matches.map(rule => rule.id) };
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `decide`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
