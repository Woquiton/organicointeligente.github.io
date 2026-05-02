  // === Scroll reveal ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // === Menu mobile ===
  function toggleMenu() {
    const links = document.getElementById('nav-links');
    const btn = document.getElementById('hamburger');
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  }

  // === Acessibilidade ===
  let fonteAtual = 100;
  function aumentarFonte() {
    fonteAtual = Math.min(fonteAtual + 10, 140);
    document.body.style.fontSize = fonteAtual + '%';
    showToast('Fonte aumentada para ' + fonteAtual + '%');
  }
  function diminuirFonte() {
    fonteAtual = Math.max(fonteAtual - 10, 80);
    document.body.style.fontSize = fonteAtual + '%';
    showToast('Fonte reduzida para ' + fonteAtual + '%');
  }
  function toggleContraste() {
    document.body.classList.toggle('alto-contraste');
    const on = document.body.classList.contains('alto-contraste');
    showToast(on ? 'Alto contraste ativado' : 'Contraste normal');
  }
  function toggleLeituraSimples() {
    const on = document.body.classList.toggle('leitura-simples');
    if (on) {
      document.querySelectorAll('p').forEach(p => {
        if (!p.dataset.orig) { p.dataset.orig = p.innerHTML; }
      });
    }
    showToast(on ? 'Modo leitura fácil ativado' : 'Modo normal');
  }

  // === Toast ===
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateY(0)';
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(20px)'; }, 3000);
  }

  // === Form cadastro ===
  function confirmarCadastro() {
    const nome = document.getElementById('nome').value;
    const municipio = document.getElementById('municipio').value;
    const perfil = document.getElementById('perfil').value;
    if (!nome || !municipio || !perfil) {
      showToast('⚠️ Preencha os campos obrigatórios');
      return;
    }
    showToast('✅ Cadastro realizado! Entraremos em contato em breve.');
    document.getElementById('nome').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('perfil').value = '';
    document.getElementById('whats').value = '';
  }

  // === Form contato ===
  function enviarMensagem(e) {
    e.preventDefault();
    showToast('✅ Mensagem enviada! Responderemos em breve.');
    e.target.reset();
  }

  // === Smooth nav close on link click ===
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('open');
    });
  });

  // === Número counter animation ===
  function animateNumber(el, target, suffix='') {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  // Stat cards counter
  const statNums = document.querySelectorAll('.stat-num');
  const statVals = [300, 85, 12, 50];
  const statSuffs = ['+', '', '', '+'];
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = Array.from(statNums).indexOf(e.target);
        animateNumber(e.target, statVals[i], statSuffs[i]);
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));

  // === Hero Slideshow ===
  (function () {
    const slides = document.querySelectorAll('.slideshow .slide');
    const dots   = document.querySelectorAll('.slideshow .dot');
    if (!slides.length) return;

    let current = 0;
    let timer;

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() { timer = setInterval(next, 4000); }
    function stopAuto()  { clearInterval(timer); }

    document.querySelector('.slide-next').addEventListener('click', function () { stopAuto(); next(); startAuto(); });
    document.querySelector('.slide-prev').addEventListener('click', function () { stopAuto(); prev(); startAuto(); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { stopAuto(); goTo(i); startAuto(); });
    });

    const ss = document.getElementById('heroSlideshow');
    ss.addEventListener('mouseenter', stopAuto);
    ss.addEventListener('mouseleave', startAuto);

    // Teclado: setas esquerda/direita
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { stopAuto(); prev(); startAuto(); }
      if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
    });

    startAuto();
  })();
