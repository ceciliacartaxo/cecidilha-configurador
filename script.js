const EMAIL_DEST = 'contato@cecidilha.com';
const BASE = 85;

const steps = [
  {
    id: 'tamanho',
    eyebrow: 'Etapa 1 de 8',
    title: 'Tamanho do caderno',
    desc: 'O tamanho define a experiência de uso.',
    tip: 'Acima de 20 x 17 cm encarecería o projeto porque teríamos que contratar o recorte do papel com terceiros. Nas sugestões que fiz eu tenho ferramentas para executá-lo.',
    type: 'option',
    options: [
      { icon: '📄', name: 'Pequeno', detail: '16 × 13,6 cm · tamanho do cancioneiro Cecidilha', price: 'base', value: 'pequeno', cost: 0 },
      { icon: '📋', name: 'Médio', detail: '18 × 15.5 cm', price: 'base', value: 'medio', cost: 0 },
      { icon: '📓', name: 'Grande', detail: '20 × 17 cm', price: 'base', value: 'grande', cost: 0 },
    ]
  },
  {
    id: 'paginas',
    eyebrow: 'Etapa 2 de 8',
    title: 'Número de páginas',
    desc: 'Pense no uso que o casal vai dar ao caderno. Para votos, poucas páginas bastam. Para diário de lua de mel, mais espaço é bem-vindo.',
    tip: '<strong>Dica:</strong> cada folha tem frente e verso — 32 páginas equivalem a 16 folhas no miolo.',
    type: 'number',
    min: 16, max: 128, step: 8, default: 32, unit: 'páginas'
  },
  {
    id: 'capa',
    eyebrow: 'Etapa 3 de 8',
    title: 'Material da capa',
    desc: 'A capa é o primeiro toque — o que a noiva sente ao pegar o caderno pela primeira vez. O linho artesanal tem uma textura que nenhum papel laminado replica.',
    tip: '<strong>Todos os linhos</strong> da Cecidilha são naturais e preparados à mão — nenhuma peça passa por terceiros.',
    type: 'option',
    options: [
      { icon: '🪢', name: 'Linho natural cru', detail: 'Tom bege neutro, textura rústica e sofisticada', price: 'incluso', value: 'linho-cru', cost: 0 },
      { icon: '🤍', name: 'Linho belga off-white', detail: 'Trama mais fina, visual refinado e atemporal', price: '+R$ 8', value: 'linho-belga', cost: 8 },
      { icon: '🎨', name: 'Linho colorido', detail: 'Cor à escolha da noiva — tingido ao natural', price: '+R$ 10', value: 'linho-colorido', cost: 10 },
    ]
  },
  {
    id: 'miolo',
    eyebrow: 'Etapa 4 de 8',
    title: 'Papel do miolo',
    desc: 'O miolo é onde a história vai ser escrita. O papel certo faz a caneta deslizar bem e dá uma sensação premium a cada página virada.',
    tip: '<strong>Vergê e Color Plus</strong> têm tom creme suave que cansa menos os olhos do que o branco puro.',
    type: 'option',
    options: [
      { icon: '📃', name: 'Pólen 90g', detail: 'Tom creme clássico, qualidade confiável', price: 'incluso', value: 'polen', cost: 0 },
      { icon: '📄', name: 'Color Plus Marfim 120g', detail: 'Gramatura superior, toque mais encorpado', price: '+R$ 6', value: 'colorplus', cost: 6 },
      { icon: '✨', name: 'Vergê 90g', detail: 'Linhas sutis na estrutura, visual de papelaria europeia', price: '+R$ 9', value: 'verge', cost: 9 },
      { icon: '🌿', name: 'Papel artesanal (feito à mão)', detail: 'Fibras visíveis, cada folha única — máximo impacto', price: '+R$ 35', value: 'artesanal', cost: 35 },
    ]
  },
  {
    id: 'contracapa',
    eyebrow: 'Etapa 5 de 8',
    title: 'Contracapa interna',
    desc: 'A surpresa ao abrir o caderno. A folha que reveste o papelão por dentro é um detalhe invisível por fora — mas que todos sentem ao abrir.',
    tip: '<strong>Pense como o forro de um casaco:</strong> quem vê por fora não sabe, mas quem abre sente a diferença.',
    type: 'option',
    options: [
      { icon: '🌊', name: 'Papel marmorizado italiano', detail: 'Cada folha única, padrão fluido e artístico', price: '+R$ 14', value: 'marmorizado', cost: 14 },
      { icon: '🍃', name: 'Papel japonês (washi)', detail: 'Fibras naturais visíveis, delicado e translúcido', price: '+R$ 10', value: 'washi', cost: 10 },
      { icon: '🧵', name: 'Tecido combinando com a capa', detail: 'Coerência visual total entre capa e interior', price: '+R$ 8', value: 'tecido', cost: 8 },
      { icon: '—', name: 'Papel liso (color plus)', detail: 'Sutil e elegante, deixa o miolo como destaque', price: 'incluso', value: 'liso', cost: 0 },
    ]
  },
  {
    id: 'guardas',
    eyebrow: 'Etapa 6 de 8',
    title: 'Folha de guarda',
    desc: 'As primeiras e últimas folhas do caderno — a moldura do conteúdo. Podem ser simples ou virar um elemento visual marcante.',
    tip: '<strong>Folhas de guarda especiais</strong> criam uma experiência em camadas sem encarecer todo o miolo.',
    type: 'option',
    options: [
      { icon: '—', name: 'Mesma do miolo', detail: 'Continuidade suave e discreta', price: 'incluso', value: 'mesmo', cost: 0 },
      { icon: '🌊', name: 'Papel marmorizado', detail: 'Entrada e saída marcantes no caderno', price: '+R$ 10', value: 'marm-guarda', cost: 10 },
      { icon: '🌸', name: 'Papel artesanal com flores secas', detail: 'Folhas únicas com pétalas ou folhas naturais', price: '+R$ 18', value: 'flores', cost: 18 },
      { icon: '🎨', name: 'Color Plus colorido', detail: 'Cor que combina com a paleta do casamento', price: '+R$ 4', value: 'colorido-guarda', cost: 4 },
    ]
  },
  {
    id: 'bordado',
    eyebrow: 'Etapa 7 de 8',
    title: 'Bordado na capa',
    desc: 'O detalhe que nenhum template consegue copiar. As iniciais bordadas à mão transformam o caderno em uma peça única e assinada.',
    tip: '<strong>Fio metálico dourado ou prata</strong> é o mais pedido em casamentos — a luz da cerimônia realça cada ponto.',
    type: 'option',
    options: [
      { icon: '✕', name: 'Sem bordado', detail: 'Capa limpa, o linho fala por si', price: 'incluso', value: 'sem', cost: 0 },
      { icon: 'Aa', name: 'Iniciais simples', detail: 'Ponto atrás ou ponto cheio · 1 a 3 letras', price: '+R$ 25', value: 'iniciais', cost: 25 },
      { icon: '👑', name: 'Monograma elaborado', detail: 'Iniciais com ornamentos, florzinha ou &', price: '+R$ 45', value: 'monograma', cost: 45 },
      { icon: '✨', name: 'Fio metalizado (+ brilho)', detail: 'Qualquer opção acima com fio dourado ou prata', price: '+R$ 15', value: 'metalizado', cost: 15 },
    ]
  },
  {
    id: 'lombada',
    eyebrow: 'Etapa 8 de 8',
    title: 'Acabamento da lombada',
    desc: 'A lombada é a espinha do caderno — o que aparece quando ele está na mesa de votos ou numa estante.',
    tip: '<strong>Lombada costurada à vista</strong> é uma marca da encadernação artesanal — a costura exposta vira elemento decorativo.',
    type: 'option',
    options: [
      { icon: '|', name: 'Lombada colada (simples)', detail: 'Acabamento discreto e resistente', price: 'incluso', value: 'colada', cost: 0 },
      { icon: '🧵', name: 'Costura coptic (à vista)', detail: 'Fio exposto, abre 100% plano — muito elegante', price: '+R$ 20', value: 'coptic', cost: 20 },
      { icon: '◈', name: 'Costura japonesa', detail: 'Padrão geométrico decorativo na lombada', price: '+R$ 25', value: 'japonesa', cost: 25 },
      { icon: '🎀', name: 'Lombada com fita de linho', detail: 'Linho costurado na lombada, acabamento natural', price: '+R$ 12', value: 'fita', cost: 12 },
    ]
  }
];

let currentStep = 0;
let selections = {};
let pageCount = 32;

const stepNames = {
  tamanho: 'Tamanho', capa: 'Capa', miolo: 'Miolo',
  contracapa: 'Contracapa interna', guardas: 'Folha de guarda',
  bordado: 'Bordado', lombada: 'Lombada'
};

function calcTotal() {
  let total = BASE;
  const pgExtra = Math.max(0, Math.floor((pageCount - 32) / 8)) * 3;
  total += pgExtra;
  steps.forEach(s => {
    if (s.type === 'option' && selections[s.id]) {
      const opt = s.options.find(o => o.value === selections[s.id]);
      if (opt) total += opt.cost;
    }
  });
  return Math.round(total);
}

function buildProgress() {
  const track = document.getElementById('progressTrack');
  const label = document.getElementById('progressLabel');
  track.innerHTML = '';

  steps.forEach((s, i) => {
    if (i > 0) {
      const seg = document.createElement('div');
      seg.className = 'prog-seg' + (i <= currentStep ? ' done' : '');
      track.appendChild(seg);
    }
    const dot = document.createElement('div');
    dot.className = 'prog-dot' + (i === currentStep ? ' active' : i < currentStep ? ' done' : '');
    track.appendChild(dot);
  });

  const isSummary = currentStep >= steps.length;
  label.textContent = isSummary ? 'Resumo final' : `Etapa ${currentStep + 1} de ${steps.length}`;
}

function render() {
  buildProgress();
  const container = document.getElementById('stepsContainer');
  container.innerHTML = '';

  if (currentStep >= steps.length) {
    renderSummary(container);
    return;
  }

  const s = steps[currentStep];
  const div = document.createElement('div');
  div.className = 'step visible';

  let html = `
    <div class="step-eyebrow">${s.eyebrow}</div>
    <div class="step-title">${s.title}</div>
    <div class="step-desc">${s.desc}</div>
    ${s.tip ? `<div class="tip">${s.tip}</div>` : ''}
  `;

  if (s.type === 'option') {
    html += `<div class="options" id="optGrid">`;
    s.options.forEach(opt => {
      const sel = selections[s.id] === opt.value;
      html += `
        <div class="opt${sel ? ' selected' : ''}" data-val="${opt.value}" onclick="selectOpt('${s.id}','${opt.value}',this)">
          <div class="opt-icon">${opt.icon}</div>
          <div class="opt-body">
            <div class="opt-name">${opt.name}</div>
            <div class="opt-detail">${opt.detail}</div>
            <div class="opt-price">${opt.price}</div>
          </div>
          <div class="opt-check">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  } else {
    html += `
      <div class="num-wrap">
        <button class="num-btn" onclick="changeNum(-${s.step})">−</button>
        <div class="num-center">
          <div class="num-value" id="numVal">${pageCount}</div>
          <div class="num-unit">${s.unit}</div>
        </div>
        <button class="num-btn" onclick="changeNum(${s.step})">+</button>
      </div>
    `;
  }

  const hasSelection = s.type === 'number' || !!selections[s.id];
  const isLast = currentStep === steps.length - 1;

  html += `
    <div class="nav">
      ${currentStep > 0 ? `<button class="btn-back" onclick="goBack()">← Voltar</button>` : ''}
      <button class="btn-next" id="btnNext" ${!hasSelection ? 'disabled' : ''} onclick="goNext()">
        ${isLast ? 'Ver resumo →' : 'Continuar →'}
      </button>
    </div>
  `;

  div.innerHTML = html;
  container.appendChild(div);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectOpt(id, val, el) {
  selections[id] = val;
  el.closest('.options').querySelectorAll('.opt').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  const btn = document.getElementById('btnNext');
  if (btn) btn.disabled = false;
}

function changeNum(delta) {
  const s = steps[currentStep];
  pageCount = Math.min(s.max, Math.max(s.min, pageCount + delta));
  const el = document.getElementById('numVal');
  if (el) el.textContent = pageCount;
}

function goNext() { currentStep++; render(); }
function goBack() { currentStep--; render(); }
function jumpTo(i) { currentStep = i; render(); }

function renderSummary(container) {
  const total = calcTotal();
  const div = document.createElement('div');
  div.className = 'step visible';

  let rows = `
    <div class="sum-row">
      <div>
        <div class="sum-lbl">Páginas</div>
        <div class="sum-val">${pageCount} páginas</div>
      </div>
      <button class="sum-edit" onclick="jumpTo(1)">alterar</button>
    </div>
  `;

  steps.forEach((s, i) => {
    if (s.type === 'option') {
      const sel = s.options.find(o => o.value === selections[s.id]);
      if (sel) {
        rows += `
          <div class="sum-row">
            <div>
              <div class="sum-lbl">${stepNames[s.id] || s.id}</div>
              <div class="sum-val">${sel.name}</div>
            </div>
            <button class="sum-edit" onclick="jumpTo(${i})">alterar</button>
          </div>
        `;
      }
    }
  });

  div.innerHTML = `
    <div class="step-eyebrow">Resumo do pedido</div>
    <div class="step-title">Seu caderno<br><em style="font-style:italic">personalizado</em></div>
    <div class="divider"></div>

    <div class="summary-price">
      <div class="price-eyebrow">Estimativa de valor</div>
      <div class="price-big">R$ ${total}</div>
      <div class="price-note">Valor aproximado · sujeito a confirmação após contato</div>
    </div>

    <div class="summary-card">
      <div class="summary-card-title">Itens selecionados</div>
      ${rows}
    </div>

    <button class="btn-email" onclick="sendEmail()">Enviar para a Cecidilha ✉</button>

    <p class="footer-note">
      Ao clicar, seu app de email abrirá com o resumo já preenchido.<br>
      Basta enviar — responderemos em até 48h.
    </p>
  `;

  container.appendChild(div);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendEmail() {
  const total = calcTotal();
  let body = `Olá, Cecidilha!\n\nGostaria de encomendar um caderno artesanal com as seguintes especificações:\n\n`;
  body += `• Páginas: ${pageCount}\n`;

  steps.forEach(s => {
    if (s.type === 'option') {
      const sel = s.options.find(o => o.value === selections[s.id]);
      if (sel) body += `• ${stepNames[s.id] || s.title}: ${sel.name}\n`;
    }
  });

  body += `\nEstimativa: R$ ${total}\n\n`;
  body += `Pode me passar mais detalhes sobre prazo e forma de pagamento?\n\nObrigada!`;

  const subject = encodeURIComponent('Pedido de caderno artesanal · Cecidilha');
  const bodyEnc = encodeURIComponent(body);
  window.location.href = `mailto:${EMAIL_DEST}?subject=${subject}&body=${bodyEnc}`;
}

render();
