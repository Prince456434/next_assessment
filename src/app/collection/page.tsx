"use client";

import React, { useState } from "react";
import ProductCard from "@/components/collection/ProductCard";
import { products, productCategories } from "@/data/products";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        paddingTop: "7rem",
        paddingBottom: "6rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "2rem 2rem 0",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#8B1D2C",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            SHOP HERITAGE
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              color: "#B46328",
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            Discover Heritage, Own a Piece of History
          </h1>

          <p
            style={{
              fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
              fontSize: "0.75rem",
              lineHeight: 1.85,
              letterSpacing: "0.06em",
              color: "#544B42",
              maxWidth: "920px",
              margin: "0 auto",
            }}
          >
            Explore Royal Treasure&apos;s collection of extraordinary heritage pieces,
            each reflecting the artistry, craftsmanship, and stories of a bygone
            era. From timeless antiques to distinctive objects of cultural
            significance, discover pieces that bring history into the present and
            offer a lasting connection to the past.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "3.5rem",
          }}
        >
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? "All" : cat)}
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  padding: "0.65rem 1.4rem",
                  backgroundColor: isActive ? "#6B1D26" : "#EDE7DD",
                  color: isActive ? "#FFFFFF" : "#3B332A",
                  border: isActive ? "1px solid #6B1D26" : "1px solid #D8CFC4",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "3.5rem 2.5rem",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
