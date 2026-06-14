import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Link from "next/link";

export const metadata = {
  title: "Elena.AI — PixelWave AI Solutions Agent",
  description:
    "Meet Elena.AI, the intelligent AI assistant by PixelWave. Automate workflows, get real-time insights and scale your business with smart AI solutions.",
};

export default function ElenaAIPage() {
  return (
    <div className="ai-agency">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          {/* ── HERO ───────────────────────────────────────────── */}
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,87,255,0.18) 0%, transparent 70%), #00020f",
            }}
          >
            {/* Decorative blobs */}
            <div className="elena-page-blob elena-page-blob--1" />
            <div className="elena-page-blob elena-page-blob--2" />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
              <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto", padding: "140px 0 80px" }}>
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(0,240,255,0.08)",
                    border: "1px solid rgba(0,240,255,0.25)",
                    borderRadius: 100,
                    padding: "6px 18px",
                    marginBottom: 32,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#00f0ff",
                      display: "inline-block",
                      boxShadow: "0 0 8px #00f0ff",
                      animation: "elena-pulse 1.5s ease-in-out infinite",
                    }}
                  />
                  <span style={{ fontSize: 13, color: "#00f0ff", fontWeight: 600, letterSpacing: "0.06em" }}>
                    PixelWave AI Solutions
                  </span>
                </div>

                {/* Heading */}
                <h1
                  style={{
                    fontSize: "clamp(48px, 7vw, 88px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(135deg, #fff 30%, #00f0ff 60%, #bd00ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: 24,
                  }}
                >
                  Elena.AI
                </h1>

                <p
                  style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                    marginBottom: 48,
                    maxWidth: 580,
                    margin: "0 auto 48px",
                  }}
                >
                  Your intelligent AI business agent — automating workflows,
                  surfacing insights, and scaling your operations with the power
                  of PixelWave AI.
                </p>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link
                    href="/contact"
                    className="thm-btn agency-btn"
                    style={{
                      background: "linear-gradient(135deg, #00f0ff, #0057ff)",
                      border: "none",
                      color: "#00020f",
                      fontWeight: 700,
                    }}
                  >
                    Get Early Access
                  </Link>
                  <Link
                    href="/about"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 28px",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 15,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEATURE CARDS ──────────────────────────────────── */}
          <section style={{ padding: "100px 0", background: "#00020f" }}>
            <div className="container">
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <span className="sub-title" style={{ color: "var(--color-primary)", paddingLeft: 0 }}>
                  What Elena.AI can do
                </span>
                <h2
                  className="title"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    marginTop: 12,
                    color: "#fff",
                  }}
                >
                  Capabilities & Features
                </h2>
              </div>

              <div className="row">
                {[
                  {
                    icon: "🧠",
                    title: "Smart Automation",
                    desc: "Automate repetitive business workflows with context-aware AI that learns from your operations.",
                  },
                  {
                    icon: "📊",
                    title: "Real-time Insights",
                    desc: "Surface actionable business intelligence from your data — instantly, on demand.",
                  },
                  {
                    icon: "💬",
                    title: "Conversational AI",
                    desc: "Chat naturally with Elena to get answers, generate content, and manage tasks hands-free.",
                  },
                  {
                    icon: "🔗",
                    title: "Seamless Integration",
                    desc: "Connect with your existing tools and platforms through powerful API integrations.",
                  },
                  {
                    icon: "🛡️",
                    title: "Enterprise Security",
                    desc: "Built on a secure, privacy-first infrastructure with end-to-end data protection.",
                  },
                  {
                    icon: "🚀",
                    title: "Scale On-Demand",
                    desc: "From startup to enterprise — Elena.AI scales effortlessly with your growth.",
                  },
                ].map((feat, i) => (
                  <div className="col-lg-4 col-md-6 mt-30" key={i}>
                    <div
                      className="xb-feature-item"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 12,
                        padding: "36px 28px",
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: 36, marginBottom: 16 }}>{feat.icon}</div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#fff" }}>
                        {feat.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── COMING SOON STRIP ──────────────────────────────── */}
          <section
            style={{
              padding: "80px 0",
              textAlign: "center",
              background: "linear-gradient(90deg, rgba(0,240,255,0.06) 0%, rgba(189,0,255,0.06) 100%)",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="container">
              <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff", marginBottom: 12 }}>
                Full launch coming soon
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 32 }}>
                Be among the first to experience Elena.AI. Join the waitlist today.
              </p>
              <Link href="/contact" className="thm-btn agency-btn">
                Join Waitlist
              </Link>
            </div>
          </section>
        </main>

        <Footer />
        <Scrollbar />

        {/* Blob styles scoped to this page */}
        <style>{`
          .elena-page-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            pointer-events: none;
          }
          .elena-page-blob--1 {
            width: 500px; height: 500px;
            top: -100px; left: -150px;
            background: rgba(0,87,255,0.15);
          }
          .elena-page-blob--2 {
            width: 400px; height: 400px;
            bottom: 50px; right: -100px;
            background: rgba(189,0,255,0.12);
          }
        `}</style>
      </div>
    </div>
  );
}
