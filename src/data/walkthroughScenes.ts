export type WalkthroughScene = {
  id: number;
  image: string;
  eyebrow: string;
  titleLines: string[];
  accentLine: number;
  description: string;
  label: string;
  titleSize: number;
  titleLineHeight: number;
  titleLetterSpacing: string;
  imagePosition?: string;
};

export const walkthroughScenes: WalkthroughScene[] = [
  {
    id: 1,
    image: "/images/walkthrough/01-reception.jpg",
    eyebrow: "WELCOME TO NERDSHIVE",
    titleLines: ["Enter", "the", "Hive."],
    accentLine: 2,
    description:
      "Step into a workspace where ideas meet people, collaboration feels natural, and businesses grow together.",
    label: "Reception",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 2,
    image: "/images/walkthrough/02-coworking-long.jpg",
    eyebrow: "SHARED WORKSPACE",
    titleLines: ["Work", "Together."],
    accentLine: 1,
    description:
      "A shared environment designed for focus, conversation, collaboration and everyday momentum.",
    label: "Coworking",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 3,
    image: "/images/walkthrough/03-white-workspace.jpg",
    eyebrow: "FOCUSED WORKSPACE",
    titleLines: ["Find", "Your", "Flow."],
    accentLine: 2,
    description:
      "A calm workspace where focused thinking and productive work happen naturally.",
    label: "White Workspace",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 4,
    image: "/images/walkthrough/04-yellow-workspace.jpg",
    eyebrow: "HIVE WORKSPACE",
    titleLines: ["Ideas", "Need", "Energy."],
    accentLine: 2,
    description:
      "Bright collaborative spaces create room for ideas, conversation and progress.",
    label: "Yellow Workspace",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 5,
    image: "/images/walkthrough/05-glass-workspace.jpg",
    eyebrow: "MODERN WORKSPACE",
    titleLines: ["Space", "to", "Build."],
    accentLine: 2,
    description:
      "A modern professional setting built for teams turning ideas into meaningful work.",
    label: "Glass Workspace",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 6,
    image: "/images/walkthrough/06-private-cabin-a.jpg",
    eyebrow: "PRIVATE WORKSPACE",
    titleLines: ["Your", "Own", "Corner."],
    accentLine: 2,
    description:
      "Privacy when you need it, with the energy of the wider NerdsHive community nearby.",
    label: "Private Cabin A",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 7,
    image: "/images/walkthrough/07-private-cabin-b.jpg",
    eyebrow: "PRIVATE CABIN",
    titleLines: ["Think", "Deeply."],
    accentLine: 1,
    description:
      "A quieter environment for focused work, important conversations and uninterrupted thinking.",
    label: "Private Cabin B",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 8,
    image: "/images/walkthrough/08-team-cabin.jpg",
    eyebrow: "TEAM SPACE",
    titleLines: ["Grow", "Together."],
    accentLine: 1,
    description:
      "A dedicated team space where communication, collaboration and growth stay close.",
    label: "Team Cabin",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 9,
    image: "/images/walkthrough/09-single-cabin.jpg",
    eyebrow: "SOLO WORKSPACE",
    titleLines: ["Focus", "Without", "Distraction."],
    accentLine: 2,
    description:
      "A compact personal workspace for deep focus, independent work and productive days.",
    label: "Single Cabin",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 10,
    image: "/images/walkthrough/10-double-cabin.jpg",
    eyebrow: "COMPACT TEAM SPACE",
    titleLines: ["Small", "Team.", "Big Ideas."],
    accentLine: 2,
    description:
      "Flexible workspace for small teams that need privacy without losing connection to the larger community.",
    label: "Double Cabin",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 11,
    image: "/images/walkthrough/11-meeting-room.jpg",
    eyebrow: "MEETING ROOM",
    titleLines: ["Meet.", "Decide.", "Build."],
    accentLine: 2,
    description:
      "Bring conversations into focus with a dedicated space for meetings, decisions and shared direction.",
    label: "Meeting Room",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 12,
    image: "/images/walkthrough/12-discussion-room.jpg",
    eyebrow: "DISCUSSION SPACE",
    titleLines: ["Talk.", "Create."],
    accentLine: 1,
    description:
      "An inviting space for brainstorming, discussion, collaboration and turning conversations into action.",
    label: "Discussion Room",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },

  {
    id: 13,
    image: "/images/walkthrough/13-corridor.jpg",
    eyebrow: "INSIDE THE HIVE",
    titleLines: ["Every", "Path", "Leads", "Somewhere."],
    accentLine: 3,
    description:
      "From focused corners to shared spaces, the Hive connects people, ideas and possibilities.",
    label: "Corridor",
    titleSize: 100,
    titleLineHeight: 0.79,
    titleLetterSpacing: "-0.078em",
    imagePosition: "center center",
  },
];