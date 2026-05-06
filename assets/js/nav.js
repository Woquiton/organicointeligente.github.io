(function () {
  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var base = inPages ? '../index.html' : '';
  var pagesBase = inPages ? '' : 'pages/';
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';

  var items = [
    { label: 'Sobre',                 href: base + '#sobre' },
    { label: 'A\u00e7\u00f5es',       href: base + '#acoes' },
    { label: 'Territ\u00f3rio',       href: base + '#territorio' },
    { label: 'Conte\u00fados Educativos', href: pagesBase + 'conteudos-educativos.html', file: 'conteudos-educativos.html' },
    { label: 'X SEAPO',               href: pagesBase + 'seapo.html', file: 'seapo.html' },
    { label: 'Parceiros',             href: base + '#parceiros' },
  ];

  var ul = document.getElementById('nav-links');
  if (!ul) return;

  var html = '';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var isCurrent = item.file && item.file === currentFile;
    html += '<li role="none"><a href="' + item.href + '" role="menuitem"'
      + (isCurrent ? ' aria-current="page"' : '')
      + '>' + item.label + '</a></li>';
  }
  ul.innerHTML = html;
})();
