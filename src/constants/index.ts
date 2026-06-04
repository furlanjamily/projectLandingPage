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

export interface PricingOption {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FooterLink {
  href: string;
  label: string;
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

export const pricingOptions: PricingOption[] = [
  {
    title: "Básico",
    price: "R$120",
    features: [
      "Uso dos principais equipamentos de musculação e cardio",
      "Participação em aulas em grupo como yoga e pilates",
      "Acesso às áreas comuns, vestiários e salas de descanso",
      "Acesso durante horários padrão da academia",
    ],
  },
  {
    title: "Mensal",
    price: "R$100",
    isPopular: true,
    features: [
      "Inclui todos os benefícios do plano básico",
      "Participação em aulas especiais e workshops",
      "Avaliação física para monitorar progresso",
      "Descontos em suplementos e produtos da loja da academia",
    ],
  },
  {
    title: "Anual",
    price: "R$85",
    features: [
      "Inclui todos os benefícios do plano mensal",
      "Sessões ilimitadas com personal trainers",
      "Participação em eventos e programas especiais",
      "Descontos em taxas de renovação e serviços adicionais",
    ],
  },
];

export const footerLinks: FooterLink[] = [
  { href: "#", label: "Eventos" },
  { href: "#", label: "Encontros" },
  { href: "#", label: "Colaboradores" },
  { href: "#", label: "Feed Back" },
];

export const socialLinks: SocialLink[] = [
  { icon: MessageCircleMore, href: "#", label: "WhatsApp" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];
