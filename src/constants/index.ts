import {
  Dumbbell,
  MapPin,
  MessageCircleMore,
  Instagram,
  Facebook,
  Twitter,
  type LucideIcon,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  user: string;
  company: string;
  image: string;
  text: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Advantage {
  title: string;
  description: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface GymPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isFeatured: boolean;
  badgeText?: string;
  buttonText: string;
  features: PlanFeature[];
}

export interface PricingSectionContent {
  title: string;
  subtitle: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Vantagem", href: "#vantagem" },
  { label: "Planos", href: "#planos" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export const testimonials: Testimonial[] = [
  {
    user: "João Silva",
    company: "Stellar Solutions",
    image: user1,
    text: "Ótima localização central e estrutura moderna e bem equipada.",
  },
  {
    user: "Maria Oliveira",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Personal trainers altamente qualificados e dedicados ao seu progresso.",
  },
  {
    user: "Carlos Santos",
    company: "Fusion Dynamics",
    image: user4,
    text: "Excelentes aulas em grupo e workshops, sempre desafiadores e de alta qualidade.",
  },
  {
    user: "Mario Costa",
    company: "Visionary Creations",
    image: user5,
    text: "Ambiente acolhedor e positivo que incentiva o bem-estar e a comunidade.",
  },
];

export const features: Feature[] = [
  {
    icon: Dumbbell,
    title: "Melhor qualidade nos equipamentos",
    description:
      "Descubra a excelência dos nossos equipamentos de ponta! Tecnologia de última geração para resultados extraordinários. Venha transformar seu treino conosco!",
  },
  {
    icon: MapPin,
    title: "Ótima localização",
    description:
      "Localização central de fácil acesso para você treinar com comodidade e praticidade.",
  },
];

export const advantages: Advantage[] = [
  {
    title: "Localização privilegiada",
    description:
      "Situada no centro de Itatiba, tornando o acesso fácil e rápido para você",
  },
  {
    title: "Equipamentos de alta qualidade",
    description:
      "Acesso a equipamentos de alta qualidade e orientação de profissionais experientes.",
  },
  {
    title: "Acompanhamento personalizado",
    description:
      "Personal trainers disponíveis para criar planos de treino adaptados às suas necessidades.",
  },
  {
    title: "Planos acessíveis",
    description: "Planos de treino acessíveis com excelente custo-benefício.",
  },
];

export const pricingSection: PricingSectionContent = {
  title: "Planos disponíveis",
  subtitle: "Escolha o plano ideal para elevar sua performance na Vital Fit.",
};

export const gymPlans: GymPlan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "R$100",
    period: "/mês",
    description: "Flexibilidade total para começar sua jornada fitness.",
    isFeatured: false,
    buttonText: "Assinar plano",
    features: [
      { text: "Acesso à musculação e equipamentos de cardio", included: true },
      { text: "Aulas em grupo (yoga, pilates e funcional)", included: true },
      { text: "Vestiários, áreas comuns e salas de descanso", included: true },
      { text: "Acesso em horários padrão da academia", included: true },
      { text: "Avaliação física periódica", included: false },
      { text: "Sessões com personal trainer", included: false },
    ],
  },
  {
    id: "anual",
    name: "Anual",
    price: "R$85",
    period: "/mês",
    description: "Melhor custo-benefício para quem leva o treino a sério o ano todo.",
    isFeatured: true,
    badgeText: "MAIS VENDIDO",
    buttonText: "Começar agora",
    features: [
      { text: "Todos os benefícios do plano mensal", included: true },
      { text: "Aulas especiais e workshops exclusivos", included: true },
      { text: "Avaliação física para acompanhar evolução", included: true },
      { text: "Descontos em suplementos e produtos da loja", included: true },
      { text: "Participação em eventos da academia", included: true },
      { text: "Sessões ilimitadas com personal trainer", included: false },
    ],
  },
  {
    id: "vital-black",
    name: "Vital Black",
    price: "R$120",
    period: "/mês",
    description: "Experiência premium com acesso completo e acompanhamento dedicado.",
    isFeatured: false,
    buttonText: "Assinar plano",
    features: [
      { text: "Todos os benefícios do plano anual", included: true },
      { text: "Sessões ilimitadas com personal trainers", included: true },
      { text: "Programas especiais e eventos VIP", included: true },
      { text: "Descontos em renovação e serviços extras", included: true },
      { text: "Acesso estendido em horários premium", included: true },
      { text: "Consultoria nutricional mensal", included: true },
    ],
  },
];


export const socialLinks: SocialLink[] = [
  { icon: MessageCircleMore, href: "#", label: "WhatsApp" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];
