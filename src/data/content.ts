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

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=press+on+driving+academy-+driving+school+cape+town&tbnid=HPjaYvw1bStWhM&tbnh=0&tbnw=0&rlz=1C1JJTC_enZA1187ZA1187&cs=1&biw=1682&bih=872&sca_esv=0445900a5023e21a&sxsrf=APpeQnvc0qMyR011vjqhvQjp5-ObG1K2SQ%3A1789152564701&ei=NE2katSuKtOzhbIP5rO9yAE&ved=2ahUKEwjUmMXYmOeWAxXTWUEAHeZZDxkQ4dUDegQIBhAM&uact=5&oq=press+on+driving+academy-+driving+school+cape+town&gs_lp=Egxnd3Mtd2l6LXNlcnAiMnByZXNzIG9uIGRyaXZpbmcgYWNhZGVteS0gZHJpdmluZyBzY2hvb2wgY2FwZSB0b3duMgUQIRigATIFECEYoAFIu5kBUOgFWKWWAXAGeAGQAQCYAdUCoAGoTKoBBzItMTkuMTS4AQPIAQD4AQGYAiagArBLwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgYQABgWGB7CAgsQABiABBiKBRiGA8ICBRAAGO8FwgIIEAAYgAQYogTCAgUQIRifBcICBxAhGAoYoAHCAgQQIRgKwgIEECEYFZgDAIgGAZAGApIHCTYuMC4xNy4xNaAH9K0BsgcHMi0xNy4xNbgHnEvCBwYwLjMxLjfIB1-ACAE&sclient=gws-wiz-serp#lrd=0x1dcc497e77464ed3:0xb18973459080f066,1,,,,';

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
  facebookUrl: "https://www.facebook.com/p/PO-Driving-Academy-100083055802580/",
  instagramUrl: "https://www.instagram.com/po_dacademy/",
  googleReviewsUrl: GOOGLE_REVIEWS_URL,
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
      "1-Hour training & 20-lesson full training courses"
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
    price: "R300",
    priceNum: 300,
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
    id: "rate-6",
    category: "code8",
    name: "6 Lessons Package",
    price: "R1,850",
    priceNum: 1850,
    duration: "6 x 60 min sessions",
    description: "Great starting package for learners getting comfortable with basic driving, clutch control, and road awareness.",
    features: [
      "6 One-hour practical lessons",
      "Manual & Automatic lessons available",
      "Step-by-step progress tracking",
      "Basic parking & steering control",
      "Pick-up and drop-off included"
    ]
  },
  {
    id: "rate-10",
    category: "code8",
    name: "10 Lessons (Includes Car Hire Test)",
    price: "R3,500",
    priceNum: 3500,
    duration: "10 Lessons + Car Hire for Test",
    popular: true,
    badge: "MOST POPULAR",
    savings: "Includes Test Day Car Hire",
    description: "Our most popular package. Takes learners through yard manoeuvres and road driving, including car hire on test day.",
    features: [
      "10 One-hour driving lessons",
      "Car hire for official test included",
      "All K53 yard manoeuvres & parking",
      "Road safety & traffic driving practice",
      "Manual & Automatic lessons available",
      "Pick-up & drop-off included"
    ]
  },
  {
    id: "rate-20",
    category: "code8",
    name: "20 Lessons Full Package",
    price: "R6,800",
    priceNum: 6800,
    duration: "Full course, Car hire test, 1hr lesson",
    popular: true,
    badge: "BEST VALUE COURSE",
    savings: "Car hire test + 1hr lesson included",
    description: "Complete novice-to-licensed course. Includes 20 lessons, car hire for official test, and 1-hour pre-test warm-up lesson.",
    features: [
      "20 One-hour driving lessons",
      "Car hire for official test included",
      "1-Hour pre-test warm-up lesson",
      "Complete K53 yard & road curriculum",
      "Full mock test assessment",
      "Door-to-door pick-up & drop-off"
    ]
  },
  // ADVANCE DRIVING (ADVANCED / SKILL DEVELOPMENT)
  {
    id: "rate-adv-1",
    category: "advanced",
    name: "Advance Driving: 1 Hour Lesson",
    price: "R400",
    priceNum: 400,
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
    id: "rate-adv-20",
    category: "advanced",
    name: "Advance Driving: 20 Lessons",
    price: "R7,000",
    priceNum: 7000,
    duration: "20 Lessons Full Course",
    popular: true,
    badge: "FULL ADVANCED COURSE",
    savings: "Complete Skill Development Course",
    description: "Comprehensive 20-lesson advanced driving course for total road safety, complex highway navigation, and mastery.",
    features: [
      "20 Full advanced training lessons",
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
    url: "/pic1.png",
    alt: "Press On Driving Academy student proudly celebrating passing her driving test"
  },
  {
    id: "sp-2",
    url: "/pic--2.png",
    alt: "Press On Driving Academy student holding driver's license certificate"
  },
  {
    id: "sp-3",
    url: "/pic3.png",
    alt: "Press On Driving Academy student proudly displaying official test pass certificate"
  },
  {
    id: "sp-4",
    url: "/pic4.png",
    alt: "Press On Driving Academy student holding test pass sheet with academy car"
  },
  {
    id: "sp-5",
    url: "/pic5.png",
    alt: "Press On Driving Academy student celebrating first-time driving test pass"
  },
  {
    id: "sp-6",
    url: "/pic-6.png",
    alt: "Press On Driving Academy student holding official driver's pass certificate"
  },
  {
    id: "sp-7",
    url: "/pic7.png",
    alt: "Press On Driving Academy student smiling with pass certificate in front of car"
  },
  {
    id: "sp-8",
    url: "/pic8.png",
    alt: "Press On Driving Academy student successful test pass celebration"
  },
  {
    id: "sp-9",
    url: "/pic-9.png",
    alt: "Press On Driving Academy student holding driver's license test pass paper"
  },
  {
    id: "sp-10",
    url: "/pic10.png",
    alt: "Press On Driving Academy successful driver holding pass certificate"
  },
  {
    id: "sp-11",
    url: "/pic11.png",
    alt: "Press On Driving Academy student celebrating driving test victory"
  },
  {
    id: "sp-12",
    url: "/pic12.png",
    alt: "Press On Driving Academy student with newly issued driving license certificate"
  },
  {
    id: "sp-13",
    url: "/pic13.png",
    alt: "Press On Driving Academy student showing test pass sheet by academy vehicle"
  },
  {
    id: "sp-14",
    url: "/pic14.png",
    alt: "Press On Driving Academy student pass story celebration"
  },
  {
    id: "sp-15",
    url: "/pic15.png",
    alt: "Press On Driving Academy student celebrating driver's test success"
  },
  {
    id: "sp-16",
    url: "/pic16.png",
    alt: "Press On Driving Academy student holding driver's license test pass certificate"
  },
  {
    id: "sp-17",
    url: "/pic17.png",
    alt: "Press On Driving Academy student with pass certificate and academy vehicle"
  },
  {
    id: "sp-18",
    url: "/pic18.png",
    alt: "Press On Driving Academy student proud test pass celebration"
  },
  {
    id: "sp-19",
    url: "/pic19.png",
    alt: "Press On Driving Academy student celebrating first-time pass"
  },
  {
    id: "sp-20",
    url: "/pic20.png",
    alt: "Press On Driving Academy student holding official driver's license certificate"
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: "gr-1",
    author: "Lwando Mtembu",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Passed my Code 8 practical driver's test on my very first attempt! The instructor at Press On Driving Academy was extraordinarily patient, calm, and gave crystal-clear reference points for alley docking and parallel parking. The VW Polo was super smooth and easy to handle. Highly recommended to anyone looking for quality driving lessons in Cape Town!",
    suburb: "Claremont, Cape Town",
    testPassed: "Code 8 First Time Pass",
    avatarColor: "bg-emerald-600"
  },
  {
    id: "gr-2",
    author: "Chloe van der Merwe",
    rating: 5,
    relativeTime: "2 months ago",
    text: "I had extreme driving anxiety from a past experience with another instructor. Press On Driving Academy completely changed my confidence! They made every lesson relaxing, safe, and stress-free. Passed my test at Gallows Hill with zero faults on yard manoeuvres.",
    suburb: "Rondebosch, Cape Town",
    testPassed: "Code 8 Manual Pass",
    avatarColor: "bg-blue-600"
  },
  {
    id: "gr-3",
    author: "Thabo Ndlovu",
    rating: 5,
    relativeTime: "3 months ago",
    text: "Best driving school in Cape Town's Southern Suburbs hands down. Reliable door-to-door pick-up, very clean VW Polo dual-control car, and thorough test day preparation. The warm-up hour before going into the traffic department settled all my nerves.",
    suburb: "Fish Hoek, Cape Town",
    testPassed: "Code 8 Test Passed",
    avatarColor: "bg-purple-600"
  },
  {
    id: "gr-4",
    author: "Jessica Klein",
    rating: 5,
    relativeTime: "4 months ago",
    text: "Extremely professional academy. The instructor teaches you the exact K53 scoring criteria so nothing comes as a surprise during the exam. Passed both the yard and road test with total ease. 10/10 service and super friendly!",
    suburb: "Wynberg, Cape Town",
    testPassed: "K53 Yard & Road Pass",
    avatarColor: "bg-amber-600"
  },
  {
    id: "gr-5",
    author: "Sipho Dlamini",
    rating: 5,
    relativeTime: "5 months ago",
    text: "5 stars is not even enough! After struggling with another driving school, I booked the 10 lessons package with Press On. The guidance on clutch control, hill starts, and mirror checks made all the difference. Passed on my next attempt!",
    suburb: "Muizenberg, Cape Town",
    testPassed: "Code 8 Test Success",
    avatarColor: "bg-red-600"
  },
  {
    id: "gr-6",
    author: "Megan Brown",
    rating: 5,
    relativeTime: "6 months ago",
    text: "Patient, encouraging, and professional from lesson one. They do not just teach you to pass the test; they teach you how to be a safe, defensive driver on busy Cape Town roads. Would recommend them to all learners!",
    suburb: "Constantia, Cape Town",
    testPassed: "Advance & Code 8 Tuition",
    avatarColor: "bg-teal-600"
  }
];

