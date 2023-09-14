import React from "react";
import { Preloader, Navbar, Footer } from "../components";
import { Hero } from "../containers";
import images from "../constants/images";

export default function Contact() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <article>
          <Hero
            title="Let's get in touch"
            text="We're open for any suggestion or just to have a chat"
            heroBanner={images.heroBanner}
          />
        </article>
      </main>

      <Footer />
    </>
  );
}
