"use client";

import {} from "@/lib/data-service";

function handleClick(movieId, userEmail) {
  addToWatchLater(movieId, userEmail);
}

function AddToWatchLaterButton({ movieId, userEmail }) {
  return (
    <button onClick={() => handleClick(movieId, userEmail)}>
      Add to `Watch Later`
      {movieId}
      {userEmail}
    </button>
  );
}

export default AddToWatchLaterButton;
