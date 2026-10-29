"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceColumns = [
  {
    num: "01",
    category: "INTERIOR DESIGN & HOSPITALITY",
    title: "Spaces Designed to Be Experienced.",
    description:
      "We create distinctive interiors for private residences, hotels, resorts, and heritage properties blending timeless character with modern comfort.",
    items: [
      "Interior Design",
      "Space Planning",
      "Hotel & Resort Conversion",
      "Bespoke Interiors",
    ],
  },
  {
    num: "02",
    category: "HERITAGE & ARCHITECTURAL RESTORATION",
    title: "Preserving the Stories of the Past",
    description:
      "We carefully restore heritage buildings, historic architecture, and culturally significant spaces while respecting their original character.",
    items: [
      "Heritage Conservation",
      "Fort Restoration",
      "Architectural Restoration",
      "Adaptive Reuse",
    ],
  },
  {
    num: "03",
    category: "ARTEFACTS, ANTIQUES & FURNITURE",
    title: "Objects with Stories",
    description:
      "From rare antiques to bespoke furniture, we source, curate, restore, and create exceptional pieces for timeless spaces.",
    items: [
      "Antique Restoration",
      "Artefact Curation",
      "Furniture Restoration",
      "Bespoke Furniture",
    ],
  },
  {
    num: "04",
    category: "ART & BESPOKE INSTALLATIONS",
    title: "Spaces That Speak",
    description:
      "We create custom artistic installations and decorative experiences that bring personality, culture, and meaning into every environment.",
    items: [
      "Art Installations",
      "Sculptures",
      "Custom Décor",
      "Site-Specific Experiences",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 5rem",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="What We Do"
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Top Header Split: Left Text, Right Illustration */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4.5rem",
          }}
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#6B1D26",
                marginBottom: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              WHAT WE DO
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                fontWeight: 500,
                color: "#B46328",
                fontStyle: "italic",
                marginBottom: "1.2rem",
                lineHeight: 1.3,
              }}
            >
              Preserving Heritage. Creating Timeless Experiences
            </h2>

            <p
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                lineHeight: 1.85,
                letterSpacing: "0.06em",
                color: "#544B42",
                maxWidth: "600px",
              }}
            >
              From historic spaces and heritage properties to rare artefacts and
              bespoke interiors, <strong>Royal Treasure</strong> combines
              craftsmanship, restoration, and design to preserve stories and
              create spaces that last.
            </p>
          </div>

          {/* Right Haveli Colonnade Illustration */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              aspectRatio: "16/10",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <Image
              src="/images/antique-showroom.jpg"
              alt="Preserving Heritage Courtyard"
              fill
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
          </div>
        </div>

        {/* 4 Columns Grid with Vertical Dividers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            borderTop: "1px solid #D8CFC4",
            borderBottom: "1px solid #D8CFC4",
            marginBottom: "5rem",
          }}
        >
          {serviceColumns.map((col, idx) => (
            <div
              key={col.num}
              style={{
                padding: "2.5rem 1.75rem",
                borderRight:
                  idx < serviceColumns.length - 1
                    ? "1px solid #D8CFC4"
                    : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Number and Category */}
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#2E2822",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                }}
              >
                {col.num} {col.category}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#B46328",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {col.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                  fontSize: "0.82rem",
                  lineHeight: 1.65,
                  color: "#544B42",
                  margin: 0,
                }}
              >
                {col.description}
              </p>

              {/* Bullet list with arrows */}
              <div
                style={{
                  marginTop: "0.8rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.72rem",
                  color: "#2E2822",
                  letterSpacing: "0.04em",
                }}
              >
                {col.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}
                  >
                    <span style={{ color: "#B46328" }}>→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
              fontSize: "1.9rem",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#6B1D26",
              marginBottom: "0.6rem",
            }}
          >
            Have Something Worth Preserving?
          </h3>

          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              color: "#544B42",
              lineHeight: 1.7,
              marginBottom: "1.8rem",
            }}
          >
            From heritage properties and interiors to antiques and artistic
            installations, we transform stories into timeless experiences.
          </p>

          <Link
            href="/conversation"
            style={{
              display: "inline-block",
              backgroundColor: "#631721",
              color: "#FFFFFF",
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              padding: "0.95rem 2.5rem",
              textDecoration: "none",
              textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(99, 23, 33, 0.2)",
              transition: "background-color 0.2s ease",
            }}
          >
            BEGIN CONVERSATION
          </Link>
        </div>
      </div>
    </section>
  );
}
