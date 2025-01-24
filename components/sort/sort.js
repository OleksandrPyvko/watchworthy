"use client";

import classes from "./sort.module.css";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sort() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(() => {
    const currentSort = searchParams.get("sort");
    const options = ["rating", "watch-date"];
    return currentSort ? options.indexOf(currentSort) : null;
  });
  const options = [
    ["Rating", "rating"],
    ["Date watched", "watch-date"],
    ["Clear", ""],
  ];

  function handleClick(index) {
    let newSearchParams = new URLSearchParams(searchParams);

    if (index === active || index === 2) {
      newSearchParams.delete("sort");
      setActive(null);
    } else {
      newSearchParams.set("sort", options[index][1]);
      setActive(index);
    }

    const queryString = newSearchParams.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  return (
    <div className={classes["sort-options"]}>
      <h3>Sort by:</h3>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={`${classes.option} ${
              active === index && classes.active
            }`}
            onClick={() => handleClick(index)}
          >
            {option[0]}
          </button>
        );
      })}
    </div>
  );
}

export default Sort;
