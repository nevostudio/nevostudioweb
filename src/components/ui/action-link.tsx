import type { ComponentPropsWithoutRef } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: "primary" | "text";
  direction?: "diagonal" | "down";
};

export function ActionLink({ children, variant = "primary", direction = "diagonal", className = "", ...props }: ActionLinkProps) {
  return (
    <a {...props} className={`action-link action-link--${variant} ${className}`}>
      <span>{children}</span>
      <span className="action-link__arrow" aria-hidden="true">{direction === "down" ? "↓" : "↗"}</span>
    </a>
  );
}
