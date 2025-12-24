import { PersonalInfo, Experience, Project, Skill, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Alrin A Jabin" ,
  title: "Senior Full Stack Developer",
  email: "alrinajabi@gmail.com",
  phone: "+91 8940341478",
  location: "Chennai, India",
  bio: "Passionate full-stack developer with expertise in building scalable web applications. Specialized in modern JavaScript frameworks, cloud architecture, and delivering high-quality solutions.",
  avatar: "/avatar.jpg",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/alrin-a-jabin", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/alrin-a-jabin", icon: "linkedin" },
    // { name: "Twitter", url: "https://twitter.com/alrinajabin", icon: "twitter" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Learnship Technologies Pvt Ltd",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "Chennai, India",
    description: [
      "Lead development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored team of 5 junior developers in best practices",
      "Architected scalable solutions using Next.js, Node.js, and AWS",
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "AWS", "Docker", "kubernetes"],
  },
  {
    id: "2",
    company: "Softnotion Technologies Pvt Ltd",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Thiruvananthapuram, India",
    description: [
      "Built responsive web applications using React and Node.js",
      "Developed features for 3D modeling using Three.js,React.js and Redux",
      "Collaborated with cross-functional teams in Agile environment",
      "Implemented RESTful APIs endpoints",

    ],
    technologies: ["React", "Node.js", "Koa.js","three.js", "Redux", "Express"],
  },
  {
    id: "3",
    company: "Trizent Technologies Pvt Ltd",
    position: "Software Engineer",
    duration: "2018 - 2020",
    location: "Thiruvananthapuram, India",
    description: [
      "Integrated APIs and third-party services to enhance application functionality",
      "Developed UI libraries and reusable components",
      "Participated in code reviews and technical documentation",
      "Improved application security and implemented authentication",
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis", "Stripe"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Virtual Classroom Platform",
    description: "Full-featured virtual classroom platform with real-time video conferencing and interactive whiteboard. Built with React.js and  integration.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    imageUrl: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Project Management Tool",
    description: "Collaborative project management application with real-time updates, task tracking, and team communication features. Supports multiple workspaces.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Material-UI"],
    imageUrl: "/projects/project-mgmt.jpg",
    githubUrl: "https://github.com/yourusername/project-mgmt",
    liveUrl: "https://project-mgmt-demo.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API. Features include content templates, SEO optimization, and multi-language support.",
    technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Supabase", "Vercel"],
    imageUrl: "/projects/ai-content.jpg",
    githubUrl: "https://github.com/yourusername/ai-content",
    featured: true,
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, custom reports, and data visualization. Handles large datasets efficiently.",
    technologies: ["React", "D3.js", "FastAPI", "PostgreSQL", "Docker"],
    imageUrl: "/projects/analytics.jpg",
    githubUrl: "https://github.com/yourusername/analytics",
    featured: false,
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript","Redux", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Koa.js", "GraphQL","AWS-lambda", "K6s","Jest"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Aws-DynamoDB"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Tools & Others",
    items: ["Datadog","Git", "GitLab", "Helm", "Tilt", "Agile/Scrum"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2014 - 2018",
    location: "City, State",
  },
];
