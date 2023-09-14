import React from "react";
import { Navbar, Footer } from "../components";
import { Hero } from "../containers";

export default function Services() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero
            title="Elevate Your Business with Our Exceptional Services"
            text="In today's dynamic business landscape, effective management is paramount to achieving success and staying competitive. At Sikharthy Infotect, we are committed to helping you take charge of your business and propel it to new heights through our comprehensive suite of services."
          />
        </article>
      </main>

      <Footer />
    </>
  );
}
