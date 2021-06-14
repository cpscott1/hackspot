import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import ActiveLink from "../ActiveLink";

export default function Header({ state, setState }) {
  const handleClick = () => {
    setState({ active: !state.active });
    console.log(state.active);
  };

  return (
    <header className={styles.header}>
        <div className={styles.header__grid}>
          <div className={styles.header__grid__logoCont}>
            <ActiveLink href="/">
                <img
                  src="/images/Hackspot4.png"
                  className={styles.header__grid__logoCont_img}
                />
            </ActiveLink>
          </div>
          <div className={styles.header__grid__linkCont}>
            <button
              className={styles.header__grid__linkCont_menu}
              onClick={handleClick}
            >
              <GiHamburgerMenu className="menu-icon" />
            </button>

            <ul className={styles.header__grid__linkCont__links}>
              <li className={styles.header__grid__linkCont__links_item}>
                <ActiveLink className={styles.linkHover} href="/">
                  Home
                </ActiveLink>
              </li>
              <li className={styles.header__grid__linkCont__links_item}>
                <ActiveLink className={styles.linkHover} href="/about">
                  About
                </ActiveLink>
              </li>
              <li className={styles.header__grid__linkCont__links_item}>
                <ActiveLink className={styles.linkHover} href="/contact">
                  Contact
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
    </header>
  );
}
