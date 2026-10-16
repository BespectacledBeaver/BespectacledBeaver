// ------------------------------------------------------------
// Theme — follows the ESI Archives-style localStorage behaviour
// ------------------------------------------------------------
const themeToggle = document.querySelector('#light-mode-toggle');
const savedMode = localStorage.getItem('lightMode');
if (savedMode === 'enabled') document.body.classList.add('lightmode');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('lightmode');
  localStorage.setItem(
    'lightMode',
    document.body.classList.contains('lightmode') ? 'enabled' : 'disabled'
  );
});

// ------------------------------------------------------------
// English / French translations
// ------------------------------------------------------------
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.reports': 'Reports',

    'hero.eyebrow': 'Computer Science · Software Engineering',
    'hero.title': 'Building things that are <span>useful, technical &amp; human.</span>',
    'hero.lead': "I'm <strong>Abdellah Arrouche</strong>, a computer science graduate interested in software engineering, data, visualisation and interactive systems.",
    'hero.viewProjects': 'View projects ↘',
    'hero.readReports': 'Read reports ↗',

    'stats.projects': 'selected projects',
    'stats.areas': 'technology areas',
    'stats.students': 'students in RE:RE pilot',
    'stats.satisfaction': 'RE:RE satisfaction',

    'projects.eyebrow': '01 / Selected work',
    'projects.title': 'Projects, kept <span>clear.</span>',
    'projects.intro': 'Four projects across web development, analytics and game-based learning.',

    'project01.label': 'PROJECT 01',
    'project01.title': 'Refactal<br><span>Administrative Dashboard</span>',
    'project01.desc': 'Gameplay analytics dashboard for monitoring player activity, progression and engagement.',
    'project01.focusLabel': 'Focus',
    'project01.focus': 'Turn raw gameplay events into practical views for moderators and supervisors.',
    'project01.viewsLabel': 'Views',
    'project01.views': 'General activity, levels, individual players and engagement/KPIs.',

    'project02.label': 'PROJECT 02',
    'project02.title': 'Refactal: Reimagined<br><span>RE:RE</span>',
    'project02.desc': 'A 2D educational puzzle-platformer where executable code becomes part of the gameplay.',
    'project02.coreLabel': 'Core',
    'project02.core': 'Custom lexer, parser, validator and executor connected directly to game objects.',
    'project02.evalLabel': 'Evaluation',
    'project02.eval': '52-student pilot · 4.22/5 satisfaction · 4.50/5 fun.',

    'project03.label': 'PROJECT 03',
    'project03.title': 'Scientific Article<br><span>Search Engine</span>',
    'project03.desc': 'Web application for searching scientific articles from user-provided keywords.',
    'project03.archLabel': 'Architecture',
    'project03.arch': 'ReactJS frontend, Django backend and PostgreSQL persistence.',
    'project03.searchLabel': 'Search',
    'project03.search': 'ElasticSearch used for advanced/full-text search capabilities.',

    'project04.label': 'PROJECT 04',
    'project04.title': 'IKHTEYAR<br><span>Banking Comparison</span>',
    'project04.desc': 'Responsive web platform for exploring, filtering and comparing banking services in Algeria.',
    'project04.featuresLabel': 'Features',
    'project04.features': 'Bank information, filters, sorting, fees, branches and side-by-side comparison.',
    'project04.structureLabel': 'Structure',
    'project04.structure': 'MVC-based application with administrative functionality for managing data.',

    'links.readReport': 'Read report ↗',
    'links.readDissertation': 'Read dissertation ↗',

    'more.eyebrow': 'More work',
    'more.title': 'There is room for <span>what comes next.</span>',
    'more.p05': 'PROJECT 05',
    'more.p06': 'PROJECT 06',
    'more.p07': 'PROJECT 07',
    'more.next': 'Coming next',
    'more.slot': 'Summary · stack · link',

    'about.eyebrow': '02 / About the work',
    'about.title': 'From problem to <span>working system.</span>',
    'about.understandTitle': 'Understand',
    'about.understand': 'Start from the problem, users and constraints before choosing the technology.',
    'about.designTitle': 'Design',
    'about.design': 'Turn requirements into an architecture and interface that support the intended workflow.',
    'about.buildTitle': 'Build',
    'about.build': 'Keep the implementation modular and practical, while leaving room for iteration.',
    'about.measureTitle': 'Measure',
    'about.measure': 'Use feedback, analytics and evaluation to understand what works and what should change.',

    'reports.eyebrow': '03 / Source documents',
    'reports.title': 'Full reports, <span>when you want the details.</span>',
    'reports.pdf': 'PDF ↗',
    'reports.r1': 'Refactal — Administrative Dashboard',
    'reports.r2': 'Refactal: Reimagined — RE:RE',
    'reports.r3': 'Scientific Article Search Engine',
    'reports.r4': 'IKHTEYAR — Banking Service Comparison',

    'footer.role': 'Computer Science · Software Engineering · Data · Web · Serious Games',
    'footer.built': 'Built as a static GitHub Pages portfolio.',
    'meta.title': 'Abdellah Arrouche — Portfolio',
    'meta.description': 'Abdellah Arrouche — Computer Science portfolio covering software engineering, analytics, web development and serious games.',
    'terminal.status': 'open to opportunities',
    'alt.dashboard': 'Refactal administrative dashboard player analytics',
    'alt.rere': 'Refactal Reimagined tutorial room',
    'alt.search': 'Scientific article search engine architecture',
    'alt.ikhteyar': 'IKHTEYAR banking service comparison interface'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.reports': 'Rapports',

    'hero.eyebrow': 'Informatique · Génie logiciel',
    'hero.title': 'Créer des systèmes <span>utiles, techniques &amp; humains.</span>',
    'hero.lead': 'Je suis <strong>Abdellah Arrouche</strong>, diplômé en informatique et intéressé par le génie logiciel, la donnée, la visualisation et les systèmes interactifs.',
    'hero.viewProjects': 'Voir les projets ↘',
    'hero.readReports': 'Lire les rapports ↗',

    'stats.projects': 'projets sélectionnés',
    'stats.areas': 'domaines technologiques',
    'stats.students': 'étudiants dans le pilote RE:RE',
    'stats.satisfaction': 'satisfaction RE:RE',

    'projects.eyebrow': '01 / Projets sélectionnés',
    'projects.title': 'Des projets, présentés <span>clairement.</span>',
    'projects.intro': 'Quatre projets en développement web, analytique et apprentissage par le jeu.',

    'project01.label': 'PROJET 01',
    'project01.title': 'Refactal<br><span>Tableau de bord administratif</span>',
    'project01.desc': 'Tableau de bord d’analyse du gameplay pour suivre l’activité, la progression et l’engagement des joueurs.',
    'project01.focusLabel': 'Objectif',
    'project01.focus': 'Transformer les événements bruts du jeu en vues utiles pour les modérateurs et les encadrants.',
    'project01.viewsLabel': 'Vues',
    'project01.views': 'Activité générale, niveaux, joueurs individuels et engagement/KPI.',

    'project02.label': 'PROJET 02',
    'project02.title': 'Refactal: Reimagined<br><span>RE:RE</span>',
    'project02.desc': 'Un jeu de plateforme et de réflexion éducatif en 2D où le code exécutable devient une partie du gameplay.',
    'project02.coreLabel': 'Cœur technique',
    'project02.core': 'Lexer, parseur, validateur et exécuteur personnalisés directement reliés aux objets du jeu.',
    'project02.evalLabel': 'Évaluation',
    'project02.eval': 'Pilote de 52 étudiants · satisfaction 4,22/5 · plaisir 4,50/5.',

    'project03.label': 'PROJET 03',
    'project03.title': 'Moteur de recherche<br><span>d’articles scientifiques</span>',
    'project03.desc': 'Application web permettant de rechercher des articles scientifiques à partir de mots-clés fournis par l’utilisateur.',
    'project03.archLabel': 'Architecture',
    'project03.arch': 'Frontend ReactJS, backend Django et persistance PostgreSQL.',
    'project03.searchLabel': 'Recherche',
    'project03.search': 'ElasticSearch utilisé pour la recherche avancée et en texte intégral.',

    'project04.label': 'PROJET 04',
    'project04.title': 'IKHTEYAR<br><span>Comparaison bancaire</span>',
    'project04.desc': 'Plateforme web responsive permettant d’explorer, filtrer et comparer les services bancaires en Algérie.',
    'project04.featuresLabel': 'Fonctionnalités',
    'project04.features': 'Informations bancaires, filtres, tri, tarifs, agences et comparaison côte à côte.',
    'project04.structureLabel': 'Structure',
    'project04.structure': 'Application basée sur le modèle MVC avec une partie administrative pour gérer les données.',

    'links.readReport': 'Lire le rapport ↗',
    'links.readDissertation': 'Lire le mémoire ↗',

    'more.eyebrow': 'Autres projets',
    'more.title': 'Il reste de la place pour <span>la suite.</span>',
    'more.p05': 'PROJET 05',
    'more.p06': 'PROJET 06',
    'more.p07': 'PROJET 07',
    'more.next': 'À venir',
    'more.slot': 'Résumé · technologies · lien',

    'about.eyebrow': '02 / Approche',
    'about.title': 'Du problème au <span>système fonctionnel.</span>',
    'about.understandTitle': 'Comprendre',
    'about.understand': 'Partir du problème, des utilisateurs et des contraintes avant de choisir les technologies.',
    'about.designTitle': 'Concevoir',
    'about.design': 'Transformer les besoins en une architecture et une interface adaptées au flux de travail visé.',
    'about.buildTitle': 'Construire',
    'about.build': 'Garder une implémentation modulaire et pragmatique, tout en laissant place aux itérations.',
    'about.measureTitle': 'Mesurer',
    'about.measure': 'Utiliser les retours, les données et l’évaluation pour comprendre ce qui fonctionne et ce qui doit évoluer.',

    'reports.eyebrow': '03 / Documents sources',
    'reports.title': 'Rapports complets, <span>pour aller dans le détail.</span>',
    'reports.pdf': 'PDF ↗',
    'reports.r1': 'Refactal — Tableau de bord administratif',
    'reports.r2': 'Refactal: Reimagined — RE:RE',
    'reports.r3': 'Moteur de recherche d’articles scientifiques',
    'reports.r4': 'IKHTEYAR — Comparaison des services bancaires',

    'footer.role': 'Informatique · Génie logiciel · Données · Web · Jeux sérieux',
    'footer.built': 'Portfolio statique construit pour GitHub Pages.',
    'meta.title': 'Abdellah Arrouche — Portfolio',
    'meta.description': 'Portfolio d’Abdellah Arrouche — informatique, génie logiciel, analytique, développement web et jeux sérieux.',
    'terminal.status': 'ouvert aux opportunités',
    'alt.dashboard': 'Analyse des joueurs dans le tableau de bord administratif Refactal',
    'alt.rere': 'Salle du tutoriel de Refactal: Reimagined',
    'alt.search': 'Architecture du moteur de recherche d’articles scientifiques',
    'alt.ikhteyar': 'Interface de comparaison des services bancaires IKHTEYAR'
  }
};

const languageToggle = document.querySelector('#language-toggle');
const languageOptions = document.querySelectorAll('[data-lang-option]');
/*
function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });

  document.title = dictionary['meta.title'];
  document.querySelector('#meta-description')?.setAttribute('content', dictionary['meta.description']);
  document.querySelector('#hero-terminal')?.setAttribute('aria-label', language === 'fr' ? 'Résumé du portfolio' : 'Portfolio summary');
  document.querySelector('#terminal-status')?.replaceChildren(document.createTextNode('"' + dictionary['terminal.status'] + '"'));
  document.querySelector('#alt-dashboard')?.setAttribute('alt', dictionary['alt.dashboard']);
  document.querySelector('#alt-rere')?.setAttribute('alt', dictionary['alt.rere']);
  document.querySelector('#alt-search')?.setAttribute('alt', dictionary['alt.search']);
  document.querySelector('#alt-ikhteyar')?.setAttribute('alt', dictionary['alt.ikhteyar']);

  languageOptions.forEach(option => {
    option.classList.toggle('active', option.dataset.langOption === language);
  });

  const isFrench = language === 'fr';
  languageToggle?.setAttribute('aria-label', isFrench ? 'Changer de langue' : 'Switch language');
  languageToggle?.setAttribute('title', isFrench ? 'Changer de langue' : 'Switch language');
  themeToggle?.setAttribute('aria-label', isFrench ? 'Changer de thème' : 'Toggle light mode');
  themeToggle?.setAttribute('title', isFrench ? 'Changer de thème' : 'Toggle light mode');

  localStorage.setItem('portfolioLanguage', language);
}

const savedLanguage = localStorage.getItem('portfolioLanguage') || 'en';
applyLanguage(savedLanguage);

languageToggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.language || 'en';
  applyLanguage(current === 'en' ? 'fr' : 'en');
});
*/
// Navigation active state
const navLinks = document.querySelectorAll('.navbar a');
const sections = [...document.querySelectorAll('section[id]')];

function updateActiveNav() {
  let current = sections[0]?.id;
  const threshold = window.scrollY + 130;
  sections.forEach(section => {
    if (section.offsetTop <= threshold) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('navbar-a-infocus', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(updateActiveNav, 250);
  });
});
