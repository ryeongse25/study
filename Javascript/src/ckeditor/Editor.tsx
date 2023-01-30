import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Editor.css";

export default function Editor() {
  return (
    <>
      <CKEditor editor={ClassicEditor} />
    </>
  );
}
