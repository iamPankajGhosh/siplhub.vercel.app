import React from "react";
import { Preloader, Navbar, Footer } from "../components";
import { Hero } from "../containers";

export default function Contact() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <article>
          <Hero />
        </article>
      </main>

      <Footer />
    </>
  );
}
