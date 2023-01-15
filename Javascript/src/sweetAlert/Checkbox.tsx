import Swal from "sweetalert2";
import "../customCheckbox/InputCheck.css";

export default function Checkbox() {
  const showSweetAlert = () => {
    const input =
      '<label className="container">please check<input type="checkbox" hidden /><span className="checkmark"></span></label>';

    Swal.fire({
      title: "title",
      html: input,
      confirmButtonText: "Start",
      confirmButtonColor: "orange",
    });
  };

  return (
    <>
      <button onClick={showSweetAlert}>Checkbox</button>
    </>
  );
}
