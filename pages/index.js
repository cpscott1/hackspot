import React, { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import gsap from "gsap";

export default function Home() {

  const [state, setState] = useState({
    active: false,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Hackspot</title>
        <meta name="description" content="Coding competition for developers" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* <header className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.logo}>
            <a><img src="/images/Hackspot2.png" /></a>
          </div>
          <div className={styles.nav}>
            <ul className={styles.links}>
              <li>home</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </header> */}
      <Menu state={state} setState={setState} />

      <Header state={state} setState={setState} />
      <section className={styles.hero}>
        <div className={styles.heroCont}>
          <p className={styles.head1}>It's time to do it. Beautifully.</p>
          <h2 className={styles.head2}>Don't cry because it's over, Smile <br />because it happened.</h2>
          <div className={styles.signUpCont}><button className={styles.signUpButton}><a href="https://forms.gle/nKnhn55Gcxv6RdTp9">Sign Up</a></button></div>
        </div>
      </section>
      <section className={styles.showDetails}>
        <div className={styles.showDetailsGrid}>
          <div>
            <h2 className={styles.showDetailsTitle}>24</h2>
            <p className={styles.showDetailsText}>Hours</p>
          </div>
          <div>
            <h2 className={styles.showDetailsTitle}>3</h2>
            <p className={styles.showDetailsText}>Judges</p>
          </div>
          <div>
            <h2 className={styles.showDetailsTitle}>1</h2>
            <p className={styles.showDetailsText}>Winner</p>
          </div>
        </div>
      </section>
      <section className={styles.videoSection}>
        <h2 className={styles.hackspotTitle}>What is Hackspot</h2>
        <iframe className={styles.hackspotVid} width="560" height="315" src="https://www.youtube.com/embed/fF4qWZ7jeeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutTextCont}>
            <h2>Real Devs. Real Stories.</h2>
            <p>We wanted to create a competition with a personal touch. Not often you get to see the developer journey from the early stages and with that in mind we wanted to showcase some of the best talent all over the world. You will grow to love every single compeititor as they compete for the grand prize. </p>
          </div>
          <div>
            <Image src="/images/Programming.svg" width={600} height={500} />
          </div>
        </div>
      </section>
      <section className={styles.contactForm}>
      <h2 className={styles.text}>Get in Touch</h2>
      <form className={styles.formData} id="contact" name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='contact-form' value='contact' />
        <div>
          <input style={{ animationDuration: '1s' }} type='text' name='name' placeholder="name" />
        </div>
        <div>
          <input style={{ animationDuration: '1.4s' }} type='text' name='email' placeholder="email" />
        </div>
        <div>
          <textarea rows="4" style={{ animationDuration: '1.6s' }} type='text' name='message' placeholder="message" />
        </div>
        <div style={{ animationDuration: '2s' }} className={styles.buttonContainer}>
          <button className={styles.button}>Send</button>
        </div>
      </form>
    </section>
      <footer className={styles.footer}>
        <span>2021 © Hackspot | Between Two Divs. All Rights Reserved.</span>
      </footer>
    </div>
  )
}
