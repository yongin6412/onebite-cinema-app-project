"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./searchbar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const searchParmas = useSearchParams();
  const q = searchParmas.get("q");

  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearchMove = () => {
    if (search === q || !search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickSearchMove();
    }
  };

  useEffect(() => {
    if (q) {
      setSearch(q || "");
    }
  }, [q]);

  return (
    <div className={style.serachbar_container}>
      <input onKeyDown={onKeyDown} value={search} onChange={onChangeSearch} />
      <button onClick={onClickSearchMove}>검색</button>
    </div>
  );
}
