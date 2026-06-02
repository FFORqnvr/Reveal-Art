function App() {
  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text-primary)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-lg)",
          boxShadow: "var(--shadow-md)",
          fontFamily: "var(--font-body)",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          Reveal Art
        </h1>

        <p>
          Проверка глобальных дизайн-токенов.
        </p>
      </div>
    </div>
  );
}

export default App;