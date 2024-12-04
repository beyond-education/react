"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { createContext, useState } from "react";
import Switch from "./components/molecules/switch";
import Login from "./components/organisms/login";
import Register from "./components/organisms/register";

export const LoginRegisterContext = createContext()

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)
  const handleChange = () => {
    setIsLogin(previous => !previous)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoginRegisterContext.Provider value={{ isLogin, handleChange }} >
          <Switch />
          {isLogin ? <Login /> : <Register />}
        </LoginRegisterContext.Provider>
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