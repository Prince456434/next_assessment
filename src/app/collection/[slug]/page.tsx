import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/collection/ProductGallery";
import ProductCard from "@/components/collection/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Object Not Found — Royale Treasure" };
  return {
    title: `${product.name} — Royale Treasure`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  const features = product.features || [
    "Handcrafted timber with a natural raw character",
    "Distinctive massive framework with organic edges",
    "Complementary wooden chairs with sculptural form",
    "Wood inlay and handcrafted exposed wood grain",
    "Smooth resting handrail with authentic cast-iron fasteners",
    "Authentic brass property identifier, forged screws, and edition details",
  ];

  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Main Product Showcase: 2-Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "4rem",
            alignItems: "start",
            marginBottom: "5rem",
          }}
        >
          {/* Left Column: Gallery */}
          <div>
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right Column: Information & Enquire */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#1F1A15",
                  lineHeight: 1.25,
                  marginBottom: "0.5rem",
                }}
              >
                {product.name}
              </h1>

              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  color: "#6B6258",
                  letterSpacing: "0.06em",
                  marginBottom: "0.2rem",
                }}
              >
                {product.subcategory || `${product.category} / Rustic Dining`}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "#C45B28",
                  marginBottom: "1.2rem",
                }}
              >
                A Celebration of Natural Craftsmanship
              </div>
            </div>

            {/* Specifications list */}
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.75rem",
                color: "#4A423B",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
                borderTop: "1px solid #E5E0D8",
                borderBottom: "1px solid #E5E0D8",
                padding: "1rem 0",
              }}
            >
              <div>
                <span style={{ fontWeight: 600 }}>Period: </span>
                {product.period || "To be confirmed"}
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>Material: </span>
                {product.material || "Wood species to be identified"}
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>Origin: </span>
                {product.origin || "To be confirmed"}
              </div>
            </div>

            {/* Estimated Price Range */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#2B241E",
                  marginBottom: "0.2rem",
                }}
              >
                Estimated Price Range :
              </div>
              <div
                style={{
                  fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#1F1A15",
                }}
              >
                {product.price || "₹80,000 - ₹2,50,000"}
              </div>
            </div>

            {/* GET PRODUCT ENQUIRY CTA Button */}
            <Link
              href={`/conversation?product=${encodeURIComponent(product.name)}`}
              style={{
                display: "inline-block",
                textAlign: "center",
                backgroundColor: "#631721",
                color: "#FFFFFF",
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                padding: "1.1rem 2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                boxShadow: "0 4px 14px rgba(99, 23, 33, 0.2)",
                transition: "background-color 0.2s ease",
              }}
            >
              GET PRODUCT ENQUIRY
            </Link>

            {/* Detailed descriptions */}
            <div
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.88rem",
                color: "#544B42",
                lineHeight: 1.7,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "0.8rem",
              }}
            >
              <p>{product.description}</p>
              {product.extendedDescription && (
                <p>{product.extendedDescription}</p>
              )}
            </div>
          </div>
        </div>

        {/* 3-Column Detailed Information: Details / Care / Shipping */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            paddingTop: "3rem",
            borderTop: "1px solid #D8CFC4",
            marginBottom: "5rem",
          }}
        >
          {/* Column 1: PRODUCT DETAILS */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#8B1D2C",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              PRODUCT DETAILS
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#544B42",
                marginBottom: "1rem",
              }}
            >
              A celebration of unsanctioned and rustic craftsmanship, {product.name} brings together raw woods carved and repose form. Substantial hand-selected timbers with hand-planed finishes and forged joining elements.
            </p>
            <div
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#2B241E",
                marginBottom: "0.5rem",
              }}
            >
              Features:
            </div>
            <ul
              style={{
                paddingLeft: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.8rem",
                lineHeight: 1.5,
                color: "#544B42",
              }}
            >
              {features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Column 2: CARE & PRESERVATION */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#8B1D2C",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              CARE &amp; PRESERVATION
            </h2>
            <div
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#544B42",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div>
                <strong style={{ color: "#2B241E" }}>Regular dusting:</strong> Clean with a dry, soft lint-free cloth or ostrich feather duster to preserve natural timber sheen.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Protect from moisture:</strong> Avoid placement near humidifiers or direct rain exposure. Wipe spills immediately with a dry cloth.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Immediate spills prompts:</strong> Wipe spills immediately with a slightly damp cloth and dry the surface promptly.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Prevent scratches and stains:</strong> Use coasters, place mats, and felt pads under decorative objects to prevent scratching and heat marks.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Avoid harsh cleaning products:</strong> Do not use bleach, chemical harsh solvents, abrasives, or wax-based polishes not designed for natural heritage timber.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Periodic beeswax polish:</strong> Apply natural organic beeswax polish once a year to nourish and preserve wood grain.
              </div>
            </div>
          </div>

          {/* Column 3: DELIVERY & SHIPPING */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cinzel, 'Cinzel', serif)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#8B1D2C",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              DELIVERY &amp; SHIPPING
            </h2>
            <div
              style={{
                fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#544B42",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div>
                <strong style={{ color: "#2B241E" }}>Estimated dispatch timeline:</strong><br />
                Approximately 5-7 weeks, subject to craft review.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Shipping charges:</strong><br />
                Complimentary white-glove delivery available for selected locations across India. For international orders, customs charges and freight will be calculated on request.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Special delivery requests:</strong><br />
                If you require insurance or bespoke packing for overseas transport, please advise our team before placing your order.
              </div>
              <div>
                <strong style={{ color: "#2B241E" }}>Delivery arrangements:</strong><br />
                You will be contacted prior to delivery to confirm convenient date and time with our specialist white-glove transport crew.
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Row: 3 Cards */}
        <div style={{ marginBottom: "5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
