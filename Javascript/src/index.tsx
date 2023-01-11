import ReactDOM from "react-dom/client";
import Sidebar from "./sidebar/Sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Sidebar />
  </>
);
