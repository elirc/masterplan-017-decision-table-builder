import test from 'node:test';
import assert from 'node:assert/strict';

import { decide, rules } from '../public/core.js';
test('first match explains overlapping rules', () => {
  const result = decide({ minutes: 45, level: 'new' });
  assert.equal(result.winner.id, 'guided'); assert.deepEqual(result.matchedIds, ['guided', 'intro']);
});
test('threshold and no match are explicit', () => {
  assert.equal(decide({ minutes: 10, level: 'new' }).winner.id, 'intro');
  assert.equal(decide({ minutes: 9, level: 'new' }).winner, null);
  assert.equal(decide({ minutes: 45, level: 'practiced' }).winner.id, 'review');
});
test('missing and malformed inputs do not become valid zeros', () => {
  for (const input of [{}, { minutes: NaN, level: 'new' }, { minutes: 10 }, { minutes: -1, level: 'new' }]) assert.throws(() => decide(input));
});
test('rule order is data and duplicate IDs are invalid', () => {
  assert.equal(decide({ minutes: 45, level: 'new' }, [...rules].reverse()).winner.id, 'intro');
  assert.throws(() => decide({ minutes: 45, level: 'new' }, [...rules, rules[0]]));
});
