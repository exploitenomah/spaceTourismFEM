


import Head from "next/head";
import Image from "next/image";
import styles from "./cssmodules/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState, useEffect} from 'react'

export default function Layout({ children, allLinks, siteTitle }) {

  const [navOpen, setNavOpen] = useState(false)
  const [currentLocation, setCurrentLocation] = useState('');
  const toggleNavOpen = () => {
    setNavOpen(navopen => {return !navopen})
  }
  const closeNav = (e) => {
   let navEl = e.target.closest('nav')
   if(navEl === null) {
    setNavOpen(false)
   }
  }
  useEffect(() => {
    setCurrentLocation(
      globalThis.location.pathname.slice(1) === ""
        ? "home"
        : globalThis.location.pathname.slice(1)
    );
  }, []);

  return (
    <div onClick={(e) => { closeNav(e)}}>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="description" content="Space Tourism Website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fillRule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </a>
        </Link>
        <nav className={styles.header_nav}>
          <button onClick={() => toggleNavOpen()} className={styles.navBtn}>
            <Image
              priority
              src="/images/shared/icon-hamburger.svg"
              height={20}
              width={20}
              alt=""
            />
          </button>
          <ul className={navOpen ? styles.header_nav_list : ""}>
            <li>
              <button onClick={() => toggleNavOpen()} className={styles.navBtn}>
                <Image
                  priority
                  src="/images/shared/icon-close.svg"
                  height={19.09}
                  width={19.09}
                  alt=""
                />
              </button>
              <ul>
                <li
                  className={
                    currentLocation === "home" ? styles.activeItem : ""
                  }
                >
                  <Link href="/ ">
                    <a
                      onClick={() => toggleNavOpen()}
                      className={styles.navLink}
                    >
                      <b>00 </b>Home
                    </a>
                  </Link>
                </li>
                {allLinks.map((link, idx) => {
                  return (
                    <li
                      className={
                        currentLocation === link.id ? styles.activeItem : ""
                      }
                      key={link.id}
                    >
                      <Link href={link.fullPath}>
                        <a
                          onClick={() => toggleNavOpen()}
                          className={styles.navLink}
                        >
                          <b>{"0" + (idx + 1)} </b>
                          {link.id}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
             </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
