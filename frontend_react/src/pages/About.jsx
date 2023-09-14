import React from "react";
import { Preloader, Navbar, Footer } from "../components";
import { Hero } from "../containers";

export default function About() {
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
