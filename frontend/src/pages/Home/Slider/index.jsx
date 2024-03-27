import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";

const images = [
  { id: 1, image: one },
  { id: 2, image: two },
  { id: 3, image: three },
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changement d'image toutes les 3 secondes

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <div className={styles.slider}>
      {images.map(({ id, image }) => (
        <img
          key={id}
          src={image}
          alt={`Slide ${id}`}
          className={
            id === currentImageIndex ? styles.slideVisible : styles.slideHidden
          }
        />
      ))}
    </div>
  );
}

export default Slider;
