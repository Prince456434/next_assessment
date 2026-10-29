"use client";

import React from "react";
import Image from "next/image";

const instagramPosts = [
  {
    src: "/images/antique-objects.jpg",
    alt: "Rare curated antique objects in showcase",
    isVideo: true,
  },
  {
    src: "/images/jaipur-palace.jpg",
    alt: "Heritage palace arched salon with traditional carpet",
    isCarousel: true,
  },
  {
    src: "/images/antique-showroom.jpg",
    alt: "Historical carved doorway and haveli entrance",
    overlayText: { views: "72", comments: "0" },
  },
  {
    src: "/images/founder-portrait.jpg",
    alt: "Showroom courtyard with heritage artefacts and signage",
    isVideo: true,
  },
  {
    src: "/images/heritage-furniture.jpg",
    alt: "Royal dining ensemble and chandelier salon",
    isCarousel: true,
  },
];

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 5rem",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="Follow The Living Heritage"
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        {/* Centered Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#7E756B",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            ONE FOLLOW. AN ENTIRE WORLD
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#6B1D26",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            FOLLOW THE LIVING HERITAGE
          </h2>

          {/* Instagram Handle Link */}
          <a
            href="https://www.instagram.com/Royale_treasurers"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#8B1D2C",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            {/* Instagram Gradient Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  id="rg"
                  r="150%"
                  cx="30%"
                  cy="107%"
                  gradientTransform="scale(1 1)"
                >
                  <stop offset="0" stopColor="#fdf497" />
                  <stop offset="0.05" stopColor="#fdf497" />
                  <stop offset="0.45" stopColor="#fd5949" />
                  <stop offset="0.6" stopColor="#d6249f" />
                  <stop offset="0.9" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="url(#rg)"
                strokeWidth="2.2"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke="url(#rg)"
                strokeWidth="2.2"
                fill="none"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="#d6249f" />
            </svg>
            @Royale_treasurers
          </a>
        </div>

        {/* 5-Column Photo Feed */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.75rem",
          }}
          className="instagram-grid"
        >
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/Royale_treasurers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                overflow: "hidden",
                display: "block",
                backgroundColor: "#EFEBE3",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                className="hover:scale-105"
              />

              {/* Top-Right Badge: Video/Carousel */}
              {post.isVideo && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.6rem",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}

              {post.isCarousel && (
                <div
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.6rem",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "4px",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <rect x="7" y="7" width="14" height="14" rx="2" />
                  </svg>
                </div>
              )}

              {/* View Counts Overlay if specified */}
              {post.overlayText && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  }}
                >
                  <span>{post.overlayText.views}</span>
                  <span>{post.overlayText.comments}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
