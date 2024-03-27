import React from "react";
import styles from "./index.module.scss";

import slider1 from "../../../assets/login/5.png";
import slider2 from "../../../assets/login/6.png";
import slider3 from "../../../assets/login/7.png";
import slider4 from "../../../assets/login/8.png";
import slider5 from "../../../assets/login/9.png";

const images = [
  {
    id: 1,
    src: slider1,
    title: "Caverne d'Alibaba !",
    description:
      "MeloSync vous permet de récupérer toutes vos musiques de toutes vos applications de streaming !",
  },
  {
    id: 2,
    src: slider2,
    title: "Version mobile !",
    description:
      "D'ici quelques semaines, MeloSync sera disponible sur mobile ! Restez connectés !",
  },
  {
    id: 3,
    src: slider3,
    title: "Mode hors-ligne ?",
    description:
      "Dans l'avion, le train ou le métro ? Pas de soucis, MeloSync vous permettra d'écouter vos musiques hors-ligne !",
  },
  {
    id: 4,
    src: slider4,
    title: "Partagez vos musiques !",
    description:
      "C'est la fête, partagez vos musiques et vos playlists avec vos amis en un clic !",
  },
  {
    id: 5,
    src: slider5,
    title: "100% gratuit !",
    description:
      "Eh oui, MeloSync est 100% gratuit ! Pas d'abonnement, pas de frais cachés !",
  },
];

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`${styles.slide} ${
            index === currentImageIndex ? styles.activeSlide : ""
          }`}
        >
          <img src={image.src} alt="Slide de presentation" />
          <div className={styles.slideContent}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
