import React, { useState, useContext } from "react";
import "./music-downloader.scss";
import { UserContext } from "../../../../../services/UserContext";

function MusicDownloader() {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [musicName, setMusicName] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const { user } = useContext(UserContext);
  const [userID, setUserID] = useState(null);
  // const userId = user.id;


  const getStuff = async () => {

    const response = await fetch(`http://localhost:443/user/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    fetch(`http://localhost:443/users/added/${data[0].id}`, {
      method: "POST",
    });
  };

  const handleDownload = () => {
    setIsDownloading(true);

    // Envoyer les données au backend
    fetch("http://localhost:443/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        url,
        musicName,
        user,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête au backend :", error);
        setIsDownloading(false);
      });

    getStuff();
  };


  return (
    <div className="music-downloader-container">
      <div className="input-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL de la musique"
        />
        <input
          type="text"
          value={musicName}
          onChange={(e) => setMusicName(e.target.value)}
          placeholder="Nom de la musique"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Votre nom d'utilisateur"
        />
      </div>
      <div className="button-container">
        <button onClick={handleDownload} disabled={isDownloading} type="button">
          {isDownloading ? "Téléchargement en cours..." : "Télécharger"}
        </button>
      </div>
    </div>
  );
}

export default MusicDownloader;
