import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/collection/${product.slug}`}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        transition: "transform 0.25s ease",
      }}
      aria-label={`View ${product.name}`}
    >
      {/* Product Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/11",
          overflow: "hidden",
          backgroundColor: "#EBE5DB",
          border: "1px solid #E2DCD2",
        }}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          className="hover:scale-105"
        />
      </div>

      {/* Product Metadata */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "#1F1A15",
            letterSpacing: "0.04em",
            marginBottom: "0.3rem",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>

        <div
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.7rem",
            color: "#6B6258",
            letterSpacing: "0.04em",
            marginBottom: "0.3rem",
          }}
        >
          {product.subcategory || `${product.category} / Curated`}
        </div>

        <div
          style={{
            fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
            fontSize: "0.68rem",
            color: "#544B42",
            letterSpacing: "0.04em",
          }}
        >
          Estimated Price Range : {product.price || "On Enquiry"}
        </div>
      </div>
    </Link>
  );
}
