// ─── V4 Content Data (INFLUTA) ─────────────────────────────────────
// Terminologie : "Organisations" (pas Marques), "Talents & Influenceurs" (pas Créateurs)

export const v4Hero = {
  eyebrow: '✦ La plateforme qui propulse les talents & influenceurs vers le statut de véritables professionnels',
  description: 'INFLUTA centralise la recherche de talents & influenceurs qualifiés, la publication de missions, les candidatures, les paiements sécurisés et le pilotage des collaborations — entre organisations et talents, en un seul espace conçu pour l\'Afrique.',
  ctaOrg: 'Je suis une organisation',
  ctaTalent: 'Je suis un talent / influenceur',
  whatsappBase: 'https://wa.me/221781280404?text=',
};

export const v4Launch = {
  title: 'Le lancement approche. Soyez là dès le premier jour.',
  description: 'La plateforme est en cours de développement. Organisations et talents & influenceurs — rejoignez la liste des premiers partenaires dès maintenant.',
  ctaWhatsapp: 'Rejoindre via WhatsApp',
  ctaDiscover: 'Découvrir →',
  targetDate: '2026-06-14T00:00:00',
};

export const v4Africa = {
  eyebrow: 'COUVERTURE PANAFRICAINE',
  title: 'Une infrastructure pour toute l\'Afrique.',
  description: 'INFLUTA est conçue pour l\'Afrique francophone et anglophone, avec une approche multi-pays, multi-devises et multilingue. Une seule plateforme pour toutes les collaborations du continent.',
  countries: [
    '🇸🇳 Sénégal', '🇨🇮 Côte d\'Ivoire', '🇲🇱 Mali', '🇬🇳 Guinée', '🇹🇬 Togo',
    '🇧🇯 Bénin', '🇨🇲 Cameroun', '🇳🇬 Nigéria', '🇬🇭 Ghana', '🇰🇪 Kenya',
    '🇲🇦 Maroc', '🇷🇼 Rwanda', '🇨🇩 RDC', '🇪🇹 Éthiopie', '+ autres',
  ],
  stats: [
    { value: '15+', label: 'Pays couverts au lancement' },
    { value: '500+', label: 'Talents & influenceurs attendus en bêta' },
    { value: '3', label: 'Devises : FCFA · EUR · USD' },
    { value: '100%', label: 'Conçu pour l\'Afrique mobile' },
    { value: 'FR/EN', label: 'Interface bilingue native' },
    { value: '0€', label: 'Pour démarrer' },
  ],
};

export const v4Talents = [
  {
    name: 'Aïcha Beauty',
    handle: '@aichabeauty_sn',
    country: '🇸🇳 Sénégal',
    badge: 'Top Créatrice',
    niches: ['Beauté', 'Lifestyle'],
    bio: 'Experte beauté naturelle & lifestyle panafricain. Communauté engagée, 78% femmes 18-34 ans.',
    followers: '124K',
    engagement: '5.2%',
    score: 96,
    tarif: '150 000 — 350 000 FCFA',
  },
  {
    name: 'Mariam Food',
    handle: '@mariamfood_ci',
    country: '🇨🇮 Côte d\'Ivoire',
    badge: 'Top Créatrice',
    niches: ['Food', 'UGC'],
    bio: 'Créatrice food UGC de référence en Côte d\'Ivoire. Audience féminine ultra-engagée.',
    followers: '143K',
    engagement: '4.3%',
    score: 94,
    tarif: '200 000 — 550 000 FCFA',
  },
  {
    name: 'Maimouna Lifestyle',
    handle: '@maimouna.ml',
    country: '🇲🇱 Mali',
    badge: 'Top Créatrice',
    niches: ['Lifestyle', 'Mode'],
    bio: 'Leader d\'opinion lifestyle au Mali. Audience premium, fort pouvoir de prescription.',
    followers: '210K',
    engagement: '7.1%',
    score: 98,
    tarif: '300 000 — 800 000 FCFA',
  },
  {
    name: 'Fanta Mode',
    handle: '@fantamode_ci',
    country: '🇨🇮 Côte d\'Ivoire',
    badge: 'Top Créatrice',
    niches: ['Mode', 'Beauté'],
    bio: 'Icône mode africaine contemporaine. Collaborations avec les grandes maisons.',
    followers: '176K',
    engagement: '6.8%',
    score: 97,
    tarif: '280 000 — 750 000 FCFA',
  },
];

export const v4Missions = [
  {
    category: 'Beauté',
    categoryColor: '#F59E0B',
    location: '🇸🇳 Dakar',
    title: 'Campagne beauté naturelle',
    description: 'Organisation beauté africaine recherche 3 créatrices pour la mise en avant de sa nouvelle gamme naturelle sur Instagram et TikTok.',
    tags: ['Instagram', 'TikTok', '#Skincare', '#FR'],
    budget: '400 000 — 700 000 FCFA',
  },
  {
    category: 'Food / UGC',
    categoryColor: '#22C55E',
    location: '🇨🇮 Abidjan',
    title: 'UGC food & recettes ivoiriennes',
    description: 'Agence recherche 5 talents & influenceurs food pour produire des contenus UGC authentiques autour d\'une gamme culinaire locale.',
    tags: ['Reels', 'Stories', '#Food', '#UGC'],
    budget: '300 000 — 500 000 FCFA',
  },
  {
    category: 'Tech / Business',
    categoryColor: '#3B82F6',
    location: '🇧🇯 Cotonou',
    title: 'Campagne tech & financement PME',
    description: 'Startup fintech africaine cherche des talents & influenceurs spécialisés business pour valoriser sa solution de financement des PME.',
    tags: ['LinkedIn', 'YouTube', '#Tech', '#FR/EN'],
    budget: '300 000 — 600 000 FCFA',
  },
];

export const v4Dashboard = {
  title: 'INFLUTA — Dashboard Organisation · Campagnes',
  campaign: {
    name: 'Lancement Collection Été 2026',
    status: 'En cours',
    platforms: ['Instagram', 'TikTok'],
    locations: ['Dakar', 'Abidjan'],
    budget: '2 400 000 FCFA',
  },
  metrics: [
    { value: '12', label: 'Candidatures reçues' },
    { value: '5', label: 'Invitations envoyées' },
    { value: '3', label: 'Profils shortlistés' },
    { value: '2', label: 'Livrables validés' },
  ],
  candidates: [
    { name: 'Aïcha Beauty', status: 'Invitation envoyée', match: '96%', badge: 'À valider', badgeColor: '#F59E0B' },
    { name: 'Maimouna Lifestyle', status: 'Shortlistée', match: '95%', badge: 'Top créatrice', badgeColor: '#22C55E' },
    { name: 'Fanta Mode', status: 'Candidature reçue', match: '97%', badge: 'Profil vérifié', badgeColor: '#22C55E' },
  ],
};

export const v4ProCreator = {
  eyebrow: 'INFLUTA PRO CREATOR',
  title: 'Passe du statut d\'influenceur à celui de talent professionnel.',
  description: 'INFLUTA ne se contente pas de mettre en relation. INFLUTA donne aux talents & influenceurs les outils, la crédibilité et la visibilité pour exercer leur activité comme de vrais professionnels — contrats formalisés, paiements sécurisés, score de réputation et badges reconnus par les organisations à travers tout le continent.',
  features: [
    { icon: '📋', title: 'Contrats & briefs formalisés', desc: 'Chaque collaboration est encadrée par un brief validé, des délais clairs et un livrable défini.' },
    { icon: '🔒', title: 'Paiements garantis via escrow', desc: 'Fini les impayés. Les fonds sont sécurisés avant le début de chaque mission et libérés à la validation.' },
    { icon: '⭐', title: 'Score de réputation public', desc: 'Chaque mission réussie renforce votre score INFLUTA — visible par toutes les organisations du continent.' },
    { icon: '📊', title: 'Statistiques certifiées', desc: 'Vos métriques sociales sont vérifiées et affichées avec un badge de confiance sur votre profil public.' },
  ],
  stats: [
    { icon: '🚀', value: '+300%', label: 'De visibilité estimée pour les talents certifiés' },
    { icon: '💰', value: '0 impayé', label: 'Grâce au système escrow intégré' },
    { icon: '🏆', value: 'Top 10%', label: 'Les meilleurs scores mis en avant auprès des organisations' },
    { icon: '🌍', value: '15+ pays', label: 'Votre profil visible dans toute l\'Afrique' },
  ],
};

export const v4Features = {
  eyebrow: 'FONCTIONNALITÉS',
  title: 'Conçu pour vous.',
  titleAccent: 'Les deux.',
  talents: {
    title: 'Pour les Talents & Influenceurs',
    subtitle: 'Influenceurs & Talents & Influenceurs de contenu',
    items: [
      { icon: '🎯', title: 'Profil public qualifié', desc: 'Réseaux, statistiques certifiées, niches, langues, portfolio — tout ce qu\'une organisation veut voir.' },
      { icon: '💼', title: 'Vente de services directs', desc: 'Publiez vos offres de services et recevez des réservations confirmées avec paiement garanti.' },
      { icon: '📩', title: 'Missions & invitations organisations', desc: 'Postulez aux briefs ouverts ou soyez invité par des organisations qui correspondent à votre niche.' },
      { icon: '🔐', title: 'Paiement sécurisé escrow', desc: 'Fonds débloqués à la validation de votre livraison — zéro risque d\'impayé.' },
      { icon: '📈', title: 'Badges & scoring public', desc: 'Score INFLUTA pour booster votre visibilité et construire votre crédibilité.' },
    ],
  },
  orgs: {
    title: 'Pour les Organisations',
    subtitle: 'Annonceurs, agences & entreprises',
    items: [
      { icon: '🔍', title: 'Annuaire filtrable & qualifié', desc: 'Recherchez par pays, niche, audience, engagement et budget parmi des talents & influenceurs vérifiés.' },
      { icon: '📝', title: 'Publication de missions', desc: 'Publiez vos briefs en quelques minutes et gérez votre shortlist de talents depuis un seul espace.' },
      { icon: '📡', title: 'Pilotage campagne centralisé', desc: 'Messagerie intégrée, suivi des livrables et validation de chaque collaboration depuis votre tableau de bord.' },
      { icon: '💳', title: 'Escrow & paiements multi-devises', desc: 'FCFA, EUR, USD — les talents & influenceurs sont payés à la validation finale uniquement.' },
      { icon: '⭐', title: 'Options premium & mise en avant', desc: 'Accédez à des profils de talents exclusifs et obtenez un badge de confiance pour vos campagnes.' },
    ],
  },
};

export const v4Process = {
  eyebrow: 'PROCESSUS',
  title: 'Comment ça marche',
  steps: [
    { num: '01', title: 'Créez votre profil', desc: 'Organisation ou talent — profil public, réseaux, offres ou missions en quelques minutes.' },
    { num: '02', title: 'Publiez ou recherchez', desc: 'Organisations : publiez un brief. Talents : proposez vos services ou parcourez les missions disponibles.' },
    { num: '03', title: 'Invitez, postulez, sélectionnez', desc: 'Messagerie intégrée, shortlist, négociation et confirmation — en un seul espace fluide.' },
    { num: '04', title: 'Collaborez et grandissez', desc: 'Livrez, validez, encaissez, récoltez vos avis et montez dans le ranking INFLUTA.' },
  ],
};

export const v4Trust = {
  eyebrow: 'CONFIANCE & SCORING',
  title: 'Pensée pour rassurer, filtrer et mieux classer.',
  features: [
    { icon: '🏅', title: 'Badges certifiés', desc: 'Chaque profil peut décrocher les badges Vérifié, Top Talent ou Premium selon ses performances réelles.' },
    { icon: '📊', title: 'Statistiques sociales certifiées', desc: 'Instagram, TikTok, YouTube — métriques vérifiées à la source et horodatées.' },
    { icon: '📈', title: 'Scoring & ranking INFLUTA', desc: 'Un algorithme calcule la pertinence, la confiance, la fraîcheur et la performance de chaque profil.' },
    { icon: '🔒', title: 'Paiements sécurisés escrow', desc: 'Fonds versés uniquement après validation de la livraison — pour talents & influenceurs et organisations.' },
    { icon: '⭐', title: 'Avis & réputation certifiés', desc: 'Chaque collaboration génère un avis certifié qui alimente le score public du talent.' },
  ],
  scoring: {
    example: 'Aïcha Beauty · Score 96/100',
    bars: [
      { label: 'Pertinence métier', value: 96, color: '#F59E0B' },
      { label: 'Confiance', value: 92, color: '#22C55E' },
      { label: 'Fraîcheur', value: 88, color: '#06B6D4' },
      { label: 'Performance', value: 94, color: '#EC4899' },
      { label: 'Boost commercial', value: 78, color: '#8B5CF6' },
    ],
    globalScore: 96,
    globalLabel: 'Score global · Top 4% sur INFLUTA',
  },
};

export const v4EarlyAdopters = {
  eyebrow: '🎉 EN DÉVELOPPEMENT · LANCEMENT J-60',
  title: 'Rejoignez les premiers partenaires d\'INFLUTA.',
  description: 'La plateforme est en cours de développement final. Organisations ou talents & influenceurs — contactez-nous maintenant sur WhatsApp pour rejoindre la liste prioritaire, obtenir votre badge « Premier Partenaire » et bénéficier d\'avantages réservés aux early adopters.',
  benefits: [
    'Accès anticipé à la plateforme avant le lancement public',
    'Badge « Premier Partenaire » certifié affiché sur votre profil',
    'Visibilité prioritaire auprès des organisations et talents & influenceurs',
    'Accompagnement personnalisé à l\'onboarding',
    'Tarifs préférentiels réservés aux 90 premiers jours',
  ],
  talentCard: {
    title: 'Je suis Talent / Influenceur(se)',
    desc: 'Rejoignez INFLUTA avant le lancement et devenez l\'un des premiers talents certifiés de la plateforme panafricaine.',
    benefits: [
      'Profil certifié dès le lancement',
      'Badge « Premier Partenaire » exclusif',
      'Visibilité prioritaire auprès des organisations',
      'Accès anticipé aux missions sponsorisées',
      'Outils pour devenir un talent professionnel',
    ],
  },
  orgCard: {
    title: 'Je suis une Organisation',
    desc: 'Accès prioritaire à l\'annuaire de talents & influenceurs africains qualifiés, avec accompagnement personnalisé dès le lancement.',
    benefits: [
      'Accès anticipé à l\'annuaire de talents',
      'Badge « Organisation Partenaire » au lancement',
      'Publication de missions en avant-première',
      'Accompagnement onboarding personnalisé',
      'Tarifs préférentiels 90 premiers jours',
    ],
  },
};

export const v4Footer = {
  tagline: 'La plateforme panafricaine de collaboration entre organisations et talents & influenceurs. Conçue pour professionnaliser la collaboration entre organisations et talents en Afrique.',
  platformLinks: [
    'Couverture panafricaine',
    'Talents & Influenceurs vérifiés',
    'Exemples de missions',
    'Comment ça marche',
    'Confiance & Scoring',
  ],
  joinLinks: [
    'Je suis talent / influenceur(se)',
    'Je suis une organisation',
    'Je suis une agence',
    'Demander une démo',
  ],
  legalLinks: ['Mentions légales', 'CGU', 'Confidentialité'],
  domain: 'influta.africa',
  contactNote: 'Contact via WhatsApp uniquement',
  devNotice: 'Plateforme en cours de développement. Lancement officiel prévu dans 60 jours. Organisations et talents — contactez-nous via WhatsApp pour rejoindre les premiers partenaires.',
};

export const v4Nav = {
  links: [
    { label: 'Panafricaine', href: '#africa' },
    { label: 'Talents', href: '#talents' },
    { label: 'Missions', href: '#missions' },
    { label: 'Processus', href: '#process' },
    { label: 'Confiance', href: '#trust' },
    { label: 'Lancement', href: '#launch' },
  ],
};
