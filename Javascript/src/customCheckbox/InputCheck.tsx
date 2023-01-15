import "./InputCheck.css";

export default function InputCheck() {
  return (
    <>
      <label className="container">
        please check
        <input type="checkbox" hidden />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
