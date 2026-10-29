import React from "react";
import type { Metadata } from "next";
import ConversationForm from "@/components/forms/ConversationForm";

export const metadata: Metadata = {
  title: "Begin Conversation — Royale Treasure",
  description:
    "Every great space begins with a thought too important to leave unspoken. Tell us your vision.",
};

export default function ConversationPage() {
  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 2rem 0",
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
            BEGIN CONVERSATION
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
            TELL US YOUR VISION
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
            EVERY GREAT SPACE BEGINS WITH A THOUGHT TOO IMPORTANT TO LEAVE UNSPOKEN. WHATEVER BROUGHT YOU HERE WE WANT TO HEAR IT.
          </p>
        </div>

        {/* The Form */}
        <ConversationForm />
      </div>
    </div>
  );
}
