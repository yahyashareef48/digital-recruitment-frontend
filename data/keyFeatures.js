import {
  IconUsersGroup,
  IconClipboardData,
  IconBubbleText,
  IconGraph,
  IconBrain,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const keyFeatures = [
  {
    id: 1,
    title: "Intelligent Candidate Matching",
    description:
      "Our advanced algorithms analyze resumes and job descriptions to automatically match candidates with the best-fit roles, reducing the time spent on initial screening.",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
    image: "/keyFeatureImg1.png",
  },
  {
    id: 2,
    title: "Seamless Applicant Tracking",
    description:
      "Manage all stages of the recruitment process from a centralized dashboard, streamlining tasks such as scheduling interviews and collecting feedback.",
    icon: <IconClipboardData className="h-4 w-4 text-neutral-500" />,
    image: "/keyFeatureImg2.png",
  },
  {
    id: 3,
    title: "Enhanced Collaboration Tools",
    description:
      "Foster collaboration between hiring managers, HR professionals, and other stakeholders with multi-user access and a comment and rating system for candidate evaluations.",
    icon: <IconBubbleText className="h-4 w-4 text-neutral-500" />,
    image: "/keyFeatureImg3.jpg",
  },
  {
    id: 4,
    title: "Comprehensive Reporting and Analytics",
    description:
      "Generate detailed reports on recruitment metrics, such as time-to-hire and source effectiveness, using predictive analytics to optimize workforce planning.",
    icon: <IconGraph className="h-4 w-4 text-neutral-500" />,
    image: "/keyFeatureImg4.jpg",
  },
  {
    id: 5,
    title: "Candidate Relationship Management",
    description:
      "Create personalized career pages to attract top talent and maintain engagement with potential candidates through automated messaging.",
    icon: <IconUsersGroup className="h-4 w-4 text-neutral-500" />,
    image: "/keyFeatureImg5.jpg",
  },
];
