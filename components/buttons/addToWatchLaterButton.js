import { addToWatchLaterAction } from "@/lib/actions";
import classes from "./buttons.module.css";
function AddToWatchLaterButton({ movieId, userEmail, inWatchLaterList }) {
  return (
    <div>
      {inWatchLaterList ? (
        <p className={classes.added}> In your &apos;Watch Later&apos; list</p>
      ) : (
        <form action={addToWatchLaterAction}>
          <input hidden name="movieId" readOnly value={movieId} />
          <input hidden name="userEmail" readOnly value={userEmail} />
          <button
            className={`${classes.button} ${classes["button-watch-later"]}`}
          >
            Add to &apos;Watch Later&apos;
          </button>
        </form>
      )}
    </div>
  );
}

export default AddToWatchLaterButton;
