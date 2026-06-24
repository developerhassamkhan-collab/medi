import { testimonials } from '../data';

export function renderTestimonials(): string {
  return `
  <section class="testimonials-section" id="testimonials">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Testimonials</div>
        <h2 class="section-title">Trusted by teams<br/>that ship</h2>
      </div>
      <div class="testimonials-grid">
        ${testimonials.map(t => `
          <div class="t-card reveal">
            <div class="t-stars">★★★★★</div>
            <p class="t-quote">"${t.quote}"</p>
            <div class="t-author">
              <div class="t-avatar" style="background:${t.color}">${t.initials}</div>
              <div>
                <div class="t-name">${t.name}</div>
                <div class="t-role">${t.role} · ${t.company}</div>
              </div>
            </div>
          </div>`).join('')}
      </div>

      <div class="logo-strip">
        <p class="logo-strip-label">Powering teams at</p>
        <div class="logo-strip-items">
          ${['Vercel', 'Linear', 'Loom', 'Retool', 'Descript', 'Mercury'].map(n =>
            `<span class="logo-strip-name">${n}</span>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}
