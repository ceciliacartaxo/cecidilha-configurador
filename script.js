const WHATSAPP = '5561982315617';
const BASE = 460;

const steps = [
  {
    id: 'tamanho',
    eyebrow: 'Etapa 1 de 8',
    title: 'Tamanho do caderno',
    desc: 'O tamanho define a experiência de uso.',
    tip: 'Acima de 20 x 17 cm encareceria o projeto porque teríamos que contratar o recorte do papel com terceiros. Nas sugestões que fiz eu tenho ferramentas para executá-lo.',
    type: 'option',
    options: [
      { icon: '📄', name: 'Pequeno', detail: '16 × 13,6 cm · tamanho do cancioneiro Cecidilha', price: 'base', value: 'pequeno', cost: 0 },
      { icon: '📋', name: 'Médio', detail: '18 × 15,5 cm', price: 'base', value: 'medio', cost: 0 },
      { icon: '📓', name: 'Grande', detail: '20 × 17 cm', price: 'base', value: 'grande', cost: 0 },
    ]
  },
  {
    id: 'paginas',
    eyebrow: 'Etapa 2 de 8',
    title: 'Número de páginas',
    desc: 'O cancioneiro Cecidilha (o que vendi na feira) tem 128 páginas. Para que o caderno não fique sem volume, sugiro 64 páginas no mínimo. A quantidade também depende do papel escolhido por vocês para o miolo.',
    tip: '<strong>Dica:</strong> cada folha tem frente e verso — 32 páginas equivalem a 16 folhas no miolo.',
    type: 'number',
    min: 32, max: 128, step: 8, default: 64, unit: 'páginas'
  },
  {
    id: 'capa',
    eyebrow: 'Etapa 3 de 8',
    title: 'Material da capa',
    desc: 'Estamos considerando o linho na cor vermelha. Com meio metro de tecido já é possível fazer dois cadernos — o custo abaixo é por caderno.',
    tip: 'Para dois cadernos, 0,5 metros já é suficiente.',
    type: 'option',
    options: [
      { icon: '🪢', name: 'Linho puro', detail: '100% linho natural · textura firme e nobre', price: 'R$ 23,73 / caderno', value: 'linho-puro', cost: 23.73 },
      { icon: '🤍', name: 'Linho misto', detail: '70% viscose, 30% linho · caimento suave', price: 'R$ 7,48 / caderno', value: 'linho-misto', cost: 7.48 },
    ]
  },
  {
    id: 'miolo',
    eyebrow: 'Etapa 4 de 8',
    title: 'Papel do miolo',
    desc: 'O miolo é onde a história vai ser escrita. O papel certo faz a caneta deslizar bem e dá uma sensação premium a cada página virada.',
    tip: '<strong>Os valores abaixo são por folha</strong> e podem variar de acordo com a quantidade de páginas escolhida.',
    type: 'option',
    options: [
      {
        icon: '📃',
        name: 'Pólen Bold 90g',
        detail: 'Tom creme suave · papel encontrado na maioria dos livros no Brasil · preço acessível e de fácil acesso',
        price: 'R$ 2,50 / folha',
        value: 'polen',
        cost: 2.50
      },
      {
        icon: '✨',
        name: 'Vergê 120g',
        detail: 'Papel texturizado · bastante usado em papelaria de casamentos · disponível em várias cores',
        price: 'R$ 2,60 / folha',
        value: 'verge',
        cost: 2.60
      },
      {
        icon: '🇮🇹',
        name: 'Fedrigoni Color Plus Marfim',
        detail: 'Papel italiano premium · tom marfim quente · textura levemente aveludada · escrita muito agradável',
        price: 'R$ 5,84 / folha',
        value: 'fedrigoni',
        cost: 5.84
      },
      {
        icon: '🎨',
        name: 'Canson Montval 300g',
        detail: 'Papel para pintura · gramatura alta · ótimo acabamento · ideal para técnicas mistas',
        price: 'R$ 2,85 / folha',
        value: 'canson',
        cost: 2.85
      },
      {
        icon: '🌿',
        name: 'Papel artesanal',
        detail: 'Folhas recicladas feitas por mim · processo lento com aspecto muito artesanal · gramatura pode ser irregular · possibilidade de experimentações',
        price: 'R$ 13,00 / folha',
        value: 'artesanal',
        cost: 13.00
      },
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
let pageCount = 64;

const stepNames = {
  tamanho: 'Tamanho', capa: 'Capa', miolo: 'Miolo',
  contracapa: 'Contracapa interna', guardas: 'Folha de guarda',
  bordado: 'Bordado', lombada: 'Lombada'
};

function calcTotal() {
  let total = BASE;

  // Capa: custo já dividido por 2 (meio metro = 2 cadernos)
  if (selections['capa']) {
    const capaStep = steps.find(s => s.id === 'capa');
    const capaOpt = capaStep.options.find(o => o.value === selections['capa']);
    if (capaOpt) total += capaOpt.cost;
  }

  // Miolo: custo por folha × número de folhas (páginas ÷ 2)
  if (selections['miolo']) {
    const mioloStep = steps.find(s => s.id === 'miolo');
    const mioloOpt = mioloStep.options.find(o => o.value === selections['miolo']);
    if (mioloOpt) {
      const folhas = pageCount / 2;
      total += mioloOpt.cost * folhas;
    }
  }

  // Demais etapas: custo fixo
  steps.forEach(s => {
    if (s.id === 'capa' || s.id === 'miolo' || s.type === 'number') return;
    if (selections[s.id]) {
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
            <div class="opt-detail">${opt.detail || ''}</div>
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
        <div class="sum-val">${pageCount} páginas · ${pageCount / 2} folhas</div>
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
      <div class="price-note">Valor estimado com base nas suas escolhas.<br>O valor final será confirmado por email em até 48h.</div>
    </div>

    <div class="summary-card">
      <div class="summary-card-title">Itens selecionados</div>
      ${rows}
    </div>

    <div class="summary-card" style="margin-top: 1rem;">
      <div class="summary-card-title">Como funciona</div>
      <div class="sum-row" style="display:block; padding: 16px 18px;">
        <div class="how-item">
          <div class="how-num">01</div>
          <div>
            <div class="how-title">Confirmação do pedido</div>
            <div class="how-desc">Após o envio, entro em contato em até 48h para confirmar todos os detalhes e o valor final.</div>
          </div>
        </div>
        <div class="how-item">
          <div class="how-num">02</div>
          <div>
            <div class="how-title">Pagamento de 50% via Pix</div>
            <div class="how-desc">Com o pedido confirmado, você paga metade do valor para eu dar início à produção e adquirir os materiais.</div>
          </div>
        </div>
        <div class="how-item">
          <div class="how-num">03</div>
          <div>
            <div class="how-title">Produção artesanal — até 30 dias</div>
            <div class="how-desc">Cada caderno é feito à mão por mim, do início ao fim. O prazo de até 30 dias garante cuidado em cada etapa.</div>
          </div>
        </div>
        <div class="how-item">
          <div class="how-num">04</div>
          <div>
            <div class="how-title">Entrega e pagamento final</div>
            <div class="how-desc">Os outros 50% são pagos na entrega. Você pode retirar na Asa Norte (Brasília) ou receber pelos Correios.</div>
          </div>
        </div>
      </div>
    </div>

    <button class="btn-email" onclick="sendWhatsApp()" style="margin-top: 1.5rem;">Enviar pedido via WhatsApp ✉</button>

    <p class="footer-note">
      Ao clicar, o WhatsApp abrirá com o resumo já preenchido.<br>
      Basta enviar — responderei em até 48h.
    </p>
  `;

  container.appendChild(div);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendWhatsApp() {
  const total = calcTotal();
  let msg = `Olá, Cecidilha! 🌿\n\nGostaria de encomendar um caderno artesanal com as seguintes especificações:\n\n`;
  msg += `• Páginas: ${pageCount} (${pageCount / 2} folhas)\n`;

  steps.forEach(s => {
    if (s.type === 'option') {
      const sel = s.options.find(o => o.value === selections[s.id]);
      if (sel) msg += `• ${stepNames[s.id] || s.title}: ${sel.name}\n`;
    }
  });

  msg += `\nEstimativa de valor: R$ ${total}\n\n`;
  msg += `Aguardo a confirmação do valor final e os próximos passos!`;

  const msgEnc = encodeURIComponent(msg);
  window.open(`https://wa.me/${WHATSAPP}?text=${msgEnc}`, '_blank');
}

render();
