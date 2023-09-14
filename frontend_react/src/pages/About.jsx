import React from "react";
import { Navbar, Footer } from "../components";
import { Hero } from "../containers";
import images from "../constants/images";

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <Hero
            title="Welcome to Sikharthy Infotect Pvt. Ltd."
            text="Online classes gained significant importance during the pandemic lockdowns, benefiting students, teachers, and institutions alike. They provide flexibility for long-distance education and have the potential to enhance traditional learning. The Internet's role in education is evolving, offering personalized and convenient learning experiences, making it a promising avenue for the future."
            heroBanner={images.heroBanner}
          />
        </article>
      </main>

      <Footer />
    </>
  );
}
