import SearchBar from "@/components/searchbar";
import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
