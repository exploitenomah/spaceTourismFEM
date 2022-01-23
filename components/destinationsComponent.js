
import {
  HeadingOne,
  DefaultParagraph,
  HeadingTwo,
  ButtonList,
} from "./smallerComponents";
import utilStyles from "../styles/utils.module.css";
import React from 'react'
import styles from './cssmodules/destinations.module.css'

const DestinationsComponent = ({ destination, destinations, toggleDestination  }) => {
      const { name, images, description, distance, travel } = destination;
    return (
        <div className={styles.container}>
            <HeadingOne number="01" title="Pick your Destination" />
        <figure>
          <img src={images.png} alt={`An image of ${name}`} />
          <figcaption>
          <ButtonList arrayList={destinations} buttonClick={toggleDestination} btnClassName={styles.activeBtn} named={true}  />
            <HeadingTwo text={name} />
            <DefaultParagraph text={description} />
            <hr className={utilStyles.thinHr} />
            <div className={utilStyles.flexRow}>
              <p className={utilStyles.flexColumn}>
                <span className={utilStyles.subHeading2}>
                  <abbr title="Average">Avg.</abbr> distance
                </span>
                <span className={utilStyles.subHeading1}>{distance}</span>
              </p>
              <p className={utilStyles.flexColumn}>
                <span className={utilStyles.subHeading2}>
                  <abbr title="Estimated">Est.</abbr> travel time
                </span>
                <span className={utilStyles.subHeading1}>{travel}</span>
              </p>
            </div>
          </figcaption>
        </figure>
        </div>
    ) 
}

export default DestinationsComponent
