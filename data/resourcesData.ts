import { StaticImageData } from "next/image";

import resEbook from "@/public/images/resources/resource-ebook.png";
import resToolkit from "@/public/images/resources/resource-toolkit.png";
import resCasestudy from "@/public/images/resources/resource-casestudy.png";
import resWhitepaper from "@/public/images/resources/resource-whitepaper.png";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: "E-Book" | "Toolkit" | "Case Study" | "Whitepaper";
  image: StaticImageData;
  downloadLink: string;
  fileSize: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "ultimate-ecommerce-automation",
    title: "The Ultimate E-commerce Automation Guide",
    description: "Discover how top E-commerce brands are utilizing AI to automate customer support, inventory management, and marketing to 10x their sales.",
    type: "E-Book",
    image: resEbook,
    downloadLink: "#",
    fileSize: "2.4 MB PDF",
  },
  {
    id: "n8n-mastery-toolkit",
    title: "n8n Mastery Toolkit",
    description: "A comprehensive checklist and set of pre-built workflow templates for mastering API integrations using n8n without writing a single line of code.",
    type: "Toolkit",
    image: resToolkit,
    downloadLink: "#",
    fileSize: "ZIP Archive",
  },
  {
    id: "ai-chatbot-conversion",
    title: "AI Chatbot Conversion Case Study",
    description: "An in-depth analysis of how implementing custom AI chatbots increased website conversion rates by 45% across 10 different industries.",
    type: "Case Study",
    image: resCasestudy,
    downloadLink: "#",
    fileSize: "1.8 MB PDF",
  },
  {
    id: "nextjs-vs-react-saas",
    title: "Next.js vs React for SaaS",
    description: "A detailed whitepaper exploring the performance, SEO, and developer experience benefits of using Next.js 15+ over traditional React for modern SaaS platforms.",
    type: "Whitepaper",
    image: resWhitepaper,
    downloadLink: "#",
    fileSize: "3.1 MB PDF",
  },
];
