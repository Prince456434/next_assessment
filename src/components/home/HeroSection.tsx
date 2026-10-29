"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageIndicator = ({ active }: { active: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
    }}
  >
    {[1, 2, 3, 4, 5].map((n) => (
      <React.Fragment key={n}>
        <span
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: n === active ? "1.1rem" : "0.55rem",
            fontWeight: n === active ? 700 : 400,
            letterSpacing: "0.1em",
            color: n === active ? "#6B1D26" : "#B0A79E",
          }}
        >
          {String(n).padStart(2, "0")}
        </span>
        {n < 5 && (
          <div
            style={{
              width: n === active ? "3rem" : "1.8rem",
              height: n === active ? "2px" : "1px",
              background: n === active ? "#6B1D26" : "#D8CFC4",
              transition: "all 0.3s ease",
            }}
          />
        )}
        {n === active && n < 5 && (
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#6B1D26",
              marginLeft: "-0.15rem",
            }}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        paddingTop: "7.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Hero — Some Treasures Are Not Found"
    >
      {/* Main content — 3-zone layout matching screenshot */}
      <div
        style={{
          flex: 1,
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "0.85fr 0.8fr 1.35fr",
          gap: "1.5rem",
          alignItems: "start",
          position: "relative",
        }}
        className="hero-grid"
      >
        {/* Zone 1 — Left: Title + Scroll CTA + Antique Shop Illustration */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "0.5rem",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7E756B",
              marginBottom: "0.8rem",
            }}
          >
            SOME TREASURES ARE NOT FOUND.
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              marginBottom: "0",
            }}
          >
            <span style={{ color: "#6B1D26", display: "block" }}>
              THEY ARE
            </span>
            <span style={{ color: "#B46328", display: "block" }}>
              DISCOVERED
            </span>
          </h1>

          {/* Scroll CTA */}
          <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
            <Link
              href="#story"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2E2822",
              }}
              aria-label="Scroll to begin the story"
            >
              SCROLL TO BEGIN
              <span
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  border: "1px solid #2E2822",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M2 4l3 3 3-3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Antique Shop Illustration — lower left */}
          <div style={{ position: "relative", width: "100%" }}>
            <Image
              src="/images/antique-showroom.jpg"
              alt="Royale Treasure antique showroom with traditional artifacts"
              width={420}
              height={320}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Zone 2 — Center: Journey copy + Center Artwork + Handwritten Caption */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
          }}
        >
          {/* Journey copy */}
          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.82rem",
              fontWeight: 600,
              lineHeight: 1.75,
              letterSpacing: "0.04em",
              color: "#2E2822",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            A Journey Through Objects, Spaces, Stories
            <br />
            And Memories Collected Across Time.
          </p>

          {/* Center artwork — antique cabinet/shrine */}
          <div style={{ position: "relative", width: "100%" }}>
            <Image
              src="/images/antique-objects.jpg"
              alt="Curated antique heritage objects and furniture"
              width={380}
              height={450}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Handwritten caption */}
          <p
            style={{
              fontFamily: "var(--font-caveat, 'Caveat', cursive)",
              fontSize: "1.5rem",
              color: "#C45B28",
              marginTop: "1rem",
              lineHeight: 1.3,
            }}
          >
            Objects hold the stories
            <br />
            we forgot.
          </p>
        </div>

        {/* Zone 3 — Right: Handwritten tag + Palace Illustration + Metadata */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* Handwritten caption — top right */}
          <p
            style={{
              fontFamily: "var(--font-caveat, 'Caveat', cursive)",
              fontSize: "1.4rem",
              color: "#7E756B",
              marginBottom: "0.5rem",
              transform: "rotate(2deg)",
              textAlign: "right",
            }}
          >
            A finer way to experience time.
          </p>

          {/* Palace Illustration */}
          <div style={{ position: "relative", width: "100%" }}>
            <Image
              src="/images/jaipur-palace.jpg"
              alt="Grand Jaipur heritage palace watercolor illustration"
              width={750}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </div>

          {/* Bottom metadata & page indicator */}
          <div
            style={{
              width: "100%",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              {/* Location metadata */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#7E756B",
                    marginBottom: "0.4rem",
                  }}
                >
                  A WORLD, COLLECTED OVER TIME.
                </p>
                <div
                  style={{
                    borderTop: "1px solid #D8CFC4",
                    paddingTop: "0.35rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                      fontSize: "0.5rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#B0A79E",
                      lineHeight: 1.6,
                    }}
                  >
                    JAIPUR, RAJASTHAN · INDIA
                    <br />
                    26.9124° N · 75.7873° E
                  </p>
                </div>
              </div>

              {/* Page indicator */}
              <PageIndicator active={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
