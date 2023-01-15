import ReactDOM from "react-dom/client";
import InputCheck from "./customCheckbox/InputCheck";
import Checkbox from "./sweetAlert/Checkbox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Checkbox />
    <InputCheck />
  </>
);
