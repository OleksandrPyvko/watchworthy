import SearchContainer from "@/components/movies/searchContainer";
import { Suspense } from "react";

async function MoviesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContainer />
    </Suspense>
  );
}

export default MoviesPage;
