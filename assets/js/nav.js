(function () {
  var t = window.i18n ? window.i18n.t.bind(window.i18n) : function (k) { return k; };

  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var base = inPages ? '../index.html' : '';
  var pagesBase = inPages ? '' : 'pages/';
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';

  var items = [
    { key: 'nav.sobre',        href: base + '#sobre' },
    { key: 'nav.acoes',        href: base + '#acoes' },
    { key: 'nav.territorio',   href: base + '#territorio' },
    { key: 'nav.conteudos',    href: pagesBase + 'conteudos-educativos.html', file: 'conteudos-educativos.html' },
    { key: 'nav.certificacao', href: pagesBase + 'certificacao.html',         file: 'certificacao.html' },
    { key: 'nav.seapo',        href: pagesBase + 'seapo.html',                file: 'seapo.html' },
    { key: 'nav.parceiros',    href: base + '#parceiros' },
  ];

  var ul = document.getElementById('nav-links');
  if (!ul) return;

  var html = '';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var isCurrent = item.file && item.file === currentFile;
    html += '<li role="none"><a href="' + item.href + '" role="menuitem"'
      + (isCurrent ? ' aria-current="page"' : '')
      + '>' + t(item.key) + '</a></li>';
  }
  ul.innerHTML = html;
})();
