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
