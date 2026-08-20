// src/app/blog/front-end-developer-interview-questions-freshers/page.jsx
import BlogArticleLayout from "../../Components/BlogArticleLayout";
import { blogMetadata } from "../../lib/seo";

export const metadata = blogMetadata({
  title: "Front-End Developer Interview Questions and Answers for Freshers",
  description:
    "Prepare with these front-end developer interview questions and answers for freshers — HTML, CSS, JavaScript, React basics and behavioural tips to help you pass your first interview.",
  slug: "front-end-developer-interview-questions-freshers",
  keywords: [
    "front-end developer interview questions and answers for freshers",
    "front-end developer interview questions",
    "front end developer jobs",
    "fresher frontend interview",
  ],
});

export default function Article() {
  return (
    <BlogArticleLayout
      category="Interview"
      title="Front-End Developer Interview Questions and Answers for Freshers"
      date="August 2026"
      readTime="8 min read"
      intro="Your first front-end interview can feel intimidating. These are the most common front-end developer interview questions and answers for freshers — learn the concepts, not just the answers."
      sections={[
        {
          heading: "HTML and CSS Questions",
          body: [
            "Q: What is the difference between semantic and non-semantic HTML? A: Semantic elements like <header>, <nav>, <article> and <footer> describe their meaning, which improves accessibility and SEO. Non-semantic elements like <div> and <span> carry no meaning.",
            "Q: What is the difference between flexbox and CSS grid? A: Flexbox is one-dimensional (rows or columns), ideal for small layouts and aligning items. Grid is two-dimensional, designed for full-page layouts with rows and columns.",
            "Q: How do you make a website responsive? A: Use a mobile-first approach, fluid grids, flexible units like rem and %, media queries, and responsive images with the srcset attribute.",
          ],
        },
        {
          heading: "JavaScript Questions",
          body: [
            "Q: What is the difference between var, let and const? A: var is function-scoped and hoisted; let and const are block-scoped. const prevents reassignment (not mutation). Prefer const, use let only when you must reassign.",
            "Q: What is the difference between == and ===? A: == performs type coercion, === compares value and type without coercion. Always use === in modern code.",
            "Q: What is an event listener and how do you remove it? A: addEventListener attaches a handler to an element. Remove it with removeEventListener, passing the same function reference — important to avoid memory leaks.",
            "Q: Explain closures in simple terms. A: A closure is a function that remembers variables from the scope where it was created, even after that scope has finished executing.",
          ],
        },
        {
          heading: "React Questions for Freshers",
          body: [
            "Q: What are components and props? A: Components are reusable pieces of UI written as functions. Props are inputs passed to a component, making it configurable.",
            "Q: What is state and why is it different from props? A: State is data a component owns and manages internally; changing it re-renders the component. Props are read-only data passed from a parent.",
            "Q: What does the useEffect hook do? A: It runs side effects — data fetching, subscriptions, timers — after render. You control when it runs with its dependency array.",
          ],
        },
        {
          heading: "Behavioural and Practical Tips",
          body: [
            "Q: Tell me about a project you built. A: Use the STAR method — Situation, Task, Action, Result. Focus on what you built, a challenge you solved, and a concrete outcome.",
            "Q: How do you keep learning? A: Mention specific habits: building side projects, reading documentation, following developer blogs, and contributing to open source. Show genuine curiosity.",
            "Q: What is your weakness? A: Pick a real weakness and, crucially, the steps you are taking to improve it. Avoid fake strengths disguised as weaknesses.",
          ],
        },
      ]}
      conclusion={[
        "Prepare by understanding concepts, not memorising lines. Practise building small apps and explaining your code out loud — interviews are conversations, not exams.",
        "Ready to accelerate? My mentorship and front-end development services can take you from learning to earning faster.",
      ]}
    />
  );
}