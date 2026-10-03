# Concepts and worked traces

[Walkthrough](01-BUILD-WALKTHROUGH.md) · [Debugging lab](04-DEBUGGING-LAB.md)

## The exact contract

Four explicit data rules match a known experience level and a minimum number of available minutes. Every rule is validated before evaluation. All matching IDs are returned for explanation; the first match in table order wins. A valid input may produce no match. Missing, negative or non-finite minutes and unknown experience levels are errors rather than implicit default values.

This paragraph is the reference behavior. If you extend the product, update the contract and examples together. An implementation can be internally consistent while solving the wrong problem, so start with the user's meaning before discussing syntax.

## A complete trace

Read nonblank minutes as a number → validate participant input → validate rule IDs and fields → filter matches in table order → choose first or null → render winner plus all matched IDs.

Copy that trace onto paper. At each arrow, name the input, the owner of the rule or state, and the output. For browser layout, the owner is a CSS rule acting on a particular box. For JavaScript, it may be a local variable, a returned object or a callback. For Git, it is a specific snapshot comparison. These are different mechanisms but the same useful habit: make the boundary visible.

## Examples you can verify independently

| Input or situation | Expected observation |
|---|---|
| New learner with 45 minutes | guided wins; guided and intro both match |
| New learner with 9 minutes | No match, not a validation error |
| Blank minutes | Validation error; blank is not interpreted as zero |

Do not derive the expected result by copying the implementation into your test. Use the user rule, a hand calculation, a source-order trace or a deliberately simple fixture. Otherwise two copies of the same mistake can agree while the product is wrong.

## Contrast three kinds of statement

**Requirement:** what the user should be able to rely on. **Implementation:** how the current files attempt to provide it. **Evidence:** the input and observation that support a conclusion about that attempt. In your journal, write one example of each for this project. A source comment is useful explanation, but by itself it is not runtime evidence.

## Retrieval practice

1. Explain `decide` to a learner who knows the preceding project but has not opened this one.
2. Reproduce the trace with one changed input or piece of content. Predict which intermediate fact changes first.
3. Name a result that would look plausible but violate the contract.
4. Identify the smallest counterexample that distinguishes correct from incorrect behavior.
5. State one limitation of the reference without treating that limitation as a hidden completed feature.

Write your answers before opening the hints. Then compare explanations, not just vocabulary. If your answer says “it works because JavaScript/CSS/Git handles it,” identify the particular rule that actually explains the result.

## Transfer beyond this example

How can a user tell whether an unexpected result came from data or rule order?

Connect your answer to a future application: a form, a list, a report or a reusable component. The useful transfer is the reasoning habit, not the fictional domain. For example, deciding equality at a boundary is useful in both dates and temperature ranges; distinguishing identity from a label applies to more than score sheets.

## Reference reading

Use [Official platform reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to confirm terminology and language/platform behavior. The workshop's product rules and fixtures are original teaching choices, not quotations from that reference. Return to the actual source after reading the documentation and explain which line or rule the terminology helps you understand.
