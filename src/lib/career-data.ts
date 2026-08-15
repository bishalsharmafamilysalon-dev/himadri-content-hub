export type CareerCategory = {
  id: string;
  name: string;
  icon: string;
  positions: string[];
};

export const CAREER_CATEGORIES: CareerCategory[] = [
  {
    id: "photography",
    name: "Photography",
    icon: "Camera",
    positions: [
      "Photographer",
      "Candid Photographer",
      "Wedding Photographer",
      "Event Photographer",
    ],
  },
  {
    id: "videography",
    name: "Videography & Cinematography",
    icon: "Video",
    positions: ["Videographer", "Cinematographer", "Wedding Film Shooter", "Camera Operator"],
  },
  {
    id: "photo-editing",
    name: "Photo Editing",
    icon: "Image",
    positions: [
      "Photo Editor",
      "Photoshop Retoucher",
      "Lightroom Editor",
      "Wedding Album Designer",
    ],
  },
  {
    id: "video-editing",
    name: "Video Editing",
    icon: "Film",
    positions: [
      "Video Editor",
      "Wedding Film Editor",
      "Reels / Shorts Editor",
      "Color Grading Artist",
    ],
  },
  {
    id: "drone",
    name: "Drone & Aerial",
    icon: "Plane",
    positions: ["Drone Pilot", "Aerial Cinematographer", "FPV Drone Pilot"],
  },
  {
    id: "creative-design",
    name: "Creative & Design",
    icon: "PenTool",
    positions: [
      "Graphic Designer",
      "Motion Graphics Designer",
      "VFX / CGI Artist",
      "Thumbnail Designer",
    ],
  },
  {
    id: "social-media",
    name: "Social Media & Content",
    icon: "Share2",
    positions: [
      "Social Media Manager",
      "Content Creator",
      "Instagram / Reels Creator",
      "YouTube Content Creator",
    ],
  },
  {
    id: "client-event",
    name: "Client & Event Management",
    icon: "Users",
    positions: [
      "Client Coordinator",
      "Booking Executive",
      "Event Coordinator",
      "Sales / Client Relationship Executive",
    ],
  },
  {
    id: "freelance",
    name: "Freelance / Project Based",
    icon: "Briefcase",
    positions: [
      "Freelance Photographer",
      "Freelance Videographer",
      "Freelance Editor",
      "Freelance Designer",
      "Freelance Drone Pilot",
      "Other Creative Professional",
    ],
  },
  {
    id: "internship",
    name: "Internship / Fresher",
    icon: "GraduationCap",
    positions: [
      "Photography Intern",
      "Videography Intern",
      "Editing Intern",
      "Graphic Design Intern",
      "Social Media Intern",
      "Digital Marketing Intern",
    ],
  },
];

export const WORK_TYPES = [
  "Full Time",
  "Part Time",
  "Freelance",
  "Project Based",
  "Internship",
] as const;

export const EXPERIENCE_LEVELS = [
  "Fresher",
  "0–1 Year",
  "1–3 Years",
  "3–5 Years",
  "5+ Years",
] as const;

export const CAREER_STEPS = [
  { no: "01", title: "Choose Your Role", text: "Pick the category and position that fits you." },
  { no: "02", title: "Fill Your Details", text: "Share your experience, skills and portfolio." },
  { no: "03", title: "Submit Application", text: "We prepare your application instantly." },
  { no: "04", title: "Continue on WhatsApp", text: "Send it to our team and we reply soon." },
];