import type { ReactNode } from "react";

export function StatusLabel({ children }: { children: ReactNode }) {
  return <span className="status-label"><span aria-hidden="true" />{children}</span>;
}
