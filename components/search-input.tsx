"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, currentCategoryId, pathname, router]);

  return (
    <div className="relative w-full h-12 md:flex md:flex-col bg-white">
      <div className="relative md:w-auto w-full h-14 z-10 md:mt-1.5 rounded-md">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className=" h-full pl-4 pr-14 w-full md:h-9 sm:h-11"
          placeholder="Search for thematic"
        />
        <Button className="absolute right-0 inset-y-0 sm:h-11 w-20 h-full rounded-l-none bg-sky-700 hover:bg-sky-800 md:h-9">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
