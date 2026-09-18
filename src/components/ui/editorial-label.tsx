import type { ReactNode } from "react";

export function EditorialLabel({ number, children }: { number?: string; children: ReactNode }) {
  return (
    <p className="editorial-label">
      {number ? <span className="editorial-label__number">{number}</span> : null}
      <span>{children}</span>
    </p>
  );
}
