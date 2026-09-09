export interface RatePackage {
  id: string;
  category?: 'code8' | 'advanced' | 'hire';
  name: string;
  price: string;
  priceNum: number;
  duration: string;
  badge?: string;
  popular?: boolean;
  savings?: string;
  description: string;
  features: string[];
}

export const BRAND_INFO = {
  name: "Press On Driving Academy",
  shortName: "PO Driving Academy",
  tagline: "Keep Calm and Drive Safe with Us",
  slogan: "Keep Calm and Drive Safe with Us",
  phone: "067 353 5553",
  phoneIntl: "+27 67 353 5553",
  phoneRaw: "+27673535553",
  email: "poacademyltd@gmail.com",
  hoursWeekdays: "Mon - Fri: 07:00 AM - 06:00 PM",
  hoursWeekend: "Sat: 08:00 AM - 04:00 PM",
  address: "Southern Suburbs & Southern Peninsula, Cape Town",
  facebookUrl: "https://www.facebook.com/search/top?q=PO%20Driving%20Academy",
  instagramUrl: "https://www.instagram.com/po_dacademy",
  whatsappDefaultMsg: "Hi Press On Driving Academy, I would like to enquire about booking driving lessons."
};

export const getGmailComposeUrl = (
  subject = "Driving Lesson Enquiry - Press On Driving Academy",
  body = "Hi Press On Driving Academy,\n\nI would like to enquire about booking driving lessons.\n\nName:\nPhone:\nSuburb:\nQuery:\n\nThank you!"
) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    BRAND_INFO.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const GMAIL_COMPOSE_URL = getGmailComposeUrl();

export const CORE_FEATURES = [
  {
    title: "Patient & Friendly Instructors",
    description: "Qualified, calm instructors who provide stress-free, step-by-step guidance tailored to your learning pace.",
    icon: "UserCheck"
  },
  {
    title: "Comprehensive K53 Training",
    description: "Complete preparation covering all official parking manoeuvres, road rules, and defensive driving techniques.",
    icon: "ShieldCheck"
  },
  {
    title: "High First-Time Pass Rate",
    description: "Structured curriculum and realistic mock tests designed to help you pass your test with total confidence.",
    icon: "Award"
  },
  {
    title: "Free Pick-Up & Drop-Off",
    description: "Convenient door-to-door collection from your home, school, campus or workplace across our service suburbs.",
    icon: "MapPin"
  }
];

export const SERVICES_LIST = [
  {
    id: "learner-lessons",
    title: "Learner & Beginner Driving Lessons",
    subtitle: "Manual & Automatic Options",
    description: "Step-by-step foundation lessons for first-time drivers. Learn clutch control, steering, gear shifting, road positioning, and safe driving habits.",
    features: [
      "Smooth clutch bite point & hill start mastery",
      "Vehicle controls & pre-trip inspection",
      "Suburban & residential driving confidence",
      "One-on-one personalized pace"
    ],
    icon: "Car"
  },
  {
    id: "k53-parking",
    title: "K53 Yard Manoeuvres & Parking",
    subtitle: "Complete Yard Test Mastery",
    description: "Master all official K53 yard manoeuvres with simple reference points and foolproof techniques to ensure zero penalties on test day.",
    features: [
      "Alley docking (Left & Right reverse)",
      "Parallel parking (3-turn method)",
      "Turn-in-the-road (3-point turn)",
      "Incline / hill start without rolling back"
    ],
    icon: "Compass"
  },
  {
    id: "test-prep",
    title: "Road Test Preparation & Mock Exam",
    subtitle: "Test Route Readiness",
    description: "Practice on actual test routes used by local Traffic Departments. Includes realistic mock tests, 5-point mirror sequences, and blindspot discipline.",
    features: [
      "Simulated K53 practical driving test",
      "Comprehensive scoring & examiner feedback",
      "Intersection, yield & right-of-way routines",
      "Highway merging & lane-changing safety"
    ],
    icon: "CheckCircle2"
  },
  {
    id: "advance-driving",
    title: "Advance Driving & Skill Development",
    subtitle: "Advanced / Skill Development",
    description: "Quality advanced driving lessons for licensed drivers and learners seeking skill development, high-level defensive techniques, hazard perception, and road safety.",
    features: [
      "Hazard perception & accident avoidance",
      "Behind-the-wheel advanced techniques",
      "Highway, night driving & severe weather skills",
      "1-Hour training & 25-lesson full training courses"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "test-car-hire",
    title: "Traffic Department Test Day Car Hire",
    subtitle: "Vehicle Hire & Warm-Up Session",
    description: "Hire our reliable training vehicle for your official practical driving test. Includes a 1-hour warm-up lesson right before your test appointment.",
    features: [
      "Academy vehicle for your official test",
      "1-hour refresher warm-up before test",
      "Instructor accompanies you to traffic dept",
      "Stress-free transport and test support"
    ],
    icon: "KeyRound"
  }
];

export const PRICING_PACKAGES: RatePackage[] = [
  // CODE 8 (LIGHT VEHICLE)
  {
    id: "rate-single",
    category: "code8",
    name: "1 Hour Lesson (Code 8)",
    price: "R280",
    priceNum: 280,
    duration: "1 x 60 min session",
    description: "Ideal for a trial lesson, assessment, or targeting specific skills like parking or hill starts.",
    features: [
      "1-Hour professional instruction",
      "Manual & Automatic lessons available",
      "Home / school pick-up included",
      "One-on-one patient coaching"
    ]
  },
  {
    id: "rate-5",
    category: "code8",
    name: "5 Lessons Package",
    price: "R1,360",
    priceNum: 1360,
    duration: "5 x 60 min sessions",
    description: "Great starting package for learners getting comfortable with basic driving and road awareness.",
    features: [
      "5 One-hour practical lessons",
      "Manual & Automatic lessons available",
      "Step-by-step progress tracking",
      "Basic parking & steering control",
      "Pick-up and drop-off included"
    ]
  },
  {
    id: "rate-10",
    category: "code8",
    name: "10 Lessons Package",
    price: "R2,600",
    priceNum: 2600,
    duration: "10 x 60 min sessions",
    popular: true,
    badge: "MOST POPULAR",
    savings: "Save R200 on single rate",
    description: "Our most popular package. Takes learners from basic driving to complete road & yard competence.",
    features: [
      "10 One-hour driving lessons",
      "All K53 yard manoeuvres & parking",
      "Road safety & traffic driving practice",
      "Manual & Automatic lessons available",
      "Pick-up & drop-off included",
      "Mock test preparation review"
    ]
  },
  {
    id: "rate-20",
    category: "code8",
    name: "20 Lessons (Full Course)",
    price: "R5,900",
    priceNum: 5900,
    duration: "Full course, Car hire, Free 1hr lesson",
    popular: true,
    badge: "BEST VALUE COURSE",
    savings: "Full course + Car hire + Free 1hr lesson",
    description: "Complete novice-to-licensed course as shown on our official price list. Everything you need to pass.",
    features: [
      "20 One-hour driving lessons",
      "Complete K53 yard & road curriculum",
      "Car hire for official test included",
      "Free 1-hour pre-test warm-up lesson",
      "Full mock test assessment",
      "Door-to-door pick-up & drop-off"
    ]
  },
  // ADVANCE DRIVING (ADVANCED / SKILL DEVELOPMENT)
  {
    id: "rate-adv-1",
    category: "advanced",
    name: "Advance Driving: 1 Hour Training",
    price: "R350",
    priceNum: 350,
    duration: "1 Hour Training Session",
    badge: "SKILL DEVELOPMENT",
    description: "Intensive 1-hour advanced training focusing on defensive driving techniques, road safety, and hazard control.",
    features: [
      "1-Hour advanced skill development",
      "Defensive driving & hazard awareness",
      "Behind-the-wheel advanced techniques",
      "Manual & Automatic lessons (We have both!)",
      "Pick-up & drop-off included"
    ]
  },
  {
    id: "rate-adv-25",
    category: "advanced",
    name: "Advance Driving: 25 Lessons (Full Training)",
    price: "R6,000",
    priceNum: 6000,
    duration: "25 Lessons Full Training Course",
    popular: true,
    badge: "FULL ADVANCED COURSE",
    savings: "Complete Skill Development Course",
    description: "Complete 25-lesson comprehensive advanced driving course for total road safety, complex highway navigation, and mastery.",
    features: [
      "25 Full advanced training lessons",
      "Comprehensive defensive driving mastery",
      "Advanced vehicle control & hazard handling",
      "Highway, night driving & severe weather skills",
      "Manual & Automatic lessons (We have both!)",
      "Free door-to-door pick-up & drop-off"
    ]
  },
  // TEST CAR HIRE
  {
    id: "rate-hire",
    category: "hire",
    name: "Test Day Car Hire",
    price: "R850",
    priceNum: 850,
    duration: "Test Day Package",
    description: "Use our clean and reliable academy vehicle for your practical driver's test at the Traffic Department.",
    features: [
      "Academy vehicle for your test",
      "1-Hour warm-up lesson before exam",
      "Transport to & from Traffic Department",
      "Instructor support on test day"
    ]
  }
];

export const SUBURB_AREAS = [
  {
    region: "Southern Suburbs",
    suburbs: [
      "Claremont", "Rondebosch", "Wynberg", "Newlands", "Kenilworth",
      "Plumstead", "Constantia", "Tokai", "Diep River", "Bergvliet", "Meadowridge", "Ottery"
    ]
  },
  {
    region: "Southern Peninsula",
    suburbs: [
      "Fish Hoek", "Muizenberg", "Simon's Town", "Kalk Bay", "Noordhoek",
      "Kommetjie", "Sun Valley", "Glencairn", "Lakeside", "Clovelly", "Capri"
    ]
  }
];

export const STUDENT_PHOTOS = [
  {
    id: "sp-1",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-2",
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-3",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-4",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-5",
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-6",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-7",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-8",
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-9",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  },
  {
    id: "sp-10",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    alt: "Student driver"
  }
];

