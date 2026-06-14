import premiumImg from "@/public/images/service/premium_websites.png";
import ecommerceImg from "@/public/images/service/ecommerce_service.png";
import aiAutoImg from "@/public/images/service/ai_automation.png";
import n8nImg from "@/public/images/service/n8n_development.png";
import saasImg from "@/public/images/service/saas_development.png";
import brandingImg from "@/public/images/service/branding_design.png";

export const servicesData = {
  "premium-websites": {
    title: "Premium Websites",
    slug: "premium-websites",
    subtitle: "High-Performance Next.js Web Development",
    description:
      "Your website is the digital storefront of your business. We build lightning-fast, highly secure, and SEO-optimized premium websites using cutting-edge frameworks like Next.js and React. Our websites are designed to convert visitors into loyal customers while providing a stunning, seamless user experience.",
    image: premiumImg,
    features: [
      "Custom UI/UX Design tailored to your brand.",
      "Blazing fast performance with Next.js Server-Side Rendering.",
      "Responsive on all devices (Mobile, Tablet, Desktop).",
      "Advanced SEO metadata integration for higher Google rankings.",
      "Secure hosting architectures and SSL integration."
    ],
    faq: [
      {
        question: "How long does it take to build a premium website?",
        answer: "Typically, a premium corporate website takes 2-4 weeks from design to deployment, depending on the complexity and features required.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. 100% of the websites we build are fully responsive and optimized for mobile devices.",
      },
      {
        question: "Do you provide SEO services?",
        answer: "Yes, we build all our websites with on-page SEO best practices baked into the code to ensure you rank well.",
      }
    ]
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    subtitle: "Scalable & High-Converting Online Stores",
    description:
      "Transform the way you sell online. We build robust e-commerce platforms equipped with secure payment gateways, inventory management, and automated WhatsApp order processing. Whether you're selling digital products or physical goods, our solutions are designed to maximize your ROI.",
    image: ecommerceImg,
    features: [
      "Custom cart and checkout experiences to reduce abandonment.",
      "Integration with local and international payment gateways (Stripe, PayHere, etc.).",
      "Automated WhatsApp notifications for new orders.",
      "Dynamic pricing models powered by AI.",
      "Comprehensive admin dashboards for sales analytics."
    ],
    faq: [
      {
        question: "Can I manage the products myself?",
        answer: "Yes, we provide an easy-to-use admin dashboard where you can add, edit, or remove products and track inventory.",
      },
      {
        question: "Do you integrate local payment gateways?",
        answer: "Yes, we can integrate local payment processors depending on your region to ensure seamless transactions.",
      },
      {
        question: "Can customers get notifications via WhatsApp?",
        answer: "Absolutely. We specialize in WhatsApp automation to notify both you and your customers about order statuses.",
      }
    ]
  },
  "ai-automation": {
    title: "AI Automation",
    slug: "ai-automation",
    subtitle: "Scale Your Operations with Intelligent Bots",
    description:
      "Stop wasting time on repetitive tasks. Our AI automation solutions integrate intelligent chatbots and customer support agents directly into your workflows. From WhatsApp automation to email sorting, we build systems that work 24/7 so your human team can focus on what matters.",
    image: aiAutoImg,
    features: [
      "Custom AI chatbots trained on your specific business data.",
      "24/7 WhatsApp customer support automation.",
      "Automated lead qualification and CRM data entry.",
      "Email parsing and automated response generation.",
      "Seamless integration with your existing software stack."
    ],
    faq: [
      {
        question: "How smart are the AI chatbots?",
        answer: "Very smart. We train them using your own knowledge base, PDFs, and website data so they can answer highly specific questions accurately.",
      },
      {
        question: "Does it work with WhatsApp?",
        answer: "Yes, we build official WhatsApp Business API integrations for robust, automated communication.",
      },
      {
        question: "Will it replace my support team?",
        answer: "It handles up to 80% of routine queries, allowing your human support team to handle complex, high-value interactions.",
      }
    ]
  },
  "n8n-development": {
    title: "n8n Development",
    slug: "n8n-development",
    subtitle: "Advanced Workflow Automation Architectures",
    description:
      "We design and deploy custom workflow automations using n8n. By synchronizing your APIs, databases, and third-party SaaS tools, we eliminate manual data entry. Whether it's syncing leads from Facebook to your CRM or automating invoice generation, we build the digital pipelines that run your business.",
    image: n8nImg,
    features: [
      "Custom n8n workflow design and deployment.",
      "API integrations between unconnected software platforms.",
      "Automated data syncing across CRMs, ERPs, and marketing tools.",
      "Self-hosted n8n instances for maximum data privacy.",
      "Error handling and automated alert systems."
    ],
    faq: [
      {
        question: "What is n8n?",
        answer: "n8n is a powerful, extendable workflow automation tool that allows us to connect any app with an API to automate tasks.",
      },
      {
        question: "Is it secure?",
        answer: "Yes. We can self-host n8n on your own servers, ensuring that your sensitive business data never leaves your environment.",
      },
      {
        question: "Can it connect to my legacy software?",
        answer: "As long as your software has an API or webhooks, we can connect it and automate workflows.",
      }
    ]
  },
  "saas-development": {
    title: "SaaS Development",
    slug: "saas-development",
    subtitle: "Custom Cloud Software & Internal Tools",
    description:
      "Have an idea for the next big software platform? Or need a custom internal ERP/CRM to manage your growing enterprise? Our engineering team specializes in building scalable Software-as-a-Service (SaaS) products from the ground up, utilizing robust tech stacks and modern cloud architectures.",
    image: saasImg,
    features: [
      "End-to-end SaaS product development.",
      "Multi-tenant architectures for B2B software.",
      "Custom CRM, ERP, and Inventory management dashboards.",
      "Subscription billing and payment gateway integrations.",
      "High-availability cloud deployments (AWS, Vercel, DigitalOcean)."
    ],
    faq: [
      {
        question: "Do you build MVPs?",
        answer: "Yes, we specialize in building Minimum Viable Products quickly so you can test the market and secure funding.",
      },
      {
        question: "Who owns the code?",
        answer: "You do. Upon project completion and final payment, 100% of the intellectual property is transferred to you.",
      },
      {
        question: "Can you maintain the software after launch?",
        answer: "Yes, we offer monthly retainer packages for continuous feature development and server maintenance.",
      }
    ]
  },
  "branding-design": {
    title: "Branding & Design",
    slug: "branding-design",
    subtitle: "Premium Brand Identities That Convert",
    description:
      "Great technology needs great design. We craft premium brand identities, UI/UX designs, and marketing materials that resonate with your target audience. From logo conceptualization to packaging and digital assets, we ensure your brand stands out in a crowded market.",
    image: brandingImg,
    features: [
      "Comprehensive Brand Identity Design (Logos, Typography, Colors).",
      "UI/UX Design for Web and Mobile Applications.",
      "Marketing assets (Social media posts, banners, ads).",
      "Product packaging and label design.",
      "Brand guideline creation to ensure consistency."
    ],
    faq: [
      {
        question: "Do you design logos?",
        answer: "Yes, logo design is a core part of our comprehensive brand identity packages.",
      },
      {
        question: "What is UI/UX design?",
        answer: "UI (User Interface) refers to how the software looks, while UX (User Experience) refers to how easy and intuitive it is to use. We excel at both.",
      },
      {
        question: "Do I get the source files?",
        answer: "Yes, all final design deliverables include the original source files (Figma, Illustrator, etc.).",
      }
    ]
  }
};
