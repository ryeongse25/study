import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <>
      <input type="checkbox" id="toggle" hidden />
      <label className="toggleSwitch" htmlFor="toggle">
        <span className="toggleButton"></span>
      </label>
    </>
  );
}
