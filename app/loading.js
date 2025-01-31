import { Loader } from "@/components/loader/loader";
import classes from "./loading.module.css";

function loading() {
  return (
    <div className={classes.loader}>
      <Loader />
    </div>
  );
}

export default loading;
