# Build journal: Decision Table Builder

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A club needs a transparent rule table for assigning fictional practice groups.

The main temptation was to make the project larger than its learning target. The useful boundary is **data-driven rules and precedence**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Make precedence visible in data

Rules are an ordered list, so first-match priority can be reviewed without reading a branching maze. Returning all matched IDs exposes overlap instead of hiding it. Reversing the list intentionally changes the winner for overlapping inputs; that is the contract, not an unstable accident.

**What a learner should challenge:** What would need to change if priority were a numeric field instead of list order?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Separate no match from invalid input

Nine minutes is a valid number that simply qualifies for no activity. Missing minutes are not a valid participant record. Distinguishing these states produces helpful feedback and keeps malformed data from quietly looking like an ordinary business decision.

**What a learner should challenge:** Why is Number("") a dangerous boundary shortcut here?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Use a small rule vocabulary

Rules contain level, min and label fields rather than executable strings. No eval or arbitrary predicate language is needed for four teaching cases. All rules are validated, including those that would not match the current participant, so a hidden malformed rule cannot survive merely because one sample bypasses it.

**What a learner should challenge:** Which new requirement would justify extending the rule vocabulary?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `decide`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
