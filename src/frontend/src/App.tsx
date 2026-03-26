const images = [
  {
    src: "/assets/uploads/001-019d28d1-d2a9-77c9-862d-89bb4c48892f-1.jpg",
    alt: "Social Media Design 1",
  },
  {
    src: "/assets/uploads/02-019d2897-4e31-7198-93c5-5a21ea8dc42d-2.png",
    alt: "Social Media Design 2",
  },
  {
    src: "/assets/uploads/03-019d2897-5151-7719-8653-b8de8b084d57-3.png",
    alt: "Social Media Design 3",
  },
  {
    src: "/assets/uploads/04-019d2897-762b-7499-81d9-c7fe7177797d-5.png",
    alt: "Social Media Design 4",
  },
  {
    src: "/assets/uploads/05-019d28c6-f5ed-76fb-8a7f-30e0b091d6da-2.png",
    alt: "Social Media Design 5",
  },
];

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "0.75rem",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

export default function App() {
  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        padding: "4rem 2rem",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                color: "#F7B818",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              PORTFOLIO
            </span>
            <div
              style={{
                height: "2px",
                width: "3rem",
                backgroundColor: "#F7B818",
                borderRadius: "1px",
              }}
            />
          </div>

          <h1
            style={{
              margin: 0,
              padding: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                display: "block",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                textTransform: "uppercase",
              }}
            >
              SOCIAL MEDIA
            </span>
            <span
              style={{
                display: "block",
                color: "#F7B818",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                textTransform: "uppercase",
              }}
            >
              DESIGN
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              marginTop: "1rem",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Crafted for engagement, virality, and brand recognition.
          </p>
        </div>

        {/* Image grid */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Row 1: Image 1 + Image 2 side by side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <ImageCard src={images[0].src} alt={images[0].alt} />
            <ImageCard src={images[1].src} alt={images[1].alt} />
          </div>

          {/* Row 2: Image 3 full width */}
          <ImageCard src={images[2].src} alt={images[2].alt} />

          {/* Row 3: Image 4 full width */}
          <ImageCard src={images[3].src} alt={images[3].alt} />

          {/* Row 4: Image 5 full width */}
          <ImageCard src={images[4].src} alt={images[4].alt} />
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.8rem",
          }}
        >
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#F7B818", textDecoration: "none" }}
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    </main>
  );
}
