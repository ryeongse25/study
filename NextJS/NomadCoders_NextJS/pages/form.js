import { useState } from "react";
import Seo from "../components/Seo";
import { Form } from "react-bootstrap";

export default function form() {
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
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzB54BUV1QBdArkKEIJhPiJz4aCTP7sjq6cLKXPqQad9uTJXAbNPS2dcOhpnbAZ17-B/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValue.name,
          email: formValue.email,
          message: formValue.message,
        }),
      }
    );
  };
  return (
    <section>
      <Seo title="Form" />
      <h2>Email Me!</h2>
      <Form
        className="gform"
        action="https://script.google.com/macros/s/AKfycbzB54BUV1QBdArkKEIJhPiJz4aCTP7sjq6cLKXPqQad9uTJXAbNPS2dcOhpnbAZ17-B/exec"
        method="POST"
        target="iframe1"
      >
        <Form.Control
          name="name"
          placeholder="name"
          onChange={onChange}
        ></Form.Control>
        <Form.Control
          name="email"
          placeholder="email"
          onChange={onChange}
        ></Form.Control>
        <Form.Control
          name="message"
          placeholder="message"
          onChange={onChange}
        ></Form.Control>
        <button type="submit">Send Message</button>
        <div style={{ display: "none" }} className="thankyou_message">
          <h2>Thanks for contacting us! We will get back to you soon!</h2>
        </div>
      </Form>
      <iframe id="iframe1" name="iframe1" style={{ display: "none" }}></iframe>
    </section>
  );
}
