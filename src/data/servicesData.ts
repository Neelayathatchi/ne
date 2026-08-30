import {
  Armchair,
  Building2,
  Presentation,
  ShieldCheck,
  UsersRound,
  Video,
  BriefcaseBusiness,
  Wifi,
  Sparkles,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  bestFor: string;
  accent: string;
  icon: LucideIcon;
  features: string[];
};

export const servicesData: ServiceItem[] = [
  {
    id: "coworking",
    title: "Co-working Space",
    shortTitle: "Work Together",
    description:
      "Flexible desks and shared work areas built for focused professionals, freelancers, creators and growing teams.",
    bestFor: "Freelancers & Professionals",
    accent: "Flexible work, shared energy",
    icon: Armchair,
    features: [
      "Hot desk access",
      "Dedicated desk options",
      "High-speed internet",
      "Community access",
    ],
  },
  {
    id: "private-cabins",
    title: "Private Cabins",
    shortTitle: "Work Privately",
    description:
      "Fully furnished private offices for teams that need focus, privacy and a professional everyday base.",
    bestFor: "Founders & Teams",
    accent: "Quiet, secure, focused",
    icon: Building2,
    features: [
      "Private team cabins",
      "Furnished workspace",
      "Secure work environment",
      "Flexible team capacity",
    ],
  },
  {
    id: "meeting-rooms",
    title: "Meeting & Training Rooms",
    shortTitle: "Meet Better",
    description:
      "Professional rooms for meetings, presentations, workshops, reviews and collaborative sessions.",
    bestFor: "Teams & Trainers",
    accent: "Discuss, present, decide",
    icon: Presentation,
    features: [
      "Presentation support",
      "Whiteboard access",
      "Flexible booking",
      "Professional setup",
    ],
  },
  {
    id: "custom-office",
    title: "Custom Office Setup",
    shortTitle: "Build Your Setup",
    description:
      "Tailored workspace solutions designed around your team size, brand identity and operational needs.",
    bestFor: "Growing Businesses",
    accent: "Designed around your business",
    icon: BriefcaseBusiness,
    features: [
      "Custom workspace planning",
      "Furniture setup",
      "Branding support",
      "IT-ready environment",
    ],
  },
  {
    id: "managed-security",
    title: "Managed Security",
    shortTitle: "Work Securely",
    description:
      "Practical workplace security support designed to keep your systems and operations better protected.",
    bestFor: "Teams & Businesses",
    accent: "Protection without friction",
    icon: ShieldCheck,
    features: [
      "Security monitoring support",
      "Endpoint protection",
      "Patch management",
      "Long-term support",
    ],
  },
  {
    id: "creator-support",
    title: "Creator Support",
    shortTitle: "Create More",
    description:
      "Flexible creator-friendly workspace options for content production, meetings, collaboration and growth.",
    bestFor: "Creators & Influencers",
    accent: "Shoot, edit, meet, grow",
    icon: Video,
    features: [
      "Flexible workspace access",
      "Meeting support",
      "Creator-friendly plans",
      "Community networking",
    ],
  },
  {
    id: "startup-teams",
    title: "Startup Team Spaces",
    shortTitle: "Build Together",
    description:
      "A practical professional setup for early-stage teams building products, services and new businesses.",
    bestFor: "Startups",
    accent: "Move fast, stay focused",
    icon: UsersRound,
    features: [
      "Team-friendly layouts",
      "Flexible growth options",
      "Meeting access",
      "Founder community",
    ],
  },
  {
    id: "virtual-office",
    title: "Virtual Office",
    shortTitle: "Stay Professional",
    description:
      "A professional business presence for teams that need flexibility without a full-time physical office.",
    bestFor: "Remote Businesses",
    accent: "Flexible presence, professional image",
    icon: MonitorSmartphone,
    features: [
      "Professional business presence",
      "Flexible access options",
      "Meeting availability",
      "Business support",
    ],
  },
  {
    id: "connectivity",
    title: "Work-Ready Connectivity",
    shortTitle: "Stay Connected",
    description:
      "Reliable connectivity and workspace essentials that help your team stay productive throughout the day.",
    bestFor: "Every Member",
    accent: "Fast, reliable, ready",
    icon: Wifi,
    features: [
      "High-speed internet",
      "Power-ready desks",
      "Shared workspace essentials",
      "Reliable access",
    ],
  },
  {
    id: "community",
    title: "Community Access",
    shortTitle: "Grow Together",
    description:
      "A professional community where founders, creators, freelancers and teams can connect and exchange ideas.",
    bestFor: "Builders & Professionals",
    accent: "People, ideas, opportunity",
    icon: Sparkles,
    features: [
      "Community networking",
      "Peer interaction",
      "Collaborative environment",
      "Events and conversations",
    ],
  },
];