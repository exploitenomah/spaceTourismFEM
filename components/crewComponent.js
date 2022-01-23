import { HeadingOne, DefaultParagraph, ButtonList } from "./smallerComponents";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import styles from "./cssmodules/crew.module.css";


const CrewComponent = ({ crewMember, crew, togglecrewMember, handleTouchStart, handleTouchMove }) => {

  const { name, images, role, bio, idx } = crewMember;
  return (
    <div className={styles.container}>
      <HeadingOne number="02" title="Meet your crew" />
      <figure>
        <div
          onTouchStart={(e) => {
            handleTouchStart(e);
          }}
          onTouchMove={(e) => {
            handleTouchMove(e, idx);
          }}
        >
          <img src={images.png} alt={`An image of ${name}`} />
          <hr className={utilStyles.thinHr} />
        </div>
        <figcaption>
          <ButtonList
            arrayList={crew}
            buttonClick={togglecrewMember}
            btnClassName={styles.activeBtn}
          />
          <h2>{role} </h2>
          <h3>{name}</h3>
          <DefaultParagraph text={bio} />
        </figcaption>
      </figure>
    </div>
  );
};

export default CrewComponent;
