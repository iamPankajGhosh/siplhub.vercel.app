import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import { Footer, Navbar, Preloader } from "../components";

function Gallery() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <article>
          <section className="section hero" id="home" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Captured Moments, Explore Our Photo
                  <span className="has-before">Gallery </span>
                </h1>

                <p className="hero-text">
                  A Visual Journey Through Time, Beauty, and Emotion
                </p>

                <ul className="social-list">
                  <li>
                    <Link
                      to="https://www.facebook.com/sikharthyinfotech/"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(241, 77%, 63%)" }}
                    >
                      <ion-icon name="logo-facebook"></ion-icon>

                      <span className="span">Facebook</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.instagram.com/sikharthyinfotech/"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(340, 75%, 54%)" }}
                    >
                      <ion-icon name="logo-instagram"></ion-icon>

                      <span className="span">Instagram</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.linkedin.com/company/sikharthy-infotech-pvt-ltd"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(210, 90%, 40%)" }}
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>

                      <span className="span">LinkedIn</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <figure className="hero-banner">
                <img
                  src={images.galleryBanner}
                  width="794"
                  height="637"
                  alt="about banner"
                  className="w-100"
                />
              </figure>
            </div>
          </section>
          <section
            className="section project"
            id="project"
            aria-label="project"
            style={{ paddingBlockStart: 0 }}
          >
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/308583313_516883800439357_7118357780160995883_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_ohc=18kSicN45BYAX-ovt_T&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBxdP53bqKq5zFKo-7janSrH7EOjpsk469FKOaCM1CEuw&oe=65941895"
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/365294858_763005642493837_8847492466615467588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=0ninfT77Ln8AX954P1N&_nc_ht=scontent.fccu4-2.fna&oh=00_AfBdAc5NAt5ZHcsTH7BW_4eM3-9X_RCmmt2ZNVj21BVO6A&oe=65934382"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/365272470_763005682493833_7009717909192067026_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=KUrL4AER5sgAX-I80Ko&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBZE-DOpNLjuKSedBVEDkH8n4t-0VP6jfc8QvKWSsJBtw&oe=6593A4AA"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/362272498_763005775827157_95694523014725487_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=NpuJQFDSr00AX-Z9xjL&_nc_oc=AQm85VmqdUmYLYcaDv1ubkx2F5Kw-yNvgsSDKmpQphmvFNal4CHIv_QCs88_xtikAVk&_nc_ht=scontent.fccu4-2.fna&oh=00_AfBMOSD2sK-z8I8zi4A-V8Z4tappgje7p_0HaolCHpXIIQ&oe=6593DA15"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/319718044_1274353746442821_8132369993990977942_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=2mbHTd_Y774AX97GSBz&_nc_ht=scontent.fccu4-2.fna&oh=00_AfALvUv9shQ7-E-CrGq0JtQScyQ03E1lkqkal05FjHTNfw&oe=659458F0"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/308075993_516883773772693_6020762461051519611_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_ohc=r_B5M25bn9AAX8CdKbj&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBmk3_16Eno6oiXVbk-zgmBTmjbDEF48ey-VQwPP0B_5g&oe=6592E19E"
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/302989683_499557872171950_437543645377492523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_ohc=ZOTVK6kvkBYAX-hxPOE&_nc_ht=scontent.fccu4-2.fna&oh=00_AfAAy8EaHf33CErWf-VR-b4Lky2R5O-pHaSwjktfeRUf6g&oe=6593CA70"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/302609736_499557718838632_5970349661308210706_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_ohc=BwdusP_UARIAX8npSFp&_nc_ht=scontent.fccu4-2.fna&oh=00_AfCpqczRbC1ao0Tj-O5eJ-jjZIRKoYD2he5YA2dMnQKXaQ&oe=65928F73"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/299549007_489763043151433_1967286878344539838_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=NK08fwK8NggAX93EdZ8&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAH3e-DpVszN8eypyb6ttRdru-XnsCoNq62laHQJsE81g&oe=65934142"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/299487057_489763016484769_6966658262445007583_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=x_BWEj2zSMsAX-HTJW3&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAQVj5xt4vJoCN-nrGVV_iJcXR4Xu2syUTuuKN-XnzqBQ&oe=6594709F"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/296456392_479303400864064_7932051416826634501_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=26UdC-jelMUAX_5BIai&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAKJVPs1YKflY5vBXIZOlKM4NIDsgmqEL5PPTbRI75jog&oe=6593CFF0"
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/289945538_787056872665635_8889787668790268110_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4indo13OB2AAX8qAEc5&_nc_ht=scontent.fccu4-2.fna&oh=00_AfBYCCevt-7fjQ2qvlgm8XVWUYNJ6DTnN-Xclph48J2i3Q&oe=6593D449"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/290333606_787056802665642_4554701053247129454_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Oxr7S_X_EkwAX9E_9Co&_nc_ht=scontent.fccu4-3.fna&oh=00_AfD587GbudTM7GqZqbODAn61CdBgP2epsejAIIYd2KY8YQ&oe=6593518D"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/290397300_787056799332309_1023818061703362366_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=JUgimQjonBcAX88g5zH&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAxqSrW3q_NpQcYeWSL6Vjrkq7Ow7CjGSRl7B_eL9-4jA&oe=6592F34C"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/289979968_787056699332319_6205700235170933575_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=X2n4KY2a1l8AX8cuy3Z&_nc_ht=scontent.fccu4-2.fna&oh=00_AfDdS-Ea6qCrAx9V709DDn5PVeEQfnjAE_WZsntjve7lBQ&oe=65932556"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/284658585_768198057884850_2441021099594134986_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=3aoyNOmYqO4AX86f9mw&_nc_ht=scontent.fccu4-2.fna&oh=00_AfAlJzap1nWtPZbLgM5z1n8mUpP3eKFw7jI8Hs8-plo6Sw&oe=6594543E"
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/278624953_741211303916859_7269392809537937152_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=BYCD22pLghsAX_3B7lC&_nc_ht=scontent.fccu4-2.fna&oh=00_AfAbnRicPxsVbNmKqc--efvd1Hpv6qHpyACgm6HWb9d7pg&oe=659304F0"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/277299173_727584491946207_8020091088343565041_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_zLd-dKypa8AX8DZxoF&_nc_ht=scontent.fccu4-2.fna&oh=00_AfDqQJ_Fan-iQAhMJs8IqAkcJPOyiX1apKAdTuoQM_9gaQ&oe=65943122"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/277510374_727584451946211_2040387768030126193_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Vfe3K3dchkEAX_h5ZaU&_nc_ht=scontent.fccu4-2.fna&oh=00_AfBXyqS9M8E5Wj3lh9qmF433NFz9YQkkpZFGEvpXbQATuQ&oe=65931C3B"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/260332751_654305559274101_7118951862637208633_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jZx0R6nwAZ8AX-HJhD5&_nc_ht=scontent.fccu4-2.fna&oh=00_AfDWZFFS2zHffD5em7SFFmwJX1gGMXLykdI_rKIzfdzD-g&oe=65944179"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/260779779_654305672607423_9021877026805398782_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=mPv0JZWwaeAAX-VqKew&_nc_ht=scontent.fccu4-3.fna&oh=00_AfB8879vkMHa7sNj3koMcUcv60vRC7TM6kIKhD2CMags3g&oe=65944CBD"
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/245198004_623098112394846_874637956031173805_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=JP0MXSC07woAX9acMe1&_nc_ht=scontent.fccu4-3.fna&oh=00_AfAwX62Rh0-UKfegXm0fQsjeWu4GhS_ZlHNtZJvS22vW4g&oe=65930D3D"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/245170585_623099122394745_2536110049529725664_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rkX0geLNi3EAX8pn3Sf&_nc_ht=scontent.fccu4-3.fna&oh=00_AfBnJK8MU9FOnegLuSTEr7UcwRzki-KDIkpj0SNoO9wQ9A&oe=6593C044"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/245379533_623099025728088_495529436995263105_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=S-fg2a1kOigAX_1KM73&_nc_ht=scontent.fccu4-2.fna&oh=00_AfBmwyItcx36DT6m6BGdr_Ws08ai9uU59bC5tP-d5unH2w&oe=65943CFB"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/245101290_623098602394797_4436992854119689606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fxg90IIFYYUAX-u3Gfv&_nc_ht=scontent.fccu4-2.fna&oh=00_AfDp-hBo1SVRt55oJNDU-_UWXeDY5gCIVABQ3ukgnDhW7A&oe=65940069"
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
