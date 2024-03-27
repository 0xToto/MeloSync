import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
import { useMusicContext } from "../../../services/MusicContext";
import { UserContext } from "../../../services/UserContext";
// const { ipcRenderer } = window.require("electron");

import cross from "../../../assets/cross.png";



function SongsList({ playlists, image }) {
  const {
    updateCurrentMusic,
    updateCurrentMusicObject,
    currentMusic,
    currentMusicObject,
    updateLastMusic,
    updateLastMusicObject,
    isPlaying,
    updateIsPlaying,
  } = useMusicContext();

  const [userID, setUserID] = useState(null);
  const { user } = useContext(UserContext);

  const onSongClick = async (playlist) => {
    if (isPlaying) {
      updateIsPlaying(false);
      await currentMusicObject.pause(); // Attendre que la musique en cours soit mise en pause
    }

    if (playlist.music !== currentMusic) {
      updateLastMusic(currentMusic);
      updateLastMusicObject(currentMusicObject);
    }

    updateCurrentMusic(playlist.music);
    const newMusicObject = new Audio(
      `http://localhost:443/play/${playlist.music}`
    );
    updateCurrentMusicObject(newMusicObject);
    newMusicObject.play(); // Démarrer la nouvelle musique
    updateIsPlaying(true); // Mettre à jour le statut de lecture

    const response = await fetch(`http://localhost:443/user/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUserID(data[0].id);

    fetch(`http://localhost:443/users/played/${data[0].id}`, {
      method: "POST",
    });

    console.info("Playlist:", playlist);

    fetch('http://localhost:443/user/rpc', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        discordState: playlist.subtitle,
        discordDetails: playlist.name,
        discordStartTimestamp: Date.now(),
        discordLargeImageText: "https://melosync.fr",
        discordSmallImageText: "Titre: ",
        discordPartyId: "Melosync",
        id: userID,
      }),
    }).catch((error) => {
      console.error("Erreur lors de la requête au backend :", error);
    });

    // ipcRenderer.send("update-rpc", {
    //   details: `Écoute Test de %artist%`,
    //   state: "Mode privé",
    //   largeImageKey: "melosync_sound",
    //   largeImageText: "https://melosync.fr",
    //   smallImageKey: "melosync_music",
    //   smallImageText: "Titre: ",
    // });
  };

  const handleDeleteClick = (id) => {
    // Ici, vous pouvez effectuer l'action backend pour la suppression de la musique en utilisant l'ID du morceau (id).
    // Par exemple, vous pouvez appeler une fonction pour envoyer une requête DELETE au backend avec l'ID.

    fetch(`http://localhost:443/musics/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Erreur lors de la requête au backend :", error);
      });
  };

  return (
    <div className={styles.playlistContainer}>
      {playlists.map((playlist) => (
        <div key={playlist.id} className={styles.playlistItem}>
          <button
            className={styles.playlistButton}
            type="button"
            onClick={() => onSongClick(playlist)}
          >
            <img
              src={image}
              alt={playlist.name}
              className={styles.playlistImage}
            />
            <div className={styles.playlistText}>
              <span className={styles.playlistTitle}>{playlist.name}</span>
              <span className={styles.playlistSubtitle}>
                {playlist.subtitle}
              </span>
            </div>
          </button>
          <button
            className={styles.deleteIcon}
            onClick={() => handleDeleteClick(playlist.id)}
            type="button"
          >
            <img src={cross} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

SongsList.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
};

export default SongsList;
