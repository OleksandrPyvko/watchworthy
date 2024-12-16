import { addToWatchedAction } from "@/lib/actions";
import classes from "./buttons.module.css";
function AddToWatchedButton({ movieId, userEmail }) {
  return (
    <>
      <form action={addToWatchedAction}>
        <input type="hidden" readOnly name="movieId" value={movieId} />
        <input type="hidden" readOnly name="userEmail" value={userEmail} />
        <button className={`${classes.button} ${classes["button-watched"]}`}>
          Add to `Watched`
        </button>
      </form>
    </>
  );
}

export default AddToWatchedButton;
