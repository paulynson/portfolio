export interface PortfolioProject {
  id: number;
  link: string;
  title: string;
  category: string;
  tools: string;
  info: string;
  image?: string;
  caseStudy?: {
    overview: string;
    features: string[];
    engineering: string;
    outcome: string;
    challenges?: string[];
    contribution?: string;
  };
}

const projects: PortfolioProject[] = [
  {
    id: 23,
    link: "https://trivogames.com",
    title: "TrivoGames",
    image: "/project/trivogames.png",
    category: "Real-time Web & Mobile",
    tools: "Next.js, React Native, TypeScript, WebSockets",
    info: "Built multiplayer trivia experiences for web and mobile, including scheduled games, countdowns, synchronised sessions and real-time game updates.",
    caseStudy: {
      overview: "TrivoGames delivers multiplayer trivia experiences across web and mobile. Players move through timed questions, live sessions and results, with the interface reflecting updates from the game session.",
      features: ["Scheduled and live multiplayer trivia sessions", "Countdowns and timed questions", "Real-time session updates over WebSockets", "Mobile player flows in React Native and Expo", "Game results and answer review"],
      contribution: "Frontend implementation across the web and mobile player experiences, including game session interfaces and client-side state handling.",
      challenges: ["Keeping the active game phase consistent across navigation and screen transitions", "Coordinating live session updates with question and result views", "Designing game state around session phases rather than the currently rendered screen"],
      engineering: "Built Next.js and React Native interfaces using TypeScript and WebSockets. The ongoing architecture work centres on explicit game phases, including game type, start, end and result, so navigation and Redux state can reflect the actual session rather than relying on the visible screen alone.",
      outcome: "Delivered real-time trivia flows for web and mobile. State-machine-style phase detection and higher concurrency are ongoing engineering goals, not verified production results.",
    },
  },
  {
    id: 24,
    link: "#",
    title: "Chef4Me Marketplace",
    image: "/project/chef4me.png",
    category: "Marketplace",
    tools: "Next.js, React, TypeScript, Redux Toolkit, Stripe, Paystack",
    info: "Built marketplace booking and payment journeys, direct customer-to-chef chat, and KEMI AI-powered meal planning, food scanning and nutrition tracking interfaces.",
    caseStudy: {
      overview: "Chef4Me brings customers and professional chefs together through a marketplace built around discovering services, requesting quotations, arranging bookings and completing payments. Different user roles need distinct journeys while sharing a consistent booking experience.",
      features: [
        "Direct messaging between customers and chefs",
        "KEMI AI chat for generating meals and multi-day meal plans",
        "Food and pantry scanning to identify ingredients and nutritional details",
        "Calorie and protein information with daily calorie tracking",
        "Customer and chef onboarding with role-specific interfaces",
        "Multi-step requests for quotations and chef hiring",
        "Quotation and invoice workflows",
        "Booking, checkout and payment journeys",
        "Order tracking and customer communication",
      ],
      contribution: "Developed role-specific marketplace journeys, the customer-to-chef chat experience, and KEMI AI chat interfaces for meal generation, multi-day planning, food and pantry scanning, nutritional insights and calorie tracking.",
      challenges: ["Maintaining consistent multi-step booking and quotation state", "Supporting distinct customer, chef, rider and business interfaces", "Building interactive chat and AI-assisted meal-planning experiences alongside the booking flow", "Coordinating authentication, API data and payment steps across a single user journey"],
      engineering: "Developed Next.js, React and TypeScript interfaces with reusable components, Redux Toolkit, backend API integrations and Stripe/Paystack payment flows. Implemented customer-to-chef messaging and the frontend experience for KEMI, including conversational meal generation, multi-day planning, food and pantry scans, nutritional breakdowns and calorie tracking. Managed role-aware navigation, multi-step form progression and asynchronous data across these interconnected experiences.",
      outcome: "Delivered interconnected marketplace journeys covering discovery, customer-to-chef communication, booking and payment, alongside KEMI-powered meal planning and nutrition features."
    },
  },
  {
    id: 25,
    // Public launch pending. Restore the URL once Schoolers is live:
    // link: "https://schoolers.academy",
    link: "#",
    title: "Schoolers | Virtual School Platform",
    image: "/project/schoolers.png",
    category: "Education",
    tools: "Next.js, TypeScript, LiveKit, React",
    info: "Developed student, tutor and parent experiences for an online learning platform, including live classrooms with real-time audio and video controls.",
    caseStudy: {
      overview: "Schoolers is an online learning platform designed around the needs of students, tutors and parents. The frontend brings together role-specific learning experiences and live virtual classrooms, allowing participants to engage with online lessons through a consistent interface. The product is awaiting its public launch.",
      features: [
        "Dedicated interfaces for students, tutors and parents",
        "Live virtual classroom experiences",
        "Real-time audio and video controls for online lessons",
        "Responsive learning interfaces for different user roles",
      ],
      engineering: "Developed frontend features using Next.js, React and TypeScript, integrating LiveKit for real-time classroom audio and video. The implementation focuses on managing interactive classroom controls and providing distinct, usable experiences for students, tutors and parents.",
      outcome: "Built the frontend foundation for role-based online learning and interactive virtual classes. Schoolers has not yet launched publicly, so live usage results are not claimed.",
    },
  },
  {
    id: 1,
    link: "#",
    title: "GetNextRole - AI Recruitment Platform",
    category: "SaaS",
    tools: "React 18, TypeScript, Tailwind CSS, TanStack Query, Node.js",
    info: "AI-powered platform helping job seekers streamline their job search with resume generation, cover letter generation, LinkedIn Easy Apply automation, and a job application tracker.",
    caseStudy: {
      overview: "GetNextRole is a recruitment productivity platform intended to reduce repetitive work during a job search. It brings application preparation and tracking into one experience, with AI-assisted tools supporting job seekers as they move from finding a role to applying.",
      features: [
        "Resume and cover letter generation workflows",
        "Job application tracking",
        "Integration with the companion browser extension",
        "Application preparation and management interfaces",
      ],
      contribution: "Frontend development of recruitment workflows and the companion Chrome extension interface.",
      challenges: ["Keeping application data consistent between the web platform and browser-assisted flows", "Handling asynchronous application tracking and form state", "Working within Chrome extension page-context and permissions constraints"],
      engineering: "Built the React, Vite and TypeScript frontend with reusable UI components and asynchronous data handling, collaborating with a Laravel backend. Developed the companion extension interface for job capture and autofill, using Chrome APIs to interact with supported application pages.",
      outcome: "Created a unified interface for managing applications and supporting repetitive job-search tasks.",
    },
  },
  {
    id: 2,
    link: "#",
    title: "GetNextRole Chrome Extension",
    category: "Chrome Extension",
    tools: "TypeScript, React, JavaScript, Chrome APIs, RapidAPI",
    info: "Chrome extension that automates LinkedIn Easy Apply with AI-assisted workflows, auto-fill, and application tracking.",
    caseStudy: {
      overview: "The GetNextRole browser extension extends the recruitment platform into supported job application pages. Its purpose is to help users capture job information, reuse their profile details and reduce repeated manual entry during applications.",
      features: [
        "Job information capture and saving",
        "Application form autofill",
        "AI-assisted application workflows",
        "Integration with application tracking",
        "Browser extension controls",
      ],
      engineering: "Developed the extension interface with React and TypeScript and worked with Chrome extension APIs. Browser-based workflows require careful handling of page context, user data and the distinction between the extension UI and the website being visited.",
      outcome: "Built an extension experience that connects job application activity with the wider GetNextRole workflow.",
    },
  },

  {
    id: 4,
    link: "#",
    title: "Learning Management System",
    category: "Education",
    tools: "React, Next.js, TypeScript, Node.js, Stripe, PayStack",
    info: "LMS with courses, video lessons, quizzes, student progress tracking, and payment integration.",
    caseStudy: {
      overview: "This learning management system brings course delivery, student learning activities and progress monitoring into one web application. It supports structured learning beyond simply displaying video lessons.",
      features: [
        "Course and lesson interfaces",
        "Video learning experiences",
        "Quizzes and assessments",
        "Student progress tracking",
        "Payment integration",
      ],
      engineering: "Worked with React, Next.js and TypeScript to organise learning interfaces and connect course content, progress information and payment-related journeys. The interface supports different stages of the learning experience.",
      outcome: "Delivered core learning workflows spanning course access, assessment and progress visibility.",
    },
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
    image: "/project/qrateart.png",
    category: "SaaS",
    tools: "React, TypeScript, Node.js, Tailwind CSS",
    info: "Platform bridging the gap between art supply vendors and elite artists. Features exhibitions, auctions, workshops, art supply marketplace, and an X-style social feed connecting artists directly to art Qraters.",
  },
  {
    id: 10,
    link: "https://www.apisatenterprises.com.ng/",
    title: "Apisat Enterprises Website",
    image: "/project/apisatenterprises.png",
    category: "Corporate",
    tools: "JavaScript, React, TypeScript, Tailwind CSS",
    info: "Company website showcasing web development, mobile development, SEO, data analysis, company registration, and graphic design services.",
  },
  {
    id: 11,
    link: "https://www.stafflynkglobal.com/",
    title: "Talent Registration Portal",
    image: "/project/stafflynkglobal.png",
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
    caseStudy: {
      overview: "Abakada Ajax Category Filter is a WooCommerce plugin designed to make product discovery easier. Shoppers can refine product listings without repeatedly loading a new page.",
      features: [
        "AJAX-based product filtering without full-page reloads",
        "Category, price and attribute filters",
        "Multiple filtering controls",
        "Customisable presentation within WooCommerce",
      ],
      engineering: "Implemented WordPress and WooCommerce functionality using PHP and JavaScript. The key interaction is updating relevant product results while preserving the surrounding shopping experience.",
      outcome: "Provides a more fluid way to browse and narrow WooCommerce product catalogues.",
    },
  },
  {
    id: 17,
    link: "#",
    title: "Plugin Usage Detector",
    category: "WordPress Plugin",
    tools: "WordPress, PHP",
    info: "Detects all installed WordPress plugins, checks activation status, and identifies unused plugins to keep your site clean and optimized.",
    caseStudy: {
      overview: "Plugin Usage Detector helps WordPress site administrators understand which plugins are installed and active. It is intended as a maintenance aid for reviewing a site's plugin setup.",
      features: [
        "Installed plugin inventory",
        "Activation status visibility",
        "Identification of potentially unused plugins",
        "Administrative review of plugin usage",
      ],
      engineering: "Built around WordPress and PHP, the plugin presents installation and activation information in a format useful for site maintenance. A flagged plugin should be reviewed before any removal decision.",
      outcome: "Makes plugin auditing easier by bringing relevant status information together.",
    },
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
    caseStudy: {
      overview: "CashLens is a personal finance tracking product focused on helping users understand account activity over time. Rather than treating transactions as isolated entries, it organises them into a clearer view of income, spending and patterns.",
      features: [
        "Financial activity tracking",
        "Income and spending visibility",
        "Year-round account activity overview",
        "Views of financial patterns over time",
      ],
      engineering: "Uses React and TypeScript for the frontend alongside Node.js, Express.js and MongoDB in the application stack. The product centres on presenting financial records clearly so users can understand trends across periods.",
      outcome: "Provides a consolidated way to review financial activity and recognise spending patterns.",
    },
  },
  {
    id: 20,
    link: "#",
    title: "ClearCut - Founder Thinking Tool",
    category: "React Native",
    tools: "React Native, Expo, TypeScript, NativeWind",
    info: "Mobile app for founders that breaks down rough tasks and ideas into structured bullet points with data attached, enabling fast thinking, clear execution, and progress tracking on the go.",
    caseStudy: {
      overview: "ClearCut is a mobile thinking and planning tool for founders who need to turn rough ideas into practical next steps. It focuses on capturing thoughts quickly and making them easier to act on.",
      features: [
        "Capture rough ideas and tasks",
        "Break ideas into structured bullet points",
        "Attach supporting information to items",
        "Track tasks and progress on mobile",
      ],
      engineering: "Built as a React Native and Expo experience with TypeScript and NativeWind. The mobile-first interaction prioritises turning unstructured input into readable, actionable information.",
      outcome: "Creates a focused mobile workflow for organising ideas and following through on tasks.",
    },
  },
  {
    id: 21,
    link: "#",
    title: "Live LMS",
    category: "Education",
    tools: "Next.js, TypeScript, Node.js, LiveKit, Tailwind CSS, Flutterwave",
    info: "Full-featured LMS where tutors and students conduct live online classes via LiveKit-powered video lessons, with courses, quizzes, student progress tracking, and real-time collaboration.",
    caseStudy: {
      overview: "Live LMS combines traditional learning management features with live online teaching. Tutors and students can participate in real-time classes while accessing supporting course material and learning activities.",
      features: [
        "Live online classes with audio and video",
        "Tutor and student learning interfaces",
        "Courses and lesson content",
        "Quizzes and progress tracking",
        "Payment-related learning journeys",
      ],
      engineering: "Developed learning interfaces using Next.js and TypeScript with LiveKit-powered classroom functionality. Real-time sessions introduce additional interface states for joining, participating in and leaving a class.",
      outcome: "Brings live instruction and structured learning activities into a shared platform experience.",
    },
  },
  {
    id: 22,
    link: "#",
    title: "Sport Quiz",
    category: "Web App",
    tools: "React, TypeScript",
    info: "Interactive sports quiz web app with categorised questions, score tracking, and timed rounds covering football, basketball, tennis, and more.",
    caseStudy: {
      overview: "Sport Quiz is an interactive web application for testing sports knowledge across different categories. It combines timed questions with scoring to make quiz sessions engaging and easy to follow.",
      features: [
        "Sport-specific question categories",
        "Timed quiz rounds",
        "Answer selection and score tracking",
        "Results at the end of a session",
      ],
      engineering: "Built with React and TypeScript, with interface state coordinating the current question, selected answers, countdown and final score. The interaction is designed around a clear progression through a quiz session.",
      outcome: "Delivers a playable sports quiz experience with feedback on performance.",
    },
  },
];

export default projects;
