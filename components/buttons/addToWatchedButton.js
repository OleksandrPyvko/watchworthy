
function AddToWatchedButton({ movieId, userEmail, rating }) {
  return (
    <form >
      <input hidden name="movieId" readOnly value={movieId} />
      <input hidden name="userEmail" readOnly value={userEmail} />
      <input hidden name="rating" readOnly value={rating} />
      <button>
        Add to `Watched`
        {movieId}
        {userEmail}
        {rating}
      </button>
    </form>
  );
}

export default AddToWatchedButton;
