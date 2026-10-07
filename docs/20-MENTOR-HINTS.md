# M017: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain precedence through this project

The rule selecting a winner when several conditions match.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain no match through this project

A valid input for which no rule applies.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain rule identity through this project

A stable label for one condition and explanation.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain allowlisted vocabulary through this project

A small set of supported fields and values.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: New learner with 45 minutes

guided wins; guided and intro both match

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: New learner with 9 minutes

No match, not a validation error

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Blank minutes

Validation error; blank is not interpreted as zero

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What would need to change if priority were a numeric field instead of list order?

Rules are an ordered list, so first-match priority can be reviewed without reading a branching maze. Returning all matched IDs exposes overlap instead of hiding it. Reversing the list intentionally changes the winner for overlapping inputs; that is the contract, not an unstable accident.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Why is Number("") a dangerous boundary shortcut here?

Nine minutes is a valid number that simply qualifies for no activity. Missing minutes are not a valid participant record. Distinguishing these states produces helpful feedback and keeps malformed data from quietly looking like an ordinary business decision.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Which new requirement would justify extending the rule vocabulary?

Rules contain level, min and label fields rather than executable strings. No eval or arbitrary predicate language is needed for four teaching cases. All rules are validated, including those that would not match the current participant, so a hidden malformed rule cannot survive merely because one sample bypasses it.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** How can a user tell whether an unexpected result came from data or rule order?

An ordered rule table is executable product policy. Two rules can both be true without the program being broken; the contract must say which wins. Validation asks whether the participant and table are meaningful inputs, while matching asks what those valid inputs imply. Keeping these questions separate prevents missing data from becoming an ordinary no-match result.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add a match-count summary

**First hint:** The desired improvement is “Show how many rules overlap for an input.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive count from matchedIds; display zero separately from invalid input; retain first-match behavior. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Count two can coexist with one winner. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose overlap warning wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add participant labels

**First hint:** The desired improvement is “Compare several named fictional inputs.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep participant ID separate from display name; evaluate each record; render the result beside its input. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Duplicate participant names do not merge decisions. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a small fixture list. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a boundary explanation

**First hint:** The desired improvement is “Show the threshold responsible for a winning match.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Return or read the winner's minimum; compare it with available minutes; render an exact explanation. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: At the threshold the explanation correctly includes equality. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how to describe remaining time. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add an empty-table policy

**First hint:** The desired improvement is “Make no configured rules explicit.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Evaluate a valid participant with an empty array; decide whether that is configuration error or ordinary no match; document the branch. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The chosen behavior differs clearly from malformed participant input. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the empty-table policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a rule-label validator

**First hint:** The desired improvement is “Prevent unreadable winning explanations.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Reject whitespace-only labels; normalize or preserve display text deliberately; validate every row before choosing. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A malformed later rule is reported even when the first rule would win. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose trimming policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a first-match trace

**First hint:** The desired improvement is “Show each rule's match result in source order.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive structured trace rows; mark the winner separately; avoid stopping diagnostic evaluation at the first match. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Later overlapping matches remain visible without changing the winner. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose trace columns. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a rule-table reset

**First hint:** The desired improvement is “Restore a modified practice table.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep the baseline fixture separate; create a fresh working array; recompute results after reset. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Reset does not mutate the baseline or retain stale winners. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether participant input resets too. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Compare most-specific matching

**First hint:** The desired improvement is “Explore a different precedence policy on a branch.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define specificity numerically for this vocabulary; write an overlap example; implement only after expected winners are fixed. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Tests distinguish the branch policy from first-match order. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a tie policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a policy-change review note

**First hint:** The desired improvement is “Teach reviewers how a reordered table changes behavior.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare one old and new rule order; find the smallest affected participant; record unchanged neighboring examples. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The note names a user-visible decision difference rather than only a moved row. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the policy change to explain. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
