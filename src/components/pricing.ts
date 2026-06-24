import { pricingPlans } from '../data';

export function renderPricing(): string {
  return `
  <section class="pricing-section" id="pricing">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Pricing</div>
        <h2 class="section-title">Simple pricing,<br/>no surprises</h2>
        <p class="section-sub">Start free. Upgrade when your team is ready. Cancel anytime.</p>
        <div class="billing-toggle">
          <span class="toggle-label active" id="toggle-monthly">Monthly</span>
          <button class="toggle-switch" id="billing-toggle" role="switch" aria-checked="false">
            <span class="toggle-thumb"></span>
          </button>
          <span class="toggle-label" id="toggle-annual">Annual <span class="save-badge">Save 20%</span></span>
        </div>
      </div>

      <div class="pricing-grid">
        ${pricingPlans.map(plan => `
          <div class="pricing-card ${plan.highlighted ? 'pricing-card--highlight' : ''} reveal">
            ${plan.highlighted ? '<div class="popular-badge">Most popular</div>' : ''}
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">
              <span class="price-amount" data-monthly="${plan.price}" data-annual="${getAnnualPrice(plan.price)}">${plan.price}</span>
              <span class="price-period">${plan.period}</span>
            </div>
            <p class="plan-desc">${plan.description}</p>
            <a href="#" class="plan-cta ${plan.highlighted ? 'btn-indigo-lg' : 'btn-outline-lg'}">${plan.cta}</a>
            <ul class="plan-features" role="list">
              ${plan.features.map(f => `
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${plan.highlighted ? '#6366F1' : '#10B981'}" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ${f}
                </li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>

      <p class="pricing-footnote">All plans include a 14-day free trial. No credit card required.</p>
    </div>
  </section>`;
}

function getAnnualPrice(monthly: string): string {
  if (monthly === '$0') return '$0';
  if (monthly === 'Custom') return 'Custom';
  const num = parseFloat(monthly.replace('$', ''));
  return `$${Math.round(num * 0.8)}`;
}

export function initPricing(): void {
  const toggle = document.getElementById('billing-toggle');
  const prices = document.querySelectorAll<HTMLElement>('.price-amount');
  const monthlyLabel = document.getElementById('toggle-monthly');
  const annualLabel = document.getElementById('toggle-annual');

  let isAnnual = false;

  toggle?.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.setAttribute('aria-checked', String(isAnnual));
    toggle.classList.toggle('active', isAnnual);
    monthlyLabel?.classList.toggle('active', !isAnnual);
    annualLabel?.classList.toggle('active', isAnnual);

    prices.forEach(el => {
      el.textContent = isAnnual
        ? (el.dataset.annual ?? '')
        : (el.dataset.monthly ?? '');
    });
  });
}
