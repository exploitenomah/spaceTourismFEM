

import Image from "next/image";
import styles from "./cssmodules/home.module.css";
import { DefaultParagraph } from "./smallerComponents";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";


export default function HomeComponent({ }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        So, you want to travel to <b>space</b>
      </h1>
      <DefaultParagraph 
        text={' Let\'s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\'ll give you a truly out of this world experience!'}
      />
      <Link href="/">
        <a className={styles.exploreLink}> Explore </a>
      </Link>
    </div>
  );
}
