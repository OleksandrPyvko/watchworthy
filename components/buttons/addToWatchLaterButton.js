import { addToWatchLaterAction } from "@/lib/actions";

function AddToWatchLaterButton({ movieId, userEmail, inList }) {
  return (
   <div>
    {inList ? (<span> In list</span>) : ( <form action={addToWatchLaterAction}>
      <input hidden name="movieId" readOnly value={movieId} />
      <input hidden name="userEmail" readOnly value={userEmail} />
      <button>
        Add to `Watch Later`
        {movieId}
        {userEmail}
      </button>
    </form>)}
   </div>
  );
}

export default AddToWatchLaterButton;
