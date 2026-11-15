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
    info: "Built multiplayer trivia experiences for web and mobile, including games every minute, every 20 minutes, daily and weekly events, plus one-on-one and one-versus-many modes with player invitations.",
    caseStudy: {
      overview: "TrivoGames delivers multiplayer trivia experiences across web and mobile. The platform includes recurring games every minute and every 20 minutes, a daily game at 7 pm and a Friday game at 7 pm, alongside one-on-one (1v1) and one-versus-many (1vMultiple) multiplayer modes. Players can invite others to join either 1v1 or one-versus-many games. They move through timed questions, live sessions and results, with the interface reflecting updates from the game session.",
      features: ["Recurring games every minute and every 20 minutes", "Daily 7 pm game and weekly Friday 7 pm game", "One-on-one (1v1) and one-versus-many (1vMultiple) game modes", "Player invitations to join 1v1 or 1vMultiple games", "Countdowns and timed questions", "Real-time session updates over WebSockets", "Mobile player flows in React Native and Expo", "Game results and answer review"],
      contribution: "Frontend implementation across the web and mobile player experiences, including scheduled game entry points, invitations to 1v1 and 1vMultiple games, multiplayer modes, game session interfaces, client-side state handling and SEO implementation for the web platform.",
      challenges: ["Keeping the active game phase consistent across navigation and screen transitions", "Coordinating recurring game schedules, player invitations and multiplayer session updates with question and result views", "Designing game state around session phases rather than the currently rendered screen"],
      engineering: "Built Next.js and React Native interfaces using TypeScript and WebSockets, and implemented SEO for the web platform. The ongoing architecture work centres on explicit game phases, including game type, start, end and result, so navigation and Redux state can reflect the actual session rather than relying on the visible screen alone.",
      outcome: "Delivered web and mobile trivia experiences spanning recurring game schedules, player invitations and multiplayer modes. State-machine-style phase detection and higher concurrency are ongoing engineering goals, not verified production results.",
    },
  },
  {
    id: 24,
    link: "#",
    title: "Chef4Me Marketplace",
    image: "/project/chef4me.png",
    category: "Marketplace",
    tools: "Next.js, React, TypeScript, Redux Toolkit, Stripe, Paystack",
    info: "Implemented chef booking, food ordering, quotation requests and payment journeys, alongside customer-to-chef chat and KEMI AI-powered meal planning and nutrition features, plus improvements to the Learning Hub.",
    caseStudy: {
      overview: "Chef4Me connects customers with professional chefs through a marketplace for booking chefs, ordering food, requesting quotations and completing payments. Different user roles need distinct journeys while sharing a consistent booking experience. The platform also includes a Learning Hub with learner and lecturer experiences.",
      features: [
        "Direct messaging between customers and chefs",
        "KEMI AI chat for generating meals and multi-day meal plans",
        "Food and pantry scanning to identify ingredients and nutritional details",
        "Calorie and protein information with daily calorie tracking",
        "Customer and chef onboarding with role-specific interfaces",
        "Chef discovery and booking workflows",
        "Food ordering and checkout journeys",
        "Multi-step quotation requests and quote management",
        "Quotation and invoice workflows",
        "Payment integration and order tracking",
        "Order tracking and customer communication",
        "Learning Hub improvements to learner and lecturer workflows",
        "Video playback logic improvements and dashboard fixes for learners and tutors",
      ],
      contribution: "Implemented chef booking, food ordering, quotation request and payment flows, alongside role-specific marketplace journeys, the customer-to-chef chat experience, and KEMI AI chat interfaces for meal generation, multi-day planning, food and pantry scanning, nutritional insights and calorie tracking. Improved existing Learning Hub code, corrected logic between learners and lecturers, refined video playback behaviour and fixed sections of the learner and tutor dashboards.",
      challenges: ["Maintaining consistent state across chef bookings, food orders and multi-step quotation requests", "Supporting distinct customer, chef, rider and business interfaces", "Building interactive chat and AI-assisted meal-planning experiences alongside the booking flow", "Coordinating authentication, API data and payment steps across a single user journey", "Correcting learner-lecturer workflow logic and improving video playback and dashboard behaviour in the Learning Hub"],
      engineering: "Developed Next.js, React and TypeScript interfaces with reusable components, Redux Toolkit, backend API integrations and Stripe/Paystack payment flows. Built frontend flows for booking chefs, ordering food and requesting quotations, including form progression, checkout and payment integration. Implemented customer-to-chef messaging and the frontend experience for KEMI, including conversational meal generation, multi-day planning, food and pantry scans, nutritional breakdowns and calorie tracking. Managed role-aware navigation, multi-step form progression and asynchronous data across these interconnected experiences. Also refactored parts of the existing Learning Hub code, corrected learner-lecturer interaction logic, improved video playback handling and resolved issues in the learner and tutor dashboards.",
      outcome: "Delivered interconnected marketplace journeys for chef booking, food ordering, quotation requests, customer-to-chef communication and payments, alongside KEMI-powered meal planning and nutrition features. Improved the existing Learning Hub experience through workflow fixes, video playback enhancements and learner/tutor dashboard corrections."
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
    info: "Implemented the complete frontend, including student, tutor, parent and admin dashboards, interactive whiteboard, video classrooms and SEO.",
    caseStudy: {
      overview: "Schoolers is an online learning platform designed around the needs of students, tutors and parents. I built the frontend from start to finish, covering dashboards and application logic for students, tutors, parents and administrators, as well as an interactive whiteboard and tutor-student video calls. The product is awaiting its public launch.",
      features: [
        "Dashboards and role-specific workflows for students, tutors, parents and administrators",
        "Interactive whiteboard for online lessons",
        "Tutor-to-student video calls and virtual classrooms",
        "Real-time audio and video controls",
        "Responsive frontend interfaces and SEO implementation",
      ],
      contribution: "Owned and implemented the entire frontend, from initial development through student, tutor, parent and admin dashboards, role-specific application logic, the whiteboard, video calling and SEO.",
      challenges: ["Managing distinct dashboard workflows across four user roles", "Coordinating interactive whiteboard and live classroom controls", "Keeping frontend architecture reusable, responsive and maintainable"],
      engineering: "Built the frontend end to end with Next.js, React and TypeScript, integrating LiveKit for real-time tutor-student video calls and implementing an interactive whiteboard. Developed role-specific dashboards and logic, followed frontend engineering best practices, and implemented SEO for the web platform.",
      outcome: "Delivered the complete frontend for role-based learning, administration, interactive whiteboarding and video classrooms. Schoolers has not yet launched publicly, so live usage results are not claimed.",
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
    info: "Led frontend delivery and implemented approximately 80% of the platform, including the marketplace, payments, multi-role access, accessibility, image optimisation, a reported 40% speed improvement, and SEO.",
    caseStudy: {
      overview: "Qrate Art connects artists, galleries, suppliers and other participants through an art-focused platform with a marketplace, exhibitions, auctions, workshops and community features. I served as Frontend Team Lead and implemented approximately 80% of the platform.",
      features: [
        "Art marketplace for platform users",
        "Stripe payment integration",
        "Role-specific login and experiences for artists, galleries, suppliers and other user types",
        "Core features across user-facing and administration sections",
        "Exhibitions, auctions, workshops and an art community feed",
        "Accessibility improvements, image optimisation, performance improvements and SEO",
      ],
      contribution: "As Frontend Team Lead, I implemented approximately 80% of the platform, including the marketplace, Stripe integration and distinct login flows for artists, galleries, suppliers and other user roles. I supervised another developer responsible for the initial admin section, reviewed code from other developers, merged their implementations, and later implemented core functionality in both the user-facing and admin sections. I also improved accessibility, optimised images, implemented performance improvements that increased application speed by approximately 40%, and implemented SEO.",
      challenges: [
        "Designing coherent experiences for multiple user roles",
        "Integrating marketplace flows with Stripe payments",
        "Reviewing code, integrating and merging contributions from other developers across user and admin interfaces",
        "Improving accessibility, image loading and frontend performance",
      ],
      engineering: "Built React and TypeScript interfaces for the marketplace and role-specific user journeys, integrated Stripe payments, and contributed core functionality across the main platform and administration experience. Led frontend delivery by reviewing code, merging other developers' implementations and supervising another developer's work on the admin section. Improved accessibility, optimised images and application performance, with an approximately 40% increase in speed, and implemented SEO.",
      outcome: "Delivered substantial frontend functionality across the marketplace, payments, multi-role authentication and administration, while leading implementation, reviewing code and merging contributions from other developers. My optimisation work improved application speed by approximately 40%, based on the reported project result. The approximately 80% contribution is a personal estimate.",
    },
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
