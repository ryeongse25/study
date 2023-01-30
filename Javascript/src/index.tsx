import ReactDOM from "react-dom/client";
import Editor from "./ckeditor/Editor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Editor />
  </>
);
