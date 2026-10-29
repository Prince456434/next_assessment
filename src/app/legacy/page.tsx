import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Legacy — Royale Treasure",
  description:
    "Preserving Stories. Restoring Beauty. Creating Timeless Spaces. Learn about Vikramaditya Singh Bijoliya and the Royal Treasure heritage story.",
};

const personalExpertise = [
  {
    title: "Design Direction",
    desc: "Guiding projects with distinctive spatial vision, combining royal Rajasthani heritage aesthetics with modern bespoke luxury.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C45B28" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17" />
      </svg>
    ),
  },
  {
    title: "Heritage Restoration",
    desc: "Working with historic forts, havelis, and period craft revival using authentic lime, stone carving, and timber techniques.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C45B28" strokeWidth="1.5">
        <path d="M3 21h18M4 18h16M6 14V9l6-5 6 5v5M9 21v-4a3 3 0 0 1 6 0v4" />
      </svg>
    ),
  },
  {
    title: "Project Consultancy",
    desc: "Strategic insight for heritage property owners, boutique hospitality developers, and discerning royal collectors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C45B28" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Execution Leadership",
    desc: "Ensuring every turnkey installation and architectural element is crafted with uncompromising historical authenticity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C45B28" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function LegacyPage() {
  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        paddingTop: "7.5rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
        }}
      >
        {/* Main Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
            OUR LEGACY
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
            Preserving Stories. Restoring Beauty. Creating Timeless Spaces.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.75rem",
              lineHeight: 1.85,
              letterSpacing: "0.06em",
              color: "#4A423B",
              maxWidth: "880px",
              margin: "0 auto",
            }}
          >
            Royal Treasure is built on a deep appreciation for history,
            craftsmanship, and the extraordinary objects that carry stories
            across generations. For us, heritage is not something to simply
            preserve behind glass; it is something to understand, revive, and
            thoughtfully bring into the present.
          </p>
        </div>

        {/* Section 1: The Founder */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            paddingBottom: "5rem",
            borderBottom: "1px solid #D8CFC4",
            marginBottom: "5rem",
          }}
        >
          {/* Left: Founder Portrait & Signature */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                position: "relative",
                width: "260px",
                height: "340px",
                margin: "0 auto 1.5rem",
                overflow: "hidden",
                border: "1px solid #D8CFC4",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                backgroundColor: "#EFEBE3",
              }}
            >
              <Image
                src="/images/founder-portrait.jpg"
                alt="Vikramaditya Singh Bijoliya"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                fontStyle: "italic",
                fontSize: "1.5rem",
                color: "#6B1D26",
                letterSpacing: "0.05em",
              }}
            >
              Vikramaditya Singh Bijoliya
            </div>
          </div>

          {/* Middle: Founder Biography */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#6B1D26",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              THE FOUNDER
            </div>

            <h3
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#8B1D2C",
                letterSpacing: "0.08em",
                marginBottom: "0.25rem",
              }}
            >
              VIKRAMADITYA SINGH BIJOLIYA
            </h3>

            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.8rem",
                color: "#7E756B",
                marginBottom: "1.5rem",
              }}
            >
              Founder &amp; CEO
            </div>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#4A423B",
                marginBottom: "1rem",
              }}
            >
              Royal Treasure was founded with a vision to preserve the beauty of
              traditional craftsmanship while giving vintage treasures their
              place in contemporary spaces.
            </p>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#4A423B",
                marginBottom: "1.5rem",
              }}
            >
              With years of experience working with antique heritage
              architecture, interiors, and rare artifacts, Vikramaditya Singh
              Bijoliya brings together historical understanding and modern design
              perspectives.
            </p>

            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                color: "#7E756B",
                marginBottom: "0.4rem",
              }}
            >
              His approach is guided by one belief:
            </div>

            <blockquote
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "#6B1D26",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              &ldquo;The finest things were made to last if only someone cares enough to ensure they do.&rdquo;
            </blockquote>
          </div>

          {/* Right: Statistics */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              paddingLeft: "1.5rem",
              borderLeft: "1px solid #D8CFC4",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#B46328",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                25+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  color: "#6B6258",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Years of Experience
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#B46328",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  color: "#6B6258",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Landmarks &amp; Heritage Projects
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Personal Expertise */}
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#7E756B",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}
            >
              A CURATOR OF SPACES, STORIES &amp; STRUCTURE
            </div>
            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#6B1D26",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              PERSONAL EXPERTISE
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
            }}
          >
            {personalExpertise.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D8CFC4",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div style={{ marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#1F1A15",
                    letterSpacing: "0.06em",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    color: "#544B42",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: What We Believe In */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            paddingBottom: "5rem",
            borderBottom: "1px solid #D8CFC4",
            marginBottom: "5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#6B1D26",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              WHAT WE BELIEVE IN
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "#8B1D2C",
                lineHeight: 1.3,
                marginBottom: "1.2rem",
              }}
            >
              HERITAGE IS NOT A STYLE, IT IS A RESPONSIBILITY
            </h2>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                color: "#544B42",
              }}
            >
              Whether restoring a historic structure or sourcing a singular
              object, we approach every project with the care and reverence it
              deserves. Every space tells a story of the people who shaped it,
              and we believe our role is to honour that continuity.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              border: "1px solid #D8CFC4",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EFEBE3",
            }}
          >
            <Image
              src="/images/antique-showroom.jpg"
              alt="Royale Treasure Heritage Interior"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Section 4: Rooted In Rajasthan */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            paddingBottom: "5rem",
            borderBottom: "1px solid #D8CFC4",
            marginBottom: "5rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              border: "1px solid #D8CFC4",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EFEBE3",
            }}
          >
            <Image
              src="/images/jaipur-palace.jpg"
              alt="Land of Kings, Forts and Craftsmanship"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#6B1D26",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              ROOTED IN RAJASTHAN
            </div>

            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "#8B1D2C",
                lineHeight: 1.3,
                marginBottom: "1.2rem",
              }}
            >
              INSPIRED BY A LAND OF KINGS, FORTS &amp; CRAFTSMANSHIP
            </h2>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#544B42",
                marginBottom: "1rem",
              }}
            >
              Rajasthan is more than our home — it is our inspiration. From the
              grand scale of historic forts to the subtle artistry of block
              printing, marble inlay, and stone carving, the region&apos;s cultural
              heritage shapes everything we do.
            </p>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#544B42",
                marginBottom: "2rem",
              }}
            >
              Each project draws from this rich reservoir of memory, tradition,
              and artistry to create spaces that honor the past while living
              vibrantly in the present.
            </p>

            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#6B1D26",
                color: "#FFFFFF",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                boxShadow: "0 4px 12px rgba(107, 29, 38, 0.2)",
              }}
            >
              VISIT OUR SHOWROOM
            </Link>
          </div>
        </div>

        {/* Section 5: Fort In Rajasthan */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <Image
                src="/images/royal-treasure-logo.jpg"
                alt="Fort in Rajasthan Crest"
                width={48}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#B46328",
                  letterSpacing: "0.1em",
                }}
              >
                FORT IN RAJASTHAN
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "#544B42",
                marginBottom: "1.2rem",
              }}
            >
              Managed by Royal Treasure, <strong>Fort in Rajasthan</strong> is our
              initiative dedicated to restoring, preserving, and celebrating the
              majestic forts and heritage properties of Rajasthan.
            </p>

            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "#544B42",
              }}
            >
              We work with private owners, historians, and hospitality brands to
              bring these extraordinary structures back to life — ensuring they
              remain vibrant living landmarks rather than forgotten relics.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/10",
              border: "1px solid #D8CFC4",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor: "#EFEBE3",
            }}
          >
            <Image
              src="/images/jaipur-palace.jpg"
              alt="Majestic Fort in Rajasthan"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
