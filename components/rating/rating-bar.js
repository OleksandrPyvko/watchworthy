"use client";

import { useState } from "react";

function Rating(userEmail, movieId) {
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);

  function handleMouseEnter(index) {
    setHovered(index + 1);
  }

  function handleMouseLeave() {
    setHovered(0);
  }

  function handleClick(i) {
    setRating(i + 1);
  }

  return (
    <div>
      {rating === 0 ? <div>Rate this movie:</div> : <div>Your rating</div>}

      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
          style={{ cursor: "pointer" }}
        >
          <svg
            // viewBox="0 0 24 24"
            width="25px"
            height="30px"
            fill={i < hovered || i < rating ? "#FFD700" : "none"}
            stroke={i < hovered || i < rating ? "#FFD700" : "#fff"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                stroke="grey"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
      ))}
    </div>
  );
}

export default Rating;
