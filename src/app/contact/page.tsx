import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Royale Treasure",
  description:
    "A Great Project Begins With Something Better Than A Form. Visit our Main Showroom in Civil Lines, Jaipur or get in touch directly.",
};

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        minHeight: "100vh",
        paddingTop: "7rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
        }}
      >
        {/* Editorial Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#6B1D26",
              letterSpacing: "0.15em",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            CONTACT US
          </h1>

          <h2
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
              fontSize: "1.75rem",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#C45B28",
              marginBottom: "1.25rem",
            }}
          >
            We Are Listening
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.72rem",
              lineHeight: 1.85,
              letterSpacing: "0.06em",
              color: "#4A423B",
              maxWidth: "840px",
              margin: "0 auto",
              textTransform: "uppercase",
            }}
          >
            A Great Project Begins With Something Better Than A Form. More Honest Than A Proposal, And More Personal Than A Presentation. A Conversation Unhurried, Honest, And Without Obligation In Which We Listen To What You Have, What You Want, And What You Are Hoping To Leave Behind.
          </p>
        </div>

        {/* 2-Column Content: Details & Map */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Find Us info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#8B1D2C",
                letterSpacing: "0.1em",
                margin: 0,
              }}
            >
              Find Us
            </h3>

            {/* Main Showroom */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#8B1D2C",
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                Main Showroom
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#1F1A15",
                  marginBottom: "0.3rem",
                }}
              >
                Royale Treasures
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                  fontSize: "0.85rem",
                  color: "#544B42",
                  lineHeight: 1.6,
                }}
              >
                5 Jacob Road, Civil Lines, Jaipur Rajasthan – 302 006, India.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                  fontSize: "0.8rem",
                  color: "#7E756B",
                  marginTop: "0.35rem",
                }}
              >
                Hours: Monday to Saturday 10:00 am to 7:00 pm · Sundays by appointment
              </div>
            </div>

            {/* Telephone */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#8B1D2C",
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                Telephone
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#1F1A15",
                  lineHeight: 1.6,
                }}
              >
                <div>+91 93140 65354</div>
                <div>0141 4035354</div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                  fontSize: "0.8rem",
                  color: "#7E756B",
                  marginTop: "0.4rem",
                  lineHeight: 1.5,
                }}
              >
                We answer our phones. If we are on a site visit or in a consultation we will return your call the same day.
              </div>
            </div>

            {/* Email */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#8B1D2C",
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                Email
              </div>
              <a
                href="mailto:theroyaleindia@gmail.com"
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#8B1D2C",
                  textDecoration: "none",
                }}
              >
                theroyaleindia@gmail.com
              </a>
              <div
                style={{
                  fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                  fontSize: "0.8rem",
                  color: "#7E756B",
                  marginTop: "0.35rem",
                  lineHeight: 1.5,
                }}
              >
                We respond to every email within 24 hours, without exception.
              </div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "460px",
              border: "1px solid #D8CFC4",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EAE5DC",
            }}
          >
            <iframe
              title="Royale Treasures Showroom Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.340058864704!2d75.7865239!3d26.9008933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40f1a9b3c4d%3A0x8e8783e49e0bbf4e!2sCivil%20Lines%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1714500000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
