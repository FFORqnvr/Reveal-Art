import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  hoverable?: boolean;
};

export default function Card({
  children,
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        transition-all duration-200
        ${hoverable ? "hover:-translate-y-1" : ""}
      `}
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding: "var(--space-lg)",
      }}
    >
      {children}
    </div>
  );
}