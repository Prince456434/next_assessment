"use client";

import React from "react";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{
        backgroundColor: "#58121A",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          radial-gradient(rgba(0, 0, 0, 0.25) 15%, transparent 16%),
          radial-gradient(rgba(255, 255, 255, 0.04) 15%, transparent 16%)
        `,
        backgroundSize: "16px 16px",
        backgroundPosition: "0 0, 8px 8px",
      }}
      aria-label="The Philosophy"
    >
      {/* Outer border frame with insets matching screenshot */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          padding: "5rem 3rem",
          position: "relative",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Subtle decorative inner corner brackets */}
        <div
          style={{
            position: "absolute",
            inset: "8px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            pointerEvents: "none",
          }}
        />

        {/* Section Label */}
        <div
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          THE PHILOSOPHY
        </div>

        {/* Handwritten Cursive Quote */}
        <blockquote
          style={{
            fontFamily: "var(--font-caveat, 'Caveat', 'Playwrite', cursive)",
            fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
            lineHeight: 1.5,
            color: "#FFFFFF",
            maxWidth: "960px",
            margin: "0 auto",
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          &ldquo;The Finest Things Were Made To Last If Only Someone Cares Enough To Ensure They Do. We Have Cared For Twenty-five Years. We Intend To Keep Caring.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
