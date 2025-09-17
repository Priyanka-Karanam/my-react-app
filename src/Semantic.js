import React from "react";
const Semantic = () => {
  return (
    <main>
      {/* Header section with main page title */}
      <header>
        <nav>
          <ul>
            <li><a href="#home" title="Go to Home Page">Home</a></li>
            <li><a href="#about" title="Learn more about us">About</a></li>
            <li><a href="#contact" title="Contact us">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to Our Accessible Website</h1>
      </header>

      {/* Main content section with sections and articles */}
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About Us</h2>
        <p>We are a company committed to providing inclusive and accessible web solutions.</p>
        <article>
          <h3>Our Mission</h3>
          <p>We aim to ensure that everyone, regardless of their abilities, can access information and services.</p>
        </article>
        <article>
          <h3>Our Vision</h3>
          <p>We envision a world where the web is universally accessible to all.</p>
        </article>
      </section>

      {/* Contact Form Section */}
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us via the form below.</p>

        <form aria-labelledby="contact-form">
          <fieldset>
            <legend>Contact Form</legend>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              aria-required="true"
            /><br></br><br></br>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              aria-required="true"
            /><br></br><br></br>

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              aria-required="true"
            ></textarea><br></br><br></br>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>

      {/* Footer with contact information */}
      <footer>
        <p>&copy; 2024 Accessible Web Solutions</p>
        <address>
          <p>1234 Accessibility St, Web City, WC 12345</p>
          <p>Email us at <a href="mailto:contact@accessibleweb.com">contact@accessibleweb.com</a></p>
        </address>
      </footer>
    </main>
  );
};

export default Semantic;
