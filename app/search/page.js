import SearchContainer from "@/components/movies/searchContainer";
import { Suspense } from "react";

function MoviesPage() {
  return (
    <>
      {/* <Suspense fallback={<p className={classes.loading}>Loading movies...</p>}> */}
      <SearchContainer />
      {/* </Suspense> */}
    </>
  );
}

export default MoviesPage;
