import React from "react";
import { Navbar, Footer } from "../components";
import { Hero } from "../containers";

export default function About() {
  return (
    <>
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
