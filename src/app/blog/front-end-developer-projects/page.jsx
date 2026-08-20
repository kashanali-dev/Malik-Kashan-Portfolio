// src/app/blog/front-end-developer-projects/page.jsx
import BlogArticleLayout from "../../Components/BlogArticleLayout";
import { blogMetadata } from "../../lib/seo";

export const metadata = blogMetadata({
  title: "Front-End Developer Projects: 12 Portfolio Projects to Build",
  description:
    "Boost your career with these front-end developer projects — 12 practical project ideas from beginner to advanced, each with the skills you will learn.",
  slug: "front-end-developer-projects",
  keywords: [
    "front-end developer projects",
    "front end developer",
    "frontend project ideas",
    "front-end developer portfolio",
  ],
});

export default function Article() {
  return (
    <BlogArticleLayout
      category="Projects"
      title="Front-End Developer Projects: 12 Portfolio Projects to Build"
      date="August 2026"
      readTime="7 min read"
      intro="The fastest way to learn front-end development is building real projects. Here are 12 front-end developer projects, from beginner to advanced, each designed to teach you something specific."
      sections={[
        {
          heading: "Beginner Projects",
          body: [
            "1. Personal portfolio page — a single-page site with a hero, about, skills and contact. Teaches HTML structure, CSS layout and responsive design.",
            "2. Todo list app — add, complete, edit and delete tasks. Teaches JavaScript DOM manipulation, events and local storage.",
            "3. Calculator app — basic arithmetic with a clean interface. Teaches event handling, state and UI polish.",
            "4. Weather widget — fetch real data from a free weather API and display it. Teaches fetch, async/await and error handling.",
          ],
        },
        {
          heading: "Intermediate Projects",
          body: [
            "5. E-commerce product page — product gallery, cart and quantity controls. Teaches components, state and user flow.",
            "6. Movie or book search app — search an API and render results with filters. Teaches data fetching, loading states and debouncing.",
            "7. Blog with search and filtering — build a content site with categories and search. Teaches routing and content organisation.",
            "8. Quiz app with score tracking — timed questions and results screen. Teaches state management and timing.",
          ],
        },
        {
          heading: "Advanced Projects",
          body: [
            "9. Real-time chat interface — build a chat UI that works with a service like Firebase or Pusher. Teaches real-time updates and websockets.",
            "10. Dashboard with charts — admin dashboard with charts and tables from mock data. Teaches data visualisation and complex layouts.",
            "11. Full Next.js SaaS landing page — marketing site with SEO, metadata, animations and a contact form. Teaches the modern production stack.",
            "12. AI-powered assistant UI — a front-end that talks to an LLM API with chat history. Teaches integrating AI into real products.",
          ],
        },
        {
          heading: "How to Make Projects Stand Out",
          body: [
            "Solve a real problem, even a small one. Document the process — the problem, your approach, the result. Deploy every project so it has a live URL. Write a clean README. Measure and improve performance.",
            "Recruiters want to see judgement and finish, not a stack of tutorials. Five finished, deployed projects beat twenty abandoned ones.",
          ],
        },
      ]}
      conclusion={[
        "These front-end developer projects progress naturally from fundamentals to production skills. Build them in order, deploy them, and add them to your portfolio.",
        "Need a hand getting from idea to deployed project? My front-end development services and mentorship can guide you.",
      ]}
    />
  );
}