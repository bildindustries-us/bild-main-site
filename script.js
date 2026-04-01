/* BILD — shared interactions */

document.addEventListener('DOMContentLoaded', () => {

  // ── Tab switching ──
  const tabs   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.content-area');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('visible'));
      btn.classList.add('active');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) {
        target.classList.add('visible');
        // nudge scroll so sticky tab bar stays in view
        document.querySelector('.tab-nav')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // ── Commitment submit ──
  window.submitCommitment = function(inputId, btnId, confirmId) {
    const input   = document.getElementById(inputId);
    const btn     = document.getElementById(btnId);
    const confirm = document.getElementById(confirmId);
    if (!input || !btn || !confirm) return;

    const text = input.value.trim();
    if (!text) {
      input.style.borderColor = 'var(--coral)';
      input.placeholder = 'Write it down first.';
      return;
    }
    btn.style.display = 'none';
    confirm.style.display = 'block';
    confirm.textContent = '"' + text + '" — Named. The work begins now.';
  };

});
