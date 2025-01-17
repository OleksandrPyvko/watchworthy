import { addToWatchedAction } from "@/lib/actions";
import classes from "./buttons.module.css";
function AddToWatchedButton({ movieId, userEmail }) {
  return (
    <>
      <form action={addToWatchedAction}>
        <input type="hidden" readOnly name="movieId" value={movieId} />
        <input type="hidden" readOnly name="userEmail" value={userEmail} />
        {/* <button className={`${classes.button} ${classes["button-watched"]}`}> */}
        <button
          className={`${classes.button} ${classes["transparent-button"]}`}
        >
          Add to &apos;Watched&apos;
        </button>
      </form>
    </>
  );
}

export default AddToWatchedButton;
