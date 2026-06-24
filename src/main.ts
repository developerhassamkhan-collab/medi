import './style.css';
import { renderNav, initNav } from './components/nav';
import { renderHero, initKanban } from './components/hero';
import { renderFeatures } from './components/features';
import { renderHow } from './components/how';
import { renderPricing, initPricing } from './components/pricing';
import { renderTestimonials } from './components/testimonials';
import { renderCTA, renderFooter } from './components/cta';

function mount(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = [
    renderNav(),
    renderHero(),
    renderFeatures(),
    renderHow(),
    renderPricing(),
    renderTestimonials(),
    renderCTA(),
    renderFooter(),
  ].join('');

  // Init interactive components
  initNav();
  initKanban();
  initPricing();
  initReveal();
  initSmoothScroll();
}

function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(el => obs.observe(el));
}

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href') ?? '');
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

mount();
