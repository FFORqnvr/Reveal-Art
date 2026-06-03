import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="
        w-full
        transition-all
        duration-200
        focus:outline-none
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
      style={{
        backgroundColor: "var(--color-background-soft)",
        color: "var(--color-text-primary)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        padding: "12px 16px",
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor =
          "var(--color-primary)";
        e.currentTarget.style.boxShadow =
          "0 0 0 3px rgba(155, 111, 99, 0.15)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor =
          "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}