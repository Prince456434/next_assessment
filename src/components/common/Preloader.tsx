"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check session storage to only show preloader once per session if desired, or always on initial reload
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDone(true), 350);
          setTimeout(() => setShouldRender(false), 950);
          return 100;
        }
        // Random incremental step to feel organic
        const step = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + step, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        opacity: isDone ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: isDone ? "none" : "auto",
      }}
      aria-label="Loading Royal Treasure"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Royal Crest Logo */}
        <div style={{ marginBottom: "1.2rem" }}>
          <Image
            src="/images/royal-treasure-logo.jpg"
            alt="Royal Treasure Crest"
            width={160}
            height={110}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Brand Name */}
        <h1
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
            fontWeight: 700,
            color: "#5C161D",
            letterSpacing: "0.04em",
            margin: "0 0 3.5rem",
          }}
        >
          Royal Treasure
        </h1>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#6B1D26",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          UNCOVERING STORIES, PRESERVED THROUGH TIME
        </div>

        {/* Percentage Number */}
        <div
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "#6B1D26",
            letterSpacing: "0.06em",
            marginBottom: "0.6rem",
          }}
        >
          {progress}%
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            height: "2.5px",
            backgroundColor: "#E5D6D6",
            position: "relative",
            overflow: "hidden",
            borderRadius: "1px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: `${progress}%`,
              backgroundColor: "#5C161D",
              transition: "width 0.15s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
}
