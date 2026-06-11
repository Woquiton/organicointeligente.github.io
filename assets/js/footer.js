(function () {
  var t = window.i18n ? window.i18n.t.bind(window.i18n) : function (k) { return k; };

  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var base = inPages ? '../index.html' : '';
  var assets = inPages ? '../assets' : 'assets';
  var pages = inPages ? '' : 'pages/';

  var html = '<div class="footer-inner">'
    + '<div class="footer-grid">'

    // Marca
    + '<div class="footer-brand">'
    + '<div class="footer-logo">'
    + '<a href="' + assets + '/images/logoAdesivos.png" target="_blank" rel="noopener noreferrer">'
    + '<img src="' + assets + '/images/logoOrganicoInteligente.png" alt="Logo Orgânico Inteligente" class="footer-logo-img footer-logo-img--full">'
    + '</a>'
    + '</div>'
    + '<p>' + t('footer.desc') + '</p>'
    + '</div>'

    // Col O Projeto
    + '<div class="footer-col">'
    + '<h4>' + t('footer.col_projeto') + '</h4>'
    + '<ul>'
    + '<li><a href="' + base + '#sobre">' + t('footer.sobre_nos') + '</a></li>'
    + '<li><a href="' + base + '#acoes">' + t('footer.nossas_acoes') + '</a></li>'
    + '<li><a href="' + base + '#territorio">' + t('footer.territorio') + '</a></li>'
    + '<li><a href="' + base + '#parceiros">' + t('footer.parceiros') + '</a></li>'
    + '</ul>'
    + '</div>'

    // Col Recursos
    + '<div class="footer-col">'
    + '<h4>' + t('footer.col_recursos') + '</h4>'
    + '<ul>'
    + '<li><a href="' + pages + 'conteudos-educativos.html">' + t('footer.conteudos') + '</a></li>'
    + '<li><a href="' + pages + 'certificacao.html">' + t('footer.certificacao') + '</a></li>'
    + '<li><a href="' + pages + 'seapo.html">' + t('footer.seapo') + '</a></li>'
    + '</ul>'
    + '</div>'

    // Col Contato
    + '<div class="footer-col">'
    + '<h4>' + t('footer.col_contato') + '</h4>'
    + '<ul>'
    + '<li><a href="mailto:organicointeligente@ifbaiano.edu.br">' + t('footer.email') + '</a></li>'
    + '<li><a href="https://wa.me/5577999501979" target="_blank" rel="noopener noreferrer">' + t('footer.whatsapp') + '</a></li>'
    + '<li><a href="https://instagram.com/organicointeligente" target="_blank" rel="noopener noreferrer">' + t('footer.instagram') + '</a></li>'
    + '</ul>'
    + '</div>'

    + '</div>' // footer-grid

    + '<div class="footer-bottom">'
    + '<p>' + t('footer.copyright') + '</p>'
    + '<p>' + t('footer.tagline') + '</p>'
    + '</div>'

    + '</div>'; // footer-inner

  var footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = html;
})();
