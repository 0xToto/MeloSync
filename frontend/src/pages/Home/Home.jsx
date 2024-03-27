import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";
import Slider from "./Slider";
import SongsList from "./SongsList";
import likes from "../../assets/likes.png";

import vingt from "../../assets/songs/25G.mp3";

import { UserContext } from "../../services/UserContext";
import { useMusicContext } from "../../services/MusicContext";
import MainLayout from "../../layouts/MainLayout";

const playlists1 = [
  {
    id: 1,
    name: "25 G",
    subtitle: "Ninho",
    image: likes,
    music: vingt,
  },
];

function Home() {
  const {
    currentMusic,
    currentMusicObject,
    updateCurrentMusic,
    isPlaying,
    updateCurrentMusicObject,
    updateLastMusic,
    updateLastMusicObject,
    updateIsPlaying,
  } = useMusicContext();

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [playlists, setPlaylists] = useState([]);
  const { user } = useContext(UserContext);

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Récupérer l'ID de l'utilisateur pour charger ses musiques
    const fetchUserId = async () => {
      try {
        if (user) {
          const response = await fetch(`http://localhost:443/user/${user}`);
          if (!response.ok) {
            // setUserId(null);
            throw new Error(
              "Erreur lors de la récupération de l'ID de l'utilisateur"
            );
          }
          const data = await response.json();
          setUserId(data[0].id);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'ID de l'utilisateur :",
          error
        );
      }
    };

    fetchUserId();
  }, [user]);

  useEffect(() => {
    // Charger les musiques de l'utilisateur avec un intervalle de 5 secondes
    const fetchUserMusicsWithInterval = async () => {
      try {
        if (user && userId) {
          const response = await fetch(`http://localhost:443/musics/${userId}`);
          if (!response.ok) {
            setPlaylists(playlists1);
            throw new Error(
              "Erreur lors de la récupération des musiques de l'utilisateur"
            );
          }
          const data = await response.json();
          setPlaylists(data);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des musiques de l'utilisateur :",
          error
        );
      }
    };
    fetchUserMusicsWithInterval();
    // setInterval(fetchUserMusicsWithInterval, 5000);
  }, [user, userId]);

  useEffect(() => {
    const currentMusic1 = playlists[currentMusicIndex];

    if (currentMusic1) {
      if (!isPlaying) {
        // updateCurrentMusic(currentMusic.music);
        updateCurrentMusicObject(currentMusic);
        updateLastMusic(currentMusic);
        updateLastMusicObject(currentMusicObject);
        updateIsPlaying(true);
      }

    }
  }, [currentMusicIndex, playlists]);

  return (
    <MainLayout>
      <div className={styles.centerSection}>
        <div className={styles.centerSlider}>
          <Slider />
        </div>
        <SongsList
          playlists={playlists}
          onSongClick={(song) => {
            const songIndex = playlists.findIndex(
              (item) => item.id === song.id
            );
            setCurrentMusicIndex(songIndex);
            updateCurrentMusicObject(
              new Audio(`http://localhost:443/play/${song.music}`)
            );
          }}
          image={likes}
        />
      </div>
    </MainLayout>
  );
}

export default Home;
