(function () {
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
    + '<img src="' + assets + '/images/logoOrganicoInteligente.png" alt="Logo Org\u00e2nico Inteligente" class="footer-logo-img footer-logo-img--full">'
    + '</a>'
    + '</div>'
    + '<p>Programa de ensino, pesquisa e extens\u00e3o dedicado ao fortalecimento da agroecologia e produ\u00e7\u00e3o org\u00e2nica no Sert\u00e3o Produtivo da Bahia.</p>'
    + '<p style="margin-top:12px;font-size:12px;color:rgba(255,255,255,0.4);">IF Baiano Campus Guanambi</p>'
    + '</div>'

    // Col O Projeto
    + '<div class="footer-col">'
    + '<h4>O Projeto</h4>'
    + '<ul>'
    + '<li><a href="' + base + '#sobre">Sobre n\u00f3s</a></li>'
    + '<li><a href="' + base + '#acoes">Nossas a\u00e7\u00f5es</a></li>'
    + '<li><a href="' + base + '#territorio">Territ\u00f3rio</a></li>'
    + '<li><a href="' + base + '#parceiros">Parceiros</a></li>'
    + '</ul>'
    + '</div>'

    // Col Recursos
    + '<div class="footer-col">'
    + '<h4>Recursos</h4>'
    + '<ul>'
    + '<li><a href="' + pages + 'conteudos-educativos.html">Conte\u00fados Educativos</a></li>'
    + '<li><a href="' + pages + 'certificacao.html">Certifica\u00e7\u00e3o Org\u00e2nica</a></li>'
    + '<li><a href="' + pages + 'seapo.html">X SEAPO</a></li>'
    + '</ul>'
    + '</div>'

    // Col Contato
    + '<div class="footer-col">'
    + '<h4>Contato</h4>'
    + '<ul>'
    + '<li><a href="mailto:organicointeligente@ifbaiano.edu.br">E-mail</a></li>'
    + '<li><a href="https://wa.me/5577999501979" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>'
    + '<li><a href="https://instagram.com/organicointeligente" target="_blank" rel="noopener noreferrer">Instagram</a></li>'
    + '<li><a href="https://www.youtube.com/@ifbaianocampusguanambi" target="_blank" rel="noopener noreferrer">YouTube</a></li>'
    + '</ul>'
    + '</div>'

    + '</div>' // footer-grid

    + '<div class="footer-bottom">'
    + '<p>\u00a9 2026 Org\u00e2nico Inteligente \u00b7 Todos os direitos reservados</p>'
    + '<p>Cultivando Sa\u00fade no Sert\u00e3o Produtivo \uD83C\uDF31</p>'
    + '</div>'

    + '</div>'; // footer-inner

  var footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = html;
})();
