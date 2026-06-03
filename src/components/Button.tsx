import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      {...props}
      disabled={disabled}
      className="
        transition-all
        duration-200
        active:scale-[0.98]
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
      style={{
        backgroundColor: isPrimary
          ? "var(--color-primary)"
          : "var(--color-surface)",

        color: isPrimary
          ? "#ffffff"
          : "var(--color-text-primary)",

        border: isPrimary
          ? "1px solid var(--color-primary)"
          : "1px solid var(--color-border)",

        borderRadius: "var(--radius-md)",
        padding: "12px 20px",
        fontFamily: "var(--font-body)",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={(e) => {
        if (disabled) return;

        if (isPrimary) {
          e.currentTarget.style.backgroundColor =
            "var(--color-primary-hover)";
        } else {
          e.currentTarget.style.backgroundColor =
            "var(--color-surface-hover)";
        }
      }}
      onMouseLeave={(e) => {
        if (disabled) return;

        e.currentTarget.style.backgroundColor = isPrimary
          ? "var(--color-primary)"
          : "var(--color-surface)";
      }}
    >
      {children}
    </button>
  );
}