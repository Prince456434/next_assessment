"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    id: "royale-treasure",
    title: "Royale Treasure",
    subtitle: "Objects & Interiors, Given New Rooms to Live in.",
    image: "/images/antique-showroom.jpg",
    href: "/collection",
  },
  {
    id: "fort-in-rajasthan",
    title: "Fort in Rajasthan",
    subtitle: "Forts and Palaces, Opened as Places to Stay.",
    image: "/images/jaipur-palace.jpg",
    href: "/legacy",
  },
  {
    id: "atelier-sage",
    title: "Atelier Sage Design",
    subtitle: "Architecture, Asked to Remember Rather than Perform.",
    image: "/images/heritage-furniture.jpg",
    href: "/conversation",
  },
];

export default function BrandBranchesSection() {
  return (
    <section
      id="brands"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 5rem",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="One Root, Three Branches — Three Doors One Belief"
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Centered Heading */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
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
            ONE ROOT, THREE BRANCHES
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#6B1D26",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            THREE DOORS ONE BELIEF
          </h2>
        </div>

        {/* 3 Brand Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            marginBottom: "5rem",
          }}
        >
          {branches.map((branch) => (
            <Link
              key={branch.id}
              href={branch.href}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1.2rem",
                transition: "transform 0.25s ease",
              }}
            >
              {/* Image with Tag Pin */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/11",
                  borderRadius: "2px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  backgroundColor: "#EFEBE3",
                }}
              >
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Circular dark crest badge in center */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(28, 24, 20, 0.78)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2L15 9H22L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9H9L12 2Z" />
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#B46328",
                    marginBottom: "0.4rem",
                  }}
                >
                  {branch.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                    fontSize: "0.82rem",
                    color: "#544B42",
                    maxWidth: "280px",
                    margin: "0 auto",
                    lineHeight: 1.5,
                  }}
                >
                  {branch.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Handwritten Cursive Quote */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-caveat, 'Caveat', cursive)",
              fontSize: "clamp(1.6rem, 2.5vw, 2.3rem)",
              color: "#C45B28",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Heritage isn&apos;t preserved by being untouched. It&apos;s preserved by being lived in.
          </p>
        </div>
      </div>
    </section>
  );
}
