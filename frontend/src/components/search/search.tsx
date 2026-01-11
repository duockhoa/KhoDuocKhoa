"use client";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Tìm kiếm"
        className="rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
