"use client";

import React, { useState } from "react";

const projectEnquiryOptions = [
  {
    id: "fort-restoration",
    title: "Fort And Heritage Restoration",
    desc: "Name, Location, Condition, Intended Outcome",
  },
  {
    id: "hotel-conversion",
    title: "Hotel And Hospitality Conversion",
    desc: "Property Type, Intended Guest Experience, Timeline",
  },
  {
    id: "property-advisory",
    title: "Property Advisory",
    desc: "Buying Or Selling, Region, Budget Range, Long-term Intention",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    desc: "Type Of Space, Location, Scale, Character You're Seeking",
  },
  {
    id: "art-installation",
    title: "Art Installation",
    desc: "Event Or Venue, Scale, Theme, Scale Of Environment",
  },
  {
    id: "antique-restoration",
    title: "Antique Restoration",
    desc: "Type Of Object, Current Condition, Keeping Or Selling After",
  },
  {
    id: "bespoke-enquiry",
    title: "Bespoke Enquiry",
    desc: "",
  },
  {
    id: "something-else",
    title: "Something Else Entirely",
    desc: "",
  },
];

const timelineOptions = [
  "We're In The Early Stages Of Thinking",
  "We're Ready To Begin Within Six Months",
  "We Have A Specific Deadline Or Opening Date",
  "We're Not Yet Sure",
];

export default function ConversationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bestTime: "",
    description: "",
  });

  const [selectedProjects, setSelectedProjects] = useState<string[]>([
    "fort-restoration",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(
    "We're In The Early Stages Of Thinking"
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleProject = (id: string) => {
    setSelectedProjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "4rem 2rem",
          textAlign: "center",
          border: "1px solid #E5E0D8",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "1.5rem",
            color: "#8B1D2C",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          Thank You For Sharing Your Vision
        </h3>
        <p
          style={{
            fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
            fontSize: "0.95rem",
            color: "#544B42",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          We have received your enquiry. Vikramaditya Singh Bijoliya and our
          heritage team will review your project details and write back within
          24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          style={{
            backgroundColor: "#8B1D2C",
            color: "#FFFFFF",
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            padding: "0.9rem 2.2rem",
            border: "none",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "3.5rem",
          marginBottom: "3rem",
        }}
      >
        {/* Left Column: Personal & Project Info Inputs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Your Name */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="How shall we address you?"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.85rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
              }}
            />
          </div>

          {/* Email address */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="We will write back within 24 hours"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.85rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
              }}
            />
          </div>

          {/* Telephone number */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Telephone number
            </label>
            <input
              type="tel"
              placeholder="Including country code if outside India"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.85rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
              }}
            />
          </div>

          {/* Your location */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Your location
            </label>
            <input
              type="text"
              placeholder="City and country — so we know your time zone"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.85rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
              }}
            />
          </div>

          {/* Best time to speak */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Best time to speak
            </label>
            <input
              type="text"
              placeholder="Can suggest the best time to speak"
              value={formData.bestTime}
              onChange={(e) =>
                setFormData({ ...formData, bestTime: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.85rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
              }}
            />
          </div>

          {/* Tell us about the property or project */}
          <div>
            <label
              style={{
                display: "block",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#2B241E",
                marginBottom: "0.4rem",
              }}
            >
              Tell us about the property or project
            </label>
            <textarea
              rows={5}
              placeholder="There is no template for this. Write as much or as little as you know. Tell us the history if you know it. Tell us the dream if that is all you have. We have begun projects from a single sentence and from a hundred-page brief. Both are equally welcome."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.85rem 1rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCD6CC",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                color: "#2B241E",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>
        </div>

        {/* Right Column: Project Type & Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Your Project */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#1F1A15",
                marginBottom: "0.2rem",
              }}
            >
              Your Project
            </div>
            <div
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.75rem",
                color: "#7E756B",
                marginBottom: "1rem",
              }}
            >
              What is the nature of your enquiry?
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {projectEnquiryOptions.map((opt) => {
                const checked = selectedProjects.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    onClick={() => toggleProject(opt.id)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        marginTop: "2px",
                        border: checked ? "1px solid #8B1D2C" : "1px solid #B0A79E",
                        backgroundColor: checked ? "#8B1D2C" : "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.15s ease",
                      }}
                    >
                      {checked && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#FFFFFF"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div style={{ fontSize: "0.78rem", lineHeight: 1.4 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                          fontWeight: 600,
                          color: "#2B241E",
                        }}
                      >
                        {opt.title}
                      </span>
                      {opt.desc && (
                        <span
                          style={{
                            fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                            color: "#786F66",
                            marginLeft: "0.4rem",
                          }}
                        >
                          — {opt.desc}
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#1F1A15",
                marginBottom: "0.85rem",
              }}
            >
              What Is Your Approximate Timeline?
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {timelineOptions.map((timeline) => {
                const checked = selectedTimeline === timeline;
                return (
                  <label
                    key={timeline}
                    onClick={() => setSelectedTimeline(timeline)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: checked ? "1px solid #8B1D2C" : "1px solid #B0A79E",
                        backgroundColor: checked ? "#8B1D2C" : "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.15s ease",
                      }}
                    >
                      {checked && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#FFFFFF"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#2B241E",
                      }}
                    >
                      {timeline}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Centered Crimson SEND Button */}
      <div style={{ textAlign: "center", paddingTop: "1rem" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#E5252A",
            color: "#FFFFFF",
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            padding: "1rem 4.5rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(229, 37, 42, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#C0181D";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#E5252A";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          SEND
        </button>
      </div>
    </form>
  );
}
