"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

import faqBg from "@/public/images/bg/faq-bg.png";
import subLeftIcon from "@/public/images/icon/sub-left-icon.png";
import subRightIcon from "@/public/images/icon/sub-right-icon.png";

/* ================================
   Types
================================= */

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/* ================================
   Static Constants
================================= */

const BG_STYLE = {
  backgroundImage: `url(${faqBg.src})`,
};

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Do I need a lot of data to train the AI chatbot?",
    answer:
      "You don’t need much to start. Just provide your website URL, and our tool will automatically scrape and train your AI chatbot. Even with limited data, you can collect customer questions and keep improving the bot. The more data you provide, the smarter and more effective it becomes.",
  },
  {
    id: 2,
    question: "How long does it take to train the chatbot?",
    answer:
      "The setup is instant — once you provide your URL, Aivora begins training automatically. Within minutes, your chatbot is ready to answer real customer queries and continuously improve as it learns.",
  },
  {
    id: 3,
    question: "How can I embed the AI assistant on my website?",
    answer:
      "Simply copy the provided embed code and paste it into your site’s HTML. You can also integrate it with popular CMS platforms like WordPress or Shopify in just a few clicks.",
  },
  {
    id: 4,
    question: "Does it support languages other than English?",
    answer:
      "Yes! Aivora supports 90+ languages, allowing your chatbot to communicate with customers globally in their preferred language.",
  },
  {
    id: 5,
    question: "Can I take control of a conversation if needed?",
    answer:
      "Absolutely. You can jump in anytime and take over a chat session manually if the AI needs human support.",
  },
];

const ACC_BODY_BASE_STYLE = {
  overflow: "hidden",
  transition: "max-height 0.4s ease",
};

/* ================================ */

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="faq"
      className="faq pos-rel pt-145 pb-150 bg_img"
      style={BG_STYLE}
    >
      <div className="container">
        {/* Section Title */}
        <div className="sec-title sec-title--two pricing-sec-title text-center mb-50">
          <span
            className="sub-title mb-25 wow fadeInUp"
            data-wow-duration="600ms"
          >
            <Image src={subLeftIcon} alt="left icon" width={28} height={28} /> FAQ’s{" "}
            <Image src={subRightIcon} alt="right icon" width={28} height={28} />
          </span>
          <h2
            className="title wow fadeInUp"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Have a question Look here
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="row">
          <div className="col-lg-12">
            <div className="xb-faq wow fadeInUp" data-wow-duration="600ms">
              <ul className="accordion_box clearfix list-unstyled">
                {FAQS.map((faq, index) => {
                  const isActive = activeId === faq.id;

                  return (
                    <li
                      key={faq.id}
                      className={`accordion block ${
                        isActive ? "active-block" : ""
                      }`}
                    >
                      {/* Question */}
                      <div
                        className={`acc-btn ${isActive ? "active" : ""}`}
                        onClick={() => toggleFAQ(faq.id)}
                      >
                        <span className="number">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        _ {faq.question}
                        <span className="arrow">
                          <span></span>
                        </span>
                      </div>

                      {/* Answer */}
                      <div
                        className={`acc_body ${isActive ? "current" : ""}`}
                        style={{
                          ...ACC_BODY_BASE_STYLE,
                          maxHeight: isActive ? "300px" : "0px",
                        }}
                      >
                        <div className="content">
                          <p>{faq.answer}</p>

                          <ul className="list-unstyled">
                            <li>
                              <i className="far fa-check"></i> Instant Setup –
                              Add your URL, and the chatbot trains itself.
                            </li>
                            <li>
                              <i className="far fa-check"></i> Self-Learning –
                              Learns from real customer questions.
                            </li>
                            <li>
                              <i className="far fa-check"></i> Smarter with Data –
                              More data means better answers.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <span className="faq-linear-shape"></span>
    </section>
  );
}
