import React from "react";
import { Navbar, Footer } from "../components";
import { Hero, Service } from "../containers";

export default function Services() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero />
          <Service />
        </article>
      </main>

      <Footer />
    </>
  );
}
