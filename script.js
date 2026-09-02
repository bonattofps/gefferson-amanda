// Datas principais: altere aqui se a data de referência ou a previsão mudarem.
const REFERENCE_DATE = new Date(2026, 5, 26, 0, 0, 0);
const DUE_DATE = new Date(2027, 0, 28, 0, 0, 0);
const INITIAL_GESTATIONAL_DAYS = (9 * 7) + 1;
const TOTAL_GESTATIONAL_DAYS = 40 * 7;
const STORAGE_KEY = "diario-gravidez-mensagens";
const THEME_KEY = "diario-gravidez-tema";
const GALLERY_STORAGE_KEY = "diario-gravidez-galeria-links";

// Textos da linha do tempo: edite títulos e descrições aqui.
const weekTexts = {
  9: {
    title: "Nosso bebê começa a ganhar forma",
    description: "Nesta fase, nosso bebê está crescendo rapidamente e começando a ter traços mais definidos. Cada dia é uma nova descoberta nessa linda jornada."
  },
  10: {
    title: "Pequenos detalhes se formando",
    description: "O bebê continua se desenvolvendo, e cada detalhe vai tornando esse momento ainda mais especial para nossa família."
  },
  11: {
    title: "Crescendo com muito amor",
    description: "A cada semana, nosso bebê cresce mais um pouquinho, enchendo nossos corações de expectativa e carinho."
  },
  12: {
    title: "Uma fase muito especial",
    description: "Estamos chegando a uma etapa muito importante da gravidez, com muita emoção e gratidão por cada momento vivido."
  },
  13: {
    title: "Um novo capítulo começa",
    description: "Entramos em uma fase cheia de esperança, imaginando cada sorriso, cada abraço e cada pedacinho da nossa vida com você."
  },
  14: {
    title: "Mais forte a cada dia",
    description: "Nosso bebê segue crescendo com delicadeza, enquanto aqui fora o amor também ganha mais espaço dentro de nós."
  },
  15: {
    title: "Carinho em cada pensamento",
    description: "Mesmo tão pequeno, o bebê já ocupa um lugar enorme nos nossos planos, nas nossas conversas e nos nossos sonhos."
  },
  16: {
    title: "Uma presença cada vez mais real",
    description: "A jornada fica mais bonita a cada semana, e a expectativa de sentir cada movimento transforma tudo em emoção."
  },
  17: {
    title: "O amor ganha movimento",
    description: "Nesta fase, imaginamos o bebê se mexendo suavemente, lembrando que uma nova vida cresce com calma e cuidado."
  },
  18: {
    title: "Descobertas que emocionam",
    description: "Cada consulta, cada conversa e cada detalhe fazem essa espera parecer ainda mais preciosa para a nossa família."
  },
  19: {
    title: "Quase na metade do caminho",
    description: "Chegamos perto de uma marca importante, com o coração cheio de gratidão por tudo que já vivemos até aqui."
  },
  20: {
    title: "Metade da jornada de amor",
    description: "A metade da gravidez chega como um abraço no coração, mostrando o quanto já caminhamos e o quanto ainda vamos viver."
  },
  21: {
    title: "Um laço que só cresce",
    description: "O bebê continua se desenvolvendo, e nosso vínculo fica mais forte em cada cuidado, palavra e sonho compartilhado."
  },
  22: {
    title: "Nossa rotina com mais ternura",
    description: "Tudo ao redor começa a ganhar um novo sentido, como se a casa, os planos e os dias já esperassem por você."
  },
  23: {
    title: "Pequenos sinais de vida",
    description: "A espera fica mais viva quando imaginamos os movimentos do bebê e o mundo que estamos preparando para recebê-lo."
  },
  24: {
    title: "Crescendo dentro do nosso amor",
    description: "Semana após semana, o bebê encontra aconchego e nós encontramos novas formas de amar alguém que ainda vamos conhecer."
  },
  25: {
    title: "Um coração cheio de planos",
    description: "Já pensamos em cheiros, sons, cantinhos e momentos simples que um dia serão parte da nossa história em família."
  },
  26: {
    title: "A espera ganha forma",
    description: "A barriga, as lembranças e os registros contam uma história bonita que começou pequena e agora ocupa tudo com amor."
  },
  27: {
    title: "Chegando mais perto",
    description: "Cada semana vencida nos aproxima da chegada do bebê e aumenta a vontade de viver esse amor de perto."
  },
  28: {
    title: "Um cuidado ainda mais especial",
    description: "Entramos em uma fase de muita atenção, carinho e preparação, celebrando o caminho que nos trouxe até aqui."
  },
  29: {
    title: "Nossa casa te imagina",
    description: "A família já começa a te incluir em cada plano, como se cada cantinho esperasse para ganhar sua presença."
  },
  30: {
    title: "Dez semanas para sonhar",
    description: "A contagem parece mais real, e cada dia carrega um misto de ansiedade boa, ternura e muita gratidão."
  },
  31: {
    title: "Preparando o coração",
    description: "Enquanto organizamos detalhes, também preparamos o coração para a transformação mais bonita das nossas vidas."
  },
  32: {
    title: "Um amor que já transborda",
    description: "O bebê cresce, a barriga muda e a nossa expectativa se espalha por tudo que fazemos e sentimos."
  },
  33: {
    title: "Quase nos seus braços",
    description: "A chegada parece mais próxima, e cada semana nos lembra que em breve vamos conhecer o rostinho tão sonhado."
  },
  34: {
    title: "Dias de aconchego",
    description: "Seguimos cuidando, esperando e imaginando o primeiro colo, o primeiro olhar e a primeira vez que ouviremos você de pertinho."
  },
  35: {
    title: "O ninho ganha carinho",
    description: "Tudo começa a ficar pronto com calma e amor, para que o bebê encontre um lar cheio de proteção e ternura."
  },
  36: {
    title: "A reta final se aproxima",
    description: "Estamos quase lá. A ansiedade cresce, mas o amor cresce junto, trazendo força para viver cada dia dessa espera."
  },
  37: {
    title: "Você está quase chegando",
    description: "A família te espera com o coração aberto, contando os dias para transformar sonhos em presença."
  },
  38: {
    title: "Prontos para te receber",
    description: "Cada detalhe agora parece carregar seu nome, seu espaço e a alegria de saber que falta muito pouco."
  },
  39: {
    title: "O abraço está perto",
    description: "A espera chega aos seus dias mais intensos, com emoção, cuidado e a certeza de que nossa vida está prestes a mudar."
  },
  40: {
    title: "Bem-vindo, nosso amor",
    description: "Chegamos à semana mais esperada, com o coração cheio de amor para receber o bebê que já transformou nossa família."
  }
};

// Comparações visuais aproximadas para o diário familiar.
// Edite "comparison", "size" e "note" se quiser usar outra referência carinhosa.
const weekGrowth = {
  9: { comparison: "um feijãozinho", size: "cerca de 2,3 cm", note: "O bebê ainda é bem pequeno, mas cresce rápido e começa a parecer cada vez mais com um bebê." },
  10: { comparison: "uma uva pequena", size: "cerca de 3,1 cm", note: "Os detalhes ficam mais delicados, e essa sementinha de amor continua ganhando forma." },
  11: { comparison: "um figo pequeno", size: "cerca de 4,1 cm", note: "A cada dia, o bebê se desenvolve com calma, protegido e cercado de carinho." },
  12: { comparison: "um limão pequeno", size: "cerca de 5,4 cm", note: "Uma fase marcante: o bebê segue crescendo e trazendo ainda mais emoção para a família." },
  13: { comparison: "um pêssego", size: "cerca de 7,4 cm", note: "O corpinho começa a ficar mais proporcional e os movimentos ficam cada vez mais especiais." },
  14: { comparison: "um limão siciliano", size: "cerca de 8,7 cm", note: "O bebê cresce com energia, enquanto a espera ganha novos sonhos e planos." },
  15: { comparison: "uma maçã pequena", size: "cerca de 10,1 cm", note: "Os traços continuam se formando, e o amor da mamãe e do papai cresce junto." },
  16: { comparison: "um abacate pequeno", size: "cerca de 11,6 cm", note: "A presença do bebê fica cada vez mais real dentro da barriga da mamãe Julianne." },
  17: { comparison: "uma pera", size: "cerca de 13 cm", note: "O bebê ganha força aos poucos, e a família imagina cada movimento com ternura." },
  18: { comparison: "uma batata-doce pequena", size: "cerca de 14,2 cm", note: "Cada detalhe dessa fase vira memória antes mesmo do primeiro abraço." },
  19: { comparison: "uma manga", size: "cerca de 15,3 cm", note: "O crescimento segue bonito, trazendo uma mistura gostosa de ansiedade e gratidão." },
  20: { comparison: "uma banana pequena", size: "cerca de 16,4 cm", note: "Metade da caminhada chega como uma celebração para Julianne e Juander." },
  21: { comparison: "uma cenoura", size: "cerca de 26,7 cm", note: "Daqui em diante, a comparação considera o bebê mais esticadinho, da cabeça aos pés." },
  22: { comparison: "um mamão pequeno", size: "cerca de 27,8 cm", note: "O bebê continua crescendo, e a casa já começa a imaginar sua chegada." },
  23: { comparison: "uma berinjela pequena", size: "cerca de 28,9 cm", note: "A jornada fica mais viva, com novos registros e sonhos para guardar." },
  24: { comparison: "uma espiga de milho", size: "cerca de 30 cm", note: "O bebê cresce em aconchego, embalado pelo cuidado da mamãe." },
  25: { comparison: "uma couve-flor pequena", size: "cerca de 34,6 cm", note: "Cada semana traz um pouco mais de presença, carinho e expectativa." },
  26: { comparison: "uma alface pequena", size: "cerca de 35,6 cm", note: "O bebê ganha mais espaço na barriga e mais espaço ainda no coração da família." },
  27: { comparison: "uma couve-flor", size: "cerca de 36,6 cm", note: "A espera se aproxima de uma nova fase, cheia de cuidado e preparação." },
  28: { comparison: "uma berinjela", size: "cerca de 37,6 cm", note: "A reta de crescimento segue firme, com o bebê cada vez mais presente nos planos." },
  29: { comparison: "uma abóbora pequena", size: "cerca de 38,6 cm", note: "A família já sente que cada dia aproxima o primeiro encontro." },
  30: { comparison: "um repolho", size: "cerca de 39,9 cm", note: "Dez semanas para sonhar, organizar detalhes e preparar o coração." },
  31: { comparison: "um coco", size: "cerca de 41,1 cm", note: "O bebê segue ganhando peso e carinho em cada pensamento da mamãe e do papai." },
  32: { comparison: "um melão pequeno", size: "cerca de 42,4 cm", note: "A espera fica mais concreta, e o ninho ganha cada vez mais amor." },
  33: { comparison: "um abacaxi", size: "cerca de 43,7 cm", note: "Cada semana parece dizer que o abraço está chegando mais perto." },
  34: { comparison: "um melão", size: "cerca de 45 cm", note: "O bebê cresce em aconchego enquanto a família se prepara com doçura." },
  35: { comparison: "um melão grande", size: "cerca de 46,2 cm", note: "A contagem fica emocionante, cheia de detalhes e pequenos cuidados." },
  36: { comparison: "um mamão grande", size: "cerca de 47,4 cm", note: "A reta final se aproxima com amor, calma e muita expectativa." },
  37: { comparison: "uma acelga", size: "cerca de 48,6 cm", note: "O bebê está quase pronto para transformar presença em colo." },
  38: { comparison: "uma abóbora média", size: "cerca de 49,8 cm", note: "Tudo parece ganhar sentido quando imaginamos o primeiro olhar." },
  39: { comparison: "uma melancia pequena", size: "cerca de 50,7 cm", note: "A espera chega aos dias mais intensos, com amor transbordando pela casa." },
  40: { comparison: "uma melancia", size: "cerca de 51,2 cm", note: "A semana mais esperada chega com o coração pronto para conhecer esse amor." }
};

// Placeholders da galeria: troque os textos ou substitua por imagens reais quando quiser.
const galleryItems = [
  {
    title: "Foto da barriga",
    key: "barriga",
    label: "Barriga",
    description: "Espaço para acompanhar o crescimento da barriga com carinho."
  },
  {
    title: "Ultrassom",
    key: "ultrassom",
    label: "Ultrassom",
    description: "Um cantinho para guardar aquelas imagens que fazem tudo parecer ainda mais real."
  },
  {
    title: "Momentos especiais",
    key: "momentos",
    label: "Momentos",
    description: "Fotos de celebrações, descobertas e dias que merecem ficar na memória."
  },
  {
    title: "Fotos mês a mês",
    key: "mes-a-mes",
    label: "Mês a mês",
    description: "Registros mensais para ver como a jornada foi mudando com o tempo."
  },
  {
    title: "Fotos da família",
    key: "familia",
    label: "Família",
    description: "Retratos de quem já espera o bebê com amor e braços abertos."
  }
];

const selectors = {
  currentAgeText: document.querySelector("#current-age-text"),
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
  progressPercent: document.querySelector("#progress-percent"),
  pregnancyProgress: document.querySelector("#pregnancy-progress"),
  progressCopy: document.querySelector("#progress-copy"),
  timeline: document.querySelector("#timeline"),
  galleryGrid: document.querySelector("#gallery-grid"),
  galleryLinkForm: document.querySelector("#gallery-link-form"),
  galleryImageUrl: document.querySelector("#gallery-image-url"),
  galleryCategory: document.querySelector("#gallery-category"),
  galleryTitleInput: document.querySelector("#gallery-title-input"),
  lightbox: document.querySelector("#lightbox"),
  lightboxArt: document.querySelector("#lightbox-art"),
  lightboxImage: document.querySelector("#lightbox-image"),
  lightboxTitle: document.querySelector("#lightbox-title"),
  lightboxDescription: document.querySelector("#lightbox-description"),
  messageForm: document.querySelector("#message-form"),
  messageInput: document.querySelector("#message-input"),
  messagesList: document.querySelector("#messages-list"),
  nextWeekButton: document.querySelector("#next-week-button"),
  growthBaby: document.querySelector("#growth-baby"),
  growthObject: document.querySelector("#growth-object"),
  growthWeekLabel: document.querySelector("#growth-week-label"),
  growthComparison: document.querySelector("#growth-comparison"),
  growthSize: document.querySelector("#growth-size"),
  growthDescription: document.querySelector("#growth-description"),
  growthWeekSelect: document.querySelector("#growth-week-select"),
  growthPrev: document.querySelector("#growth-prev"),
  growthNext: document.querySelector("#growth-next"),
  growthPlay: document.querySelector("#growth-play"),
  themeToggle: document.querySelector(".theme-toggle"),
  themeIcon: document.querySelector(".theme-icon"),
  menuToggle: document.querySelector(".menu-toggle"),
  mainNav: document.querySelector(".main-nav")
};

let nextWeekCursor = getCurrentWeek();
let growthWeekCursor = getCurrentWeek();
let growthIsPlaying = true;
let growthTimer = null;
let timelineRendered = false;
let timelineVideosReady = false;

function diffInDays(fromDate, toDate) {
  const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  const end = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
  return Math.floor((end - start) / 86400000);
}

function getGestationalDays(date = new Date()) {
  return Math.max(0, INITIAL_GESTATIONAL_DAYS + diffInDays(REFERENCE_DATE, date));
}

function getCurrentWeek(date = new Date()) {
  const week = Math.floor(getGestationalDays(date) / 7);
  return Math.min(40, Math.max(9, week));
}

function formatGestationalAge(days) {
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  const weekText = weeks === 1 ? "semana" : "semanas";
  const dayText = remainingDays === 1 ? "dia" : "dias";
  return `${weeks} ${weekText} e ${remainingDays} ${dayText}`;
}

function updatePregnancyStatus() {
  const gestationalDays = Math.min(TOTAL_GESTATIONAL_DAYS, getGestationalDays());
  const percent = Math.min(100, (gestationalDays / TOTAL_GESTATIONAL_DAYS) * 100);

  selectors.currentAgeText.textContent = formatGestationalAge(gestationalDays);
  selectors.progressPercent.textContent = `${percent.toFixed(1).replace(".", ",")}%`;
  selectors.pregnancyProgress.style.width = `${percent}%`;
  selectors.progressCopy.textContent = `${formatGestationalAge(gestationalDays)} vividos de uma jornada estimada em 40 semanas.`;
}

function updateCountdown() {
  const now = new Date();
  const distance = Math.max(0, DUE_DATE - now);
  const totalSeconds = Math.floor(distance / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  selectors.days.textContent = days;
  selectors.hours.textContent = String(hours).padStart(2, "0");
  selectors.minutes.textContent = String(minutes).padStart(2, "0");
  selectors.seconds.textContent = String(seconds).padStart(2, "0");
}

function getGrowthScale(week) {
  return 0.55 + ((week - 9) / 31) * 1.25;
}

function renderGrowthOptions() {
  const fragment = document.createDocumentFragment();

  for (let week = 9; week <= 40; week += 1) {
    const option = document.createElement("option");
    option.value = String(week);
    option.textContent = `Semana ${week}`;
    fragment.appendChild(option);
  }

  selectors.growthWeekSelect.appendChild(fragment);
}

function updateGrowthScene(week) {
  const safeWeek = Math.min(40, Math.max(9, Number(week)));
  const data = weekGrowth[safeWeek];
  const scale = getGrowthScale(safeWeek);
  const hue = 330 - ((safeWeek - 9) * 2.3);

  growthWeekCursor = safeWeek;
  selectors.growthWeekLabel.textContent = `Semana ${safeWeek}`;
  selectors.growthComparison.textContent = `Tamanho de ${data.comparison}`;
  selectors.growthSize.textContent = `${data.size}, aproximadamente.`;
  selectors.growthDescription.textContent = data.note;
  selectors.growthWeekSelect.value = String(safeWeek);
  selectors.growthBaby.style.setProperty("--baby-scale", scale.toFixed(2));
  selectors.growthBaby.style.setProperty("--baby-hue", hue.toFixed(0));
  selectors.growthObject.textContent = data.comparison;
  selectors.growthObject.style.setProperty("--object-scale", (0.88 + scale * 0.12).toFixed(2));
}

function stepGrowthScene(direction = 1) {
  const nextWeek = growthWeekCursor + direction;
  updateGrowthScene(nextWeek > 40 ? 9 : nextWeek < 9 ? 40 : nextWeek);
}

function getWeekAssetPath(folder, week, extension) {
  return `assets/${folder}/semana-${String(week).padStart(2, "0")}.${extension}`;
}

function startGrowthAnimation() {
  window.clearInterval(growthTimer);
  growthTimer = window.setInterval(() => stepGrowthScene(1), 3200);
}

function toggleGrowthPlayback() {
  growthIsPlaying = !growthIsPlaying;
  selectors.growthPlay.textContent = growthIsPlaying ? "Pausar animação" : "Reproduzir animação";

  if (growthIsPlaying) {
    startGrowthAnimation();
  } else {
    window.clearInterval(growthTimer);
  }
}

function renderTimeline() {
  if (timelineRendered) return;

  const currentWeek = getCurrentWeek();
  const fragment = document.createDocumentFragment();

  for (let week = 9; week <= 40; week += 1) {
    const item = weekTexts[week];
    const growth = weekGrowth[week];
    const card = document.createElement("article");
    card.className = `timeline-card reveal${week === currentWeek ? " is-current" : ""}`;
    card.id = `semana-${week}`;

    card.innerHTML = `
      <div class="week-dot" aria-hidden="true">${week}</div>
      <div class="timeline-body">
        <div class="timeline-topline">
          <span class="week-label">Semana ${week}${week === 9 ? " • início com 9 semanas e 1 dia" : ""}</span>
          ${week === currentWeek ? '<span class="current-badge">Fase atual</span>' : ""}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="week-size">
          <span>Tamanho aproximado</span>
          <strong>${growth.comparison}</strong>
          <small>${growth.size}</small>
        </div>
        <div class="timeline-media" aria-label="Espaços para mídia da semana ${week}">
          <div class="week-media-card">
            <img src="${getWeekAssetPath("images", week, "png")}" alt="Imagem ilustrativa do bebê na semana ${week}, tamanho de ${growth.comparison}" loading="lazy">
            <div>
              <strong>Imagem ilustrativa da semana ${week}</strong>
              <small>Como ${growth.comparison}</small>
            </div>
          </div>
          <div class="week-media-card">
            <video class="timeline-video" controls muted loop playsinline preload="none" poster="${getWeekAssetPath("images", week, "png")}" aria-label="Vídeo animado do bebê dentro da barriga da mamãe na semana ${week}">
              <source src="${getWeekAssetPath("videos", week, "webm")}" type="video/webm">
              Seu navegador não suporta vídeo HTML5.
            </video>
            <div>
              <strong>Vídeo da semana ${week}</strong>
              <small>Bebê dentro da barriga da mamãe</small>
            </div>
          </div>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  }

  selectors.timeline.appendChild(fragment);
  timelineRendered = true;
}

function loadGalleryLinks() {
  try {
    return JSON.parse(localStorage.getItem(GALLERY_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveGalleryLinks(items) {
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(items));
}

function renderGalleryOptions() {
  const fragment = document.createDocumentFragment();

  galleryItems.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.key;
    option.textContent = item.title;
    fragment.appendChild(option);
  });

  selectors.galleryCategory.appendChild(fragment);
}

function renderGallery() {
  const fragment = document.createDocumentFragment();
  const savedImages = loadGalleryLinks();

  selectors.galleryGrid.innerHTML = "";

  galleryItems.forEach((item) => {
    const saved = savedImages[item.key];
    const title = saved?.title || item.title;
    const imageUrl = saved?.url || "";
    const button = document.createElement("button");
    button.className = `gallery-card reveal${imageUrl ? " has-image" : ""}`;
    button.type = "button";
    button.dataset.key = item.key;
    button.dataset.title = title;
    button.dataset.label = item.label;
    button.dataset.description = saved?.description || item.description;
    button.dataset.imageUrl = imageUrl;
    button.innerHTML = `
      <div class="gallery-art">
        ${imageUrl ? `<img src="${imageUrl}" alt="${escapeHtml(title)}" loading="lazy">` : `<span>${item.label}</span>`}
      </div>
      <h3>${title}</h3>
      <p>${saved?.description || item.description}</p>
      ${imageUrl ? '<span class="gallery-remove" data-remove-image="true">Remover imagem</span>' : ""}
    `;

    fragment.appendChild(button);
  });

  selectors.galleryGrid.appendChild(fragment);
}

function openLightbox(item) {
  if (item.dataset.imageUrl) {
    selectors.lightboxArt.style.display = "none";
    selectors.lightboxImage.src = item.dataset.imageUrl;
    selectors.lightboxImage.alt = item.dataset.title;
    selectors.lightboxImage.style.display = "block";
  } else {
    selectors.lightboxImage.removeAttribute("src");
    selectors.lightboxImage.style.display = "none";
    selectors.lightboxArt.style.display = "grid";
    selectors.lightboxArt.innerHTML = `<span>${item.dataset.label}</span>`;
  }

  selectors.lightboxTitle.textContent = item.dataset.title;
  selectors.lightboxDescription.textContent = item.dataset.description;
  selectors.lightbox.classList.add("open");
  selectors.lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  selectors.lightbox.classList.remove("open");
  selectors.lightbox.setAttribute("aria-hidden", "true");
  selectors.lightboxImage.removeAttribute("src");
  document.body.style.overflow = "";
}

function saveGalleryImage(event) {
  event.preventDefault();
  const key = selectors.galleryCategory.value;
  const url = selectors.galleryImageUrl.value.trim();
  const defaultItem = galleryItems.find((item) => item.key === key);
  const title = selectors.galleryTitleInput.value.trim() || defaultItem.title;
  const savedImages = loadGalleryLinks();

  savedImages[key] = {
    url,
    title,
    description: `Imagem adicionada por link em ${new Date().toLocaleDateString("pt-BR")}.`
  };

  saveGalleryLinks(savedImages);
  renderGallery();
  selectors.galleryLinkForm.reset();
  selectors.galleryCategory.value = key;
}

function removeGalleryImage(key) {
  const savedImages = loadGalleryLinks();
  delete savedImages[key];
  saveGalleryLinks(savedImages);
  renderGallery();
}

function loadMessages() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function renderMessages() {
  const messages = loadMessages();
  selectors.messagesList.innerHTML = "";

  if (!messages.length) {
    selectors.messagesList.innerHTML = '<p class="empty-message">Nenhuma mensagem salva ainda. A primeira pode ser a mais especial.</p>';
    return;
  }

  messages.forEach((message) => {
    const card = document.createElement("article");
    card.className = "message-card reveal visible";
    card.innerHTML = `
      <time datetime="${message.createdAt}">${new Date(message.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}</time>
      <p>${escapeHtml(message.text)}</p>
      <button class="delete-message" type="button" data-id="${message.id}">Apagar mensagem</button>
    `;
    selectors.messagesList.appendChild(card);
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function addMessage(text) {
  const messages = loadMessages();
  messages.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    text,
    createdAt: new Date().toISOString()
  });
  saveMessages(messages);
  renderMessages();
}

function deleteMessage(id) {
  const messages = loadMessages().filter((message) => message.id !== id);
  saveMessages(messages);
  renderMessages();
}

function scrollToNextWeek() {
  const current = Math.min(40, Math.max(9, nextWeekCursor));
  const target = document.querySelector(`#semana-${current}`);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  nextWeekCursor = current >= 40 ? 9 : current + 1;
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  selectors.themeIcon.textContent = isDark ? "☀" : "☾";
  localStorage.setItem(THEME_KEY, theme);
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .timeline-card").forEach((element) => observer.observe(element));
}

function setupTimelineVideos() {
  if (timelineVideosReady) return;

  const videos = document.querySelectorAll(".timeline-video");
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {
          video.controls = true;
        });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.55 });

  videos.forEach((video) => observer.observe(video));
  timelineVideosReady = true;
}

function observeNewRevealItems() {
  document.querySelectorAll(".reveal:not(.visible), .timeline-card:not(.visible)").forEach((element) => {
    element.classList.add("visible");
  });
}

function showView(viewName, scrollTarget) {
  const panels = document.querySelectorAll("[data-view-panel]");
  panels.forEach((panel) => {
    const shouldShow = panel.dataset.viewPanel === viewName;
    panel.classList.toggle("view-hidden", !shouldShow);
  });

  document.querySelectorAll("[data-view-target]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.viewTarget === viewName);
  });

  if (viewName === "weeks") {
    renderTimeline();
    setupTimelineVideos();
    startGrowthAnimation();
    observeNewRevealItems();
  }

  const targetSelector = scrollTarget || (viewName === "home" ? "#inicio" : `[data-view-panel="${viewName}"]`);
  const target = document.querySelector(targetSelector);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupEvents() {
  document.querySelectorAll("[data-view-target]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const view = trigger.dataset.viewTarget;
      const target = view === "weeks" ? "#crescimento" : trigger.getAttribute("href");
      showView(view, target);
      selectors.mainNav.classList.remove("open");
      selectors.menuToggle.classList.remove("is-open");
      selectors.menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.scrollTarget === "#inicio") {
        showView("home", "#inicio");
        return;
      }

      const target = document.querySelector(button.dataset.scrollTarget);
      if (button.dataset.scrollTarget === "#linha-do-tempo") {
        showView("weeks", "#linha-do-tempo");
        scrollToNextWeek();
        return;
      }
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  selectors.nextWeekButton.addEventListener("click", scrollToNextWeek);

  selectors.growthPrev.addEventListener("click", () => {
    stepGrowthScene(-1);
  });

  selectors.growthNext.addEventListener("click", () => {
    stepGrowthScene(1);
  });

  selectors.growthWeekSelect.addEventListener("change", (event) => {
    updateGrowthScene(event.target.value);
  });

  selectors.growthPlay.addEventListener("click", toggleGrowthPlayback);

  selectors.galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-card");
    const removeButton = event.target.closest("[data-remove-image]");

    if (removeButton && card) {
      event.stopPropagation();
      removeGalleryImage(card.dataset.key);
      return;
    }

    if (card) openLightbox(card);
  });

  selectors.galleryLinkForm.addEventListener("submit", saveGalleryImage);

  selectors.lightbox.addEventListener("click", (event) => {
    if (event.target === selectors.lightbox || event.target.classList.contains("lightbox-close")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selectors.lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });

  selectors.messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = selectors.messageInput.value.trim();
    if (!text) return;
    addMessage(text);
    selectors.messageInput.value = "";
  });

  selectors.messagesList.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-message");
    if (button) deleteMessage(button.dataset.id);
  });

  selectors.themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    applyTheme(nextTheme);
  });

  selectors.menuToggle.addEventListener("click", () => {
    const isOpen = selectors.mainNav.classList.toggle("open");
    selectors.menuToggle.classList.toggle("is-open", isOpen);
    selectors.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  selectors.mainNav.addEventListener("click", () => {
    selectors.mainNav.classList.remove("open");
    selectors.menuToggle.classList.remove("is-open");
    selectors.menuToggle.setAttribute("aria-expanded", "false");
  });
}

function init() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme || "light");
  renderGrowthOptions();
  updateGrowthScene(growthWeekCursor);
  renderGalleryOptions();
  renderGallery();
  renderMessages();
  updatePregnancyStatus();
  updateCountdown();
  setupEvents();
  setupRevealAnimations();
  showView("home", "#inicio");
  setInterval(updateCountdown, 1000);
  setInterval(updatePregnancyStatus, 60000);
}

init();
