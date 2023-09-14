import React from "react";
import { Preloader, Navbar, Footer } from "../components";
import { Hero, Service } from "../containers";
import images from "../constants/images";

export default function Services() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <article>
          <Hero
            title="Elevate Your Business with Our Exceptional Services"
            text="In today's dynamic business landscape, effective management is paramount to achieving success and staying competitive. At Sikharthy Infotect, we are committed to helping you take charge of your business and propel it to new heights through our comprehensive suite of services."
            heroBanner={images.heroBanner}
          />
          <Service />
        </article>
      </main>

      <Footer />
    </>
  );
}
