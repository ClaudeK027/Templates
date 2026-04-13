import {
  Users, Briefcase, Search, MessageSquare, Shield, Star,
  TrendingUp, CreditCard, Award, Eye, BarChart3, Globe,
  CheckCircle, Zap, Heart, Target, Handshake, Lock,
} from 'lucide-react';

// ─── Statistiques plateforme ───────────────────────────────────────
export const stats = [
  { value: '10K+', label: 'Créateurs inscrits', icon: Users },
  { value: '2,500+', label: 'Missions publiées', icon: Briefcase },
  { value: '28', label: 'Pays africains', icon: Globe },
  { value: '99.8%', label: 'Paiements sécurisés', icon: Shield },
];

// ─── Réseaux sociaux supportés ─────────────────────────────────────
export const socialNetworks = [
  { name: 'Instagram', letter: 'Ig' },
  { name: 'YouTube', letter: 'Yt' },
  { name: 'TikTok', letter: 'Tk' },
  { name: 'X (Twitter)', letter: 'X' },
  { name: 'Facebook', letter: 'Fb' },
  { name: 'LinkedIn', letter: 'Li' },
];

// ─── Comment ça marche — Créateurs ─────────────────────────────────
export const stepsCreator = [
  {
    step: '01',
    title: 'Créez votre profil',
    description: 'Inscrivez-vous, connectez vos réseaux sociaux et mettez en valeur votre expertise créative.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Publiez vos services',
    description: 'Proposez vos offres de création de contenu, sponsoring, UGC et plus encore.',
    icon: Star,
  },
  {
    step: '03',
    title: 'Recevez des missions',
    description: 'Les marques vous contactent, vous invitent ou vous postulez aux missions qui vous intéressent.',
    icon: Briefcase,
  },
  {
    step: '04',
    title: 'Livrez et encaissez',
    description: 'Réalisez la mission, faites valider vos livrables et recevez votre paiement sécurisé.',
    icon: CreditCard,
  },
];

// ─── Comment ça marche — Marques ───────────────────────────────────
export const stepsBrand = [
  {
    step: '01',
    title: 'Publiez votre mission',
    description: 'Décrivez votre campagne, définissez vos critères et votre budget.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Trouvez les bons créateurs',
    description: 'Parcourez l\'annuaire, filtrez par niche, pays, audience et statistiques vérifiées.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Collaborez efficacement',
    description: 'Échangez via la messagerie intégrée, suivez l\'avancement et validez les livrables.',
    icon: MessageSquare,
  },
  {
    step: '04',
    title: 'Payez en toute sécurité',
    description: 'Le paiement est sécurisé via escrow : le créateur est payé uniquement après validation.',
    icon: Shield,
  },
];

// ─── Avantages créateurs ───────────────────────────────────────────
export const creatorBenefits = [
  {
    title: 'Visibilité panafricaine',
    description: 'Soyez découvert par des marques de tout le continent et au-delà.',
    icon: Eye,
  },
  {
    title: 'Statistiques vérifiées',
    description: 'Vos métriques sont authentifiées et mises en avant auprès des annonceurs.',
    icon: BarChart3,
  },
  {
    title: 'Paiement garanti',
    description: 'Le système d\'escrow protège votre rémunération à chaque mission.',
    icon: CreditCard,
  },
  {
    title: 'Badges de confiance',
    description: 'Gagnez en crédibilité avec des badges vérifiés, performance et premium.',
    icon: Award,
  },
  {
    title: 'Croissance continue',
    description: 'Scoring intelligent qui récompense votre activité et votre qualité de service.',
    icon: TrendingUp,
  },
  {
    title: 'Liberté totale',
    description: 'Fixez vos tarifs, choisissez vos missions et travaillez à votre rythme.',
    icon: Zap,
  },
];

// ─── Avantages marques ─────────────────────────────────────────────
export const brandBenefits = [
  {
    title: 'Annuaire qualifié',
    description: 'Accédez à des milliers de créateurs vérifiés, classés par niche et performance.',
    icon: Search,
  },
  {
    title: 'Données fiables',
    description: 'Statistiques synchronisées et historisées pour chaque créateur.',
    icon: BarChart3,
  },
  {
    title: 'Workflow complet',
    description: 'De la publication à la livraison, tout se fait sur une seule plateforme.',
    icon: CheckCircle,
  },
  {
    title: 'Sécurité des paiements',
    description: 'Escrow intégré : payez uniquement quand le livrable est validé.',
    icon: Lock,
  },
  {
    title: 'Multi-pays',
    description: 'Lancez des campagnes dans 28 pays africains depuis un seul tableau de bord.',
    icon: Globe,
  },
  {
    title: 'ROI mesurable',
    description: 'Suivez la performance de vos campagnes avec des reportings détaillés.',
    icon: TrendingUp,
  },
];

// ─── Témoignages ───────────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Amina K.',
    role: 'Créatrice lifestyle',
    country: 'Nigeria',
    avatar: '👩🏾‍💼',
    quote: 'INFLUKA m\'a permis de décrocher mes premières collaborations avec des marques internationales. Le système de badges a vraiment renforcé ma crédibilité.',
    rating: 5,
  },
  {
    name: 'Jean-Marc D.',
    role: 'Directeur Marketing',
    company: 'AfriBeauty',
    country: 'Côte d\'Ivoire',
    avatar: '👨🏾‍💼',
    quote: 'Trouver des influenceurs fiables en Afrique de l\'Ouest était un cauchemar. Avec INFLUKA, on a lancé 3 campagnes en 2 mois avec des résultats concrets.',
    rating: 5,
  },
  {
    name: 'Fatou S.',
    role: 'Créatrice mode & beauté',
    country: 'Sénégal',
    avatar: '👩🏾',
    quote: 'Le paiement sécurisé change tout. Je n\'ai plus à courir après les marques pour être payée. Tout est transparent et automatisé.',
    rating: 5,
  },
  {
    name: 'David O.',
    role: 'CEO',
    company: 'TechPulse Africa',
    country: 'Kenya',
    avatar: '👨🏿‍💼',
    quote: 'L\'annuaire qualifié et les statistiques vérifiées nous ont fait gagner un temps considérable dans la sélection de nos ambassadeurs.',
    rating: 4,
  },
  {
    name: 'Chioma N.',
    role: 'Travel & Food Creator',
    country: 'Ghana',
    avatar: '👩🏾‍🍳',
    quote: 'En 3 mois sur INFLUKA, j\'ai doublé mes revenus de création. La visibilité panafricaine ouvre des portes incroyables.',
    rating: 5,
  },
  {
    name: 'Moussa T.',
    role: 'Brand Manager',
    company: 'Savanna Drinks',
    country: 'Cameroun',
    avatar: '👨🏾',
    quote: 'Le workflow de bout en bout — du brief à la livraison — est fluide et professionnel. On gère tout depuis un seul endroit.',
    rating: 5,
  },
];

// ─── Plans tarifaires ──────────────────────────────────────────────
export const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0',
    currency: 'FCFA',
    period: '/mois',
    description: 'Pour découvrir la plateforme',
    features: [
      'Profil public',
      '3 offres de service',
      '5 candidatures / mois',
      'Messagerie standard',
      'Badges de confiance',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '9 900',
    currency: 'FCFA',
    period: '/mois',
    description: 'Pour les créateurs actifs',
    features: [
      'Offres illimitées',
      'Candidatures illimitées',
      'Badge Pro',
      'Boost profil mensuel',
      'Analytics avancés',
      'Support prioritaire',
    ],
    cta: 'Passer Pro',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '29 900',
    currency: 'FCFA',
    period: '/mois',
    description: 'Pour les marques et agences',
    features: [
      'Missions illimitées',
      'Invitations illimitées',
      'Accès analytics créateurs',
      'Boost missions',
      'Mise en avant page d\'accueil',
      'Manager de compte dédié',
    ],
    cta: 'Contacter les ventes',
    highlighted: false,
  },
];

// ─── Badges et confiance ───────────────────────────────────────────
export const trustFeatures = [
  {
    title: 'Profils vérifiés',
    description: 'Identité confirmée, réseaux authentifiés, données certifiées.',
    icon: CheckCircle,
  },
  {
    title: 'Paiement Escrow',
    description: 'Les fonds sont sécurisés jusqu\'à validation du livrable.',
    icon: Lock,
  },
  {
    title: 'Avis authentiques',
    description: 'Seuls les collaborateurs réels peuvent laisser un avis.',
    icon: Star,
  },
  {
    title: 'Support & médiation',
    description: 'Équipe dédiée pour résoudre les litiges rapidement.',
    icon: Handshake,
  },
];

// ─── Textes Hero par version ───────────────────────────────────────
export const heroContent = {
  v1: {
    headline: 'L\'Afrique crée.',
    subheadline: 'INFLUKA connecte.',
    description: 'La plateforme qui connecte les créateurs africains les plus talentueux avec les marques qui veulent faire la différence.',
    ctaCreator: 'Je suis créateur',
    ctaBrand: 'Je suis une marque',
  },
  v2: {
    headline: 'Le marketing d\'influence,',
    subheadline: 'réinventé pour l\'Afrique.',
    description: 'Trouvez, collaborez et mesurez l\'impact de vos campagnes d\'influence sur tout le continent africain. En toute confiance.',
    ctaCreator: 'Rejoindre comme créateur',
    ctaBrand: 'Recruter des créateurs',
  },
  v3: {
    headline: 'Créateurs & Marques,',
    subheadline: 'ensemble plus loin.',
    description: 'INFLUKA est l\'espace où les talents créatifs africains rencontrent les marques ambitieuses. Marketplace, collaboration et croissance partagée.',
    ctaCreator: 'Explorer en tant que créateur',
    ctaBrand: 'Lancer une campagne',
  },
};

// ─── Navigation ────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Créateurs', href: '#creators' },
  { label: 'Marques', href: '#brands' },
  { label: 'Comment ça marche', href: '#how-it-works' },
  { label: 'Tarifs', href: '#pricing' },
];
