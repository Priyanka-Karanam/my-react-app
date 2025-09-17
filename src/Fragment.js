import React from 'react';

const Fragment = () => {
  return (
    <main>
      {/* Using React Fragment to group content without adding extra DOM elements */}
      <header>
        <h1>Welcome to Our Accessible Fragment</h1>
      </header>

      <section>
        <h2>Our Services</h2>
        
        {/* Using Fragment to group services list without adding unnecessary extra elements */}
        <React.Fragment>
          <ul>
            <li>Web Accessibility Audits</li>
            <li>Inclusive Web Design</li>
            <li>Website Optimization</li>
          </ul>
        </React.Fragment>

        <p>We offer a range of services to help improve web accessibility. All our services follow W3C standards to ensure compliance and usability for all users.</p>
      </section>

      <section aria-labelledby="contact-us">
        <h2 id="contact-us">Contact Us</h2>
        
        <form aria-labelledby="contact-form">
          <fieldset>
            <legend>Get in Touch</legend>

            {/* Fragment grouping form elements for accessibility */}
            <React.Fragment>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                aria-required="true"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-required="true"
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
                aria-required="true"
              ></textarea>

              <button type="submit">Submit</button>
            </React.Fragment>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Fragment;