import { Loader } from "@/components/loader/loader";

function loading() {
  return (
    <div
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Loader />
    </div>
  );
}

export default loading;
