"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body>
        <div style={{ padding: "80px", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Something went wrong!
          </h2>

          <p style={{ opacity: 0.7, marginBottom: "30px" }}>
            An unexpected error occurred. Please try again.
          </p>

          <button
            onClick={() => reset()}
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
