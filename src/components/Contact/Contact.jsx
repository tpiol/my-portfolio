import "../../Contact.css";

const Contact = () => {
  return (
    <>
      <main className="contact-page">
        <h1 className="main-message">Interested in working together or have a question? Send me a message, let's connect!</h1>
        <form
          action="https://formspree.io/f/mdkprzdk"
          method="POST"
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Your Message:
            <textarea name="message" required></textarea>
          </label>

          <button type="submit">Send</button>
        </form>

        <div className="contact-links">
          <a href="https://github.com/tpiol/" target="_blank" rel="noreferrer">GitHub</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/tia-nicole-piol-600534138/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </main>
    </>
  );
};

export default Contact;