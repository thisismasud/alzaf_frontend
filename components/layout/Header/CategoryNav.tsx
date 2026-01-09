"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import type { Category } from "@/lib/data/categories";

const CategoryNav = ({categories}: {categories: Category[]}) => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav aria-label="Main categories" className="w-full">
      <button
        className="flex items-center gap-2 cursor-pointer text-sm md:text-[16px]"
        onClick={() => setShowCategories(!showCategories)}
      >
        Categories{" "}
        {showCategories ? (
          <Icon icon="mdi:keyboard-arrow-down" width="20" height="20" />
        ) : (
          <Icon icon="mdi:keyboard-arrow-up" width="20" height="20" />
        )}
      </button>

      {/* Category List */}
      <ul
        className={`flex flex-col absolute z-10 top-14 lg:right-36 md:right-10 right-2 max-w-[300px] w-full bg-white mt-4 shadow-md rounded-md ${
          showCategories ? "block" : "hidden"
        }`}
      >
        {categories.map((category) => (
          <li
            key={category.id}
            className="cursor-pointer w-full border-b border-gray-100 last:border-b-0"
          >
            <Link
              href={`/categories/${category.slug}`}
              className="flex items-center w-full h-12 md:h-14 px-5 text-gray-700 hover:font-semibold transition-colors text-sm md:text-[16px]"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;

