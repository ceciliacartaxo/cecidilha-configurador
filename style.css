*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

@font-face {
  font-family: 'Lautren';
  src: url('assets/Lautren.otf') format('opentype');
  font-style: normal;
}

:root {
  --cream: #FAF7F2;
  --cream-dark: #F0EBE1;
  --ink: #1C1A17;
  --ink-light: #6B6560;
  --ink-faint: #A8A39C;
  --border: rgba(28,26,23,0.12);
  --border-strong: rgba(28,26,23,0.25);
  --accent: #8B6F47;
  --accent-light: #C4A882;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  background: var(--cream);
  color: var(--ink);
  min-height: 100vh;
  line-height: 1.6;
}

/* ── HEADER ── */
.site-header {
  text-align: center;
  padding: 3rem 2rem 2rem;
  border-bottom: 0.5px solid var(--border);
  position: relative;
}

.site-header::before {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: var(--accent-light);
  margin: 0 auto 1.5rem;
}

.logo {
  font-family: 'Lautren', serif;
  font-size: 45px;
  color: var(--ink);
}

.tagline {
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: 6px;
}

/* ── LAYOUT ── */
.container {
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* ── PROGRESS ── */
.progress-wrap {
  margin-bottom: 2.5rem;
}

.progress-track {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 10px;
}

.prog-seg {
  flex: 1;
  height: 1px;
  background: var(--border);
  transition: background 0.4s;
}

.prog-seg.done { background: var(--accent); }
.prog-seg.active { background: var(--accent-light); }

.prog-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-strong);
  flex-shrink: 0;
  transition: background 0.4s, transform 0.3s;
}

.prog-dot.done { background: var(--accent); }
.prog-dot.active { background: var(--accent); transform: scale(1.4); }

.progress-label {
  font-size: 11px;
  letter-spacing: 0.15em;
  color: var(--ink-faint);
  text-transform: uppercase;
}

/* ── STEP ── */
.step { display: none; animation: fadeUp 0.35s ease; }
.step.visible { display: block; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.step-eyebrow {
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent-light);
  margin-bottom: 8px;
}

.step-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 10px;
  color: var(--ink);
}

.step-desc {
  font-size: 14px;
  color: var(--ink-light);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.tip {
  background: var(--cream-dark);
  border-left: 2px solid var(--accent-light);
  padding: 12px 16px;
  font-size: 13px;
  color: var(--ink-light);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  border-radius: 0 6px 6px 0;
}

.tip strong { font-weight: 500; color: var(--ink); }

/* ── OPTIONS ── */
.options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 1.75rem; }

.opt {
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 16px 18px;
  cursor: pointer;
  background: #fff;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  position: relative;
}

.opt:hover {
  border-color: var(--border-strong);
  box-shadow: 0 2px 12px rgba(28,26,23,0.06);
}

.opt.selected {
  border-color: var(--accent);
  background: #FFFCF8;
}

.opt-check {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.opt.selected .opt-check {
  background: var(--accent);
  border-color: var(--accent);
}

.opt-check svg { display: none; }
.opt.selected .opt-check svg { display: block; }

.opt-icon {
  font-size: 20px;
  color: var(--accent-light);
  margin-top: 2px;
  flex-shrink: 0;
}

.opt-body { flex: 1; min-width: 0; padding-right: 24px; }

.opt-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 3px;
}

.opt-detail {
  font-size: 12px;
  color: var(--ink-light);
  line-height: 1.55;
}

.opt-price {
  font-size: 11px;
  color: var(--accent);
  margin-top: 5px;
  letter-spacing: 0.05em;
}

/* ── NUMBER CONTROL ── */
.num-wrap {
  background: #fff;
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.num-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid var(--border-strong);
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  font-family: 'Jost', sans-serif;
  line-height: 1;
}

.num-btn:hover { background: var(--cream-dark); }

.num-center { text-align: center; }

.num-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 42px;
  font-weight: 300;
  line-height: 1;
  color: var(--ink);
}

.num-unit {
  font-size: 12px;
  color: var(--ink-faint);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* ── NAV ── */
.nav {
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;
}

.btn-back {
  padding: 13px 20px;
  border: 0.5px solid var(--border-strong);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  color: var(--ink-light);
  letter-spacing: 0.05em;
  transition: background 0.15s;
  white-space: nowrap;
}

.btn-back:hover { background: var(--cream-dark); }

.btn-next {
  flex: 1;
  padding: 13px 20px;
  border: none;
  border-radius: 8px;
  background: var(--ink);
  color: var(--cream);
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.15s, opacity 0.15s;
}

.btn-next:hover { background: var(--accent); }
.btn-next:disabled { opacity: 0.3; cursor: not-allowed; background: var(--ink); }

/* ── SUMMARY ── */
.summary-price {
  text-align: center;
  padding: 2rem;
  background: var(--ink);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  color: var(--cream);
}

.price-eyebrow {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-light);
  margin-bottom: 10px;
}

.price-big {
  font-family: 'Cormorant Garamond', serif;
  font-size: 52px;
  font-weight: 300;
  line-height: 1;
  color: #fff;
}

.price-note {
  font-size: 12px;
  color: var(--ink-faint);
  margin-top: 10px;
  line-height: 1.6;
}

.summary-card {
  border: 0.5px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 1.5rem;
}

.summary-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  padding: 16px 18px;
  border-bottom: 0.5px solid var(--border);
  color: var(--ink);
  letter-spacing: 0.05em;
}

.sum-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 18px;
  border-bottom: 0.5px solid var(--border);
  gap: 12px;
}

.sum-row:last-child { border-bottom: none; }

.sum-lbl {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 3px;
}

.sum-val {
  font-size: 13px;
  color: var(--ink);
}

.sum-edit {
  font-size: 12px;
  color: var(--accent-light);
  cursor: pointer;
  background: none;
  border: none;
  font-family: 'Jost', sans-serif;
  text-decoration: underline;
  flex-shrink: 0;
  padding: 0;
}

.sum-edit:hover { color: var(--accent); }

.btn-email {
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-email:hover { background: var(--ink); }

.footer-note {
  text-align: center;
  font-size: 11px;
  color: var(--ink-faint);
  margin-top: 1.5rem;
  line-height: 1.7;
}

.divider {
  width: 32px;
  height: 1px;
  background: var(--accent-light);
  margin: 2rem auto;
  opacity: 0.5;
}

/* ── COMO FUNCIONA ── */
.how-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 0.5px solid var(--border);
}

.how-item:last-child { border-bottom: none; }

.how-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 300;
  color: var(--accent-light);
  flex-shrink: 0;
  width: 28px;
  line-height: 1.2;
}

.how-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 3px;
}

.how-desc {
  font-size: 12px;
  color: var(--ink-light);
  line-height: 1.6;
}
