"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const spaceTypes = [
  "HERITAGE HOMES",
  "BOUTIQUE SPACES",
  "PRIVATE RESIDENCES",
  "HOSPITALITY SPACES",
  "AND MORE",
];

export default function SpacesSection() {
  return (
    <section
      id="spaces"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 4rem",
        position: "relative",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="The Spaces — Spaces Do Not Forget"
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        {/* Top Split: Left Content, Right Main Garden Vignette */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "3rem",
            alignItems: "flex-start",
            marginBottom: "3rem",
          }}
          className="spaces-header-grid"
        >
          {/* Left: Titles & Copy */}
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
              THE SPACES
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 1.5rem",
                letterSpacing: "0.06em",
              }}
            >
              <span style={{ color: "#6B1D26", display: "block" }}>
                SPACES DO NOT
              </span>
              <span style={{ color: "#B46328", display: "block" }}>
                FORGET
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.78rem",
                lineHeight: 1.85,
                letterSpacing: "0.04em",
                color: "#4A423B",
                maxWidth: "460px",
                marginBottom: "2rem",
              }}
            >
              Walls remember. Objects remain. And over time, a space becomes a
              collection of everything that has happened within it.
            </p>

            <Link
              href="/contact"
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
              <span>STEP INSIDE</span>
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

          {/* Right: Space Types List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              paddingTop: "2.5rem",
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#3B332A",
              textAlign: "right",
            }}
            className="space-types-list"
          >
            {spaceTypes.map((type, idx) => (
              <div key={idx}>{type}</div>
            ))}
          </div>
        </div>

        {/* 3 Vignette Artworks in a Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.6fr",
            gap: "2rem",
            alignItems: "center",
            marginBottom: "3.5rem",
          }}
          className="spaces-art-grid"
        >
          {/* Vignette 1: Haveli Room & Elephant Statue */}
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
              alt="Haveli interior with antique elephant sculpture and decorative pillars"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Vignette 2: Arched Display Shrine & Royal Garment */}
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
              src="/images/jaipur-palace.jpg"
              alt="Royal heritage garments and textiles shrine"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Vignette 3: Grand Garden Verandah & Wheeled Horse */}
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
              src="/images/antique-showroom.jpg"
              alt="Courtyard entrance with stone pavers, wooden horse sculpture and signage"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Bottom Row: Handwritten Caption & Page Indicator Slider */}
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
            Interiors that live long.
          </div>

          {/* Slider Progress: 01 — 02 — 03 — 04 — 05 • */}
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
            <span>04</span>
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#6B1D26" }} />
            <span style={{ color: "#6B1D26", fontWeight: 700 }}>05</span>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#6B1D26",
                margin: "0 0.2rem",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
