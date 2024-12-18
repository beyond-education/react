"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import getRandomNumber from "./functions/random";

export default function Home() {
  const [dice, setDice] = useState(1)
  const images = [
    "/dice/dice_1.png",
    "/dice/dice_2.png",
    "/dice/dice_3.png",
    "/dice/dice_4.png",
    "/dice/dice_5.png",
    "/dice/dice_6.png"
  ]

  function handleDiceRoll(maxNumber) {
    const randomNumber = getRandomNumber(maxNumber)
    setDice(randomNumber)
  }

  const imageElements = images.map((path, index) => {
    return <Image key={index}
      className={styles.dice} aria-hidden
      src={path}
      alt="File icon"
      width={256}
      height={256} />
  })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>{dice}</h1>         */}
        {imageElements[dice - 1]}
        <button onClick={() => {
          handleDiceRoll(6)
        }}>Roll dice</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
