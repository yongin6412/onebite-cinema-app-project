import SearchBar from "@/components/searchbar";
import { ReactNode, Suspense } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading.....</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
