import { rules, decide } from './core.js';
document.querySelector('#rules').textContent = JSON.stringify(rules, null, 2);
document.querySelector('#evaluate').onclick = () => {
  const output = document.querySelector('#result');
  try {
    const raw = document.querySelector('#minutes').value;
    const result = decide({ minutes: raw.trim() ? Number(raw) : NaN, level: document.querySelector('#level').value });
    output.textContent = result.winner ? `${result.winner.label} (${result.winner.id})\nAll matching rules: ${result.matchedIds.join(', ')}. First match wins.` : 'No matching rule. Try at least 10 minutes.';
  } catch (error) { output.textContent = error.message; }
};
