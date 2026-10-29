"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Fallback to repeat images if less than 6 to display the 6 thumbnail bar cleanly
  const displayImages =
    images.length >= 6
      ? images.slice(0, 6)
      : [
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
          ...images,
        ].slice(0, 6);

  return (
    <div style={{ width: "100%" }}>
      {/* Main Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/11",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#EFEBE3",
          border: "1px solid #DCD6CC",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={displayImages[activeIdx]}
          alt={`${productName} — main view`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* 6 Thumbnails */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "0.5rem",
        }}
      >
        {displayImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`View photo ${i + 1}`}
            style={{
              position: "relative",
              aspectRatio: "1/1",
              overflow: "hidden",
              border:
                i === activeIdx
                  ? "2px solid #8B1D2C"
                  : "1px solid #DCD6CC",
              cursor: "pointer",
              padding: 0,
              backgroundColor: "#EFEBE3",
              outline: "none",
            }}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
