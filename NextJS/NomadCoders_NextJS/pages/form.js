import Seo from "../components/Seo";

export default function form() {
  return (
    <section>
      <Seo title="Form" />
      <h2>Email Me!</h2>
      <form
        className="gform"
        action="https://script.google.com/macros/s/AKfycbzB54BUV1QBdArkKEIJhPiJz4aCTP7sjq6cLKXPqQad9uTJXAbNPS2dcOhpnbAZ17-B/exec"
        method="POST"
      >
        <input
          type="text"
          id="userName"
          name="name"
          placeholder="이!름!"
          required
        />
        <input
          type="email"
          id="userEmail"
          name="email"
          placeholder="이!메!일!"
          required
        />
        <textarea name="message" id="userMessage" required></textarea>
        <button type="submit">Send Message</button>
        <div style={{ display: "none" }} className="thankyou_message">
          <h2>Thanks for contacting us! We will get back to you soon!</h2>
        </div>
      </form>
    </section>
  );
}
