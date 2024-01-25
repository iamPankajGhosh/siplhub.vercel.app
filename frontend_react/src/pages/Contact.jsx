import { Preloader } from "../components";

export default function Contact() {
  return (
    <>
      <Preloader />
      <main>
        <article>
          {/* #HERO */}

          <section className="section hero" id="contact" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Let's get in <span className="has-before">touch</span>
                </h1>

                <p className="hero-text">
                  We're open for any suggestion or just to have a chat
                </p>

                <form action="" className="newsletter-form">
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Enter your mail"
                    required
                    className="contact-field"
                  />

                  <input
                    type="text"
                    name="full_name"
                    placeholder="Enter your Full Name"
                    className="contact-field"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter your Subject"
                    className="contact-field"
                  />

                  <textarea
                    type="text"
                    name="massage"
                    placeholder="Enter your Message"
                    className="contact-field"
                  />

                  <button
                    type="submit"
                    className="btn btn-secondary has-before has-after"
                  >
                    <span className="span">Send</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </button>
                </form>
              </div>

              <figure className="hero-banner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2659653621413!2d88.43142697362238!3d22.569153833099843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027501af7ed723%3A0xca9d355c4eaec6c8!2sSikharthy%20Infotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1695310325234!5m2!1sen!2sin"
                  width="794"
                  height="637"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-100"
                ></iframe>
              </figure>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
