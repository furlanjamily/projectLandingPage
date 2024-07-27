import { BotMessageSquare, Dumbbell, MapPin } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Sobre", href: "#" },
  { label: "Vantagem", href: "#" },
  { label: "Planos", href: "#" },
  { label: "Avaliações", href: "#" },
];

export const testimonials = [
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

export const features = [
  {
    icon: <Dumbbell />,
    text: "Melhor qualidade nos equipamentos",
    description:
      "Descubra a excelência dos nossos equipamentos de ponta! Tecnologia de última geração para resultados extraordinários. Venha transformar seu treino conosco!",
  },
  {
    icon: <MapPin />,
    text: "Ótima localização",
    description:
      "Localização central de fácil acesso para você treinar com comodidade e praticidade.",
  },

    
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Situada no centro de Itatiba, tornando o acesso fácil e rápido para você",
  },
  {
    title: "Review code without worry",
    description:
      "Acesso a equipamentos de alta qualidade e orientação de profissionais experientes.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Personal trainers disponíveis para criar planos de treino adaptados às suas necessidades.",
  },
  {
    title: "Share work in minutes",
    description:
      "Planos de treino acessíveis com excelente custo-benefício.",
  },
];

export const pricingOptions = [
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


export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Comunidade" },
  { href: "#", text: "Colaboradores" },
  { href: "#", text: "Feed Back" },
];
