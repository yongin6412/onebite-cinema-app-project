import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Searchbar Layout</div>
      {children}
    </div>
  );
}
