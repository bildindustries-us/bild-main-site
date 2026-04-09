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

  // ── Dropdown nav — mobile tap support ──
  document.querySelectorAll('.nav-dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      // On mobile, toggle open class on tap of the parent link
      if (window.innerWidth <= 680) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
    // Close dropdown when clicking a child link
    dropdown.querySelectorAll('.dropdown-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.remove('open');
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(function(d) {
        d.classList.remove('open');
      });
    }
  });

  // ── Mobile hamburger menu ──
  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('.nav-hamburger')) {

    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = '<a href="index.html">Home</a><a href="why-bild.html">Why BILD</a><a href="index.html#pillars">The Pillars</a><a href="the-rare-ones.html">The Rare Ones</a><a href="retreats.html">Day Retreats</a><a href="retreat-los-barriles.html">Los Barriles Retreat</a><a href="6pillars-guide.html">Free Guide</a><a href="assessment.html">Assessment</a><a href="contact.html">Contact</a><a href="apply.html" class="mobile-cta">Apply Now</a>';

    nav.appendChild(burger);
    document.body.appendChild(mobileMenu);

    function closeMenu() {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }

    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      isOpen ? closeMenu() : (mobileMenu.classList.add('open'), burger.classList.add('open'));
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

});
