

type BulletListSections = {
    type: "bulletList";
    title: string;
    items: string[];
}

type ContentBlockSection = {
    type: "contentBlock";
    title: string;
    image?: string;
    items: {
        subtitle: string;
        description: string;
    }[];
};

type MediaContentSection = {
    type: "mediaContent";

    title: string;

    items: {
        subtitle?: string;
        description?: string;
        bullets?: string[];
        image?: string;
        video?: string;
    }[];
};

type TechStackCategory = {
    subtitle: string;
    technologies: string[];
};

type Section = BulletListSections | ContentBlockSection | MediaContentSection;

export interface Project {
    title: string;
    slug: string;
    description: string;
    techStack: TechStackCategory[];
    github?: string;
    live?: string;
    video?: string;
    image?: string;
    sections?: Section[];
    poster?: string;
    captions?: string;

};

export const projects: Project[] = [
    {
        title: "ResumeBaker",
        slug: "resumebaker",
        description: "Built a production-ready full-stack resume builder with real-time preview synchronization, dynamic layouts, JWT authentication, AI-powered resume import, and consistent PDF export. Implemented REST APIs for resume persistence and seamless guest/registered user workflows.",
        poster: "/images/resumebaker/builder-shot.webp",
        captions: "/captions/resumebaker-demo.vtt",
        techStack: [
            {
                subtitle: "Frontend:",
                technologies: ["React", "Vite", "Tailwind CSS", "html2canvas", "jsPDF", "react-pdf"]
            },
            {
                subtitle: "Backend:",
                technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"]
            },
            {
                subtitle: "AI Integration:",
                technologies: ["OpenAI API for resume parsing and content structuring"]
            }
        ],
        github: "https://github.com/TechSwimmer/cv-Builder",
        live: "https://resume-baker.netlify.app",
        video: "/videos/builder-demo.mp4",
        sections: [
            {

                type: "contentBlock",
                title: "Project highlights",
                image: "/images/resumebaker/builder-shot.png",
                items: [
                    {
                        subtitle: "Full-Stack Resume Builder",
                        description: "Built using the MERN stack with persistent resume storage and authenticated user workflows."
                    },
                    {
                        subtitle: "Real-Time Resume Preview",
                        description: "Live CV updates with synchronized preview while editing.",
                    },
                    {
                        subtitle: "Multiple Resume Layouts",
                        description: "Three layout templates powered by a shared resume data schema.",
                    },
                    {
                        subtitle: "AI-Powered Resume Import",
                        description: "Upload existing resumes (PDF) and automatically structure content using AI."
                    },

                    {
                        subtitle: "Authentication & Guest Mode",
                        description: "JWT-based authentication with separate guest and logged-in user flows.",
                    },
                    {
                        subtitle: "PDF Export System",
                        description: "Multi-page resume export using React-PDF with layout-specific rendering."
                    },

                ]
            },
            {
                type: "mediaContent",
                title: "TECHNICAL IMPLEMENTATION",
                items: [
                    {
                        subtitle: "Dual panel interface:",
                        description: "Built a responsive two-panel layout using React state management to synchronize form inputs with the live preview. Built synchronized form and preview rendering for real-time resume editing.",
                        bullets: [
                            "Synchronized structured form state with live resume preview",
                            "Section-based architecture supporting dynamic visibility and editing",
                            "Shared resume schema powering both preview and export systems"
                        ]
                    },
                    {
                        subtitle: "Dynamic Styling System:",
                        description: "Built a lightweight styling system for theme colors and font customization with live preview updates.",
                        bullets: [
                            "Theme-based color switching for resume appearance",
                            "Font-style selection controls for text presentation",
                            "Live style updates applied directly to the preview",
                        ]
                    },
                    {
                        subtitle: "PDF Generation & Export:",
                        description: "Implemented separate rendering flows for downloadable CV export and dashboard preview generation.",
                        bullets: [
                            "React-PDF for downloadable CV output with selectable text and clickable links",
                            "html2canvas + jsPDF pipeline for generating dashboard preview images",
                            "Separate render paths optimized for export quality and dashboard performance",
                        ]
                    },
                    {
                        subtitle: "Resume Import Pipeline:",
                        description:
                            "Implemented PDF parsing and AI-assisted structuring to transform uploaded resumes into editable form data.",
                        bullets: [
                            "PDF text extraction using pdfjs",
                            "AI-powered resume section structuring",
                            "Normalization into a shared resume schema"
                        ]
                    }
                ]
            },
            {
                type: "bulletList",
                title: "Engineering Challenges Solved",
                items: [
                    "Maintained synchronization between form inputs, live preview, and exported PDF output while preserving a consistent resume structure.",

                    "Designed a dual-render workflow where HTML powers real-time editing and React-PDF handles downloadable resume generation while maintaining layout consistency.",

                    "Built reusable resume layouts powered by a shared data schema while supporting structurally different templates.",

                    "Optimized rendering performance during editing and PDF generation by memoizing large preview components with React.memo() to improve responsiveness."
                ]
            },
            {
                type: "contentBlock",
                title: "Architecture Decisions",
                items: [
                    {
                        subtitle: "Shared Resume Schema",
                        description:
                            "All layouts, form sections, and export systems consume a shared structured resume model, enabling layout switching without data loss."
                    },
                    {
                        subtitle: "Dual Render Workflow",
                        description:
                            "Separated HTML preview rendering from React-PDF export rendering to balance editing responsiveness and export quality."
                    }
                ]
            }
        ],
    },
    {


        title: "JobLens-AI",
        slug: "joblens-ai",

        description:
            "Built an AI-powered Chrome extension that analyzes LinkedIn job descriptions against uploaded resumes to simulate ATS-style skill matching. Implemented resume parsing, PDF text extraction, real-time LinkedIn DOM scraping, and skill-gap analysis through a draggable floating UI injected directly into job pages.",

        poster: "/images/joblens/joblens-shot.webp",

        captions: "/captions/joblens-demo.vtt",

        techStack: [
            {
                subtitle: "Frontend:",
                technologies: [
                    "React",
                    "TypeScript",
                    "Vite",
                    "Tailwind CSS"
                ]
            },

            {
                subtitle: "Chrome Extension:",
                technologies: [
                    "Chrome Extension APIs",
                    "Content Scripts",
                    "CRXJS",
                    "Manifest V3"
                ]
            },

            {
                subtitle: "Resume Processing:",
                technologies: [
                    "pdfjs-dist",
                    "Mammoth",
                    "Text Parsing"
                ]
            },

            {
                subtitle: "ATS Logic:",
                technologies: [
                    "Skill Extraction",
                    "Keyword Matching",
                    "Resume-to-Job Comparison"
                ]
            }
        ],

        github:
            "https://github.com/TechSwimmer/joblens-ai",

        live: "",

        video:
            "/videos/joblens-demo.mp4",

        sections: [
            {
                type: "contentBlock",

                title: "Project highlights",

                image:
                    "/images/joblens/joblens-shot.png",

                items: [
                    {
                        subtitle:
                            "LinkedIn Job Analysis",

                        description:
                            "Injected a floating ATS analysis panel directly into LinkedIn job pages using Chrome content scripts."
                    },

                    {
                        subtitle:
                            "Resume Parsing Pipeline",

                        description:
                            "Implemented PDF and DOCX resume parsing with text extraction for downstream ATS analysis."
                    },

                    {
                        subtitle:
                            "ATS Skill Matching",

                        description:
                            "Built a keyword-based matching system that compares resume skills against detected job requirements."
                    },

                    {
                        subtitle:
                            "Real-Time Job Scraping",

                        description:
                            "Extracted job title, company, location, and description dynamically from LinkedIn DOM elements."
                    },

                    {
                        subtitle:
                            "Draggable Floating UI",

                        description:
                            "Built a movable floating interface that updates job information in real time while browsing LinkedIn."
                    },

                    {
                        subtitle:
                            "Skill Gap Analysis",

                        description:
                            "Displayed ATS match score, matching skills, missing skills, and extracted job keywords for better resume targeting."
                    }
                ]
            },

            {
                type: "mediaContent",

                title:
                    "TECHNICAL IMPLEMENTATION",

                items: [
                    {
                        subtitle:
                            "Chrome Extension Architecture:",

                        description:
                            "Built the application using Manifest V3 with CRXJS and content scripts to inject React UI directly into LinkedIn job pages.",

                        bullets: [
                            "Manifest V3 architecture with scoped permissions",
                            "React-based floating panel mounted using content scripts",
                            "LinkedIn-specific URL matching for targeted execution"
                        ]
                    },

                    {
                        subtitle:
                            "Resume Processing Pipeline:",

                        description:
                            "Implemented local resume parsing to extract text content before ATS analysis.",

                        bullets: [
                            "PDF parsing using pdfjs worker configuration",
                            "DOCX support through Mammoth (still in development)",
                            "Resume text persisted using Chrome storage APIs"
                        ]
                    },

                    {
                        subtitle:
                            "ATS Matching System:",

                        description:
                            "Built a lightweight ATS simulation system for comparing resume skills with job requirements.",

                        bullets: [
                            "Regex-based skill extraction",
                            "Case-insensitive keyword comparison",
                            "Percentage-based ATS scoring"
                        ]
                    },

                    {
                        subtitle:
                            "LinkedIn DOM Scraping:",

                        description:
                            "Designed resilient DOM extraction logic using multiple fallback selectors to improve reliability across LinkedIn UI changes.",

                        bullets: [
                            "Dynamic selector fallback system",
                            "Periodic DOM polling for job changes",
                            "Real-time updates while browsing jobs"
                        ]
                    }
                ]
            },

            {
                type: "bulletList",

                title:
                    "Engineering Challenges Solved",

                items: [
                    "Solved PDF worker failures inside Chrome extensions by explicitly configuring pdfjs worker paths using Vite asset URLs.",

                    "Handled dynamic LinkedIn DOM updates by implementing periodic scraping and fallback selectors to avoid broken extraction.",

                    "Designed a floating draggable UI that stays responsive while continuously monitoring job page changes.",

                    "Built a lightweight ATS scoring system capable of identifying matching and missing skills without relying on external APIs."
                ]
            },

            {
                type: "contentBlock",

                title:
                    "Architecture Decisions",

                items: [
                    {
                        subtitle:
                            "Local Resume Processing",

                        description:
                            "Processed resumes locally using pdfjs and Mammoth instead of external services to keep the extension lightweight and privacy-friendly."
                    },

                    {
                        subtitle:
                            "Scoped LinkedIn Injection",

                        description:
                            "Restricted content script execution to LinkedIn jobs pages for better performance, reduced permissions, and improved security."
                    }
                ]
            }
        ],
    },









    {
        title: "TaskNest",
        slug: "tasknest",
        description: "Built a full-stack task management SPA with secure JWT authentication, CRUD functionality, calendar-based task filtering, and MongoDB persistence. Implemented RESTful APIs, token-based access control, and a responsive productivity-focused user experience.",
        poster: "/images/tasknest/tasknest.webp",
        captions: "/captions/tasknest-demo.vtt",
        techStack: [
            {
                subtitle: "Frontend:",
                technologies: ["Javascript", "HTML", "CSS"]
            },
            {
                subtitle: "Backend",
                technologies: ["NODE.JS", "Express.js", "MongoDB", "Mongoose", "JWT"]
            },
            {
                subtitle: "Tools",
                technologies: ["Git", "Github", "Netlify", "Render"]
            }
        ],
        github: "https://github.com/TechSwimmer/Todo-list-app",
        live: "https://todotasknest.netlify.app",
        video: "/videos/editTaskgif.mp4",
        sections: [
            {
                type: "contentBlock",
                title: "Project Highlights",
                items: [
                    {
                        subtitle: "Full-Stack Task Management App",
                        description:
                            "Built using Node.js, Express, MongoDB, and Vanilla JavaScript with secure task persistence and authentication."
                    },
                    {
                        subtitle: "Custom Calendar System",
                        description:
                            "Interactive calendar with date-based task management, highlighting, and task loading."
                    },
                    {
                        subtitle: "Vanilla JavaScript Architecture",
                        description:
                            "Built intentionally without a frontend framework to demonstrate DOM manipulation, state synchronization, and event handling."
                    },
                    {
                        subtitle: "JWT Authentication",
                        description:
                            "Secure login and registration flow with protected routes and user-specific task access."
                    },
                    {
                        subtitle: "Task Filtering & CRUD",
                        description:
                            "Create, update, delete, and filter tasks with dedicated views for Today, Tomorrow, and All Tasks."
                    },
                    {
                        subtitle: "Weather & Productivity Utilities",
                        description:
                            "Integrated weather and local time display based on user location."
                    }
                ]
            },


            {
                type: "mediaContent",
                title: "TECHNICAL IMPLEMENTATION",
                items: [
                    {
                        subtitle: "Calendar Rendering System:",
                        description:
                            "Built a custom calendar system from scratch using Vanilla JavaScript with dynamic DOM rendering and date-based task synchronization.",
                        bullets: [
                            "Dynamic month rendering with generated calendar cells",
                            "Date selection and task loading using event delegation",
                            "Task synchronization with calendar state"
                        ]
                    },

                    {
                        subtitle: "Vanilla JavaScript Architecture:",
                        description:
                            "Implemented centralized DOM management and manual UI synchronization without relying on frontend frameworks.",
                        bullets: [
                            "Centralized DOM caching for performance",
                            "Manual state synchronization across UI sections",
                            "REST API interaction using JWT authorization"
                        ]
                    },

                    {
                        subtitle: "Authentication & Task Management:",
                        description:
                            "Built protected task workflows with user-scoped CRUD operations and persistent task storage.",
                        bullets: [
                            "JWT authentication for protected routes",
                            "MongoDB persistence using Mongoose",
                            "Task filtering for Today, Tomorrow, and completed views"
                        ]
                    },

                    {
                        subtitle: "Feedback & Utility Features:",
                        description:
                            "Integrated productivity-focused features to improve user experience.",
                        bullets: [
                            "Weather integration based on geolocation",
                            "Live local clock updates",
                            "Feedback form with email notifications using Nodemailer"
                        ]
                    }
                ]
            },

            {
                type: "bulletList",
                title: "Engineering Challenges Solved",
                items: [
                    "Built a complete task management workflow using Vanilla JavaScript without frontend framework abstractions.",

                    "Designed a custom calendar rendering system with event delegation to reduce unnecessary listener re-attachments during re-renders.",

                    "Managed manual UI synchronization between calendar state, selected dates, and task rendering.",

                    "Implemented secure authentication and protected task routes using JWT and middleware.",

                    "Handled geolocation permission fallbacks and weather API failures to maintain a stable user experience."
                ]
            }


        ]

    },









    {
        title: "Affina",
        slug: "affina",
        description: "Built a full-stack social media platform with secure JWT authentication, media uploads, post interactions, and responsive user experience. Implemented RESTful APIs for posts, likes, comments, and profile management, with Cloudinary integration for optimized image handling.",
        techStack: [
            {
                subtitle: "Frontend",
                technologies: ["React", "Tailwind CSS",]
            },
            {
                subtitle: "Backend",
                technologies: ["Node.js", "Express.js", "mongoDB", "JWT", "Multer"]
            },
            {
                subtitle: "Tools",
                technologies: ["Cloudinary", "Netlfy", "Render", "Git", "Github"]
            }
        ],
        github: "https://github.com/TechSwimmer/Affina",
        live: "https://affina.netlify.app",
        image: "/videos/affina.webp",
        sections: [
            {
                type: "contentBlock",
                title: "Project Highlights",
                items: [
                    {
                        subtitle: "Full-Stack Social Media Platform",
                        description:
                            "Built using the MERN stack with secure authentication, media uploads, and user interaction systems."
                    },
                    {
                        subtitle: "Authentication & Protected Routes",
                        description:
                            "JWT-based authentication system with secure password hashing and route protection."
                    },
                    {
                        subtitle: "Post Creation & Media Uploads",
                        description:
                            "Users can create, edit, and delete posts with text and image upload support."
                    },
                    {
                        subtitle: "Social Interactions",
                        description:
                            "Implemented like/unlike functionality and comment systems with immediate UI feedback."
                    },
                    {
                        subtitle: "User Profiles",
                        description:
                            "Profile pages with avatar uploads, personalized user data, and post history."
                    },
                    {
                        subtitle: "Responsive User Experience",
                        description:
                            "Mobile-first responsive interface designed for seamless interaction across devices."
                    }
                ]
            },


            {
                type: "mediaContent",
                title: "TECHNICAL IMPLEMENTATION",
                items: [
                    {
                        subtitle: "Authentication System:",
                        description:
                            "Built secure authentication workflows with protected routes and persistent login handling.",
                        bullets: [
                            "JWT-based authentication and route protection",
                            "Password hashing using bcrypt",
                            "Persistent authentication state management"
                        ]
                    },

                    {
                        subtitle: "Post & Interaction System:",
                        description:
                            "Developed core social media functionality for content creation and engagement.",
                        bullets: [
                            "Create, edit, and delete user posts",
                            "Like/unlike interactions with immediate UI updates",
                            "Comment system with dynamic rendering"
                        ]
                    },

                    {
                        subtitle: "Media Upload Pipeline:",
                        description:
                            "Implemented optimized image upload and delivery workflows for user-generated content.",
                        bullets: [
                            "File handling using Multer middleware",
                            "Cloudinary integration for cloud image storage",
                            "Optimized image delivery using CDN infrastructure"
                        ]
                    },

                    {
                        subtitle: "Global State Management:",
                        description:
                            "Managed shared application state across authentication and post workflows.",
                        bullets: [
                            "React Context API for centralized state management",
                            "Separate auth and post contexts",
                            "Axios integration for API communication"
                        ]
                    }
                ]
            },

            {
                type: "bulletList",
                title: "Engineering Challenges Solved",
                items: [
                    "Managed authentication and user session persistence across protected application routes.",

                    "Handled media upload workflows by integrating Multer for processing and Cloudinary for scalable image storage.",

                    "Implemented optimistic UI updates for likes and comments to provide immediate feedback while maintaining API consistency.",

                    "Structured reusable state management using React Context API to reduce prop drilling across components.",

                    "Designed responsive layouts to maintain usability across desktop and mobile devices."
                ]
            }


        ]

    },










    {
        title: "Portfolio",
        slug: "portfolio",
        description: "Built a modern developer portfolio using Next.js, TypeScript, and Tailwind CSS to showcase projects, case studies, technical skills, and open-source contributions. Focused on responsive UI, reusable component architecture, performance optimization, and clean developer experience.",
        techStack: [
            {
                subtitle: "Frontend",
                technologies: ["React", "Tailwind CSS", "TypeSript"]
            },
            {
                subtitle: "Backend",
                technologies: ["Node.js"]
            },
            {
                subtitle: "Tools",
                technologies: ["Git", "Github"]
            }
        ],
        github: "https://github.com/TechSwimmer/portfolio-v2",
        live: "https://affina.netlify.app",
        image: "/images/portfolio/portfolio-shot.webp",
    }
]