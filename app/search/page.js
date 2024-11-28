import SearchContainer from "@/components/movies/searchContainer";
import classes from './page.module.css'
import { getMovies } from "@/lib/movies";
async function MoviesPage() {
  const initialData = await getMovies();
  return (
    <div className={classes.search}>
      {/* <Suspense fallback={<p className={classes.loading}>Loading movies...</p>}> */}
      <SearchContainer initialData={initialData}/>
      {/* </Suspense> */}
    </div>
  );
}

export default MoviesPage;
