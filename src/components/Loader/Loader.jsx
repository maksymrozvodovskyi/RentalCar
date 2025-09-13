import { ClipLoader } from "react-spinners";

export default function Loader({ loading = true, size = 50, color = "#09f" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ClipLoader color={color} size={size} loading={loading} />
    </div>
  );
}
