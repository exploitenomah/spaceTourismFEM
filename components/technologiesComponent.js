import { HeadingOne, DefaultParagraph, ButtonList } from "./smallerComponents";
import utilStyles from "../styles/utils.module.css";
import React from "react";
import styles from "./cssmodules/technologies.module.css";
import { useEffect, useState } from 'react'
 
const TechnologiesComponent = ({
  technology,
  technologies,
  toggletechnology
}) => {
    const desktopQuery = (object) => {
      return object.matchMedia("(min-width: 1100px)")
    };
    const {
      name,
      images: { portrait, landscape},
      role,
      description,
      idx,
    } = technology;
    const [currentImg, setCurrentImg] = useState(landscape)
    function changeImg(query, img1, img2){
      if(query.matches){
        setCurrentImg(() => { return img1})
      }else{
        setCurrentImg(() => { return img2})
      }
    }
    useEffect(() => {
        changeImg(desktopQuery(window), portrait, landscape);
        desktopQuery(window).addEventListener("change", (e) =>  {changeImg(e, portrait, landscape)});
    }, [portrait, landscape])  

  return (
    <div className={styles.container}>
      <HeadingOne number="03" title="Space Launch 101" />
      <figure>
        <div>
          <img src={currentImg} alt={` ${name} `} />
        </div>
        <figcaption>
          <ButtonList
            arrayList={technologies}
            buttonClick={toggletechnology}
            btnClassName={styles.activeBtn}
            numbered={true}
          />
          <h2>The Terminology... </h2>
          <h3>{name}</h3>
          <DefaultParagraph text={description} />
        </figcaption>
      </figure>
    </div>
  );
};

export default TechnologiesComponent;
