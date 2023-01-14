import { useState } from "react";
import Swal from "sweetalert2";

export default function Callback() {
  const [number, setNumber] = useState(0);

  const showSweetAlert = () => {
    Swal.fire({
      title: "title",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "confirm",
      denyButtonText: "deny",
    }).then((result) => {
      if (result.isConfirmed) {
        setNumber(number + 1);
      } else if (result.isDenied) {
        setNumber(number - 1);
      } else {
        setNumber(number * 2);
      }
    });
  };
  return (
    <>
      <button onClick={showSweetAlert}>button</button>
      <p>{number}</p>
    </>
  );
}
