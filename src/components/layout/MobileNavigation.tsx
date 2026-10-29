"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/site-config";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const allLinks = [...navigationLinks.left, ...navigationLinks.right];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(248, 245, 238, 0.99)",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close mobile menu"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--burgundy)",
          padding: "0.5rem",
        }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Logo */}
      <Link
        href="/"
        onClick={onClose}
        style={{ textDecoration: "none", marginBottom: "2.5rem", textAlign: "center" }}
      >
        <Image
          src="/images/royal-treasure-logo.jpg"
          alt="Royal Treasure crest"
          width={64}
          height={64}
          style={{ objectFit: "contain", margin: "0 auto 0.5rem" }}
        />
        <div
          style={{
            fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--burgundy)",
          }}
        >
          Royal Treasure
        </div>
      </Link>

      {/* Nav links */}
      <nav
        aria-label="Mobile navigation"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {allLinks.map((link) =>
          link.isButton ? (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                backgroundColor: "var(--burgundy)",
                color: "#FFF8EE",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm-brown)",
                textDecoration: "none",
                padding: "0.25rem 0",
              }}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      {/* Decorative divider */}
      <div
        style={{
          marginTop: "2.5rem",
          fontFamily: "var(--font-script, 'Caveat', cursive)",
          color: "var(--muted-taupe)",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Jaipur, Rajasthan, India
      </div>
    </div>
  );
}
