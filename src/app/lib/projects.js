// src/app/lib/projects.js
// Central project data — reused by the home Projects section and the /projects page.

// Clearly defined placeholder to swap out when a real URL is available.
export const LIVE_DEMO_URL_PLACEHOLDER = "https://your-project-live-demo.com";

export const PROJECT_DATA = [
  {
    title: "Oracles Force",
    category: "React.js Stack",
    description:
      "Oracles Force is an IT company providing professional Web Development and WordPress solutions to help businesses build a strong online presence.",
    liveDemo: "https://oraclesforce.com/",
    github: "https://github.com/kashanali-dev/oracles-force",
    image: "/oracles.webp",
    technologies: ["React.js", "Context API", "Tailwind CSS", "Mapbox", "Node.js"],
  },
  {
    title: "Kofi Ofori-Mensah Portfolio",
    category: "Frontend Core",
    description:
      "Kofi Ofori-Mensah works at the intersection of digital marketing, neurodiversity, and platform ethics.",
    liveDemo: "https://kofi-portfolio-lyart.vercel.app/",
    github: "https://github.com/kashanali-dev/Kofi-Portfolio",
    image: "/kofi.webp",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
  },
  {
    title: "TerraMore Paginas UE",
    category: "Web Application",
    description:
      "A modern modular health analytics system featuring state retention orchestration, responsive fluid layout mechanics, and beautifully structured atomic UI design tokens.",
    liveDemo: "https://terramore-update.vercel.app/",
    github: "https://github.com/kashanali-dev/terramore-update",
    image: "/terramore.webp",
    technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Firebase", "REST API"],
  },
  {
    title: "Recruitment Management Platform",
    category: "Full-Stack Web App",
    description:
      "A complete recruitment ecosystem with dedicated employer, admin, and company dashboards, plus job listings, applications, user management, roles, and permissions.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/recruitment-homepage.webp",
    technologies: ["React.js", "Node.js", "REST API", "Authentication", "Database"],
  },
  {
    title: "Admin Dashboard",
    category: "Recruitment Platform",
    description:
      "The administrative control center of the recruitment platform with a live overview of key metrics, platform activity, and management tools.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/admin-dashboard.webp",
    technologies: ["React.js", "Responsive UI", "Data Visualization", "REST API"],
  },
  {
    title: "Employer Dashboard",
    category: "Recruitment Platform",
    description:
      "Employer-facing workspace for managing job postings, tracking applicants, and monitoring hiring progress in one place.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/employer-dashboard.webp",
    technologies: ["React.js", "Recruitment UX", "Job Management", "REST API"],
  },
  {
    title: "Company Profile Dashboard",
    category: "Recruitment Platform",
    description:
      "A dedicated company profile dashboard presenting business information, branding, and overview metrics for organizations on the platform.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/company-profile-dashboard.webp",
    technologies: ["React.js", "Profiles", "Dashboards", "REST API"],
  },
  {
    title: "Company Details",
    category: "Recruitment Platform",
    description:
      "Detailed company information view showing open roles, company metadata, and engagement with the recruitment ecosystem.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/company-details.webp",
    technologies: ["React.js", "Company Pages", "Job Listings", "REST API"],
  },
  {
    title: "Jobs Management",
    category: "Recruitment Platform",
    description:
      "Full job-listing management interface for creating, editing, and organizing job postings across the recruitment platform.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/jobs-management.webp",
    technologies: ["React.js", "Job CRUD", "Pagination", "REST API"],
  },
  {
    title: "Job Details Dashboard",
    category: "Recruitment Platform",
    description:
      "Comprehensive job detail dashboard displaying posting information, candidate pipeline, and application status at a glance.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/job-details-dashboard.webp",
    technologies: ["React.js", "Candidate Pipeline", "Job Tracking", "REST API"],
  },
  {
    title: "Users Management",
    category: "Recruitment Platform",
    description:
      "Admin module for managing all platform users including search, filtering, roles assignment, and account status control.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/users-management.webp",
    technologies: ["React.js", "User CRUD", "Search & Filter", "REST API"],
  },
  {
    title: "Roles & Permissions Dashboard",
    category: "Recruitment Platform",
    description:
      "Role-based access control interface allowing administrators to assign roles and manage granular permissions across the system.",
    liveDemo: LIVE_DEMO_URL_PLACEHOLDER,
    github: "",
    image: "/roles-permissions-dashboard.webp",
    technologies: ["React.js", "RBAC", "Permissions", "REST API"],
  },
];