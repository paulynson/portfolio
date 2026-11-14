export interface PortfolioProject {
  id: number;
  link: string;
  title: string;
  category: string;
  tools: string;
  info: string;
}

const projects: PortfolioProject[] = [
  {
    id: 23,
    link: "https://trivogames.com",
    title: "TrivoGames",
    category: "Real-time Web & Mobile",
    tools: "Next.js, React Native, TypeScript, WebSockets",
    info: "Built multiplayer trivia experiences for web and mobile, including scheduled games, countdowns, synchronised sessions and real-time game updates.",
  },
  {
    id: 24,
    link: "#",
    title: "Chef4Me Marketplace",
    category: "Marketplace",
    tools: "Next.js, React, TypeScript, Stripe, Paystack",
    info: "Developed multi-role customer, chef and administration workflows, including quotations, bookings, checkout, payments and order tracking.",
  },
  {
    id: 25,
    link: "https://schoolers.academy",
    title: "Virtual School Platform",
    category: "Education",
    tools: "Next.js, TypeScript, LiveKit, React",
    info: "Developed student, tutor and parent interfaces and live classroom features with real-time audio and video controls.",
  },
  {
    id: 1,
    link: "#",
    title: "GetNextRole - AI Recruitment Platform",
    category: "SaaS",
    tools: "React 18, TypeScript, Tailwind CSS, TanStack Query, Node.js",
    info: "AI-powered platform helping job seekers streamline their job search with resume generation, cover letter generation, LinkedIn Easy Apply automation, and a job application tracker.",
  },
  {
    id: 2,
    link: "#",
    title: "GetNextRole Chrome Extension",
    category: "Chrome Extension",
    tools: "TypeScript, React, JavaScript, Chrome APIs, RapidAPI",
    info: "Chrome extension that automates LinkedIn Easy Apply with AI-assisted workflows, auto-fill, and application tracking.",
  },

  {
    id: 4,
    link: "#",
    title: "Learning Management System",
    category: "Education",
    tools: "React, Next.js, TypeScript, Node.js, Stripe, PayStack",
    info: "LMS with courses, video lessons, quizzes, student progress tracking, and payment integration.",
  },
  {
    id: 5,
    link: "https://www.apisatenterprises.com.ng/apps/marketlist",
    title: "Market List Mobile App",
    category: "React Native",
    tools: "React Native, Expo, NativeWind, TypeScript",
    info: "Mobile app for market and shopping management with shopping lists, quantity management, cost tracking, and subscription monetisation.",
  },
  {
    id: 6,
    link: "https://qrateart.com/",
    title: "Qrate Art",
    category: "SaaS",
    tools: "React, TypeScript, Node.js, Tailwind CSS",
    info: "Platform bridging the gap between art supply vendors and elite artists. Features exhibitions, auctions, workshops, art supply marketplace, and an X-style social feed connecting artists directly to art Qraters.",
  },
  {
    id: 10,
    link: "https://www.apisatenterprises.com.ng/",
    title: "Apisat Enterprises Website",
    category: "Corporate",
    tools: "JavaScript, React, TypeScript, Tailwind CSS",
    info: "Company website showcasing web development, mobile development, SEO, data analysis, company registration, and graphic design services.",
  },
  {
    id: 11,
    link: "https://www.stafflynkglobal.com/",
    title: "Talent Registration Portal",
    category: "Web App",
    tools: "WordPress, JavaScript, PHP",
    info: "Dynamic registration portal with conditional fields, file uploads, form validation, and dynamic selections generated from a Fluent Forms specification.",
  },

  // {
  //   id: 13,
  //   link: "#",
  //   title: "TEDxWibsey - Digital Platform & Marketing",
  //   category: "Event Tech",
  //   tools: "WordPress, Social Media, Paid Ads",
  //   info: "Volunteered on the digital team managing the website, social media, paid advertising, content planning, and speaker promotional materials.",
  // },
  {
    id: 16,
    link: "#",
    title: "Abakada Ajax Category Filter",
    category: "WordPress Plugin",
    tools: "WordPress, PHP, JavaScript, WooCommerce",
    info: "Ajax-powered WooCommerce product category filter with no page reload, multiple filter types (category, price, attributes), and customizable design & layout.",
  },
  {
    id: 17,
    link: "#",
    title: "Plugin Usage Detector",
    category: "WordPress Plugin",
    tools: "WordPress, PHP",
    info: "Detects all installed WordPress plugins, checks activation status, and identifies unused plugins to keep your site clean and optimized.",
  },
  {
    id: 18,
    link: "https://chromewebstore.google.com/detail/productitab/ojfjkhclfjkcdhfioliiefafoobbcphh",
    title: "ProductiTab - Smart Tab & Productivity Manager",
    category: "Chrome Extension",
    tools: "TypeScript, React, Chrome APIs, Tailwind CSS",
    info: "Chrome extension that manages open tabs, tracks session time, breaks down productivity by category (Work, Social, Other), monitors memory usage per tab, and provides quick actions like close duplicates, close old tabs, bookmark all, and mute all.",
  },
  {
    id: 19,
    link: "#",
    title: "CashLens",
    category: "FinTech",
    tools: "React, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS",
    info: "Financial tracking platform for knowing and tracking your account activity across the year, giving you a clear picture of your income, spending, and financial patterns over time.",
  },
  {
    id: 20,
    link: "#",
    title: "ClearCut - Founder Thinking Tool",
    category: "React Native",
    tools: "React Native, Expo, TypeScript, NativeWind",
    info: "Mobile app for founders that breaks down rough tasks and ideas into structured bullet points with data attached, enabling fast thinking, clear execution, and progress tracking on the go.",
  },
  {
    id: 21,
    link: "#",
    title: "Live LMS",
    category: "Education",
    tools: "Next.js, TypeScript, Node.js, LiveKit, Tailwind CSS, Flutterwave",
    info: "Full-featured LMS where tutors and students conduct live online classes via LiveKit-powered video lessons, with courses, quizzes, student progress tracking, and real-time collaboration.",
  },
  {
    id: 22,
    link: "#",
    title: "Sport Quiz",
    category: "Web App",
    tools: "React, TypeScript",
    info: "Interactive sports quiz web app with categorised questions, score tracking, and timed rounds covering football, basketball, tennis, and more.",
  },
];

export default projects;
