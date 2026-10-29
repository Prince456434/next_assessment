"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#F7F4EE",
        color: "#3A332C",
        borderTop: "1px solid #D8CFC4",
        paddingTop: "4.5rem",
        paddingBottom: "3rem",
      }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Ornate Royal Crest */}
        <div style={{ marginBottom: "1.5rem" }}>
          <Image
            src="/images/royal-treasure-logo.jpg"
            alt="Royale Treasure Crest"
            width={130}
            height={90}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Categories subtitle in crimson */}
        <h2
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "1.1rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#8B1D2C",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "1.2rem",
          }}
        >
          OBJECT D&apos;ART · FURNITURE · JEWELS · TEXTILES · INTERIORS · CONCEPT
        </h2>

        {/* Curated house description */}
        <p
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.68rem",
            lineHeight: 1.8,
            letterSpacing: "0.08em",
            color: "#4A423B",
            textAlign: "center",
            maxWidth: "960px",
            textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}
        >
          ROYALE TREASURE IS A JAIPUR-BASED DESIGN AND CURATION HOUSE WITH OVER 25 YEARS OF EXPERIENCE IN LUXURY INTERIORS, HERITAGE HOSPITALITY, RARE ARTEFACTS, AND TURNKEY PROJECT EXECUTION BLENDING HERITAGE AESTHETICS WITH CONTEMPORARY LUXURY TO CREATE TIMELESS SPACES THAT REFLECT CULTURE, ELEGANCE AND INDIVIDUALITY.
        </p>

        {/* Red Highlight Callout Bar */}
        <div
          style={{
            width: "100%",
            borderTop: "1px solid #D8CFC4",
            borderBottom: "1px solid #D8CFC4",
            padding: "1.5rem 1rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#8B1D2C",
              lineHeight: 1.6,
              textTransform: "uppercase",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            A JAIPUR-BASED DESIGN AND CURATION HOUSE WITH OVER 25 YEARS OF EXPERIENCE IN LUXURY INTERIORS, HERITAGE HOSPITALITY, RARE ARTIFACTS, AND TURNKEY PROJECT EXECUTION. 50+ PROJECTS DELIVERED ACROSS INDIA AND ABROAD.
          </p>
        </div>

        {/* 4-Column Directory Grid */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid #D8CFC4",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
          }}
        >
          {/* Column 1: Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link
              href="/"
              style={{
                color: "#2E2822",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              ROYALE TREASURE
            </Link>
            <Link
              href="/legacy"
              style={{
                color: "#2E2822",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              LEGACY
            </Link>
            <Link
              href="/contact"
              style={{
                color: "#2E2822",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              CONTACT US
            </Link>
            <Link
              href="/conversation"
              style={{
                color: "#2E2822",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              BEGIN CONVERSATION
            </Link>
          </div>

          {/* Column 2: Services */}
          <div>
            <div style={{ fontWeight: 700, color: "#1F1A15", marginBottom: "0.85rem" }}>
              SERVICES
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", color: "#544B42" }}>
              <div>INTERIOR DESIGN</div>
              <div>FORT &amp; HERITAGE RESTORATION</div>
              <div>HOTEL &amp; RESORT CONVERSION</div>
              <div>ARTEFACTS &amp; FURNITURE</div>
              <div>ART INSTALLATION</div>
              <div>ANTIQUE RESTORATION</div>
            </div>
          </div>

          {/* Column 3: Locations */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <div>
              <div style={{ fontWeight: 700, color: "#1F1A15", marginBottom: "0.35rem" }}>
                SHOWROOM
              </div>
              <div style={{ color: "#544B42", lineHeight: 1.5 }}>
                5 JACOB ROAD, CIVIL LINES JAIPUR,<br />
                RAJASTHAN INDIA
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#1F1A15", marginBottom: "0.35rem" }}>
                DESIGN STUDIO
              </div>
              <div style={{ color: "#544B42", lineHeight: 1.5 }}>
                A 131, FIRST FLOOR, RAM LANE NO. 4<br />
                JAIPUR, INDIA
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#1F1A15", marginBottom: "0.35rem" }}>
                O&apos;D GULABEE JAIPUR
              </div>
              <div style={{ color: "#544B42", lineHeight: 1.5 }}>
                THE KANOTA COURTYARD NARAIN<br />
                NIWAS, JAIPUR
              </div>
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <div style={{ fontWeight: 700, color: "#1F1A15", marginBottom: "0.35rem" }}>
                GET IN TOUCH
              </div>
              <div style={{ color: "#544B42", lineHeight: 1.6 }}>
                <div>+91 9829065354</div>
                <div>+91 9413345495</div>
                <div>0141 4035354</div>
              </div>
            </div>

            <div style={{ color: "#544B42", lineHeight: 1.6 }}>
              <div>INFO@ROYALTREASURE.COM</div>
              <div>THEROYALEINDIA@GMAIL.COM</div>
            </div>

            <div style={{ color: "#544B42", lineHeight: 1.6 }}>
              <div>WWW.ROYALTREASURE.COM</div>
              <div>WWW.FORTINRAJASTHAN.COM</div>
            </div>
          </div>
        </div>

        {/* TRUSTED BY Section */}
        <div
          style={{
            width: "100%",
            padding: "2rem 0",
            borderBottom: "1px solid #D8CFC4",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#1F1A15",
              marginBottom: "0.8rem",
            }}
          >
            TRUSTED BY
          </div>
          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              color: "#544B42",
              lineHeight: 1.8,
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            JAIPUR LITERATURE FESTIVAL · JAIGARH HERITAGE FESTIVAL · VEDANTA · ROYAL FABLES · FAIRMONT JAIPUR · CHOKHI DHANI · KINGDOM OF DREAMS · MUMBAI AIRPORT T2 · SINGH VILLAS · RANTHAMBORE · KAHNA EARTH LODGE · CHOMU PALACE
          </p>
        </div>

        {/* Copyright */}
        <div
          style={{
            padding: "1.5rem 0 1rem",
            textAlign: "center",
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            color: "#6B6258",
          }}
        >
          © 2025 ROYALE TREASURES · ALL RIGHTS RESERVED · JAIPUR, RAJASTHAN, INDIA
        </div>

        {/* Final Quote in Red */}
        <div
          style={{
            paddingTop: "0.5rem",
            textAlign: "center",
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#8B1D2C",
          }}
        >
          &quot;THE FINEST THINGS WERE MADE TO LAST IF ONLY SOMEONE CARES ENOUGH TO ENSURE THEY DO.&quot;
        </div>
      </div>
    </footer>
  );
}
