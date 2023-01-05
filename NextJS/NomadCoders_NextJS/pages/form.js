import { useState, useRef } from "react";
import Seo from "../components/Seo";
import { Form } from "react-bootstrap";

export default function form() {
  const form = useRef(null);

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async () => {
    const formData = new FormData();

    formData.append("name", formValue.name);
    formData.append("email", formValue.email);
    formData.append("message", formValue.message);

    let result = form.current.checkValidity();

    if (!result) {
      form.current.reportValidity();
      return false;
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbzB54BUV1QBdArkKEIJhPiJz4aCTP7sjq6cLKXPqQad9uTJXAbNPS2dcOhpnbAZ17-B/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );
    console.log("sent");
  };
  return (
    <section>
      <Seo title="Form" />
      <h2>Email Me!</h2>
      <Form ref={form}>
        <Form.Control
          name="name"
          placeholder="name"
          onChange={onChange}
          required
        ></Form.Control>
        <Form.Control
          name="email"
          placeholder="email"
          onChange={onChange}
          required
        ></Form.Control>
        <Form.Control
          name="message"
          placeholder="message"
          onChange={onChange}
          required
        ></Form.Control>
        <button type="button" onClick={sendEmail}>
          Send Message
        </button>
      </Form>
    </section>
  );
}
