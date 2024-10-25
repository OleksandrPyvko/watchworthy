import ImageSlides from "@/components/image-slides/image-slides";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes["main-container"]}>
      <div className={classes.slideshow}>
        <ImageSlides />
      </div>
      <div>
        <h1 className={classes.highlight}> Watchworthy</h1>
        <p className={classes.article}>
          is your go-to place to explore movies, create personal watchlists, and
          track what you’ve already seen. Add films to your Watch Later list or
          mark them as Watched with your own ratings to keep everything
          organized. Discover what’s next on your list!
        </p>
      </div>
    </div>
  );
}
