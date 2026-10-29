"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CollectionSection() {
  return (
    <section
      id="collection"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 4rem",
        position: "relative",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="The Collection — Every Object Has Lived a Life"
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        {/* Top Header Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "flex-start",
            marginBottom: "3rem",
          }}
          className="collection-header-grid"
        >
          {/* Left Title */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#7E756B",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              THE COLLECTION
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: "0.06em",
              }}
            >
              <span style={{ color: "#6B1D26", display: "block" }}>
                EVERY OBJECT
              </span>
              <span style={{ color: "#B46328", display: "block" }}>
                HAS LIVED A LIFE
              </span>
            </h2>
          </div>

          {/* Right Poetic Copy & CTA */}
          <div style={{ paddingTop: "1.2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#2E2822",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              <div>Some have travelled across generations.</div>
              <div>Some have witnessed changing homes and disappearing traditions.</div>
              <div>Some were forgotten. Until they were found again.</div>
            </div>

            <Link
              href="/collection"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                textDecoration: "none",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#2E2822",
                textTransform: "uppercase",
              }}
            >
              <span>EXPLORE THE COLLECTION</span>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid #2E2822",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                }}
              >
                →
              </div>
            </Link>
          </div>
        </div>

        {/* Watercolor Vignette Artwork Area */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: "3.5rem",
          }}
          className="collection-art-grid"
        >
          {/* Left Vignette Artwork */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EFEBE3",
            }}
          >
            <Image
              src="/images/antique-objects.jpg"
              alt="Rare Curated Artefacts & Sacred Sculptures"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Vignette Artwork: Panoramic Heritage Collection */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/11",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EFEBE3",
            }}
          >
            <Image
              src="/images/heritage-furniture.jpg"
              alt="Every Object Has Lived A Life — Royal Heritage Interior"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Bottom Row: Handwritten Caption & Page Indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            paddingTop: "1rem",
            borderTop: "1px solid #E5DFD5",
          }}
        >
          {/* Handwritten Caption */}
          <div
            style={{
              fontFamily: "var(--font-caveat, 'Caveat', cursive)",
              fontSize: "1.75rem",
              color: "#C45B28",
              letterSpacing: "0.02em",
            }}
          >
            Objects carry the memory of places.
          </div>

          {/* Slider Progress: 01 — 02 — 03 — 04 • — 05 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#6B6258",
            }}
          >
            <span>01</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: "#D8CFC4" }} />
            <span>02</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: "#D8CFC4" }} />
            <span>03</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: "#D8CFC4" }} />
            <span style={{ color: "#6B1D26", fontWeight: 700 }}>04</span>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#6B1D26",
                margin: "0 0.2rem",
              }}
            />
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#6B1D26" }} />
            <span>05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
