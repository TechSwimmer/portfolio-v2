export interface OSSContributions {
  id: number;

  projectName: string;

  title: string;

  description: string;

  issue?: string;

  type:
    | "feature"
    | "bugfix"
    | "ui"
    | "documentation";

  techStack: string[];

  status:
    | "merged"
    | "open";

  pullRequest?: string;

  highlights?: string[];

  filesChanged?: string[];
}



export const osscontributions: OSSContributions[] = [
    {
        id:1,
        projectName:"scikit-learner",
        title: "keyboard shortcuts and shortcut help modal",
        description: "Implemented keyboard shortcuts for key actions in Scikit-Learner to improve usability and workflow efficiency.",
        type: "feature",
        techStack: ["JavaScript","DOM Events","Keyboard Events","UI Logic"],
        status: "open",
        filesChanged: ['frontend/js/app.js', "index.html"],
        pullRequest: "https://github.com/yanndebray/scikit-learner/pull/16"
    },
    {
      id:2,
      projectName:"SnapDock",
      title: "Save All for multi-tab workflows.",
      description: "Implemented a multi-tab “Save All” feature in SnapDock with toolbar integration, close-dialog support, and IPC-based save orchestration to improve multi-file workflow efficiency.",
      type: "feature",
      techStack: ["JavaScript","Electron","IPC","File Handling"],
      status: "merged",
      filesChanged:["src/modules/file/tabs.js","src/modules/ui/editorSync.js","src/preload.js","src/scripts.js"],
      pullRequest:"https://github.com/ZFordDev/SnapDock/pull/97",
    },
    {
      id:3,
      projectName:"Kanban-board",
      title: "task detail modal for Kanban board",
      description: "Added a reusable task details modal that opens when users click on a task card, allowing them to view task information without cluttering the Kanban board.",
      type: "feature",
      techStack: ["React","Framer Motion","Accessibility (A11y)","State Management"],
      status: "merged",
      filesChanged: ["src/components/TaskModal/Modal.jsx", "src/components/List/List.jsx","src/components/Section/Section.jsx","src/components/Task/Task.jsx"],
      pullRequest: "https://github.com/JohannesL2/kanban-board/pull/4",
    },
    {
      id:4,
      projectName: "Kanban-board",
      title: "optional task descriptions",
      description: "Added optional task descriptions so users can provide additional context to tasks.",
      type:"feature",
      techStack: ["React","Framer Motion","State Management"],
      status: "merged",
      filesChanged: ["src/components/Section/Section.jsx", "src/components/List/List.jsx","src/components/Task/Task.jsx"],
      pullRequest: "https://github.com/JohannesL2/kanban-board/pull/3",
    },
    {
      id:5,
      projectName: "devtasks",
      title:"interactive task sorting controls",
      description: "Implemented interactive task sorting and ordering functionality for the Task List page to improve task organization and usability.",
      type: "feature",
      techStack: ["React","State Management","Tailwind CSS"],
      status: "merged",
      filesChanged: ["src/pages/AddTasks.jsx", "src/pages/ListTasks.jsx"],
      pullRequest: "https://github.com/shamilahmdt/devtasks/pull/77",
    },
    {
      id:6,
      projectName: "devtasks",
      title: "improve dashboard mobile responsiveness",
      description: "Enhanced dashboard mobile responsiveness by fixing scrolling issues, improving responsive layouts, and optimizing header behavior across screen sizes.",
      type: "ui",
      techStack: ["React","Tailwind CSS","Responsive Design"],
      status: "merged",
      filesChanged: ["src/pages/Dashboard.jsx"],
      pullRequest: "https://github.com/shamilahmdt/devtasks/pull/73"
    },
    {
      id: 7,
      projectName: "borno",
      title: "documentation link button on homepage",
      description: "Improved homepage navigation by adding a documentation button with consistent styling and direct access to project docs.",
      type: "bugfix",
      techStack: ['HTML', "CSS"],
      status: "merged",
      filesChanged: ["index.html", "styles.css"],
      pullRequest: "https://github.com/idcnys/borno/pull/3",
    }
   
]