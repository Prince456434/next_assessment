import React from "react";
import Image from "next/image";

export default function Loading() {
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
          50%
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
              width: "50%",
              backgroundColor: "#5C161D",
            }}
          />
        </div>
      </div>
    </div>
  );
}
