import SearchContainer from "@/components/movies/searchContainer";
import { Suspense } from "react";

async function MoviesPage() {
  return (
    <Suspense>
      <SearchContainer />
    </Suspense>
  );
}

export default MoviesPage;
