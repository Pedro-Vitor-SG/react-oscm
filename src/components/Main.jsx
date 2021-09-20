import React from "react";
import "./Main.css";

import illustration from "../assets/illustration-hero.svg";
import iconMusic from "../assets/icon-music.svg";

import Button from "./Button";

const Main = () => {
  return (
    <main className="container_main">
      <div className="container_illustration">
        <img src={illustration} alt="ilustração" />
      </div>
      <section className="container_section_details">
        <h1> Order Summary </h1>
        <p className="first">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!{" "}
        </p>
        <section className="container_section_price">
          <div>
            <img src={iconMusic} alt="Icone de Música" />
            <p>
              <strong> Annual Plan 
              </strong>$59.99/year
            </p>
          </div>
          <a href="https://www.google.com.br/">Change</a>
        </section>{" "}
        <Button content="Proceed to Payment" />
        <p className="cancel">Cancel Order</p>
      </section>
    </main>
  );
};

export default Main;
