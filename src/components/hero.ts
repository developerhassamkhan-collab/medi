import { stats, kanbanColumns } from '../data';
import type { KanbanCard } from '../types';

function priorityDot(p: KanbanCard['priority']): string {
  const colors: Record<string, string> = { high: '#EF4444', medium: '#F59E0B', low: '#10B981' };
  return `<span class="priority-dot" style="background:${colors[p]}" title="${p} priority"></span>`;
}

function renderCard(card: KanbanCard): string {
  return `
    <div class="kb-card" draggable="true" data-id="${card.id}">
      <div class="kb-card-header">
        <span class="kb-tag" style="background:${card.tagColor}">${card.tag}</span>
        ${priorityDot(card.priority)}
      </div>
      <p class="kb-card-title">${card.title}</p>
      <div class="kb-card-footer">
        <div class="kb-avatar">${card.assignee}</div>
      </div>
    </div>`;
}

export function renderHero(): string {
  const boardCols = kanbanColumns.map(col => `
    <div class="kb-col" data-col="${col.id}">
      <div class="kb-col-header">
        <span class="kb-col-dot" style="background:${col.color}"></span>
        <span class="kb-col-title">${col.title}</span>
        <span class="kb-col-count">${col.cards.length}</span>
      </div>
      <div class="kb-cards" data-col="${col.id}">
        ${col.cards.map(renderCard).join('')}
      </div>
    </div>`).join('');

  return `
  <section class="hero-section" id="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          New: AI Sprint Planner — now in beta
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>

        <h1 class="hero-title">
          Ship projects<br/><em>faster than ever</em>
        </h1>

        <p class="hero-subtitle">
          FlowDesk brings your tasks, timelines, and team into one clear view —
          so nothing falls through the cracks and every sprint ends on time.
        </p>

        <div class="hero-ctas">
          <a href="#pricing" class="btn-indigo-lg">
            Start for free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#how" class="btn-ghost-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
            See how it works
          </a>
        </div>

        <div class="hero-stats">
          ${stats.map(s => `
            <div class="hero-stat">
              <span class="stat-val">${s.value}</span>
              <span class="stat-lbl">${s.label}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="hero-board-wrap">
        <div class="board-topbar">
          <div class="board-topbar-dots">
            <span></span><span></span><span></span>
          </div>
          <span class="board-topbar-title">Q3 Product Launch</span>
          <div class="board-topbar-avatars">
            <div class="tb-av" style="background:#6366F1">AM</div>
            <div class="tb-av" style="background:#10B981">SR</div>
            <div class="tb-av" style="background:#F59E0B">JL</div>
          </div>
        </div>
        <div class="kb-board" id="kanban-board">
          ${boardCols}
        </div>
      </div>
    </div>
  </section>`;
}

export function initKanban(): void {
  const board = document.getElementById('kanban-board');
  if (!board) return;

  let draggedCard: HTMLElement | null = null;

  board.querySelectorAll<HTMLElement>('.kb-card').forEach(card => {
    card.addEventListener('dragstart', () => {
      draggedCard = card;
      setTimeout(() => card.classList.add('dragging'), 0);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      draggedCard = null;
      board.querySelectorAll('.kb-cards').forEach(c => c.classList.remove('drag-over'));
    });
  });

  board.querySelectorAll<HTMLElement>('.kb-cards').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', () => {
      zone.classList.remove('drag-over');
      if (draggedCard) {
        zone.appendChild(draggedCard);
        // Update count badges
        board.querySelectorAll('.kb-col').forEach(col => {
          const cards = col.querySelectorAll('.kb-card').length;
          const badge = col.querySelector('.kb-col-count');
          if (badge) badge.textContent = String(cards);
        });
      }
    });
  });
}
