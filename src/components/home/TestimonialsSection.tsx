"use client";

import React from "react";

const testimonialsData = [
  {
    quote:
      "Throughout our purchase journey he was fully satisfied with the approach and guidance provided by the team in documentation. I would recommend them definitely I was able to shortlist my choice through them.",
    author: "Duke Rajeshwar Singh",
    location: "Jodhpur, Rajasthan",
  },
  {
    quote:
      "This year the art installations depict poetry in the woods – signifying the celebration of art and literature, while the wall arts showcase ideas being transformed into art. Royale Treasure understands the soul of this festival.",
    author: "Padmini Kumari, Patrika Plus",
    location: "Jaipur Literature Festival",
  },
  {
    quote:
      "Royale Treasure somehow managed to create a backdrop befitting enough to match the height and glory of the occasion. The grand palatial door with Shiva was magnificent – an unforgettable evening.",
    author: "Session Organiser, JLF",
    location: "Amitabh Bachchan Session, Diggi Palace",
  },
  {
    quote:
      "We are having a great experience working with this company. The team members are fantastic – they truly understand what the customer wants. Highly recommended for any heritage project.",
    author: "Vijay Laxmi & Shashank Kaushik",
    location: "Jaipur, Rajasthan",
  },
  {
    quote:
      "Throughout our purchase journey he was fully satisfied with the approach and guidance provided by the team in documentation. I would recommend them definitely I was able to shortlist my choice through them.",
    author: "Duke Rajeshwar Singh",
    location: "Jodhpur, Rajasthan",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#FAF7F2",
        padding: "6rem 2rem 7rem",
        borderTop: "1px solid #D8CFC4",
      }}
      aria-label="Voices — Those Who Trust Us"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
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
            VOICES
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#6B1D26",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            THOSE WHO TRUST US
          </h2>
        </div>

        {/* 5-Column Carousel/Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D8CFC4",
                padding: "2rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
                position: "relative",
              }}
            >
              {/* Large Red Quotation Mark */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "#8B1D2C",
                    marginBottom: "0.5rem",
                  }}
                >
                  “
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                    fontSize: "0.82rem",
                    lineHeight: 1.65,
                    color: "#4A423B",
                    margin: 0,
                  }}
                >
                  {item.quote}
                </p>
              </div>

              {/* Author & Location */}
              <div style={{ marginTop: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#1F1A15",
                    lineHeight: 1.3,
                  }}
                >
                  {item.author}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.68rem",
                    color: "#6B6258",
                    marginTop: "0.2rem",
                  }}
                >
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
