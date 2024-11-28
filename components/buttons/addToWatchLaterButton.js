import { addToWatchLaterAction } from "@/lib/actions";

function AddToWatchLaterButton({ movieId, userEmail }) {
  return (
    <form action={addToWatchLaterAction}>
      <input hidden name="movieId" readOnly value={movieId} />
      <input hidden name="userEmail" readOnly value={userEmail} />
      <button>
        Add to `Watch Later`
        {movieId}
        {userEmail}
      </button>
    </form>
  );
}

export default AddToWatchLaterButton;
