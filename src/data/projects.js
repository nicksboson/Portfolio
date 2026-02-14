import img1 from "../assets/images/projects/showcase1.png";
import img2 from "../assets/images/projects/showcase2.png";
import img3 from "../assets/images/projects/showcase3.png";
import img4 from "../assets/images/projects/showcase4.png";
import img5 from "../assets/images/projects/showcase5.png";
import img6 from "../assets/images/projects/showcase6.png";

// Videos
import vid1 from "../assets/videos/fitness.mp4";
import vid2 from "../assets/videos/wanderlust.mp4";
import vid3 from "../assets/videos/mario.mp4";
import vid4 from "../assets/videos/polaroid.mp4";
import vid5 from "../assets/videos/hr-dashboard.mp4";
import vid6 from "../assets/videos/eleana.mp4";

const projects = [
    {
        slug: "fitness",
        title: "AI Health Calorie Tracker",
        category: "AI & HEALTH",
        tagline: "AI-Powered Nutrition Analysis & Image-Based Food Classification",
        description:
            "AI Health Calorie Tracker is an intelligent nutrition analysis platform that combines AI-generated calorie estimation with image-based food classification to provide structured dietary insights.",

        overview:
            "The AI Health Calorie Tracker was built to explore how artificial intelligence can be practically applied to everyday health decisions. Instead of building a static calorie calculator, I designed a system that interprets visual input, processes structured nutritional outputs, and presents actionable health insights — all in real time. The platform allows users to simply upload a food image and receive a complete dietary analysis powered by AI image classification.",
        challenges: [
            { icon: "fa-solid fa-images", text: "Handling diverse food image inputs with varying quality and angles" },
            { icon: "fa-solid fa-clock", text: "Managing AI response latency while maintaining smooth UX" },
            { icon: "fa-solid fa-database", text: "Mapping AI-classified items to accurate nutritional data structures" },
            { icon: "fa-solid fa-shield-halved", text: "Processing image uploads efficiently without blocking the UI thread" },
        ],
        features: [
            { title: "Image Upload & AI Recognition", description: "Upload food images or restaurant menus and let AI automatically classify items and extract nutritional data in real time." },
            { title: "Nutritional Breakdown", description: "Get a structured analysis of calories, carbohydrates, proteins, fats, and micronutrients for each identified food item." },
            { title: "Workout Estimation", description: "Receive personalized estimates of workout duration needed to burn the consumed calories based on activity type." },
            { title: "Health Impact Summary", description: "AI-generated insights on how the meal impacts your overall health, with actionable dietary suggestions." },
            { title: "Dietary Balance Overview", description: "Visual representation of macro and micronutrient balance to help users maintain a healthy diet." },
            { title: "Responsive Health Dashboard", description: "Clean, intuitive interface designed for seamless health tracking across all devices and screen sizes." },
        ],
        functionality: [
            "Upload food images directly from camera or gallery",
            "Automatic food item detection using AI classification",
            "Real-time calorie and macronutrient estimation",
            "Micronutrient insights for vitamins and minerals",
            "Workout time calculation based on caloric intake",
            "Health impact analysis with dietary recommendations",
            "Structured API integration for AI-generated responses",
            "Dynamic state management for real-time UI updates",
            "Non-blocking image processing pipeline",
            "Responsive design optimized for mobile health tracking",
        ],
        video: vid1,
        image: img2,
        bgColor: "#18C1E8",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "AI & Fitness" },
            { icon: "fa-solid fa-folder", label: "Web Application" },
            { icon: "fa-solid fa-calendar", label: "2026" },
        ],
        liveUrl: "https://ai-health-vicm.onrender.com",
    },
    {
        slug: "wanderlust",
        title: "Wanderlust",
        category: "FULL-STACK",
        tagline: "Full-Stack Travel Booking & Listing Platform",
        description:
            "Wanderlust is a full-stack travel booking and listing platform inspired by Airbnb, built using MongoDB, Express.js, Node.js, and EJS following the MVC architecture.",

        overview:
            "Wanderlust was developed entirely from scratch to simulate a real-world property listing and booking ecosystem. The platform replicates how modern travel platforms operate — from user authentication and property management to real-time booking and admin control. Built on the MERN-adjacent stack (MongoDB, Express.js, Node.js, EJS), the project follows a strict MVC architecture ensuring clean separation of concerns and production-level scalability.",
        challenges: [
            { icon: "fa-solid fa-arrows-spin", text: "Implementing real-time booking logic with concurrent user handling" },
            { icon: "fa-solid fa-photo-film", text: "Scaling media storage with Cloudinary integration for property images" },
            { icon: "fa-solid fa-lock", text: "Building a dual authentication system with JWT and Google OAuth" },
            { icon: "fa-solid fa-sitemap", text: "Structuring a clean MVC architecture that scales with growing features" },
        ],
        features: [
            { title: "Property Listings", description: "Browse and explore hotel and property listings with detailed descriptions, pricing, and high-quality images for each destination." },
            { title: "Map Integration", description: "View property locations on interactive maps with real-time geo-positioning, helping users discover destinations visually." },
            { title: "Real-Time Booking", description: "Book destinations instantly with a structured booking flow, real-time availability checking, and confirmation system." },
            { title: "Secure Authentication", description: "Dual authentication via JWT tokens and Google OAuth ensures secure user sessions and hassle-free signup/login." },
            { title: "Admin Dashboard", description: "Full admin control panel for managing destinations, monitoring bookings, controlling user accounts, and handling media uploads." },
            { title: "Scalable Media Storage", description: "Property images are uploaded via Multer and stored on Cloudinary, ensuring scalable, fast-loading media across the platform." },
        ],
        functionality: [
            "Browse and explore property listings by location",
            "Filter and search destinations with query logic",
            "View property details with map-based location context",
            "Create and manage personal property listings",
            "Upload property images via Multer + Cloudinary",
            "Book destinations with real-time availability",
            "JWT-based secure session handling",
            "Google OAuth signup and login integration",
            "Admin panel for user and booking management",
            "Server-side validation and input sanitization",
            "RESTful API design with structured routing",
            "Organized MongoDB schemas with relational data modeling",
        ],
        video: vid2,
        image: img3,
        bgColor: "#F4C67A",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "Full-Stack" },
            { icon: "fa-solid fa-folder", label: "Web Application" },
            { icon: "fa-solid fa-calendar", label: "2025" },
        ],
        liveUrl: "https://wanderlust-8bks.onrender.com/listings",
    },
    {
        slug: "mario",
        title: "Super Mario XMAS",
        category: "GAMING",
        tagline: "Canvas-Based Interactive Web Game",
        description:
            "Super Mario: Christmas Edition is a browser-based interactive game developed using HTML5 Canvas and JavaScript during my internship at Dualite, exploring real-time rendering and game mechanics.",

        overview:
            "Super Mario: Christmas Edition was built during my internship at Dualite to explore real-time rendering, game mechanics, and interactive environment design using low-level browser APIs. This wasn't just styling elements on a webpage — it required understanding how Canvas renders frame-by-frame, managing animation loops, implementing gravity and physics-based movement, and designing collision boundaries. Every movement and interaction required structured rendering logic.",
        challenges: [
            { icon: "fa-solid fa-tachometer-alt", text: "Achieving smooth 60fps rendering with manual Canvas redraw cycles" },
            { icon: "fa-solid fa-bullseye", text: "Implementing precise collision detection without game engine support" },
            { icon: "fa-solid fa-weight-hanging", text: "Simulating realistic gravity and physics-based jump mechanics" },
            { icon: "fa-solid fa-layer-group", text: "Managing complex game state transitions across multiple levels" },
        ],
        features: [
            { title: "Character Movement", description: "Full character control system with jumping, gravity simulation, and horizontal motion — all built with manual physics logic." },
            { title: "Collision Detection", description: "Custom-built collision detection engine that handles boundaries, obstacles, and interactive elements in real time." },
            { title: "Christmas Environment", description: "Themed holiday environment with snow effects, festive decorations, and interactive Christmas-themed game elements." },
            { title: "Game Loop Architecture", description: "Structured game loop using requestAnimationFrame for consistent frame-by-frame rendering and state updates." },
            { title: "Physics Engine", description: "Manual physics implementation covering gravity, velocity, acceleration, and momentum for realistic character behavior." },
            { title: "Event Handling System", description: "Keyboard event listeners for real-time player input with debouncing and smooth movement transitions." },
        ],
        functionality: [
            "Move character left and right with keyboard controls",
            "Jump mechanics with gravity and velocity simulation",
            "Frame-by-frame Canvas rendering pipeline",
            "Collision detection for platforms and obstacles",
            "Christmas-themed environment with snow animations",
            "Game state management for lives and scoring",
            "Optimized redraw cycles for smooth gameplay",
            "Modularized code for movement, physics, and environment",
            "Interactive animations triggered by player actions",
            "No external game libraries — pure JavaScript implementation",
        ],
        video: vid3,
        image: img4,
        bgColor: "#42E0C2",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "Gaming" },
            { icon: "fa-solid fa-folder", label: "Web Game" },
            { icon: "fa-solid fa-calendar", label: "2025" },
        ],
        liveUrl: "https://hristmas-edition-9eaa-dualite.netlify.app/",
    },
    {
        slug: "polaroid",
        title: "Polaroid",
        category: "FRONTEND",
        tagline: "Real-Time Vintage Camera Simulator",
        description:
            "Polaroid is a real-time frontend camera simulator that captures images and transforms them into vintage-style polaroid outputs with interactive animations.",

        overview:
            "Polaroid was built during my internship at Dualite to simulate a physical Polaroid camera experience entirely in the browser. The focus was on creating something experiential — not just functional. Users access their device camera directly, capture images in real time, and watch as vintage-style visual effects are applied with a simulated photo-printing animation where the image slides out of the camera into a styled polaroid frame. Every interaction was designed to feel like using a real vintage camera.",
        challenges: [
            { icon: "fa-solid fa-shield-halved", text: "Handling camera permissions securely across different browsers and devices" },
            { icon: "fa-solid fa-stopwatch", text: "Synchronizing capture timing with animation sequences for smooth output" },
            { icon: "fa-solid fa-sliders", text: "Layering multiple CSS filter effects without compromising performance" },
            { icon: "fa-solid fa-spinner", text: "Preventing UI blocking during real-time image processing and rendering" },
        ],
        features: [
            { title: "Real-Time Camera Access", description: "Direct browser camera access with secure permission handling and cross-browser compatibility." },
            { title: "Instant Image Capture", description: "One-click photo capture with instant preview, converting the live camera feed into a static image for processing." },
            { title: "Vintage Filter Effects", description: "Layered CSS filters and transformations applied automatically to create authentic vintage-style color grading and textures." },
            { title: "Photo Ejection Animation", description: "Simulated polaroid photo printing effect where the captured image appears to slide out of the camera body." },
            { title: "Canvas Rendering Pipeline", description: "Image processing through a Canvas-based rendering pipeline for applying effects and generating final polaroid output." },
            { title: "Experiential UI Design", description: "Every interaction designed to replicate the feel of a real vintage camera — from shutter click to photo reveal." },
        ],
        functionality: [
            "Access device camera directly in the browser",
            "Secure camera permission handling across browsers",
            "Real-time live viewfinder with camera stream",
            "One-click image capture from live feed",
            "Automatic vintage-style filter application",
            "Simulated photo printing ejection animation",
            "Canvas-based image rendering and processing",
            "Layered CSS effects for authentic retro styling",
            "Styled polaroid frame output for captured photos",
            "Smooth state transitions without UI blocking",
        ],
        video: vid4,
        image: img6,
        bgColor: "#F1A24A",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "Frontend" },
            { icon: "fa-solid fa-folder", label: "Interactive App" },
            { icon: "fa-solid fa-calendar", label: "2026" },
        ],
        liveUrl: "https://polaroid-nikhil.vercel.app/",
    },
    {
        slug: "hr-dashboard",
        title: "PeoplePulse - HR Dashboard",
        category: "SAAS",
        tagline: "Enterprise-Grade SaaS HR Management Platform",
        description:
            "PeoplePulse is a premium SaaS-style Human Resource Management platform designed to centralize employee management, payroll processing, recruitment tracking, and performance analytics into a single, structured interface.",

        overview:
            "PeoplePulse was built to simulate how modern organizations manage workforce operations through data-driven dashboards and modular enterprise systems. HR operations often become fragmented across spreadsheets, disconnected tools, and manual tracking — leading to scattered employee data, payroll inconsistencies, and poor recruitment visibility. This platform addresses those inefficiencies by providing a centralized, analytics-first HR system designed with scalability and clarity in mind.",
        challenges: [
            { icon: "fa-solid fa-chart-column", text: "Implementing complex data visualizations including radar charts and heatmaps" },
            { icon: "fa-solid fa-cubes", text: "Designing a modular architecture where each feature works independently" },
            { icon: "fa-solid fa-table-list", text: "Managing feature-heavy interfaces without visual clutter" },
            { icon: "fa-solid fa-expand", text: "Building a scalable dashboard layout that handles growing data sets" },
        ],
        features: [
            { title: "Dashboard Analytics", description: "Company performance radar charts, employee distribution by job level, attendance heatmaps, and real-time tracking cards." },
            { title: "Payroll Management", description: "Monthly payroll monitoring with overtime payment calculation, payment status indicators, and department-based payroll segmentation." },
            { title: "Recruitment System", description: "Applicant profile evaluation with skill scoring, recruitment pipeline tracking, and interview-to-onboarding stage management." },
            { title: "Attendance Tracking", description: "Schedule-in/out logs with on-time and late indicators, interactive attendance tables, and weekly heatmap visualization." },
            { title: "Performance Tracking", description: "Employee performance metrics with structured scoring, trend analysis, and department-level comparison dashboards." },
            { title: "Modular Architecture", description: "Each feature module designed independently using component-based architecture, enabling future backend or microservice integration." },
        ],
        functionality: [
            "View company-wide performance radar charts",
            "Monitor employee distribution by job level",
            "Track real-time attendance with heatmap visualization",
            "Process monthly payroll with overtime calculations",
            "Monitor payment status — Paid vs Pending",
            "Evaluate applicant profiles with skill scoring",
            "Track recruitment pipeline from interview to onboarding",
            "Log schedule-in and schedule-out times",
            "Identify on-time vs late attendance patterns",
            "Segment payroll data by department",
            "Compare overall performance across time periods",
            "Manage independent feature modules for scalability",
        ],
        video: vid5,
        image: img5,
        bgColor: "#F28B68",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "SaaS" },
            { icon: "fa-solid fa-folder", label: "Dashboard" },
            { icon: "fa-solid fa-calendar", label: "2026" },
        ],
        liveUrl: "https://hr-dashboard-theta-sage.vercel.app/",
    },
    {
        slug: "eleana",
        title: "Eleana",
        category: "FRONTEND",
        tagline: "Pixel-Perfect React Landing Page Implementation",
        description:
            "Eleana is a pixel-perfect frontend landing page built entirely from scratch using React, focusing on design accuracy, responsiveness, and component structuring.",

        overview:
            "Eleana was built to demonstrate the ability to translate high-quality design references into production-ready frontend implementations with pixel-level precision. The objective was to replicate a premium SaaS-style landing page with exact visual fidelity — matching spacing, typography, layout hierarchy, and responsiveness down to fine details. Instead of just recreating sections visually, I engineered a structured React component architecture that is clean, maintainable, and production-ready.",
        challenges: [
            { icon: "fa-solid fa-ruler", text: "Achieving pixel-level accuracy across spacing, margins, and layout proportions" },
            { icon: "fa-solid fa-arrows-left-right", text: "Ensuring consistent responsive behavior across all breakpoints and devices" },
            { icon: "fa-solid fa-font", text: "Implementing precise typography scaling that matches the original design hierarchy" },
            { icon: "fa-solid fa-gauge-simple-high", text: "Optimizing asset loading and rendering for fast page performance" },
        ],
        features: [
            { title: "Pixel-Perfect Layout", description: "Every section carefully implemented to match exact design proportions, margins, and visual rhythm from the reference design." },
            { title: "Component Architecture", description: "Structured React component system with reusable Hero, Features, CTA, and Footer sections for clean code organization." },
            { title: "Responsive Design", description: "Fully responsive behavior across all breakpoints — from mobile to ultrawide with consistent layout integrity." },
            { title: "Typography System", description: "Professional typography hierarchy with precise font scaling, weight distribution, and line-height optimization." },
            { title: "Visual Polish", description: "Premium SaaS-style aesthetics with clean spacing, subtle depth, and refined visual details throughout every section." },
            { title: "Production Readiness", description: "Clean, scalable code organization with optimized asset handling, ready for deployment to production environments." },
        ],
        functionality: [
            "Pixel-accurate spacing and margin implementation",
            "Responsive layout across mobile, tablet, and desktop",
            "Reusable React component library for each section",
            "Typography scaling with proper heading hierarchy",
            "Optimized image and asset loading for performance",
            "Smooth hover interactions and micro-animations",
            "Clean CSS structuring for long-term scalability",
            "Consistent design language across all components",
            "Semantic HTML for accessibility and SEO",
            "Production-ready build configuration",
        ],
        video: vid6,
        image: img1,
        bgColor: "#E25544",
        tags: [
            { icon: "fa-solid fa-hashtag", label: "Frontend" },
            { icon: "fa-solid fa-folder", label: "Landing Page" },
            { icon: "fa-solid fa-calendar", label: "2025" },
        ],
        liveUrl: "https://eleana-copy.vercel.app/",
    },
];

export default projects;

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(slug, count = 3) {
    return projects.filter((p) => p.slug !== slug).slice(0, count);
}
