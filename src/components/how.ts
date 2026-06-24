export function renderHow(): string {
  const steps = [
    {
      step: '01',
      title: 'Create your workspace',
      desc: 'Set up a project in 30 seconds. Invite your team, pick a view, and FlowDesk structures everything automatically.',
      visual: `<div class="how-visual-a">
        <div class="how-input-mock">
          <div class="how-input-label">Project name</div>
          <div class="how-input-field">Q4 Mobile App Redesign<span class="cursor-blink">|</span></div>
          <div class="how-input-row">
            <div class="how-chip active">Kanban</div>
            <div class="how-chip">Timeline</div>
            <div class="how-chip">List</div>
          </div>
        </div>
      </div>`,
    },
    {
      step: '02',
      title: 'Let AI plan your sprints',
      desc: "Describe what you're building and our AI breaks it down into tasks, estimates effort, and sets realistic deadlines.",
      visual: `<div class="how-visual-b">
        <div class="ai-prompt-box">
          <div class="ai-prompt-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            AI Planner
          </div>
          <div class="ai-prompt-text">"Build user auth with OAuth and 2FA support"</div>
          <div class="ai-tasks">
            <div class="ai-task"><span class="ai-check">✓</span> Setup OAuth provider</div>
            <div class="ai-task"><span class="ai-check">✓</span> Build login UI flow</div>
            <div class="ai-task ai-task-typing"><span class="ai-check">·</span> Implement 2FA via TOTP…</div>
          </div>
        </div>
      </div>`,
    },
    {
      step: '03',
      title: 'Track, ship, and repeat',
      desc: 'Watch your velocity improve sprint over sprint. Automated reports keep stakeholders informed without you lifting a finger.',
      visual: `<div class="how-visual-c">
        <div class="chart-mock">
          <div class="chart-label">Sprint velocity</div>
          <div class="chart-bars">
            <div class="chart-bar" style="--h:45%"><span>S1</span></div>
            <div class="chart-bar" style="--h:60%"><span>S2</span></div>
            <div class="chart-bar" style="--h:55%"><span>S3</span></div>
            <div class="chart-bar active" style="--h:80%"><span>S4</span></div>
            <div class="chart-bar" style="--h:75%"><span>S5</span></div>
            <div class="chart-bar" style="--h:88%"><span>S6</span></div>
          </div>
          <div class="chart-badge">↑ 38% this quarter</div>
        </div>
      </div>`,
    },
  ];

  return `
  <section class="how-section" id="how">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">How it works</div>
        <h2 class="section-title">From zero to shipping<br/>in three steps</h2>
      </div>
      <div class="how-steps">
        ${steps.map(s => `
          <div class="how-step reveal">
            <div class="how-step-text">
              <div class="how-step-num">${s.step}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
            <div class="how-step-visual">${s.visual}</div>
          </div>`).join('')}
      </div>
    </div>
  </section>`;
}
