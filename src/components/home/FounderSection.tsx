"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageIndicator = ({ active }: { active: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0 2rem" }}>
    {[1, 2, 3, 4, 5].map((n) => (
      <React.Fragment key={n}>
        <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.5rem", letterSpacing: "0.1em", color: n === active ? "var(--burgundy)" : "var(--muted-taupe)" }}>{String(n).padStart(2, "0")}</span>
        {n < 5 && <div style={{ width: n === active ? "2.5rem" : "1.5rem", height: "1px", background: n === active ? "var(--burgundy)" : "var(--delicate-border)" }} />}
        {n < 5 && n === active && <div style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "var(--burgundy)", marginLeft: "-0.1rem" }} />}
      </React.Fragment>
    ))}
  </div>
);

const stats = [
  { num: "25+", label: "YEARS OF\nEXPERIENCE" },
  { num: "10+", label: "COUNTRIES &\nCONNECTIONS" },
  { num: "50+", label: "HERITAGE\nSTORIES" },
  { num: "COUNTLESS", label: "OBJECTS\nPRESERVED" },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--parchment)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "7rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Founder Story — A Lifetime of Collecting Stories"
    >
      <div
        style={{
          flex: 1,
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="founder-grid"
      >
        {/* Left content */}
        <div>
          <p className="section-label" style={{ marginBottom: "1rem" }}>
            THE STORY BEHIND THE TREASURE
          </p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            <span style={{ color: "var(--burgundy)", display: "block" }}>A LIFETIME</span>
            <span style={{ color: "var(--burnt-orange)", display: "block" }}>OF COLLECTING STORIES</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-lora, 'Lora', serif)",
              fontSize: "0.875rem",
              color: "var(--warm-brown)",
              lineHeight: 1.8,
              maxWidth: "30rem",
              marginBottom: "1.5rem",
            }}
          >
            For over two decades,{" "}
            <strong>Narendra Singh Bijoliya</strong> has followed a simple
            belief:
          </p>

          <blockquote
            style={{
              fontFamily: "var(--font-lora, 'Lora', serif)",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "var(--deep-charcoal)",
              borderLeft: "2px solid var(--antique-gold)",
              paddingLeft: "1.25rem",
              marginBottom: "2rem",
              maxWidth: "30rem",
            }}
          >
            &ldquo;The finest things are made to last if someone cares enough
            to preserve them.&rdquo;
          </blockquote>

          {/* Meet the Founder link */}
          <Link
            href="/legacy"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--warm-brown)",
              textDecoration: "none",
              marginBottom: "3rem",
            }}
          >
            MEET THE FOUNDER
            <span
              style={{
                width: "1.75rem",
                height: "1.75rem",
                border: "1px solid var(--warm-brown)",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 5h6M6 2l3 3-3 3" />
              </svg>
            </span>
          </Link>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              borderTop: "1px solid var(--delicate-border)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.num}
                style={{
                  padding: "1.25rem 1rem",
                  borderRight: i % 2 === 0 ? "1px solid var(--delicate-border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--delicate-border)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                    fontSize: i === 3 ? "1.4rem" : "2.5rem",
                    fontWeight: 600,
                    color: i === 3 ? "var(--burnt-orange)" : "var(--antique-gold)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.5rem",
                    letterSpacing: "0.15em",
                    color: "var(--muted-taupe)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote and signature */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              border: "1px solid var(--delicate-border)",
              background: "rgba(248, 245, 238, 0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "var(--burgundy)",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}
            >
              &ldquo;The finest things were made to last
              <br />
              if someone cares enough to keep them.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-script, 'Caveat', cursive)",
                fontSize: "1.4rem",
                color: "var(--burnt-orange)",
              }}
            >
              Vikramaditya Singh Bijoliya
            </p>
          </div>
        </div>

        {/* Right: Founder portrait */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src="/images/founder-portrait.jpg"
            alt="Heritage founder in traditional Rajasthani sherwani and turban"
            width={520}
            height={680}
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Page indicator */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", width: "100%", paddingBottom: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
        <PageIndicator active={3} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
