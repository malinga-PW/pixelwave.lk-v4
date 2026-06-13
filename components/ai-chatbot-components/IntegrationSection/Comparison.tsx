import comparisonBg from "@/public/images/bg/comparison-bg.png";

/* ================================
   Types
================================= */

interface ComparisonItem {
  title: string;
  icon: string;
  points: string[];
}

/* ================================
   Static Data
================================= */

const COMPARISONS: ComparisonItem[] = [
  {
    title: "Without Aivora AI chatbot",
    icon: "❌",
    points: [
      "Losing customers from slow support",
      "Wasting time on repetitive questions",
      "Writing support replies manually",
      "Support unavailable at night",
      "Struggling with languages",
      "Doing everything manually",
    ],
  },
  {
    title: "With Aivora AI chatbot",
    icon: "✅",
    points: [
      "Instant 24/7 answers in 90+ languages",
      "Reduce customer loss and churn",
      "Sleep peacefully at 3AM",
      "Boost satisfaction & engagement",
      "Focus on high-value tasks",
      "Scale effortlessly with AI",
    ],
  },
];

const BG_STYLE = {
  backgroundImage: `url(${comparisonBg.src})`,
};

/* ================================ */

export default function ComparisonSection() {
  return (
    <section className="comparison-container mt-5">
      <div className="row mt-none-30">
        {COMPARISONS.map((block, index) => (
          <div className="col-lg-6 mt-30" key={index}>
            <div
              className={`comparison-list xb-border bg_img ${
                index === 0 ? "comparison--without" : "comparison--with"
              }`}
              style={BG_STYLE}
            >
              <h3 className="xb-item--title">{block.title}</h3>

              <ul className="xb-item--list list-unstyled">
                {block.points.map((point, i) => (
                  <li key={i}>
                    <span className="comparison-icon">{block.icon}</span>
                    {point}
                  </li>
                ))}
              </ul>

              {index === 0 && (
                <span className="comparison-vs-logo xb-border">v/s</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
