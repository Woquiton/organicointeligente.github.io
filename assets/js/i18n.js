/* =========================================================
   i18n.js — Internacionalização PT-BR / EN
   Orgânico Inteligente · organicointeligente.com.br
   Dicionários inline (sem fetch) para compatibilidade com
   carregamento síncrono de nav.js e footer.js.
   ========================================================= */
(function () {

  /* -------------------------------------------------------
     DICIONÁRIOS
  ------------------------------------------------------- */
  var _t = {

    /* ===================== PORTUGUÊS ===================== */
    'pt': {

      /* --- NAV --- */
      'nav.skip':              'Ir para o conteúdo principal',
      'nav.logo_aria':         'Página inicial - Orgânico Inteligente',
      'nav.tagline':           'Cultivando Saúde no Sertão Produtivo',
      'nav.hamburger_aria':    'Abrir menu',
      'nav.aria_main':         'Menu principal',
      'nav.sobre':             'Sobre',
      'nav.acoes':             'Ações',
      'nav.territorio':        'Território',
      'nav.conteudos':         'Conteúdos Educativos',
      'nav.certificacao':      'Certificação',
      'nav.seapo':             'X SEAPO',
      'nav.parceiros':         'Parceiros',

      /* --- FOOTER --- */
      'footer.desc':           'Programa de ensino, pesquisa e extensão dedicado ao fortalecimento da agroecologia e produção orgânica no Sertão Produtivo da Bahia.',
      'footer.col_projeto':    'O Projeto',
      'footer.sobre_nos':      'Sobre nós',
      'footer.nossas_acoes':   'Nossas ações',
      'footer.territorio':     'Território',
      'footer.parceiros':      'Parceiros',
      'footer.col_recursos':   'Recursos',
      'footer.conteudos':      'Conteúdos Educativos',
      'footer.certificacao':   'Certificação Orgânica',
      'footer.seapo':          'X SEAPO',
      'footer.col_contato':    'Contato',
      'footer.email':          'E-mail',
      'footer.whatsapp':       'WhatsApp',
      'footer.instagram':      'Instagram',
      'footer.copyright':      '© 2026 Orgânico Inteligente · Todos os direitos reservados',
      'footer.tagline':        'Cultivando Saúde no Sertão Produtivo 🌱',

      /* --- ACESSIBILIDADE --- */
      'acess.bar_aria':        'Ferramentas de acessibilidade',
      'acess.label':           'Acessibilidade:',
      'acess.contraste':       '🌓 Contraste',
      'acess.contraste_aria':  'Alternar alto contraste',
      'acess.contraste_title': 'Alto Contraste',
      'acess.aumentar':        'A+',
      'acess.aumentar_aria':   'Aumentar fonte',
      'acess.aumentar_title':  'Aumentar fonte',
      'acess.resetar':         'A',
      'acess.resetar_aria':    'Fonte padrão',
      'acess.resetar_title':   'Fonte padrão',
      'acess.diminuir':        'A-',
      'acess.diminuir_aria':   'Diminuir fonte',
      'acess.diminuir_title':  'Diminuir fonte',
      'acess.leitura':         '📖 Leitura fácil',
      'acess.leitura_aria':    'Leitura simplificada',
      'acess.leitura_title':   'Leitura simples',

      /* --- TOAST --- */
      'toast.font_increased':  'Fonte aumentada para {size}%',
      'toast.font_decreased':  'Fonte reduzida para {size}%',
      'toast.font_reset':      'Fonte redefinida para o padrão',
      'toast.contrast_on':     'Alto contraste ativado',
      'toast.contrast_off':    'Contraste normal',
      'toast.reading_on':      'Modo leitura fácil ativado',
      'toast.reading_off':     'Modo normal',

      /* --- FORMULÁRIOS --- */
      'form.required':         '⚠️ Preencha os campos obrigatórios',
      'form.register_ok':      '✅ Cadastro realizado! Entraremos em contato em breve.',
      'form.contact_ok':       '✅ Mensagem enviada! Responderemos em breve.',

      /* --- TOGGLE DE IDIOMA --- */
      'lang.toggle_aria':      'Mudar para inglês',

      /* =================== INDEX.HTML ==================== */

      /* Chamada SEAPO */
      'index.seapo_badge':     'Inscrições abertas',
      'index.seapo_titulo':    'X SEAPO 2026 — Seminário de Agroecologia e Produção Orgânica',
      'index.seapo_sub':       '21 e 22 de agosto de 2026 · Guanambi, Bahia · Gratuito e aberto ao público',
      'index.seapo_btn':       'Ver programação →',
      'index.seapo_chamada_aria': 'Chamada para o X SEAPO 2026',

      /* Hero */
      'index.hero_aria':       'Galeria de imagens do projeto',
      'index.slide_prev_aria': 'Imagem anterior',
      'index.slide_next_aria': 'Próxima imagem',
      'index.slides_nav_aria': 'Navegação do slideshow',

      /* Stats */
      'index.stats_aria':      'Impacto do projeto em números',
      'index.stat1_label':     'Agricultores capacitados',
      'index.stat2_label':     'Certificações orgânicas',
      'index.stat3_label':     'Municípios no Sertão',
      'index.stat4_label':     'Oficinas realizadas',

      /* Sobre — seção */
      'index.sobre_aria':      'Sobre o Orgânico Inteligente',
      'index.sobre_tag':       '🏛️ Institucional',
      'index.sobre_titulo':    'Conectando Instituto Federal, campo e comunidade',
      'index.sobre_p1':        'O <strong>Orgânico Inteligente</strong> é um programa de ensino, pesquisa e extensão voltado ao fortalecimento da agricultura orgânica e agroecológica no semiárido baiano. O programa atua diretamente no território do Sertão Produtivo da Bahia, no Território de Identidade do Sudoeste Baiano, com destaque para o município de Guajeru, e também no Território Velho Chico, especialmente em Igaporã. Essas regiões são marcadas pela forte presença da agricultura familiar, pela irregularidade das chuvas, pela resistência do povo sertanejo e pela riqueza cultural e ambiental.',
      'index.sobre_p2':        'O programa desenvolve ações junto a agricultores e agricultoras familiares, promovendo a transição do modelo convencional para sistemas agroecológicos sustentáveis até a conquista da certificação orgânica. As atividades incluem assistência técnica, capacitações, certificação participativa, desenvolvimento de tecnologias de baixo custo, pesquisa aplicada e apoio ao acesso a mercados institucionais e programas governamentais, como o Programa de Aquisição de Alimentos e o Programa Nacional de Alimentação Escolar.',
      'index.sobre_p3':        'A metodologia do Orgânico Inteligente parte das necessidades reais enfrentadas pelos agricultores, buscando soluções práticas e cientificamente fundamentadas que tornem os sistemas produtivos mais sustentáveis, resilientes e economicamente rentáveis. O programa também incentiva a valorização dos saberes tradicionais e da biodiversidade regional, fortalecendo a autonomia das famílias agricultoras.',
      'index.sobre_p4':        'Além disso, o Orgânico Inteligente integra estudantes, professores, pesquisadores, extensionistas e comunidades rurais em uma rede colaborativa de construção do conhecimento. Essa interação promove formação acadêmica, inovação no campo e geração de impactos concretos na qualidade de vida das pessoas, no fortalecimento da agricultura familiar e na conservação do meio ambiente no semiárido baiano.',

      /* Nossa História */
      'index.historia_titulo': 'Nossa História',
      'index.historia_p1':     'O Orgânico Inteligente nasceu da necessidade de promover a capacitação de agricultores, estudantes, técnicos e professores, aliando ensino, pesquisa e extensão ao desenvolvimento de tecnologias sociais de baixo custo voltadas ao fortalecimento da produção orgânica. O programa surgiu com o propósito de construir, de forma participativa e dialogada, a integração entre o conhecimento científico e os saberes tradicionais, valorizando as experiências das comunidades e incentivando práticas sustentáveis no campo e na cidade.',
      'index.historia_p2':     'Sua trajetória teve início oficialmente em 3 de outubro de 2016, com a assinatura do Termo de Outorga no Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq, por meio do Projeto Núcleo de Agroecologia e Produção Orgânica. A partir desse marco, o programa passou a desenvolver ações voltadas à promoção da agricultura orgânica e agroecológica, fortalecendo a articulação entre instituições de ensino, agricultores familiares e comunidades.',
      'index.historia_p3':     'Desde sua criação, o Orgânico Inteligente atua na ampliação da oferta de alimentos saudáveis, no fortalecimento da segurança alimentar e nutricional e na geração de renda para famílias agricultoras. O programa apoia processos de transição para sistemas produtivos mais sustentáveis, resilientes e economicamente viáveis, em conformidade com a Lei nº 10.831/2003, que regulamenta a produção orgânica no Brasil.',
      'index.historia_p4':     'Atualmente, o Orgânico Inteligente conta com uma equipe formada por mais de 10 integrantes, entre estudantes, pesquisadores, técnicos e professores, que desenvolvem atividades integradas de pesquisa, ensino e extensão. As ações realizadas envolvem capacitações, desenvolvimento de tecnologias sustentáveis, produção científica, assistência técnica, oficinas, cursos e projetos voltados ao fortalecimento da agricultura orgânica e agroecológica.',
      'index.historia_p5':     'Ao longo de sua trajetória, o Orgânico Inteligente consolidou-se como um espaço de formação, inovação e transformação social, incentivando práticas produtivas que respeitam o meio ambiente, valorizam a agricultura familiar e promovem qualidade de vida para produtores e consumidores.',

      /* MVV */
      'index.mvv_missao_titulo': '🎯 Missão',
      'index.mvv_missao_texto':  'Fortalecer a produção orgânica no Sertão Produtivo e na Bahia a partir das novas tecnologias de baixo custo criadas com ciência e sabedoria popular.',
      'index.mvv_visao_titulo':  '🔭 Visão',
      'index.mvv_visao_texto':   'Ser referência em produção orgânica e desenvolvimento rural sustentável na Bahia.',
      'index.mvv_valores_titulo':'💚 Valores',
      'index.mvv_valores_texto': 'Sustentabilidade, solidariedade, conhecimento e respeito à terra, às pessoas e aos animais.',

      /* Fundadora */
      'index.fundadora_tag':    '👩‍🌾 Fundadora',
      'index.fundadora_titulo': 'Quem é Felizarda Bebé?',
      'index.fundadora_p1':     'Natural de Candiba, uma pequena cidade do interior da Bahia com cerca de 14 mil habitantes, é filha de agricultores familiares e cresceu em um ambiente marcado pelo trabalho, pela fé e pelo compromisso com a comunidade. Desde a infância, destacou-se pela participação ativa na igreja católica, pela liderança comunitária e pelo excelente desempenho escolar no Colégio Municipal Dom José Pedro Costa, onde recebeu o prêmio de melhor aluna da 8ª série.',
      'index.fundadora_p2':     'Após concluir o curso de Magistério, mudou-se para Vitória da Conquista, onde se formou em Agronomia. Em seguida, foi para Recife para cursar mestrado e doutorado na Universidade Federal Rural de Pernambuco, destacando-se pelo excelente desempenho acadêmico, com conceito máximo (A) em todas as disciplinas.',
      'index.fundadora_p3':     'Em 2008, foi aprovada em concurso público para professora substituta do Instituto Federal de Pernambuco – Campus Santo Antão. Em 2009, conquistou aprovação nos concursos do Instituto Agronômico de Pernambuco e do Instituto Federal Baiano, assumindo como docente do Campus Guanambi em abril de 2010.',
      'index.fundadora_p4':     'Atualmente, é professora titular do Instituto Federal Baiano – Campus Guanambi, além de atuar nos programas de mestrado em Ciências Ambientais, no Campus Serrinha, e em Produção Vegetal no Semiárido, no Campus Guanambi. Sua trajetória acadêmica é marcada por uma produção científica expressiva, com mais de 146 publicações entre artigos e resumos científicos, além da coordenação de mais de 50 projetos de pesquisa e extensão aprovados em instituições federais, como Conselho Nacional de Desenvolvimento Científico e Tecnológico, Ministério do Desenvolvimento Agrário e Agricultura Familiar e Ministério da Agricultura e Pecuária, e estaduais, como a Fundação de Amparo à Pesquisa do Estado da Bahia e IF Baiano (Proex e PROPES).',
      'index.fundadora_p5':     'Ao longo da carreira, já orientou mais de 130 bolsistas de graduação e pós-graduação, consolidando uma ampla atuação na área de Agricultura Orgânica no estado da Bahia. Seu trabalho tem impactado diretamente agricultores e comunidades rurais de municípios como Candiba, Guanambi, Caetité, Caculé, Guajeru e Pindaí.',
      'index.fundadora_p6':     'Entre as iniciativas de destaque está o Programa Orgânico Inteligente em que gerou vários resultados com 44 agricultores certificados e entre eles o "Sítio Gameleira – Comida da Roça", que faz um serviço de entrega de alimentos orgânicos no formato delivery, fortalecendo a agricultura familiar e promovendo alimentação saudável na região.',
      'index.fundadora_lattes': '📄 Currículo Lattes',

      /* Ações */
      'index.acoes_aria':        'Ações e projetos',
      'index.acoes_tag':         '⚙️ O que fazemos',
      'index.acoes_titulo':      'Ações que transformam o campo',
      'index.acoes_desc':        'Do laboratório à roça, desenvolvemos atividades que fortalecem a produção orgânica e a vida no campo.',
      'index.acao1_titulo':      'Produção Orgânica',
      'index.acao1_desc':        'Desenvolvemos pesquisas sobre manejo de solo, controle biológico de pragas, melhor cobertura de solo, bioinsumos de baixo custo e criativo, compostagem e sistemas produtivos adaptados ao Semiárido baiano.',
      'index.acao2_titulo':      'Extensão Rural',
      'index.acao2_desc':        'Levamos conhecimento técnico diretamente às propriedades rurais oriundos dos resultados de nossas pesquisas, com duas visitas semestrais, acompanhamento e suporte contínuo às famílias agricultoras. Além disso, fornecemos mudas de hortaliças para os agricultores orgânicos.',
      'index.acao3_titulo':      'Oficinas e Capacitações',
      'index.acao3_desc':        'Realizamos cursos, palestras, oficinas, dias de campo sobre agricultura orgânica, manejo do solo e do agrossistema orgânico, compostagem, irrigação de baixo custo e muito mais.',
      'index.acao4_titulo':      'Certificação Orgânica',
      'index.acao4_desc':        'Apoiamos a certificação participativa desde a criação de grupos e núcleo até o acesso a mercados diferenciados e melhores preços pelo produto orgânico.',
      'index.acao5_titulo':      'Tecnologias Sociais',
      'index.acao5_desc':        'Desenvolvemos e difundimos tecnologias de baixo custo adaptadas à realidade do Sertão: tratamento das águas cinzas, composteiras e sistemas de captação de água.',
      'index.acao6_titulo':      'Feiras Orgânicas',
      'index.acao6_desc':        'As feiras são realizadas semanalmente conectando produtores orgânicos diretamente com os consumidores, valorizando o alimento saudável e garantindo renda familiar.',
      'index.acao_saibamais':    'Saiba mais',
      'index.tag_solo':          'Solo',
      'index.tag_biologia':      'Biologia',
      'index.tag_semiarido':     'Semiárido',
      'index.tag_visitas':       'Visitas',
      'index.tag_assistencia':   'Assistência técnica',
      'index.tag_cursos':        'Cursos',
      'index.tag_workshops':     'Workshops',
      'index.tag_diascamp':      'Dias de campo',
      'index.tag_spg':           'SPG',
      'index.tag_certificacao':  'Certificação',
      'index.tag_inovacao':      'Inovação',
      'index.tag_baixocusto':    'Baixo custo',
      'index.tag_seapo':         'SEAPO',
      'index.tag_feiras':        'Feiras',
      'index.tag_mercado':       'Mercado',

      /* Território */
      'index.territorio_aria':   'Território de atuação e resultados',
      'index.territorio_tag':    '📍 Onde atuamos',
      'index.territorio_titulo': 'Impacto em todo o Sertão Produtivo',
      'index.territorio_desc':   'Nossa atuação abrange municípios do Território do Sertão Produtivo, levando agroecologia e transformação social.',
      'index.municipios_titulo': '📌 Municípios Atendidos',
      'index.municipios_aria':   'Lista de municípios',
      'index.territorio_nota':   '🗺️ <strong>Território do Sertão Produtivo</strong> — Bahia, Brasil. Região semiárida com forte presença da agricultura familiar e rica biodiversidade da Caatinga.',
      'index.resultado1_num':    '+40%',
      'index.resultado1_label':  'Aumento médio na renda familiar',
      'index.resultado2_label':  'Agricultores com certificação orgânica',
      'index.resultado3_num':    '500+',
      'index.resultado3_label':  'Hectares em transição agroecológica',
      'index.resultado4_num':    '30+',
      'index.resultado4_label':  'Variedades de alimentos orgânicos produzidos',
      'index.resultado5_num':    '60%',
      'index.resultado5_label':  'Das famílias atendidas lideradas por mulheres',

      /* Depoimentos */
      'index.dep_aria':          'Depoimentos de agricultores',
      'index.dep_tag':           '💬 Vozes do Campo',
      'index.dep_titulo':        'O que dizem nossos agricultores',
      'index.dep_desc':          'Histórias reais de transformação e esperança no Sertão Produtivo.',
      'index.dep1_texto':        '"O Orgânico Inteligente transformou a minha vida. Antes eu morava em São Paulo e, quando cheguei à Bahia, foi através do programa que encontrei novas oportunidades e consegui melhorar minha qualidade de vida. Hoje tenho um restaurante na roça e estou me preparando para abrir outro na cidade, utilizando os alimentos orgânicos que produzo. A cada dia me sinto mais feliz e realizada por fazer parte do Orgânico Inteligente."',
      'index.dep1_cidade':       '📍 Comida da Roça',
      'index.dep2_texto':        '"O orgânico inteligente, para mim, para nós aqui em casa, foi muito importante. Nos ajudou a melhorar as nossas técnicas de manejo, ensinou a gente como plantar, como irrigar corretamente, a época certa de fazer o plantio. O orgânico inteligente também nos ajudou a vender. Então, para nós, o orgânico inteligente foi muito bom, tanto economicamente quanto ambientalmente."',
      'index.dep2_cidade':       '📍 Guanambi, BA',
      'index.dep3_texto':        '"As oficinas do projeto mudaram minha visão. Aprendi que a terra é um ser vivo e que cuidar dela com respeito é cuidar de mim e dos meus filhos. A agroecologia é o caminho."',
      'index.dep3_cidade':       '📍 Caetité, BA',
      'index.dep_stars_aria':    '5 estrelas',

      /* Conteúdos */
      'index.conteudos_aria':    'Conteúdos educativos e materiais',
      'index.conteudos_tag':     '📖 Aprendizado',
      'index.conteudos_titulo':  'Conteúdos Educativos',
      'index.conteudos_desc':    'Materiais gratuitos para agricultores, estudantes e técnicos interessados em agroecologia.',
      'index.conteudo1_titulo':  'Panorama da produção orgânica no Estado da Bahia (2014–2023)',
      'index.conteudo1_desc':    'Visão geral e atualizada da produção orgânica na Bahia ao longo de uma década, com dados sobre evolução, municípios e desafios do setor.',
      'index.conteudo1_link':    'Abrir PDF →',
      'index.conteudo2_titulo':  'Cenário da agricultura familiar no Território Sertão',
      'index.conteudo2_desc':    'Caracteriza a agricultura familiar em Candiba-BA, destacando pequenas propriedades, acesso a políticas públicas, desafios de assistência técnica e o papel econômico e alimentar da produção familiar.',
      'index.conteudo2_link':    'Abrir PDF →',
      'index.conteudo3_titulo':  'Extensão rural agroecológica no Território Sertão Produtivo',
      'index.conteudo3_desc':    'Relata ações do Programa Orgânico Inteligente em oficinas, palestras, feiras e atividades de difusão agroecológica em municípios do Sertão Produtivo.',
      'index.conteudo3_link':    'Abrir PDF →',
      'index.ver_todos':         '📚 Ver todos os conteúdos educativos',

      /* Agenda */
      'index.agenda_aria':       'Agenda de eventos e atividades',
      'index.agenda_tag':        '📅 Próximas Atividades',
      'index.agenda_titulo':     'Agenda do Orgânico Inteligente',
      'index.agenda_desc':       'Eventos, visitas, feiras e capacitações — o que está por vir no Sertão Produtivo.',
      'index.ag1_data':          '3 de junho de 2026',
      'index.ag1_titulo':        'Semana de Meio Ambiente de Riacho de Santana',
      'index.ag1_local':         '📍 Riacho de Santana, BA',
      'index.ag1_desc':          'Stand do Orgânico Inteligente com exposição de produtos, materiais educativos e divulgação do programa.',
      'index.ag1_tag':           'Stand',
      'index.ag2_data':          '8 de junho de 2026',
      'index.ag2_titulo':        'Palestra sobre Produção Orgânica em Iuiu',
      'index.ag2_local':         '📍 Iuiu, BA',
      'index.ag2_desc':          'Palestra aberta sobre produção orgânica, bioinsumos e transição agroecológica para agricultores e comunidade local.',
      'index.ag2_tag':           'Palestra',
      'index.ag3_data':          'Junho de 2026',
      'index.ag3_titulo':        'Semana de Meio Ambiente de Guajeru',
      'index.ag3_local':         '📍 Guajeru, BA',
      'index.ag3_desc':          'Stand do Orgânico Inteligente e palestra da Profa. Dra. Felizarda Bebé sobre agroecologia e sustentabilidade no semiárido.',
      'index.ag3_tag':           'Stand · Palestra',
      'index.ag4_data':          'Todo final de semana',
      'index.ag4_titulo':        'Visita de Pares nas Propriedades Rurais',
      'index.ag4_local':         '📍 Sertão Produtivo, BA',
      'index.ag4_desc':          'Visitas técnicas semanais às propriedades dos agricultores orgânicos para acompanhamento, troca de saberes e assistência técnica.',
      'index.ag4_tag':           'Recorrente',
      'index.ag5_data':          'Toda sexta-feira',
      'index.ag5_titulo':        'Feira Orgânica Semanal',
      'index.ag5_local':         '📍 Local rotativo · Sertão Produtivo',
      'index.ag5_desc':          'Feira itinerante semanal conectando produtores orgânicos certificados diretamente aos consumidores. Local divulgado nas redes sociais.',
      'index.ag5_tag':           'Recorrente',
      'index.ag6_data':          '2º semestre de 2026',
      'index.ag6_titulo':        'Curso FIC de Produção Orgânica — 160 horas',
      'index.ag6_local':         '📍 IF Baiano · Campus Guanambi',
      'index.ag6_desc':          'Curso de Formação Inicial e Continuada sobre agroecologia, bioinsumos, certificação e manejo orgânico para agricultores e interessados.',
      'index.ag6_tag':           'Capacitação',
      'index.ag7_data':          '2027',
      'index.ag7_titulo':        'Caravana dos Orgânicos — Irecê',
      'index.ag7_local':         '📍 Irecê, BA',
      'index.ag7_desc':          'Grande mobilização agroecológica levando o Orgânico Inteligente ao Território de Irecê, com feiras, palestras e intercâmbio entre agricultores.',
      'index.ag7_tag':           'Em breve',

      /* Parceiros */
      'index.parceiros_aria':    'Parceiros e instituições',
      'index.parceiros_tag':     '🤝 Parcerias',
      'index.parceiros_titulo':  'Quem nos apoia',
      'index.parceiros_desc':    'Uma rede de instituições comprometidas com o desenvolvimento sustentável do Sertão.',
      'index.parc_cnpq_desc':    'Conselho Nacional de Desenvolvimento Científico e Tecnológico, financiando bolsas e projetos de pesquisa em agricultura orgânica.',
      'index.parc_fapesb_desc':  'Fundação de Amparo à Pesquisa do Estado da Bahia, apoiando projetos de extensão e pesquisa aplicada ao campo baiano.',
      'index.parc_mda_desc':     'Ministério do Desenvolvimento Agrário, fortalecendo políticas públicas para a agricultura familiar e a transição agroecológica.',
      'index.parc_mapa_desc':    'Ministério da Agricultura, Pecuária e Abastecimento, regulamentando e fomentando a produção orgânica no Brasil.',
      'index.parc_mata_desc':    'Organização que representa comunidades rurais e povos tradicionais, promovendo soberania alimentar e manejo sustentável.',
      'index.parc_pref_titulo':  'Prefeituras',
      'index.parc_pref_desc':    'Gestões municipais do Sertão Produtivo parceiras na articulação local, apoio logístico e acesso às famílias agricultoras.',
      'index.parc_casa_desc':    'Centro de Agricultura Alternativa, referência em agroecologia e tecnologias sociais para o semiárido e regiões de transição.',
      'index.parc_cootraf_desc': 'Cooperativa dos Trabalhadores da Agricultura Familiar, articulando a comercialização e o acesso a mercados para os produtores orgânicos.',
      'index.parc_ibo_desc':     'Organização nacional dedicada ao fortalecimento da cadeia produtiva orgânica no Brasil, promovendo certificação, mercado e políticas públicas para o setor.',
      'index.parc_efa_titulo':   'EFA Caculé',
      'index.parc_efa_desc':     'Escola Família Agrícola de Caculé, formando jovens rurais por meio da Pedagogia da Alternância e fortalecendo a agricultura familiar no semiárido baiano.',

      /* Contato */
      'index.contato_aria':      'Contato e localização',
      'index.contato_tag':       '📬 Fale Conosco',
      'index.contato_titulo':    'Entre em contato',
      'index.contato_desc':      'Tem dúvidas, quer participar ou propor uma parceria? Estamos aqui.',
      'index.contato_ig_titulo': 'Instagram',
      'index.contato_wa_titulo': 'WhatsApp',
      'index.contato_em_titulo': 'E-mail',

      /* Meta */
      'index.page_title':        'Orgânico Inteligente – Cultivando Saúde no Sertão Produtivo',
      'index.meta_desc':         'Orgânico Inteligente – Cultivando Saúde no Sertão Produtivo. Programa de ensino, pesquisa e extensão dedicado à agroecologia e produção orgânica no Sertão Produtivo da Bahia.',

      /* =================== SEAPO.HTML ==================== */

      'seapo.page_title':        'X SEAPO 2026 – Seminário de Agroecologia e Produção Orgânica | Orgânico Inteligente',
      'seapo.meta_desc':         'X SEAPO 2026 – Seminário de Agroecologia e Produção Orgânica. 21 e 22 de agosto de 2026, IF Baiano Campus Guanambi, Bahia. Palestras, minicursos, certificação orgânica e feira agroecológica. Gratuito e aberto ao público.',

      /* Hero */
      'seapo.edicao_badge':      '10ª Edição · IF Baiano Campus Guanambi',
      'seapo.hero_sub':          'Seminário de Agroecologia e Produção Orgânica',
      'seapo.data_badge':        '📅 21 e 22 de agosto de 2026',
      'seapo.local':             'IF Baiano · Campus Guanambi · Bahia',
      'seapo.hero_desc':         'Dez edições construindo ciência com cheiro de terra. O X SEAPO reúne agricultores, pesquisadores, estudantes, extensionistas e comunidade em torno da agroecologia, da produção orgânica e do futuro do Sertão Produtivo.',
      'seapo.cta_prog':          'Ver Programação',
      'seapo.cta_inscricao':     'Fazer Inscrição',
      'seapo.hero_aria':         'X SEAPO 2026',

      /* Subnav */
      'seapo.nav_prog':          '📅 Programação',
      'seapo.nav_submissao':     '📄 Submissão',
      'seapo.nav_submissao_badge': 'Prorrogado: 09/08',
      'seapo.nav_hospedagem':    '🏘️ Hospedagem',
      'seapo.nav_inscricoes':    '✍️ Inscrições',
      'seapo.nav_videos':        '▶️ Vídeos',
      'seapo.subnav_aria':       'Navegação X SEAPO',

      /* Destaques */
      'seapo.dest_tag':          '🌾 O que esperar',
      'seapo.dest_titulo':       'Um dia inteiro de agroecologia no Sertão',
      'seapo.dest_desc':         'O X SEAPO celebra dez anos de um seminário que cresceu com o território e com as pessoas que o fazem acontecer.',
      'seapo.dest1_titulo':      'Palestras',
      'seapo.dest1_desc':        'Especialistas nacionais sobre emergência climática, conhecimento indígena e produção orgânica na Bahia.',
      'seapo.dest2_titulo':      'Minicursos',
      'seapo.dest2_desc':        'Mais de 10 oficinas simultâneas: pragas, aves orgânicas, irrigação, adubação, PANCs, PNAE e muito mais.',
      'seapo.dest3_titulo':      'Certificação',
      'seapo.dest3_desc':        'Entrega oficial dos certificados de Conformidade Orgânica a agricultores do território.',
      'seapo.dest4_titulo':      'Stands & Feira',
      'seapo.dest4_desc':        'Feira agroecológica, estandes de expositores e parceiros institucionais confirmados.',
      'seapo.dest_aria':         'O que esperar do X SEAPO',

      /* Programação */
      'seapo.prog_tag':          '📋 Programação Oficial',
      'seapo.prog_titulo':       '21 e 22 de agosto de 2026',
      'seapo.prog_desc':         'IF Baiano Campus Guanambi · Bahia',
      'seapo.prog_aria':         'Programação do X SEAPO',
      'seapo.dia21_label':       '📅 Sexta-feira · 21/08/2026',
      'seapo.dia22_label':       '📅 Sábado · 22/08/2026',
      'seapo.turno_manha':       '🌅 Manhã — Auditório Principal',
      'seapo.turno_manha22':     '🌅 Manhã',
      'seapo.turno_tarde':       '☀️ Tarde — 13h00 às 17h00',
      'seapo.turno_feira_titulo':'🌿 Feira Orgânica e SEAPINHO',
      'seapo.feira21_turno_titulo': '🛒 Feira Orgânica — Estacionamento do Campus',
      'seapo.feira21_titulo':   'Feira Orgânica — Estacionamento do Campus',

      /* Itens da programação — manhã */
      'seapo.abertura_tag':      'Abertura Oficial',
      'seapo.abertura_hora':     '09h00',
      'seapo.tag_palestra':      'Palestra',
      'seapo.tag_cerimonia':     'Cerimônia',
      'seapo.tag_lancamento':    'Trabalhos Científicos',
      'seapo.palestra_mag_tag':  'Palestra Magna',
      'seapo.palestra_mag_titulo': 'ORGÂNICO INTELIGENTE: Saúde para o Sertão Produtivo',
      'seapo.palestra_mag_speaker': 'Felizarda Bebé — Fundadora do Programa Orgânico Inteligente',
      'seapo.palestra2_titulo':  'Produção Orgânica na Bahia',
      'seapo.palestra2_speaker': 'Thercio Vieira — Coordenador da CPORg Bahia',
      'seapo.palestra3_titulo':  'Experiências em Produção Orgânica com o Núcleo Raízes do Sertão – Povos da Mata',
      'seapo.cerimonia_titulo':  'Entrega dos Certificados de Conformidade Orgânica aos Agricultores',

      /* Stands */
      'seapo.stands_titulo':     '🌿 Stands e Exposições — Em frente ao estacionamento (entrada)',
      'seapo.stand1':            'Plantas Alimentícias não Convencionais (PANCs)',
      'seapo.stand2':            'Adubos verdes e cobertura do solo',
      'seapo.stand3':            'Sementes crioulas',
      'seapo.stand4':            'Plantas medicinais',
      'seapo.stand5':            'Microverdes',
      'seapo.stand6':            'Biodiversidade (plantas nativas, ornamentais)',
      'seapo.stand7':            'Plantas repelentes e controle de insetos',
      'seapo.stand8':            'Biofertilizantes',
      'seapo.stand9':            'Veganismo — Adriany Thatcher Castro Soares e Nilda',
      'seapo.stand10':           'Tecnologias sustentáveis (captação de água da chuva — CASA)',
      'seapo.stand11':           '+ muito mais',
      'seapo.standext_titulo':   'Stands Externos',
      'seapo.standext1':         'Banco do Nordeste',
      'seapo.standext3':         'CASA',
      'seapo.standext4':         'COOTRAF',
      'seapo.standext5':         'EFA de Caculé',
      'seapo.standext6':         'Energia Renovável — Ronileia',

      /* Trabalhos */
      'seapo.trabalhos_titulo':  'Apresentação de Trabalhos Científicos',
      'seapo.trabalhos_local':   'Quadra do Campus',

      /* Minicursos */
      'seapo.mc_titulo_h4':      'Minicursos e Oficinas Simultâneos',
      'seapo.mc1_titulo':        'Controle de Insetos na Agricultura Orgânica',
      'seapo.mc3_titulo':        'Fabricação e Uso de Extratos Vegetais na Adubação de Plantas',
      'seapo.mc4_titulo':        'Reunião Ordinária da CPORg',
      'seapo.mc4_speaker2':      'Coordenada pelo Ministério da Agricultura',
      'seapo.mc5_titulo':        'Criação de Aves Orgânicas',
      'seapo.mc5_speaker':       'MSc. Enok Donato — Mestre em Produção Orgânica',
      'seapo.mc6_titulo':        'Plantas Medicinais Orgânicas e Rentáveis',
      'seapo.mc7_titulo':        'PNAE e PAA para Produtos Orgânicos',
      'seapo.mc8_titulo':        'Minhocultura Orgânica e Rentável',
      'seapo.mc8_speaker':       'Alice Maira Pereira Souza',
      'seapo.mc9_titulo':        'Qualidade da Água para Irrigação e Higienização de Hortaliças Orgânicas',
      'seapo.mc9_speaker2':      'Mariana Camargo',
      'seapo.mc10_titulo':       'Cobertura do Solo para Sistemas Orgânicos',
      'seapo.mc11_titulo':       'Saberes e Sabores do Sertão: Caracterização de PANCs Utilizadas na Alimentação Popular',
      'seapo.mc12_titulo':       'Cultivo de Fungos para Sistemas Orgânicos',
      'seapo.mc13_titulo':       'Oficina: Professoralidades em Ágora',
      'seapo.mc13_vagas':        'Limite de 30 vagas externas',
      'seapo.mc14_titulo':       'Oficina: Conflitos Agrários na Bahia e Quais Perspectivas para Amenizar e Promover o Desenvolvimento dos Territórios',
      'seapo.mc14_speaker':      'Dr. Carlos Tadeu Correia de Carvalho — Analista Advogado MDA',
      'seapo.mc15_titulo':       'Oficina: Plano Safra da Agricultura Familiar 2026/2027',
      'seapo.mc15_speaker':      'Patrícia Rejane Martins Bastos — Economista do Ministério do Desenvolvimento Agrário',
      'seapo.mc16_titulo':       'Agroecologia, a Avaliação da Aprendizagem e a Educação do Campo: instrumentos avaliativos para a emancipação e a formação para a felicidade',
      'seapo.mc16_speaker':      'Profa. Dra. Hildonice Batista',
      'seapo.mc17_titulo':       'Pela Responsabilidade e pelo Afeto: filosofia e agroecologia entre Hans Jonas e Byung Chul Han',
      'seapo.mc17_speaker':      'Diógenes Galdino Morais Silva',
      'seapo.mc_horario':        '13h00 – 17h00',

      /* Dia 22 */
      'seapo.feira_tag':         'Feira',
      'seapo.feira_titulo':      'Feira Orgânica de Guanambi',
      'seapo.feira_local':       'Estacionamento coberto do IFBaiano campus Guanambi',
      'seapo.feira_encomendas':  'Encomendas:',
      'seapo.seapinho_tag':      'Stand',
      'seapo.seapinho_titulo':   'ÁGORA INFÂNCIAS / I SEAPINHO',
      'seapo.seapinho_acesso':   'Acesso Livre para as crianças',

      /* Submissão */
      'seapo.sub_aria':          'Submissão de Trabalhos Científicos',
      'seapo.sub_tag':           '📄 Trabalhos Científicos',
      'seapo.sub_titulo':        'Submissão de Trabalhos',
      'seapo.sub_desc':          'Compartilhe sua pesquisa em agroecologia e produção orgânica com a comunidade científica do X SEAPO.',
      'seapo.prazo_label':       'Prazo de submissão',
      'seapo.prazo_tag_prorrogado': 'Prorrogado',
      'seapo.prazo_data_antiga': '31 de julho de 2026',
      'seapo.prazo_data':        '09 de agosto de 2026',
      'seapo.prazo_note':        'Novo prazo! Baixe o template da sua modalidade, siga o tutorial e envie até a nova data.',
      'seapo.mod1_titulo':       'Resumo',
      'seapo.mod1_desc':         'Apresentação condensada da pesquisa. Utilize o <em>template de resumo</em> disponível no Drive para formatação correta.',
      'seapo.mod2_titulo':       'Relato de Experiência',
      'seapo.mod2_desc':         'Compartilhe práticas e vivências no campo da agroecologia. Use o <em>template de relato</em> disponível no Drive.',
      'seapo.mod3_titulo':       'Artigo Científico',
      'seapo.mod3_desc':         'Contribuição completa com resultados de pesquisa. Utilize o <em>template de artigo</em> disponível no Drive.',
      'seapo.cta_templates':     '📥 Baixar Templates',
      'seapo.cta_tutorial':      '▶️ Tutorial de Submissão (PDF)',

      /* Hospedagem */
      'seapo.hosp_aria':         'Hotéis em Guanambi',
      'seapo.hosp_tag':          '🏘️ Hospedagem',
      'seapo.hosp_titulo':       'Hotéis em Guanambi',
      'seapo.hosp_desc':         'Sugestões de hospedagem em Guanambi para facilitar o planejamento dos participantes. As informações e valores são de responsabilidade de cada estabelecimento — recomendamos confirmar disponibilidade e preços diretamente com os hotéis antes de realizar a reserva. O SEAPO não possui vínculo com nenhum dos estabelecimentos listados.',
      'seapo.hosp_individual':   'Individual',
      'seapo.hosp_duplo':        'Duplo',
      'seapo.hosp_triplo':       'Triplo',
      'seapo.hosp_ligar':        'Ligar agora',
      'seapo.hosp_airbnb_desc':  'Espaço inteiro: casa em Guanambi, Brasil',
      'seapo.hosp_hospedes':     'Hóspedes',
      'seapo.hosp_quarto':       'Quarto',
      'seapo.hosp_cama':         'Cama',
      'seapo.hosp_banheiro':     'Banheiro',
      'seapo.hosp_ver_airbnb':   'Ver no Airbnb',

      /* Inscrições */
      'seapo.inscricoes_aria':   'Inscrições X SEAPO',
      'seapo.inscricoes_titulo': 'Inscrições abertas!',
      'seapo.inscricoes_desc':   'As inscrições para o X SEAPO estão abertas. Garanta sua vaga no maior seminário de agroecologia do Sertão Produtivo.',
      'seapo.inscricoes_cta1':   'Fazer Inscrição',
      'seapo.inscricoes_cta2':   'Falar pelo WhatsApp',

      /* Memória */
      'seapo.mem_aria':          'Memória do SEAPO',
      'seapo.mem_tag':           '📌 Trajetória',
      'seapo.mem_titulo':        'Nove edições que semearam o X SEAPO',
      'seapo.mem_desc':          'Desde 2017, o SEAPO reúne ciência, extensão e agricultura familiar no IF Baiano Campus Guanambi.',
      'seapo.mem1_desc':         'I SEAPO — a primeira semente plantada pelo NEAPO',
      'seapo.mem2_desc':         'III SEAPO — 20+ municípios e 14 oficinas simultâneas',
      'seapo.mem3_desc':         'IV SEAPO — edição online em plena pandemia',
      'seapo.mem4_desc':         'VII SEAPO — internacionalização e novos temas',
      'seapo.photo1_caption':    'A feira agroecológica é uma das marcas permanentes do evento.',
      'seapo.photo2_caption':    'Entrega de certificados: o reconhecimento que transforma trajetórias.',
      'seapo.photo3_caption':    'VII SEAPO — 2023: debate, ciência e comunidade.',

      /* Vídeos */
      'seapo.videos_aria':       'Vídeos do SEAPO',
      'seapo.videos_tag':        '▶️ Memória em vídeo',
      'seapo.videos_titulo':     'Reviva as edições anteriores',
      'seapo.videos_desc':       'Palestras, registros e momentos das edições que construíram o X SEAPO.',
      'seapo.video1_titulo':     'VII SEAPO',
      'seapo.video1_desc':       'Produção orgânica, oficinas e feira agroecológica.',
      'seapo.video2_titulo':     'VI SEAPO',
      'seapo.video2_desc':       'Palestras e atividades da sexta edição.',
      'seapo.video3_titulo':     'III SEAPO',
      'seapo.video3_desc':       'Memória da feira de base agroecológica.',

      /* ================= CERTIFICACAO.HTML ================ */

      'cert.page_title':         'Certificação Orgânica Participativa | Orgânico Inteligente',
      'cert.meta_desc':          'Certificação Orgânica Participativa – Orgânico Inteligente. Entenda como funciona o processo de certificação pelo Sistema Participativo de Garantia (SPG) da Rede Povos da Mata.',
      'cert.hero_aria':          'Certificação Orgânica Participativa',
      'cert.hero_sub':           'Sistema Participativo de Garantia',
      'cert.hero_desc':          'Entenda como funciona o processo de certificação orgânica do Orgânico Inteligente, integrado à Rede de Agroecologia Povos da Mata, e como você pode fazer parte dessa rede que transforma a produção no Sertão.',
      'cert.cta_etapas':         'Ver as etapas',
      'cert.cta_whatsapp':       'Falar pelo WhatsApp',
      'cert.metricas_aria':      'Números da certificação',
      'cert.metric1_label':      'Agricultores Certificados',
      'cert.metric2_label':      'Etapas do Processo',
      'cert.metric3_label':      'Validade do Certificado',
      'cert.metric4_label':      'Tempo de Transição',
      'cert.intro_aria':         'O que é a certificação orgânica participativa',
      'cert.intro_tag':          '🌱 O que é',
      'cert.intro_titulo':       'Certificação Orgânica Participativa',
      'cert.intro_p1':           'O Sistema Participativo de Garantia (SPG) é uma forma democrática e comunitária de certificar a produção orgânica. Diferente da certificação por auditoria, no SPG são os próprios agricultores, consumidores e técnicos que se organizam em grupos e núcleos para garantir, coletivamente, a conformidade com os princípios da agricultura orgânica.',
      'cert.intro_p2':           'O Orgânico Inteligente integra a <strong>Rede de Agroecologia Povos da Mata</strong> por meio do <strong>Núcleo Sertão Feliz</strong>, que reúne grupos de agricultores familiares do Sertão Produtivo e do Sudoeste Baiano, promovendo a certificação com base na confiança mútua, na transparência e no compromisso com a agroecologia.',
      'cert.intro_p3':           'Todos os produtores passam pelo processo de <strong>transição ou conversão</strong> agroecológica, dependendo da realidade de cada unidade produtiva.',
      'cert.destaque_titulo':    'Por que se certificar?',
      'cert.destaque_desc':      'A certificação orgânica garante acesso a mercados diferenciados, preços melhores pelos produtos, fortalecimento da identidade agroecológica e acesso a programas governamentais como o PAA e o PNAE, além de consolidar a confiança dos consumidores.',
      'cert.tag_precos':         'Melhores preços',
      'cert.tag_paa':            'Acesso ao PAA',
      'cert.tag_pnae':           'Acesso ao PNAE',
      'cert.tag_identidade':     'Identidade orgânica',
      'cert.tag_feiras':         'Feiras especializadas',
      'cert.estrutura_aria':     'Estrutura do sistema participativo',
      'cert.estrutura_tag':      '🏗️ Como se organiza',
      'cert.estrutura_titulo':   'Estrutura do SPG',
      'cert.estrutura_desc':     'O sistema é organizado em três níveis que funcionam de forma colaborativa e democrática.',
      'cert.grupo_titulo':       'Grupo',
      'cert.grupo_desc':         'Formado por 3 a 12 agricultores que se conhecem, confiam uns nos outros e se visitam mutuamente para verificar as boas práticas agroecológicas.',
      'cert.grupo_num':          '3 a 12 agricultores',
      'cert.nucleo_titulo':      'Núcleo',
      'cert.nucleo_desc':        'Composto por no mínimo 3 grupos. O Núcleo <strong>Sertão Feliz</strong> coordena os grupos do Sertão Produtivo e do Sudoeste Baiano.',
      'cert.nucleo_num':         'Mín. 3 grupos',
      'cert.rede_titulo':        'Rede',
      'cert.rede_desc':          'A <strong>Rede Povos da Mata</strong> reúne todos os núcleos, emite os certificados e garante a integração entre os agricultores de toda a Bahia.',
      'cert.rede_num':           'Rede estadual',
      'cert.aviso_aria':         'Atenção: tempo de certificação',
      'cert.aviso_titulo':       'O processo completo pode levar de 6 meses a 2 anos',
      'cert.aviso_texto':        'O tempo varia conforme o histórico de uso de insumos convencionais e a realidade de cada unidade produtiva. Todos passam por transição ou conversão agroecológica.',
      'cert.etapas_aria':        'Etapas do processo de certificação',
      'cert.etapas_tag':         '📋 Passo a passo',
      'cert.etapas_titulo':      'As 8 Etapas da Certificação',
      'cert.etapas_desc':        'Desde o primeiro contato até a emissão do certificado, veja o caminho completo para se tornar um produtor orgânico certificado.',
      'cert.etapa1_titulo':      'Entre em contato com o Núcleo Sertão Feliz',
      'cert.etapa1_desc':        'O primeiro passo é entrar em contato pelo número disponível neste site para iniciar a conversa sobre sua inclusão no processo.',
      'cert.etapa2_titulo':      'Indicação e visita do Grupo mais próximo',
      'cert.etapa2_desc':        'O Núcleo vai indicar o Grupo de agricultores mais próximo a você. Esse Grupo organizará um comitê para visitar a sua unidade produtiva, conhecer a propriedade e apresentar as informações sobre o funcionamento e a documentação necessária para o cadastro.',
      'cert.etapa3_titulo':      'Aprovação pelo Grupo e Adesão',
      'cert.etapa3_desc':        'Sua aprovação ocorre com a aceitação dos integrantes do Grupo, após conhecerem a família e a unidade produtiva. Finalmente, você é incluído na <strong>Ata de Adesão do Grupo</strong>.',
      'cert.etapa4_titulo':      'Preenchimento da documentação obrigatória',
      'cert.etapa4_desc':        'Após ingressar no Grupo, você deverá preencher os seguintes documentos:',
      'cert.doc1':               'Cadastro e Termo de Responsabilidade',
      'cert.doc2':               'Plano de Manejo da Unidade Produtiva',
      'cert.doc3':               'Caderno de Campo',
      'cert.etapa5_titulo':      'Visitas periódicas entre os membros do Grupo',
      'cert.etapa5_desc':        'Periodicamente, todas as unidades produtivas que compõem o Grupo deverão ser visitadas com o preenchimento do <strong>Roteiro de Visitas</strong>, com todos os membros presentes.',
      'cert.etapa6_titulo':      'Olhar Externo e Comitê de Verificação',
      'cert.etapa6_desc':        'Quando todas as unidades do Grupo forem consideradas aptas pelos seus integrantes, o coordenador encaminhará a solicitação de <strong>Olhar Externo</strong> ao Núcleo. O Núcleo organizará o <strong>Comitê de Verificação</strong> para visitar uma amostragem das unidades produtivas, avaliando documentações e Roteiros de Visitas realizados no ano.',
      'cert.etapa7_titulo':      'Emissão do Certificado de Conformidade Orgânica',
      'cert.etapa7_desc':        'Após aprovação pelo Comitê de Verificação, é emitido o <strong>Certificado de Conformidade Orgânica</strong>, válido por um ano. Durante esse período, serão realizadas visitas periódicas pelos Grupos para acompanhar os processos e trocar informações e conhecimentos.',
      'cert.etapa8_titulo':      'Caso não seja aprovado',
      'cert.etapa8_desc':        'Não havendo aprovação pelo Comitê de Verificação, o produtor não recebe o Certificado e são estabelecidos <strong>prazos para as adequações necessárias</strong>. O produtor pode adaptar sua produção às práticas e critérios exigidos e solicitar novo Olhar Externo no ciclo seguinte.',
      'cert.reg_aria':           'Como encontrar produtores orgânicos certificados',
      'cert.reg_tag':            '🔍 Consulta pública',
      'cert.reg_titulo':         'Quais são os agricultores certificados?',
      'cert.reg_p':              'Para encontrar qualquer produtor orgânico certificado no Brasil, o Ministério da Agricultura disponibiliza o <strong>Cadastro Nacional de Produtores Orgânicos (CNPO)</strong>. Basta acessar o painel abaixo, escolher o estado e o município desejado.',
      'cert.reg_link':           'Consultar Cadastro Nacional (CNPO)',
      'cert.agric_aria':         'Agricultores certificados pelo programa',
      'cert.agric_tag':          '🌾 Nossos certificados',
      'cert.agric_titulo':       'Agricultores certificados pelo programa',
      'cert.agric_desc':         'Conheça as famílias e produtores que conquistaram a certificação orgânica pelo Orgânico Inteligente e pela Rede Povos da Mata.',
      'cert.cta_aria':           'Entre em contato para iniciar a certificação',
      'cert.cta_titulo':         'Pronto para começar sua jornada orgânica?',
      'cert.cta_desc':           'Entre em contato com o Núcleo Sertão Feliz pelo WhatsApp ou Instagram e dê o primeiro passo rumo à certificação orgânica participativa.',
      'cert.cta_btn1':           '📱 Falar pelo WhatsApp',
      'cert.cta_btn2':           '📷 Instagram',

      /* ============= CONTEUDOS-EDUCATIVOS.HTML ============= */

      'edu.page_title':          'Conteúdos Educativos sobre Agroecologia | Orgânico Inteligente',
      'edu.meta_desc':           'Conteúdos Educativos do Orgânico Inteligente: artigos, resumos e pesquisas sobre agroecologia, produção orgânica, educação ambiental e agricultura familiar.',
      'edu.hero_aria':           'Biblioteca de conteúdos educativos',
      'edu.hero_tag':            '📚 Biblioteca Orgânico Inteligente',
      'edu.hero_titulo':         'Conteúdos Educativos',
      'edu.hero_desc':           'Pesquisas, relatos e materiais sobre produção orgânica, agroecologia e agricultura familiar — disponíveis gratuitamente para agricultores, estudantes e técnicos.',
      'edu.total_label':         'publicações disponíveis',
      'edu.busca_placeholder':   'Buscar por título ou resumo...',
      'edu.busca_aria':          'Buscar publicações',
      'edu.resultado_0':         'Nenhuma publicação encontrada para',
      'edu.resultado_1':         '1 publicação encontrada',
      'edu.resultado_plural':    '{n} publicações encontradas',
      'edu.sem_resultado':       'Nenhum resultado encontrado',
      'edu.sem_resultado_p':     'Tente outros termos de busca.',
      'edu.abrir_pdf':           'Abrir PDF →',
      'edu.acessar':             'Acessar publicação →'
    },

    /* ===================== ENGLISH ====================== */
    'en': {

      /* --- NAV --- */
      'nav.skip':              'Skip to main content',
      'nav.logo_aria':         'Homepage - Organic Intelligence',
      'nav.tagline':           'Cultivating Health in the Productive Sertão',
      'nav.hamburger_aria':    'Open menu',
      'nav.aria_main':         'Main menu',
      'nav.sobre':             'About',
      'nav.acoes':             'Actions',
      'nav.territorio':        'Territory',
      'nav.conteudos':         'Educational Content',
      'nav.certificacao':      'Certification',
      'nav.seapo':             'X SEAPO',
      'nav.parceiros':         'Partners',

      /* --- FOOTER --- */
      'footer.desc':           'Teaching, research, and extension program dedicated to strengthening agroecology and organic production in the Productive Sertão of Bahia.',
      'footer.col_projeto':    'The Project',
      'footer.sobre_nos':      'About us',
      'footer.nossas_acoes':   'Our actions',
      'footer.territorio':     'Territory',
      'footer.parceiros':      'Partners',
      'footer.col_recursos':   'Resources',
      'footer.conteudos':      'Educational Content',
      'footer.certificacao':   'Organic Certification',
      'footer.seapo':          'X SEAPO',
      'footer.col_contato':    'Contact',
      'footer.email':          'E-mail',
      'footer.whatsapp':       'WhatsApp',
      'footer.instagram':      'Instagram',
      'footer.copyright':      '© 2026 Orgânico Inteligente · All rights reserved',
      'footer.tagline':        'Cultivating Health in the Productive Sertão 🌱',

      /* --- ACESSIBILIDADE --- */
      'acess.bar_aria':        'Accessibility tools',
      'acess.label':           'Accessibility:',
      'acess.contraste':       '🌓 Contrast',
      'acess.contraste_aria':  'Toggle high contrast',
      'acess.contraste_title': 'High Contrast',
      'acess.aumentar':        'A+',
      'acess.aumentar_aria':   'Increase font size',
      'acess.aumentar_title':  'Increase font size',
      'acess.resetar':         'A',
      'acess.resetar_aria':    'Default font size',
      'acess.resetar_title':   'Default font size',
      'acess.diminuir':        'A-',
      'acess.diminuir_aria':   'Decrease font size',
      'acess.diminuir_title':  'Decrease font size',
      'acess.leitura':         '📖 Easy read',
      'acess.leitura_aria':    'Simplified reading',
      'acess.leitura_title':   'Easy reading',

      /* --- TOAST --- */
      'toast.font_increased':  'Font size increased to {size}%',
      'toast.font_decreased':  'Font size decreased to {size}%',
      'toast.font_reset':      'Font size reset to default',
      'toast.contrast_on':     'High contrast enabled',
      'toast.contrast_off':    'Normal contrast',
      'toast.reading_on':      'Easy reading mode enabled',
      'toast.reading_off':     'Normal mode',

      /* --- FORMULÁRIOS --- */
      'form.required':         '⚠️ Please fill in the required fields',
      'form.register_ok':      '✅ Registration complete! We will contact you soon.',
      'form.contact_ok':       '✅ Message sent! We will respond shortly.',

      /* --- TOGGLE DE IDIOMA --- */
      'lang.toggle_aria':      'Switch to Portuguese',

      /* =================== INDEX.HTML ==================== */

      /* Chamada SEAPO */
      'index.seapo_badge':     'Registrations open',
      'index.seapo_titulo':    'X SEAPO 2026 — Seminar on Agroecology and Organic Production',
      'index.seapo_sub':       'August 21–22, 2026 · Guanambi, Bahia · Free and open to the public',
      'index.seapo_btn':       'See schedule →',
      'index.seapo_chamada_aria': 'Call for X SEAPO 2026',

      /* Hero */
      'index.hero_aria':       'Project photo gallery',
      'index.slide_prev_aria': 'Previous image',
      'index.slide_next_aria': 'Next image',
      'index.slides_nav_aria': 'Slideshow navigation',

      /* Stats */
      'index.stats_aria':      'Project impact in numbers',
      'index.stat1_label':     'Farmers trained',
      'index.stat2_label':     'Organic certifications',
      'index.stat3_label':     'Municipalities in the Sertão',
      'index.stat4_label':     'Workshops held',

      /* Sobre — seção */
      'index.sobre_aria':      'About Organic Intelligence',
      'index.sobre_tag':       '🏛️ Institutional',
      'index.sobre_titulo':    'Connecting the Federal Institute, the Field, and the Community',
      'index.sobre_p1':        'The <strong>Organic Intelligence</strong> program is a teaching, research, and extension initiative aimed at strengthening organic and agroecological agriculture in the Bahian semi-arid region. The program works directly in the Productive Sertão (Brazil\'s semi-arid Northeast) territory of Bahia, in the Southwest Bahia Identity Territory, with emphasis on the municipality of Guajeru, and also in the Velho Chico Territory, especially in Igaporã. These regions are characterized by the strong presence of family farming, irregular rainfall, the resilience of the sertanejo people, and rich cultural and environmental heritage.',
      'index.sobre_p2':        'The program works alongside family farmers, promoting the transition from conventional farming to sustainable agroecological systems through to the achievement of organic certification. Activities include technical assistance, training, participatory certification, development of low-cost technologies, applied research, and support for access to institutional markets and government programs such as the Food Acquisition Program (PAA) and the National School Feeding Program (PNAE).',
      'index.sobre_p3':        'The Organic Intelligence methodology begins from the real needs faced by farmers, seeking practical and scientifically grounded solutions that make production systems more sustainable, resilient, and economically viable. The program also encourages the appreciation of traditional knowledge and regional biodiversity, strengthening the autonomy of farming families.',
      'index.sobre_p4':        'Furthermore, Organic Intelligence integrates students, teachers, researchers, extensionists, and rural communities in a collaborative knowledge-building network. This interaction promotes academic training, innovation in the field, and tangible impacts on people\'s quality of life, the strengthening of family farming, and the conservation of the environment in the Bahian semi-arid region.',

      /* Nossa História */
      'index.historia_titulo': 'Our Story',
      'index.historia_p1':     'Organic Intelligence was born from the need to promote training for farmers, students, technicians, and teachers, combining teaching, research, and extension with the development of low-cost social technologies aimed at strengthening organic production. The program emerged with the purpose of building, in a participatory and dialogical way, the integration between scientific knowledge and traditional wisdom, valuing community experiences and encouraging sustainable practices in rural and urban settings.',
      'index.historia_p2':     'Its journey began officially on October 3, 2016, with the signing of the Grant Agreement with the National Council for Scientific and Technological Development (CNPq), through the Nucleus of Agroecology and Organic Production Project. From that milestone, the program began developing actions aimed at promoting organic and agroecological farming, strengthening the articulation between educational institutions, family farmers, and communities.',
      'index.historia_p3':     'Since its founding, Organic Intelligence has worked to expand the supply of healthy food, strengthen food and nutritional security, and generate income for farming families. The program supports transitions to more sustainable, resilient, and economically viable production systems, in compliance with Brazil\'s Organic Production Act (Law 10,831/2003).',
      'index.historia_p4':     'Today, Organic Intelligence is composed of a team of more than 10 members — students, researchers, technicians, and professors — who carry out integrated research, teaching, and extension activities. These activities include training sessions, development of sustainable technologies, scientific production, technical assistance, workshops, courses, and projects aimed at strengthening organic and agroecological farming.',
      'index.historia_p5':     'Throughout its trajectory, Organic Intelligence has established itself as a space for education, innovation, and social transformation, encouraging productive practices that respect the environment, value family farming, and promote quality of life for producers and consumers alike.',

      /* MVV */
      'index.mvv_missao_titulo': '🎯 Mission',
      'index.mvv_missao_texto':  'To strengthen organic production in the Productive Sertão and in Bahia through low-cost technologies developed through science and traditional knowledge.',
      'index.mvv_visao_titulo':  '🔭 Vision',
      'index.mvv_visao_texto':   'To be a reference in organic production and sustainable rural development in Bahia.',
      'index.mvv_valores_titulo':'💚 Values',
      'index.mvv_valores_texto': 'Sustainability, solidarity, knowledge, and respect for the land, people, and animals.',

      /* Fundadora */
      'index.fundadora_tag':    '👩‍🌾 Founder',
      'index.fundadora_titulo': 'Who is Felizarda Bebé?',
      'index.fundadora_p1':     'Born in Candiba, a small town in the interior of Bahia with approximately 14,000 inhabitants, she is the daughter of family farmers and grew up in an environment marked by hard work, faith, and commitment to community. From childhood, she stood out for her active participation in the Catholic Church, her community leadership, and her excellent academic performance at the Dom José Pedro Costa Municipal School, where she received the award for best student in 8th grade.',
      'index.fundadora_p2':     'After completing her teaching degree, she moved to Vitória da Conquista, where she graduated in Agronomy. She then went to Recife to pursue her master\'s and doctoral degrees at the Federal Rural University of Pernambuco (UFRPE), standing out for her excellent academic performance, with the highest grade (A) in all subjects.',
      'index.fundadora_p3':     'In 2008, she passed a public examination for a substitute professor position at the Federal Institute of Pernambuco — Santo Antão Campus. In 2009, she was approved in the examinations of the Pernambuco Agronomic Institute and the Baiano Federal Institute, joining the Guanambi Campus as a faculty member in April 2010.',
      'index.fundadora_p4':     'Currently, she is a full professor at the Baiano Federal Institute — Guanambi Campus, also working in the master\'s programs in Environmental Sciences at the Serrinha Campus, and in Plant Production in the Semi-Arid Region at the Guanambi Campus. Her academic career is marked by an impressive scientific output, with more than 146 publications including scientific articles and abstracts, as well as the coordination of more than 50 research and extension projects approved by federal institutions — including CNPq, the Ministry of Agrarian Development and Family Agriculture (MDA), and the Ministry of Agriculture and Livestock (MAPA) — and state institutions, including FAPESB and IF Baiano (Proex and PROPES).',
      'index.fundadora_p5':     'Throughout her career, she has supervised more than 130 undergraduate and graduate scholarship holders, establishing a broad presence in the field of Organic Agriculture in the state of Bahia. Her work has directly impacted farmers and rural communities in municipalities such as Candiba, Guanambi, Caetité, Caculé, Guajeru, and Pindaí.',
      'index.fundadora_p6':     'Among the standout initiatives is the Organic Intelligence Program, which has produced several results — including 44 certified farmers and, among them, "Sítio Gameleira – Comida da Roça," which offers an organic food delivery service, strengthening family farming and promoting healthy eating in the region.',
      'index.fundadora_lattes': '📄 Lattes Curriculum (CV)',

      /* Ações */
      'index.acoes_aria':        'Actions and projects',
      'index.acoes_tag':         '⚙️ What We Do',
      'index.acoes_titulo':      'Actions that Transform the Countryside',
      'index.acoes_desc':        'From the laboratory to the farm, we develop activities that strengthen organic production and rural life.',
      'index.acao1_titulo':      'Organic Production',
      'index.acao1_desc':        'We carry out research on soil management, biological pest control, ground cover, creative low-cost bioinputs, composting, and production systems adapted to the Bahian semi-arid region.',
      'index.acao2_titulo':      'Rural Extension',
      'index.acao2_desc':        'We bring technical knowledge directly to rural properties based on the results of our research, with two visits per semester, and ongoing monitoring and support for farming families. We also provide vegetable seedlings to organic farmers.',
      'index.acao3_titulo':      'Workshops and Training',
      'index.acao3_desc':        'We hold courses, lectures, workshops, and field days on organic farming, soil management, organic agrosystems, composting, low-cost irrigation, and much more.',
      'index.acao4_titulo':      'Organic Certification',
      'index.acao4_desc':        'We support participatory certification from the creation of groups and nucleus through to access to differentiated markets and better prices for organic products.',
      'index.acao5_titulo':      'Social Technologies',
      'index.acao5_desc':        'We develop and disseminate low-cost technologies adapted to the reality of the Sertão: greywater treatment, compost systems, and rainwater harvesting.',
      'index.acao6_titulo':      'Organic Fairs',
      'index.acao6_desc':        'Weekly fairs connect organic producers directly with consumers, valuing healthy food and ensuring family income.',
      'index.acao_saibamais':    'Learn more',
      'index.tag_solo':          'Soil',
      'index.tag_biologia':      'Biology',
      'index.tag_semiarido':     'Semi-Arid',
      'index.tag_visitas':       'Farm visits',
      'index.tag_assistencia':   'Technical assistance',
      'index.tag_cursos':        'Courses',
      'index.tag_workshops':     'Workshops',
      'index.tag_diascamp':      'Field days',
      'index.tag_spg':           'SPG',
      'index.tag_certificacao':  'Certification',
      'index.tag_inovacao':      'Innovation',
      'index.tag_baixocusto':    'Low-cost',
      'index.tag_seapo':         'SEAPO',
      'index.tag_feiras':        'Fairs',
      'index.tag_mercado':       'Market',

      /* Território */
      'index.territorio_aria':   'Territory and results',
      'index.territorio_tag':    '📍 Where We Work',
      'index.territorio_titulo': 'Impact Across the Productive Sertão',
      'index.territorio_desc':   'Our work spans municipalities in the Productive Sertão Territory, bringing agroecology and social transformation.',
      'index.municipios_titulo': '📌 Municipalities Served',
      'index.municipios_aria':   'List of municipalities',
      'index.territorio_nota':   '🗺️ <strong>Productive Sertão Territory</strong> — Bahia, Brazil. A semi-arid region with a strong presence of family farming and rich Caatinga biodiversity.',
      'index.resultado1_num':    '+40%',
      'index.resultado1_label':  'Average increase in family income',
      'index.resultado2_label':  'Farmers with organic certification',
      'index.resultado3_num':    '500+',
      'index.resultado3_label':  'Hectares in agroecological transition',
      'index.resultado4_num':    '30+',
      'index.resultado4_label':  'Varieties of organic food produced',
      'index.resultado5_num':    '60%',
      'index.resultado5_label':  'Of families served led by women',

      /* Depoimentos */
      'index.dep_aria':          'Farmer testimonials',
      'index.dep_tag':           '💬 Voices from the Field',
      'index.dep_titulo':        'What Our Farmers Say',
      'index.dep_desc':          'Real stories of transformation and hope in the Productive Sertão.',
      'index.dep1_texto':        '"Organic Intelligence transformed my life. I used to live in São Paulo, and when I arrived in Bahia, it was through the program that I found new opportunities and managed to improve my quality of life. Today I have a restaurant on the farm and I\'m getting ready to open another in the city, using the organic food I produce. Every day I feel happier and more fulfilled being part of Organic Intelligence."',
      'index.dep1_cidade':       '📍 Comida da Roça',
      'index.dep2_texto':        '"Organic Intelligence, for me, for us at home, was very important. It helped us improve our management techniques, taught us how to plant, how to irrigate properly, the right time to plant. Organic Intelligence also helped us sell. So, for us, it was very good — both economically and environmentally."',
      'index.dep2_cidade':       '📍 Guanambi, BA',
      'index.dep3_texto':        '"The project\'s workshops changed my outlook. I learned that the land is a living being and that caring for it with respect is caring for myself and my children. Agroecology is the way."',
      'index.dep3_cidade':       '📍 Caetité, BA',
      'index.dep_stars_aria':    '5 stars',

      /* Conteúdos */
      'index.conteudos_aria':    'Educational content and materials',
      'index.conteudos_tag':     '📖 Learning',
      'index.conteudos_titulo':  'Educational Content',
      'index.conteudos_desc':    'Free materials for farmers, students, and technicians interested in agroecology.',
      'index.conteudo1_titulo':  'Overview of organic production in the State of Bahia (2014–2023)',
      'index.conteudo1_desc':    'A comprehensive, up-to-date overview of organic production in Bahia over a decade, with data on evolution, municipalities, and sector challenges.',
      'index.conteudo1_link':    'Open PDF →',
      'index.conteudo2_titulo':  'Family farming in the Sertão Territory',
      'index.conteudo2_desc':    'Characterizes family farming in Candiba-BA, highlighting small properties, access to public policies, technical assistance challenges, and the economic and nutritional role of family production.',
      'index.conteudo2_link':    'Open PDF →',
      'index.conteudo3_titulo':  'Agroecological rural extension in the Productive Sertão Territory',
      'index.conteudo3_desc':    'Reports on the Organic Intelligence Program\'s actions in workshops, lectures, fairs, and agroecological outreach activities across municipalities in the Productive Sertão.',
      'index.conteudo3_link':    'Open PDF →',
      'index.ver_todos':         '📚 View all educational content',

      /* Agenda */
      'index.agenda_aria':       'Events and activities schedule',
      'index.agenda_tag':        '📅 Upcoming Activities',
      'index.agenda_titulo':     'Organic Intelligence Schedule',
      'index.agenda_desc':       'Events, farm visits, fairs, and training sessions — what\'s coming up in the Productive Sertão.',
      'index.ag1_data':          'June 3, 2026',
      'index.ag1_titulo':        'Environment Week of Riacho de Santana',
      'index.ag1_local':         '📍 Riacho de Santana, BA',
      'index.ag1_desc':          'Organic Intelligence stand with product display, educational materials, and program outreach.',
      'index.ag1_tag':           'Stand',
      'index.ag2_data':          'June 8, 2026',
      'index.ag2_titulo':        'Lecture on Organic Production in Iuiu',
      'index.ag2_local':         '📍 Iuiu, BA',
      'index.ag2_desc':          'Open lecture on organic production, bioinputs, and agroecological transition for farmers and the local community.',
      'index.ag2_tag':           'Lecture',
      'index.ag3_data':          'June 2026',
      'index.ag3_titulo':        'Environment Week of Guajeru',
      'index.ag3_local':         '📍 Guajeru, BA',
      'index.ag3_desc':          'Organic Intelligence stand and lecture by Prof. Dr. Felizarda Bebé on agroecology and sustainability in the semi-arid region.',
      'index.ag3_tag':           'Stand · Lecture',
      'index.ag4_data':          'Every weekend',
      'index.ag4_titulo':        'Peer Visits to Rural Properties',
      'index.ag4_local':         '📍 Productive Sertão, BA',
      'index.ag4_desc':          'Weekly technical visits to organic farmers\' properties for monitoring, knowledge exchange, and technical assistance.',
      'index.ag4_tag':           'Recurring',
      'index.ag5_data':          'Every Friday',
      'index.ag5_titulo':        'Weekly Organic Fair',
      'index.ag5_local':         '📍 Rotating venue · Productive Sertão',
      'index.ag5_desc':          'Weekly traveling fair connecting certified organic producers directly with consumers. Location announced on social media.',
      'index.ag5_tag':           'Recurring',
      'index.ag6_data':          '2nd semester 2026',
      'index.ag6_titulo':        'FIC Course in Organic Production — 160 hours',
      'index.ag6_local':         '📍 IF Baiano · Guanambi Campus',
      'index.ag6_desc':          'Initial and Continuing Training course on agroecology, bioinputs, certification, and organic management for farmers and interested parties.',
      'index.ag6_tag':           'Training',
      'index.ag7_data':          '2027',
      'index.ag7_titulo':        'Organic Caravan — Irecê',
      'index.ag7_local':         '📍 Irecê, BA',
      'index.ag7_desc':          'Major agroecological mobilization bringing Organic Intelligence to the Irecê Territory, with fairs, lectures, and farmer exchange visits.',
      'index.ag7_tag':           'Coming soon',

      /* Parceiros */
      'index.parceiros_aria':    'Partners and institutions',
      'index.parceiros_tag':     '🤝 Partnerships',
      'index.parceiros_titulo':  'Who Supports Us',
      'index.parceiros_desc':    'A network of institutions committed to sustainable development in the Sertão.',
      'index.parc_cnpq_desc':    'National Council for Scientific and Technological Development, funding scholarships and research projects in organic farming.',
      'index.parc_fapesb_desc':  'Bahia State Research Foundation, supporting extension and applied research projects in the Bahian countryside.',
      'index.parc_mda_desc':     'Ministry of Agrarian Development, strengthening public policies for family farming and the agroecological transition.',
      'index.parc_mapa_desc':    'Ministry of Agriculture, Livestock, and Food Supply, regulating and promoting organic production in Brazil.',
      'index.parc_mata_desc':    'Organization representing rural communities and traditional peoples, promoting food sovereignty and sustainable land management.',
      'index.parc_pref_titulo':  'Municipalities',
      'index.parc_pref_desc':    'Municipal governments in the Productive Sertão, partnering in local coordination, logistical support, and access to farming families.',
      'index.parc_casa_desc':    'Center for Alternative Agriculture, a reference in agroecology and social technologies for the semi-arid and transition regions.',
      'index.parc_cootraf_desc': 'Cooperative of Family Agriculture Workers, coordinating marketing and market access for organic producers.',
      'index.parc_ibo_desc':     'National organization dedicated to strengthening Brazil\'s organic production chain, promoting certification, market access, and public policies for the sector.',
      'index.parc_efa_titulo':   'EFA Caculé',
      'index.parc_efa_desc':     'Caculé Family Agricultural School, training young rural people through the Alternating Pedagogy model and strengthening family farming in the Bahian semi-arid.',

      /* Contato */
      'index.contato_aria':      'Contact and location',
      'index.contato_tag':       '📬 Contact Us',
      'index.contato_titulo':    'Get in Touch',
      'index.contato_desc':      'Have questions, want to participate, or propose a partnership? We\'re here.',
      'index.contato_ig_titulo': 'Instagram',
      'index.contato_wa_titulo': 'WhatsApp',
      'index.contato_em_titulo': 'E-mail',

      /* Meta */
      'index.page_title':        'Organic Intelligence – Cultivating Health in the Productive Sertão',
      'index.meta_desc':         'Organic Intelligence – Cultivating Health in the Productive Sertão. Teaching, research, and extension program dedicated to agroecology and organic production in the Productive Sertão of Bahia.',

      /* =================== SEAPO.HTML ==================== */

      'seapo.page_title':        'X SEAPO 2026 – Seminar on Agroecology and Organic Production | Organic Intelligence',
      'seapo.meta_desc':         'X SEAPO 2026 – Seminar on Agroecology and Organic Production. August 21–22, 2026, IF Baiano Guanambi Campus, Bahia. Lectures, workshops, organic certification, and agroecological fair. Free and open to the public.',

      /* Hero */
      'seapo.edicao_badge':      '10th Edition · IF Baiano Guanambi Campus',
      'seapo.hero_sub':          'Seminar on Agroecology and Organic Production',
      'seapo.data_badge':        '📅 August 21–22, 2026',
      'seapo.local':             'IF Baiano · Guanambi Campus · Bahia',
      'seapo.hero_desc':         'Ten editions building science with the scent of the earth. The X SEAPO brings together farmers, researchers, students, extensionists, and the community around agroecology, organic production, and the future of the Productive Sertão.',
      'seapo.cta_prog':          'See Schedule',
      'seapo.cta_inscricao':     'Register Now',
      'seapo.hero_aria':         'X SEAPO 2026',

      /* Subnav */
      'seapo.nav_prog':          '📅 Schedule',
      'seapo.nav_submissao':     '📄 Submission',
      'seapo.nav_submissao_badge': 'Extended: Aug 9',
      'seapo.nav_hospedagem':    '🏘️ Accommodation',
      'seapo.nav_inscricoes':    '✍️ Registration',
      'seapo.nav_videos':        '▶️ Videos',
      'seapo.subnav_aria':       'X SEAPO Navigation',

      /* Destaques */
      'seapo.dest_tag':          '🌾 What to expect',
      'seapo.dest_titulo':       'A full day of agroecology in the Sertão',
      'seapo.dest_desc':         'The X SEAPO celebrates ten years of a seminar that grew alongside the territory and the people who make it happen.',
      'seapo.dest1_titulo':      'Lectures',
      'seapo.dest1_desc':        'National experts on climate emergency, indigenous knowledge, and organic production in Bahia.',
      'seapo.dest2_titulo':      'Mini-courses',
      'seapo.dest2_desc':        'More than 10 simultaneous workshops: pests, organic poultry, irrigation, fertilization, underutilized plants, PNAE, and much more.',
      'seapo.dest3_titulo':      'Certification',
      'seapo.dest3_desc':        'Official presentation of Organic Compliance certificates to farmers in the territory.',
      'seapo.dest4_titulo':      'Stands & Fair',
      'seapo.dest4_desc':        'Confirmed agroecological fair, exhibitor booths, and institutional partners.',
      'seapo.dest_aria':         'What to expect from the X SEAPO',

      /* Programação */
      'seapo.prog_tag':          '📋 Official Schedule',
      'seapo.prog_titulo':       'August 21–22, 2026',
      'seapo.prog_desc':         'IF Baiano Guanambi Campus · Bahia',
      'seapo.prog_aria':         'X SEAPO Schedule',
      'seapo.dia21_label':       '📅 Friday · 08/21/2026',
      'seapo.dia22_label':       '📅 Saturday · 08/22/2026',
      'seapo.turno_manha':       '🌅 Morning — Main Auditorium',
      'seapo.turno_manha22':     '🌅 Morning',
      'seapo.turno_tarde':       '☀️ Afternoon — 1:00 PM to 5:00 PM',
      'seapo.turno_feira_titulo':'🌿 Organic Fair and SEAPINHO',
      'seapo.feira21_turno_titulo': '🛒 Organic Fair — Campus Parking Lot',
      'seapo.feira21_titulo':   'Organic Fair — Campus Parking Lot',

      /* Itens — manhã */
      'seapo.abertura_tag':      'Official Opening',
      'seapo.abertura_hora':     '09:00 AM',
      'seapo.tag_palestra':      'Lecture',
      'seapo.tag_cerimonia':     'Ceremony',
      'seapo.tag_lancamento':    'Scientific Papers',
      'seapo.palestra_mag_tag':  'Keynote Lecture',
      'seapo.palestra_mag_titulo': 'ORGANIC INTELLIGENCE: Health for the Productive Sertão',
      'seapo.palestra_mag_speaker': 'Felizarda Bebé — Founder of the Organic Intelligence Program',
      'seapo.palestra2_titulo':  'Organic Production in Bahia',
      'seapo.palestra2_speaker': 'Thercio Vieira — Coordinator of CPORg Bahia',
      'seapo.palestra3_titulo':  'Organic Production Experiences with the Raízes do Sertão Nucleus – Povos da Mata',
      'seapo.cerimonia_titulo':  'Presentation of Organic Compliance Certificates to Farmers',

      /* Stands */
      'seapo.stands_titulo':     '🌿 Stands and Exhibitions — In front of the parking lot (entrance)',
      'seapo.stand1':            'Underutilized Food Plants (PANCs)',
      'seapo.stand2':            'Green manure and ground cover',
      'seapo.stand3':            'Heirloom seeds',
      'seapo.stand4':            'Medicinal plants',
      'seapo.stand5':            'Microgreens',
      'seapo.stand6':            'Biodiversity (native, ornamental plants)',
      'seapo.stand7':            'Repellent plants and insect control',
      'seapo.stand8':            'Biofertilizers',
      'seapo.stand9':            'Veganism — Adriany Thatcher Castro Soares and Nilda',
      'seapo.stand10':           'Sustainable technologies (rainwater harvesting — CASA)',
      'seapo.stand11':           '+ much more',
      'seapo.standext_titulo':   'External Booths',
      'seapo.standext1':         'Banco do Nordeste',
      'seapo.standext3':         'CASA',
      'seapo.standext4':         'COOTRAF',
      'seapo.standext5':         'EFA de Caculé',
      'seapo.standext6':         'Renewable Energy — Ronileia',

      /* Trabalhos */
      'seapo.trabalhos_titulo':  'Scientific Paper Presentations',
      'seapo.trabalhos_local':   'Campus Sports Court',

      /* Minicursos */
      'seapo.mc_titulo_h4':      'Simultaneous Workshops and Short Courses',
      'seapo.mc1_titulo':        'Insect Control in Organic Farming',
      'seapo.mc3_titulo':        'Production and Use of Plant Extracts in Crop Fertilization',
      'seapo.mc4_titulo':        'CPORg Regular Meeting',
      'seapo.mc4_speaker2':      'Coordinated by the Ministry of Agriculture',
      'seapo.mc5_titulo':        'Organic Poultry Farming',
      'seapo.mc5_speaker':       'MSc. Enok Donato — Master in Organic Production',
      'seapo.mc6_titulo':        'Organic and Profitable Medicinal Plants',
      'seapo.mc7_titulo':        'PNAE and PAA for Organic Products',
      'seapo.mc8_titulo':        'Organic and Profitable Vermiculture',
      'seapo.mc8_speaker':       'Alice Maira Pereira Souza',
      'seapo.mc9_titulo':        'Water Quality for Irrigation and Sanitation of Organic Vegetables',
      'seapo.mc9_speaker2':      'Mariana Camargo',
      'seapo.mc10_titulo':       'Ground Cover for Organic Systems',
      'seapo.mc11_titulo':       'Sertão Flavors and Knowledge: Characterization of Underutilized Food Plants (PANCs) in Popular Cuisine',
      'seapo.mc12_titulo':       'Fungi Cultivation for Organic Systems',
      'seapo.mc13_titulo':       'Workshop: Professoralities in Ágora',
      'seapo.mc13_vagas':        'Limited to 30 external spots',
      'seapo.mc14_titulo':       'Workshop: Agrarian Conflicts in Bahia and Perspectives to Ease Them and Promote Territorial Development',
      'seapo.mc14_speaker':      'Dr. Carlos Tadeu Correia de Carvalho — Attorney Analyst, MDA (Ministry of Agrarian Development)',
      'seapo.mc15_titulo':       'Workshop: 2026/2027 Family Farming Harvest Plan',
      'seapo.mc15_speaker':      'Patrícia Rejane Martins Bastos — Economist, Ministry of Agrarian Development',
      'seapo.mc16_titulo':       'Agroecology, Learning Assessment, and Rural Education: assessment tools for emancipation and education for happiness',
      'seapo.mc16_speaker':      'Prof. Dr. Hildonice Batista',
      'seapo.mc17_titulo':       'For Responsibility and Affection: philosophy and agroecology between Hans Jonas and Byung-Chul Han',
      'seapo.mc17_speaker':      'Diógenes Galdino Morais Silva',
      'seapo.mc_horario':        '1:00 PM – 5:00 PM',

      /* Dia 22 */
      'seapo.feira_tag':         'Fair',
      'seapo.feira_titulo':      'Guanambi Organic Fair',
      'seapo.feira_local':       'Covered parking lot, IF Baiano Guanambi Campus',
      'seapo.feira_encomendas':  'Pre-orders:',
      'seapo.seapinho_tag':      'Stand',
      'seapo.seapinho_titulo':   'ÁGORA INFÂNCIAS / I SEAPINHO',
      'seapo.seapinho_acesso':   'Free admission for children',

      /* Submissão */
      'seapo.sub_aria':          'Scientific Paper Submission',
      'seapo.sub_tag':           '📄 Scientific Papers',
      'seapo.sub_titulo':        'Paper Submission',
      'seapo.sub_desc':          'Share your research in agroecology and organic production with the X SEAPO scientific community.',
      'seapo.prazo_label':       'Submission deadline',
      'seapo.prazo_tag_prorrogado': 'Extended',
      'seapo.prazo_data_antiga': 'July 31, 2026',
      'seapo.prazo_data':        'August 9, 2026',
      'seapo.prazo_note':        'New deadline! Download your format\'s template, follow the tutorial, and submit before the new date.',
      'seapo.mod1_titulo':       'Abstract',
      'seapo.mod1_desc':         'Condensed presentation of the research. Use the <em>abstract template</em> available on Drive for correct formatting.',
      'seapo.mod2_titulo':       'Experience Report',
      'seapo.mod2_desc':         'Share practices and experiences in the field of agroecology. Use the <em>report template</em> available on Drive.',
      'seapo.mod3_titulo':       'Scientific Article',
      'seapo.mod3_desc':         'Full contribution with research results. Use the <em>article template</em> available on Drive.',
      'seapo.cta_templates':     '📥 Download Templates',
      'seapo.cta_tutorial':      '▶️ Submission Tutorial (PDF)',

      /* Hospedagem */
      'seapo.hosp_aria':         'Hotels in Guanambi',
      'seapo.hosp_tag':          '🏘️ Accommodation',
      'seapo.hosp_titulo':       'Hotels in Guanambi',
      'seapo.hosp_desc':         'Accommodation suggestions in Guanambi to help participants plan their stay. Rates and availability are managed by each establishment — we recommend confirming directly before booking. The SEAPO has no affiliation with any of the listed hotels.',
      'seapo.hosp_individual':   'Single',
      'seapo.hosp_duplo':        'Double',
      'seapo.hosp_triplo':       'Triple',
      'seapo.hosp_ligar':        'Call now',
      'seapo.hosp_airbnb_desc':  'Entire home: house in Guanambi, Brazil',
      'seapo.hosp_hospedes':     'Guests',
      'seapo.hosp_quarto':       'Bedroom',
      'seapo.hosp_cama':         'Bed',
      'seapo.hosp_banheiro':     'Bathroom',
      'seapo.hosp_ver_airbnb':   'View on Airbnb',

      /* Inscrições */
      'seapo.inscricoes_aria':   'X SEAPO Registration',
      'seapo.inscricoes_titulo': 'Registrations are open!',
      'seapo.inscricoes_desc':   'Registration for X SEAPO is now open. Secure your spot at the largest agroecology seminar in the Productive Sertão.',
      'seapo.inscricoes_cta1':   'Register Now',
      'seapo.inscricoes_cta2':   'Chat on WhatsApp',

      /* Memória */
      'seapo.mem_aria':          'SEAPO history',
      'seapo.mem_tag':           '📌 History',
      'seapo.mem_titulo':        'Nine editions that seeded the X SEAPO',
      'seapo.mem_desc':          'Since 2017, the SEAPO brings together science, extension, and family farming at IF Baiano Guanambi Campus.',
      'seapo.mem1_desc':         'I SEAPO — the first seed planted by NEAPO',
      'seapo.mem2_desc':         'III SEAPO — 20+ municipalities and 14 simultaneous workshops',
      'seapo.mem3_desc':         'IV SEAPO — online edition during the pandemic',
      'seapo.mem4_desc':         'VII SEAPO — internationalization and new themes',
      'seapo.photo1_caption':    'The agroecological fair is one of the event\'s enduring hallmarks.',
      'seapo.photo2_caption':    'Certificate presentation: the recognition that transforms lives.',
      'seapo.photo3_caption':    'VII SEAPO — 2023: debate, science, and community.',

      /* Vídeos */
      'seapo.videos_aria':       'SEAPO videos',
      'seapo.videos_tag':        '▶️ Memories on video',
      'seapo.videos_titulo':     'Relive previous editions',
      'seapo.videos_desc':       'Lectures, footage, and highlights from the editions that shaped the X SEAPO.',
      'seapo.video1_titulo':     'VII SEAPO',
      'seapo.video1_desc':       'Organic production, workshops, and agroecological fair.',
      'seapo.video2_titulo':     'VI SEAPO',
      'seapo.video2_desc':       'Lectures and activities from the sixth edition.',
      'seapo.video3_titulo':     'III SEAPO',
      'seapo.video3_desc':       'Highlights from the grassroots agroecological fair.',

      /* ================= CERTIFICACAO.HTML ================ */

      'cert.page_title':         'Participatory Organic Certification | Organic Intelligence',
      'cert.meta_desc':          'Participatory Organic Certification – Organic Intelligence. Understand how the certification process works through the Participatory Guarantee System (SPG) of the Povos da Mata Network.',
      'cert.hero_aria':          'Participatory Organic Certification',
      'cert.hero_sub':           'Participatory Guarantee System',
      'cert.hero_desc':          'Understand how the organic certification process works at Organic Intelligence — integrated with the Povos da Mata Agroecology Network — and how you can join this network that is transforming production in the Sertão.',
      'cert.cta_etapas':         'See the steps',
      'cert.cta_whatsapp':       'Chat on WhatsApp',
      'cert.metricas_aria':      'Certification statistics',
      'cert.metric1_label':      'Certified Farmers',
      'cert.metric2_label':      'Process Steps',
      'cert.metric3_label':      'Certificate Validity',
      'cert.metric4_label':      'Transition Period',
      'cert.intro_aria':         'What is participatory organic certification',
      'cert.intro_tag':          '🌱 What it is',
      'cert.intro_titulo':       'Participatory Organic Certification',
      'cert.intro_p1':           'The Participatory Guarantee System (SPG) is a democratic and community-based approach to certifying organic production. Unlike audit-based certification, in the SPG it is the farmers, consumers, and technicians themselves who organize into groups and nuclei to collectively guarantee compliance with the principles of organic agriculture.',
      'cert.intro_p2':           'Organic Intelligence is part of the <strong>Povos da Mata Agroecology Network</strong> through the <strong>Sertão Feliz Nucleus</strong>, which brings together groups of family farmers from the Productive Sertão and Southwest Bahia, promoting certification based on mutual trust, transparency, and commitment to agroecology.',
      'cert.intro_p3':           'All producers go through a process of agroecological <strong>transition or conversion</strong>, depending on the reality of each production unit.',
      'cert.destaque_titulo':    'Why get certified?',
      'cert.destaque_desc':      'Organic certification provides access to differentiated markets, better prices for products, strengthened agroecological identity, and access to government programs such as the PAA and PNAE — in addition to building consumer confidence.',
      'cert.tag_precos':         'Better prices',
      'cert.tag_paa':            'Access to PAA',
      'cert.tag_pnae':           'Access to PNAE',
      'cert.tag_identidade':     'Organic identity',
      'cert.tag_feiras':         'Specialized fairs',
      'cert.estrutura_aria':     'Structure of the participatory system',
      'cert.estrutura_tag':      '🏗️ How it is organized',
      'cert.estrutura_titulo':   'SPG Structure',
      'cert.estrutura_desc':     'The system is organized into three levels that function in a collaborative and democratic way.',
      'cert.grupo_titulo':       'Group',
      'cert.grupo_desc':         'Formed by 3 to 12 farmers who know each other, trust one another, and make mutual visits to verify good agroecological practices.',
      'cert.grupo_num':          '3 to 12 farmers',
      'cert.nucleo_titulo':      'Nucleus',
      'cert.nucleo_desc':        'Composed of at least 3 groups. The <strong>Sertão Feliz</strong> Nucleus coordinates groups in the Productive Sertão and Southwest Bahia.',
      'cert.nucleo_num':         'Min. 3 groups',
      'cert.rede_titulo':        'Network',
      'cert.rede_desc':          'The <strong>Povos da Mata Network</strong> brings together all nuclei, issues the certificates, and ensures integration among farmers across Bahia.',
      'cert.rede_num':           'State-wide network',
      'cert.aviso_aria':         'Important: certification timeline',
      'cert.aviso_titulo':       'The full process can take from 6 months to 2 years',
      'cert.aviso_texto':        'The timeline varies depending on the history of conventional input use and the reality of each production unit. All producers go through agroecological transition or conversion.',
      'cert.etapas_aria':        'Certification process steps',
      'cert.etapas_tag':         '📋 Step by step',
      'cert.etapas_titulo':      'The 8 Steps to Certification',
      'cert.etapas_desc':        'From first contact to certificate issuance, see the complete path to becoming a certified organic producer.',
      'cert.etapa1_titulo':      'Contact the Sertão Feliz Nucleus',
      'cert.etapa1_desc':        'The first step is to get in touch via the number available on this website to begin the conversation about joining the process.',
      'cert.etapa2_titulo':      'Referral and visit from the nearest Group',
      'cert.etapa2_desc':        'The Nucleus will refer you to the nearest Group of farmers. That Group will organize a committee to visit your production unit, learn about the property, and present information on how the system works and the documentation required for registration.',
      'cert.etapa3_titulo':      'Group approval and membership',
      'cert.etapa3_desc':        'Your approval occurs when the Group members accept you, after getting to know the family and the production unit. You are then added to the <strong>Group Membership Record</strong>.',
      'cert.etapa4_titulo':      'Completing the required documentation',
      'cert.etapa4_desc':        'After joining the Group, you must complete the following documents:',
      'cert.doc1':               'Registration and Responsibility Agreement',
      'cert.doc2':               'Production Unit Management Plan',
      'cert.doc3':               'Field Notebook',
      'cert.etapa5_titulo':      'Regular visits among Group members',
      'cert.etapa5_desc':        'Periodically, all production units in the Group must be visited, with the <strong>Visit Log</strong> filled in and all members present.',
      'cert.etapa6_titulo':      'External Review and Verification Committee',
      'cert.etapa6_desc':        'When all units in the Group are deemed ready by its members, the coordinator submits a request for an <strong>External Review</strong> to the Nucleus. The Nucleus then organizes the <strong>Verification Committee</strong> to visit a sample of production units, reviewing documentation and Visit Logs completed during the year.',
      'cert.etapa7_titulo':      'Issuance of the Organic Compliance Certificate',
      'cert.etapa7_desc':        'After approval by the Verification Committee, the <strong>Organic Compliance Certificate</strong> is issued, valid for one year. During that period, the Groups continue periodic visits to monitor processes and exchange information and knowledge.',
      'cert.etapa8_titulo':      'If not approved',
      'cert.etapa8_desc':        'If the Verification Committee does not approve, the producer does not receive the Certificate, and <strong>deadlines are set for the required adjustments</strong>. The producer can adapt their production to the required practices and criteria, and request a new External Review in the following cycle.',
      'cert.reg_aria':           'How to find certified organic producers',
      'cert.reg_tag':            '🔍 Public registry',
      'cert.reg_titulo':         'Who are the certified farmers?',
      'cert.reg_p':              'To find any certified organic producer in Brazil, the Ministry of Agriculture provides the <strong>National Registry of Organic Producers (CNPO)</strong>. Simply access the panel below, select the state and municipality.',
      'cert.reg_link':           'Search National Registry (CNPO)',
      'cert.agric_aria':         'Farmers certified by the program',
      'cert.agric_tag':          '🌾 Our certified members',
      'cert.agric_titulo':       'Farmers certified by the program',
      'cert.agric_desc':         'Meet the families and producers who have earned organic certification through Organic Intelligence and the Povos da Mata Network.',
      'cert.cta_aria':           'Get in touch to start certification',
      'cert.cta_titulo':         'Ready to begin your organic journey?',
      'cert.cta_desc':           'Contact the Sertão Feliz Nucleus via WhatsApp or Instagram and take the first step toward participatory organic certification.',
      'cert.cta_btn1':           '📱 Chat on WhatsApp',
      'cert.cta_btn2':           '📷 Instagram',

      /* ============= CONTEUDOS-EDUCATIVOS.HTML ============= */

      'edu.page_title':          'Educational Content on Agroecology | Organic Intelligence',
      'edu.meta_desc':           'Educational Content from Organic Intelligence: articles, abstracts, and research on agroecology, organic production, environmental education, and family farming.',
      'edu.hero_aria':           'Educational content library',
      'edu.hero_tag':            '📚 Organic Intelligence Library',
      'edu.hero_titulo':         'Educational Content',
      'edu.hero_desc':           'Research, reports, and materials on organic production, agroecology, and family farming — freely available for farmers, students, and technicians.',
      'edu.total_label':         'available publications',
      'edu.busca_placeholder':   'Search by title or abstract...',
      'edu.busca_aria':          'Search publications',
      'edu.resultado_0':         'No publications found for',
      'edu.resultado_1':         '1 publication found',
      'edu.resultado_plural':    '{n} publications found',
      'edu.sem_resultado':       'No results found',
      'edu.sem_resultado_p':     'Try different search terms.',
      'edu.abrir_pdf':           'Open PDF →',
      'edu.acessar':             'Access publication →'
    }
  };

  /* -------------------------------------------------------
     DETECÇÃO DE IDIOMA
     Prioridade: localStorage (preferência do toggle) > param URL > padrão PT
  ------------------------------------------------------- */
  function detectLang() {
    /* 1. localStorage tem prioridade — respeita o toggle do usuário */
    try {
      var stored = localStorage.getItem('oi-lang');
      if (stored === 'pt' || stored === 'en') return stored;
    } catch(e) {}

    /* 2. Parâmetro ?lang= na URL como idioma inicial (links compartilhados,
          resultados de busca via hreflang). Armazena no localStorage para
          que o toggle funcione corretamente em recargas subsequentes. */
    if (typeof URLSearchParams !== 'undefined') {
      var param = new URLSearchParams(window.location.search).get('lang');
      if (param === 'pt' || param === 'en') {
        try { localStorage.setItem('oi-lang', param); } catch(e) {}
        return param;
      }
    }

    return 'pt';
  }

  var lang = detectLang();
  var dict = _t[lang] || _t['pt'];

  /* -------------------------------------------------------
     API PÚBLICA
  ------------------------------------------------------- */
  window.i18n = {
    lang: lang,
    t: function (key, vars) {
      var val = dict[key];
      if (val === undefined || val === null) return key;
      if (vars) {
        Object.keys(vars).forEach(function (k) {
          val = val.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
        });
      }
      return val;
    }
  };

  /* Atualiza <html lang> */
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  /* -------------------------------------------------------
     APLICAR TRADUÇÕES AO DOM (após DOMContentLoaded)
  ------------------------------------------------------- */
  function applyTranslations() {
    /* data-i18n → innerHTML */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = window.i18n.t(key);
      if (val !== key) el.innerHTML = val;
    });

    /* data-i18n-attr → "attr1:key1;attr2:key2" */
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(';');
      pairs.forEach(function (pair) {
        var idx = pair.indexOf(':');
        if (idx > 0) {
          var attr = pair.substring(0, idx).trim();
          var key  = pair.substring(idx + 1).trim();
          var val  = window.i18n.t(key);
          if (val !== key) el.setAttribute(attr, val);
        }
      });
    });

    /* <title> via data-i18n-title no <body> */
    var body = document.body;
    if (body && body.dataset && body.dataset.i18nTitle) {
      var tv = window.i18n.t(body.dataset.i18nTitle);
      if (tv !== body.dataset.i18nTitle) document.title = tv;
    }

    /* <meta name="description"> via data-i18n-content */
    var dm = document.querySelector('meta[name="description"]');
    if (dm && dm.dataset && dm.dataset.i18nContent) {
      var dv = window.i18n.t(dm.dataset.i18nContent);
      if (dv !== dm.dataset.i18nContent) dm.setAttribute('content', dv);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }

})();
