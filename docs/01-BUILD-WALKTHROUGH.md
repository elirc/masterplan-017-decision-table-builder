# Building Decision Table Builder, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values.

The smallest useful result answers this user need: A club needs a transparent rule table for assigning fictional practice groups. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Write the decision table

List each rule in its declared order with level and minimum minutes. Mark overlaps by hand: a new learner at thirty minutes satisfies both guided and intro. The winning explanation must include why guided outranks intro, not just its matching condition.

**Pause and produce evidence:** New learner with 45 minutes. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Parse without inventing a number

The adapter checks whether the input is blank before Number conversion. The core accepts numeric minutes and rejects non-finite values. Those are complementary responsibilities: one interprets a form string, the other enforces the domain boundary for any caller.

**Pause and produce evidence:** Blank minutes. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Validate the table before choosing

Read the rule-validation loop and Set of IDs. Duplicated IDs would make explanations ambiguous even if labels differ. Test a bad rule placed after a valid winner to prove validation is not skipped by an early return when the first rule matches.

**Pause and produce evidence:** A malformed rule placed after the winning rule. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Explain a result

Read the returned winner and matchedIds independently. The winner is not a count of matches, and no match is represented by null rather than an invented default activity. The UI turns that explicit state into a next-step suggestion without silently changing the rules.

**Pause and produce evidence:** New learner with 9 minutes. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose first-match or explicit-priority semantics.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
