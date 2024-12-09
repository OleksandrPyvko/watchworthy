import { addToWatchedAction } from "@/lib/actions";
import classes from "./addToWatchedButton.module.css";
function AddToWatchedButton({ movieId, userEmail, inWatchedList, userRating }) {
  return (
    <>
      {/* {inWatchedList ? (
        <Rating movieId={movieId} userEmail={userEmail} userRating={userRating} />
      ) : ( */}
      <form action={addToWatchedAction}>
        <input type="hidden" readOnly name="movieId" value={movieId} />
        <input type="hidden" readOnly name="userEmail" value={userEmail} />
        <button className={classes["watched-button"]}>Add to `Watched`</button>
      </form>
      {/* )} */}
    </>
  );
}

export default AddToWatchedButton;
