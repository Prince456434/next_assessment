"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageIndicator = ({ active }: { active: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0 2rem" }}>
    {[1, 2, 3, 4, 5].map((n, i) => (
      <React.Fragment key={n}>
        <span style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.5rem", letterSpacing: "0.1em", color: n === active ? "var(--burgundy)" : "var(--muted-taupe)" }}>{String(n).padStart(2, "0")}</span>
        {n < 5 && <div style={{ width: n === active ? "2.5rem" : "1.5rem", height: "1px", background: n === active ? "var(--burgundy)" : "var(--delicate-border)" }} />}
        {n < 5 && n === active && <div style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "var(--burgundy)", marginLeft: "-0.1rem" }} />}
      </React.Fragment>
    ))}
  </div>
);

export default function BeginningSection() {
  return (
    <section
      id="story"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--ivory)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "7rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="The Beginning — Every Story Begins Somewhere"
    >
      <div
        style={{
          flex: 1,
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="beginning-grid"
      >
        {/* Left content */}
        <div>
          <p className="section-label" style={{ marginBottom: "1rem" }}>THE BEGINNING</p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "0",
            }}
          >
            <span style={{ color: "var(--burgundy)", display: "block" }}>EVERY STORY</span>
            <span style={{ color: "var(--burnt-orange)", display: "block" }}>BEGINS SOMEWHERE</span>
          </h2>

          <div style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--deep-charcoal)",
                marginBottom: "0.75rem",
              }}
            >
              Royal Treasure began with more than a collection of objects
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora, 'Lora', serif)",
                fontSize: "0.875rem",
                color: "var(--warm-brown)",
                lineHeight: 1.8,
                maxWidth: "28rem",
              }}
            >
              It began with curiosity — for forgotten spaces, extraordinary
              craftsmanship, and stories waiting to be remembered.
            </p>
          </div>

          {/* Explore link */}
          <div style={{ marginTop: "2rem" }}>
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
              }}
            >
              EXPLORE THE STORY
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
          </div>

          {/* Brand pillars */}
          <div style={{ marginTop: "3rem", borderTop: "1px solid var(--delicate-border)", paddingTop: "2rem" }}>
            {["OBJECTS", "SPACE", "PEOPLE", "CRAFTSMANSHIP", "A RICHER TOMORROW"].map((pillar) => (
              <p
                key={pillar}
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--muted-taupe)",
                  marginBottom: "0.6rem",
                  lineHeight: 1,
                }}
              >
                {pillar}
              </p>
            ))}
          </div>

          {/* Handwritten caption */}
          <p
            style={{
              fontFamily: "var(--font-script, 'Caveat', cursive)",
              fontSize: "1.6rem",
              color: "var(--warm-brown)",
              marginTop: "1rem",
              transform: "rotate(-2deg)",
              display: "inline-block",
              lineHeight: 1.3,
            }}
          >
            Old doors open
            <br />
            new stories.
          </p>
        </div>

        {/* Right illustration */}
        <div style={{ position: "relative" }}>
          <Image
            src="/images/antique-showroom.jpg"
            alt="Rajasthani curator with antique furniture and heritage showroom"
            width={700}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Page indicator */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", width: "100%", paddingBottom: "1.5rem", display: "flex", justifyContent: "flex-end" }}>
        <PageIndicator active={2} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .beginning-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
