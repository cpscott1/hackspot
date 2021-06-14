import React, { useState, useEffect, useRef } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import gsap, { Power3 } from "gsap";
import CustomLink from "../customlink/CustomLink";

export default function Menu({ state, setState }) {
  let menu = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);
  let link3 = useRef(null);
  let exit = useRef(null);

  useEffect(() => {
    if (state.active === false) {
      gsap.to(menu, {
        duration: 0.4,
        height: "0%",
        ease: Power3,

        css: { display: "none", opacity: "0" },
      });
    } else {
      gsap.to(menu, {
        duration: 0.8,
        height: "100%",
        ease: Power3,
        opacity: 1,
        css: { display: "block", opacity: "1" },
      });
      gsap.from([link1, link2, link3], {
        duration: 0.5,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        ease: Power3,
      });
    }
  });

  const handleClose = () => {
    setState({ active: !state.active });
  };

  const onClick = () => {
    setState({ active: !state.active });
  };

  const onHover = () => {
    gsap.to(exit, {
      duration: 0.2,
      css: { color: "#0a89ff", top: "5px", left: "2px" },
      ease: Power3,
    });
  };

  const onExit = () => {
    gsap.to(exit, {
      duration: 0.2,
      css: { color: "black", top: "0px", left: "0px" },
      ease: Power3,
    });
  };

  return (
    <section
      className={styles.menu}
      ref={(el) => {
        menu = el;
      }}
    >
      <div className={styles.menu__close}>
        <button
          className={styles.menu__close_button}
          ref={(el) => {
            exit = el;
          }}
          onClick={handleClose}
          onMouseEnter={onHover}
          onMouseLeave={onExit}
        >
          X
        </button>
      </div>
      <div className={styles.menu__container}>
        <ul className={styles.menu__container__links}>
          <li
            className={styles.menu__container__links_item}
            ref={(el) => {
              link1 = el;
            }}
            onClick={onClick}
          >
            <CustomLink name="Home" path="/" />
          </li>
          <li
            className={styles.menu__container__links_item}
            ref={(el) => {
              link2 = el;
            }}
            onClick={onClick}
          >
            <CustomLink name="About" path="/about" />
          </li>
          <li
            className={styles.menu__container__links_item}
            ref={(el) => {
              link3 = el;
            }}
            onClick={onClick}
          >
            <CustomLink name="Contact" path="/contact" />
          </li>
        </ul>
      </div>
    </section>
  );
}
