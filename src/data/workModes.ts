import {
  Focus,
  UsersRound,
  MessageSquareMore,
  Lightbulb,
  LockKeyhole,
  Zap,
  BriefcaseBusiness,
  UserRoundCheck,
  Presentation,
  Coffee,
  type LucideIcon,
} from "lucide-react";

export type WorkMode = {
  id: string;
  title: string;
  kicker: string;
  shortDescription: string;
  description: string;
  bestFor: string;
  space: string;
  capacity: string;
  vibe: string;
  privacy: string;
  features: string[];
  icon: LucideIcon;
};

export const workModes: WorkMode[] = [
  {
    id: "focus",
    title: "Focus",
    kicker: "Quiet. Clear. Uninterrupted.",
    shortDescription: "Deep work without the noise.",
    description:
      "A calm setup for heads-down work, focused sprints and moments when your best ideas need room to breathe.",
    bestFor: "Solo Work",
    space: "Dedicated Desk",
    capacity: "1 Person",
    vibe: "Calm & Focused",
    privacy: "Medium",
    features: [
      "Comfortable dedicated desk",
      "Fast Wi-Fi",
      "Power access",
      "Low-distraction environment",
    ],
    icon: Focus,
  },

  {
    id: "collaborate",
    title: "Collaborate",
    kicker: "Think. Share. Build Together.",
    shortDescription: "Made for teams in motion.",
    description:
      "A lively team environment designed for quick discussions, shared thinking and collaborative problem solving.",
    bestFor: "Teams",
    space: "Coworking Zone",
    capacity: "2–8 People",
    vibe: "Social & Energetic",
    privacy: "Open",
    features: [
      "Flexible team seating",
      "Shared work surfaces",
      "Fast connectivity",
      "Easy team communication",
    ],
    icon: UsersRound,
  },

  {
    id: "meet",
    title: "Meet",
    kicker: "Talk. Align. Decide.",
    shortDescription: "Professional conversations, properly set.",
    description:
      "A polished meeting setup for client discussions, interviews, reviews and the conversations that move work forward.",
    bestFor: "Teams & Clients",
    space: "Meeting Room",
    capacity: "4–12 People",
    vibe: "Professional",
    privacy: "High",
    features: [
      "Meeting table",
      "Presentation display",
      "Comfortable seating",
      "Private discussion setup",
    ],
    icon: MessageSquareMore,
  },

  {
    id: "create",
    title: "Create",
    kicker: "Imagine. Make. Experiment.",
    shortDescription: "Space for ideas to become real.",
    description:
      "An expressive workspace for creators, founders and makers who need freedom to explore and build.",
    bestFor: "Creators",
    space: "Creative Workspace",
    capacity: "1–6 People",
    vibe: "Inventive",
    privacy: "Flexible",
    features: [
      "Flexible seating",
      "Idea-friendly setup",
      "Creative collaboration zones",
      "Power and connectivity",
    ],
    icon: Lightbulb,
  },

  {
    id: "private",
    title: "Private",
    kicker: "Quiet. Secure. Yours.",
    shortDescription: "Your own room inside the hive.",
    description:
      "A private cabin for concentrated work, confidential calls and teams who want their own secure everyday base.",
    bestFor: "Founders & Teams",
    space: "Private Cabin",
    capacity: "1–6 People",
    vibe: "Focused & Premium",
    privacy: "Very High",
    features: [
      "Enclosed cabin",
      "Dedicated workspace",
      "Secure environment",
      "Professional privacy",
    ],
    icon: LockKeyhole,
  },

  {
    id: "flexible",
    title: "Flexible",
    kicker: "Arrive. Plug In. Go.",
    shortDescription: "Work how your day demands.",
    description:
      "A flexible desk environment for freelancers, remote professionals and anyone who likes freedom without losing structure.",
    bestFor: "Flexible Workers",
    space: "Hot Desk",
    capacity: "1 Person",
    vibe: "Dynamic",
    privacy: "Open",
    features: [
      "Choose your workspace",
      "Quick setup",
      "Shared amenities",
      "High-speed connectivity",
    ],
    icon: Zap,
  },

  {
    id: "build",
    title: "Build",
    kicker: "Start. Test. Grow.",
    shortDescription: "Startup energy lives here.",
    description:
      "A practical environment for founders and compact teams building products, businesses and the next big thing.",
    bestFor: "Startups",
    space: "Team Workspace",
    capacity: "2–10 People",
    vibe: "Driven",
    privacy: "Medium",
    features: [
      "Team-friendly layout",
      "Flexible expansion",
      "Fast Wi-Fi",
      "Startup community access",
    ],
    icon: BriefcaseBusiness,
  },

  {
    id: "connect",
    title: "Connect",
    kicker: "People. Ideas. Opportunity.",
    shortDescription: "Because good work needs good people.",
    description:
      "A social work environment where founders, creators and professionals naturally meet, exchange ideas and discover opportunities.",
    bestFor: "Networking",
    space: "Community Zone",
    capacity: "Open",
    vibe: "Warm & Social",
    privacy: "Open",
    features: [
      "Community interaction",
      "Casual meeting points",
      "Founder network",
      "Shared events",
    ],
    icon: UserRoundCheck,
  },

  {
    id: "present",
    title: "Present",
    kicker: "Stand Up. Show Up. Shine.",
    shortDescription: "Give your ideas the room they deserve.",
    description:
      "A professional setting for demos, pitches, team reviews and presentations that need attention.",
    bestFor: "Presentations",
    space: "Discussion / Presentation Room",
    capacity: "4–15 People",
    vibe: "Confident",
    privacy: "Medium",
    features: [
      "Display support",
      "Presentation-friendly layout",
      "Team seating",
      "Professional environment",
    ],
    icon: Presentation,
  },

  {
    id: "recharge",
    title: "Recharge",
    kicker: "Pause. Reset. Return.",
    shortDescription: "A little pause for a better next idea.",
    description:
      "A softer social corner for short breaks, coffee, informal conversations and the breathing space between productive moments.",
    bestFor: "Breaks & Casual Chats",
    space: "Recharge Zone",
    capacity: "Flexible",
    vibe: "Relaxed",
    privacy: "Open",
    features: [
      "Casual seating",
      "Coffee-break atmosphere",
      "Informal conversations",
      "Relaxed community energy",
    ],
    icon: Coffee,
  },
];