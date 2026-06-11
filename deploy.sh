#!/bin/bash
# deploy.sh — atualiza versão do cache e sobe pro GitHub
# Uso: bash deploy.sh "mensagem do commit"

V=$(date +%Y%m%d%H%M)
MSG=${1:-"deploy $V"}

echo "🔄 Atualizando versão do cache: v=$V"

# Atualiza ?v= em todos os HTML (CSS e JS locais)
for f in index.html pages/seapo.html pages/conteudos-educativos.html pages/certificacao.html; do
  # Troca ?v=XXXXX existente ou adiciona ?v= novo
  sed -i '' -E \
    -e "s|(href=\"[^\"]+/style\.css)(\?v=[^\"]*)?\"|\1?v=$V\"|g" \
    -e "s|(src=\"[^\"]+/i18n\.js)(\?v=[^\"]*)?\"|\1?v=$V\"|g" \
    -e "s|(src=\"[^\"]+/main\.js)(\?v=[^\"]*)?\"|\1?v=$V\"|g" \
    -e "s|(src=\"[^\"]+/nav\.js)(\?v=[^\"]*)?\"|\1?v=$V\"|g" \
    -e "s|(src=\"[^\"]+/footer\.js)(\?v=[^\"]*)?\"|\1?v=$V\"|g" \
    "$f"
  echo "  ✓ $f"
done

git add -A
git commit -m "$MSG"
git push origin main

echo ""
echo "✅ Publicado! GitHub Pages atualiza em ~1 min."
echo "   https://organicointeligente.github.io"
