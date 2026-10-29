"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/site-config";
import MobileNavigation from "./MobileNavigation";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled
            ? "rgba(248, 245, 238, 0.97)"
            : "rgba(248, 245, 238, 0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${scrolled ? "rgba(216, 200, 186, 0.8)" : "rgba(216, 200, 186, 0.3)"}`,
          transition: "all 0.3s ease",
          padding: "0.75rem 2rem",
        }}
        role="banner"
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Left nav */}
          <nav
            aria-label="Primary navigation left"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden-mobile"
          >
            {navigationLinks.left.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  textTransform: "uppercase",
                  color: "var(--warm-brown)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--burgundy)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--warm-brown)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
              gap: "0.2rem",
            }}
            aria-label="Royal Treasure — Home"
          >
            <Image
              src="/images/royal-treasure-logo.jpg"
              alt="Royal Treasure crest"
              width={72}
              height={72}
              style={{ objectFit: "contain" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--burgundy)",
                letterSpacing: "0.05em",
                lineHeight: 1,
              }}
            >
              Royal Treasure
            </span>
          </Link>

          {/* Right nav */}
          <nav
            aria-label="Primary navigation right"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              justifyContent: "flex-end",
            }}
            className="hidden-mobile"
          >
            {navigationLinks.right.map((link) =>
              link.isButton ? (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    backgroundColor: "var(--burgundy)",
                    color: "#FFF8EE",
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.6rem 1rem",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--dark-burgundy)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--burgundy)")
                  }
                  id="begin-conversation-btn"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                    textTransform: "uppercase",
                    color: "var(--warm-brown)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--burgundy)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--warm-brown)")
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
              color: "var(--burgundy)",
            }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNavigation
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
