import SearchContainer from "@/components/movies/searchContainer";
import classes from './page.module.css'
function MoviesPage() {
  return (
    <div className={classes.search}>
      {/* <Suspense fallback={<p className={classes.loading}>Loading movies...</p>}> */}
      <SearchContainer />
      {/* </Suspense> */}
    </div>
  );
}

export default MoviesPage;
