import { navItems } from '../data';

export function renderNav(): string {
  return `
  <header class="nav-header" id="nav-header">
    <nav class="nav-inner">
      <a href="#" class="nav-logo" aria-label="FlowDesk home">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#6366F1"/>
          <rect x="6" y="8" width="8" height="16" rx="2" fill="white" opacity="0.9"/>
          <rect x="18" y="8" width="8" height="10" rx="2" fill="white" opacity="0.6"/>
        </svg>
        <span>FlowDesk</span>
      </a>
      <ul class="nav-links" role="list">
        ${navItems.map(item => `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`).join('')}
      </ul>
      <div class="nav-actions">
        <a href="#" class="btn-ghost-sm">Log in</a>
        <a href="#pricing" class="btn-indigo-sm">Get started free</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      ${navItems.map(item => `<a href="${item.href}" class="mobile-link">${item.label}</a>`).join('')}
      <div class="mobile-menu-actions">
        <a href="#" class="btn-ghost-sm full-w">Log in</a>
        <a href="#pricing" class="btn-indigo-sm full-w">Get started free</a>
      </div>
    </div>
  </header>`;
}

export function initNav(): void {
  const header = document.getElementById('nav-header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu?.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });
}
