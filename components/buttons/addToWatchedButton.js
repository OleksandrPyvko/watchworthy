import { addToWatchedAction } from "@/lib/actions";
import Rating from "../rating/rating-bar";

function AddToWatchedButton({ movieId, userEmail, inWatchedList, userRating }) {

  return (
    <>
      {/* {inWatchedList ? (
        <Rating movieId={movieId} userEmail={userEmail} userRating={userRating} />
      ) : ( */}
        <form action={addToWatchedAction}>
          <input type="hidden" readOnly name="movieId" value={movieId} />
          <input type="hidden" readOnly name="userEmail" value={userEmail} />
          <button>
            Add to `Watched`
            {movieId}
            {userEmail}
          </button>
        </form>
      {/* )} */}
    </>
  );
}

export default AddToWatchedButton;
