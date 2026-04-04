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
        document.querySelector('.tab-nav')?.scrollIntoView({ behavior: 'smooth', block: 'nearest'   // ── Mobile hamburger menu ──
  const nav = document.querySelector('nav');
  if (nav) {
    // Build hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    // Build mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <a href="index.html">Home</a>
      <a href="why-bild.html">Why BILD</a>
      <a href="index.html#pillars">The Pillars</a>
      <a href="the-rare-ones.html">The Rare Ones</a>
      <a href="retreat-los-barriles.html">Retreats</a>
      <a href="assessment.html">Assessment</a>
      <a href="contact.html">Contact</a>
      <a href="apply.html" class="mobile-cta">Apply Now</a>
    `;

    // Add to page
    nav.appendChild(burger);
    document.body.appendChild(mobileMenu);

    // Toggle open/close
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      burger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-12px)';
        setTimeout(() => {
          mobileMenu.classList.remove('open');
          mobileMenu.style.opacity = '';
          mobileMenu.style.transform = '';
        }, 300);
      } else {
        mobileMenu.classList.add('open');
      }
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

});
      }
      // ── Mobile hamburger menu ──
  const nav = document.querySelector('nav');
  if (nav) {
    // Build hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    // Build mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <a href="index.html">Home</a>
      <a href="why-bild.html">Why BILD</a>
      <a href="index.html#pillars">The Pillars</a>
      <a href="the-rare-ones.html">The Rare Ones</a>
      <a href="retreat-los-barriles.html">Retreats</a>
      <a href="assessment.html">Assessment</a>
      <a href="contact.html">Contact</a>
      <a href="apply.html" class="mobile-cta">Apply Now</a>
    `;

    // Add to page
    nav.appendChild(burger);
    document.body.appendChild(mobileMenu);

    // Toggle open/close
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      burger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-12px)';
        setTimeout(() => {
          mobileMenu.classList.remove('open');
          mobileMenu.style.opacity = '';
          mobileMenu.style.transform = '';
        }, 300);
      } else {
        mobileMenu.classList.add('open');
      }
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

});
    // ── Mobile hamburger menu ──
  const nav = document.querySelector('nav');
  if (nav) {
    // Build hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    // Build mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <a href="index.html">Home</a>
      <a href="why-bild.html">Why BILD</a>
      <a href="index.html#pillars">The Pillars</a>
      <a href="the-rare-ones.html">The Rare Ones</a>
      <a href="retreat-los-barriles.html">Retreats</a>
      <a href="assessment.html">Assessment</a>
      <a href="contact.html">Contact</a>
      <a href="apply.html" class="mobile-cta">Apply Now</a>
    `;

    // Add to page
    nav.appendChild(burger);
    document.body.appendChild(mobileMenu);

    // Toggle open/close
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      burger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-12px)';
        setTimeout(() => {
          mobileMenu.classList.remove('open');
          mobileMenu.style.opacity = '';
          mobileMenu.style.transform = '';
        }, 300);
      } else {
        mobileMenu.classList.add('open');
      }
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

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

  // ── Mobile hamburger menu ──
  const nav = document.querySelector('nav');
  if (nav) {
    // Build hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.innerHTML = '<span></span><span></span><span></span>';

    // Build mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <a href="index.html">Home</a>
      <a href="why-bild.html">Why BILD</a>
      <a href="index.html#pillars">The Pillars</a>
      <a href="the-rare-ones.html">The Rare Ones</a>
      <a href="retreat-los-barriles.html">Retreats</a>
      <a href="assessment.html">Assessment</a>
      <a href="contact.html">Contact</a>
      <a href="apply.html" class="mobile-cta">Apply Now</a>
    `;

    // Add to page
    nav.appendChild(burger);
    document.body.appendChild(mobileMenu);

    // Toggle open/close
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      burger.classList.toggle('open');
      if (isOpen) {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-12px)';
        setTimeout(() => {
          mobileMenu.classList.remove('open');
          mobileMenu.style.opacity = '';
          mobileMenu.style.transform = '';
        }, 300);
      } else {
        mobileMenu.classList.add('open');
      }
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

});
