import { features } from '../data';

export function renderFeatures(): string {
  return `
  <section class="features-section" id="features">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Features</div>
        <h2 class="section-title">Everything your team needs<br/>to move faster</h2>
        <p class="section-sub">Built for the way modern product teams actually work — not the way project management textbooks say they should.</p>
      </div>

      <div class="features-grid">
        ${features.map((f, i) => `
          <div class="feature-card reveal" style="--delay:${i * 70}ms">
            <div class="feature-icon-wrap">
              ${f.icon}
            </div>
            <div class="feature-tag">${f.tag}</div>
            <h3 class="feature-title">${f.title}</h3>
            <p class="feature-desc">${f.description}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>`;
}
