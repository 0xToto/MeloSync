// MainLayout.jsx
import React from "react";
import Menu from "../pages/Home/Menu";
import PlaylistList from "../pages/Home/PlaylistList";
import MusicPlayer from "../pages/Home/MusicPlayer";
import styles from "./index.module.scss";
import { useMusicContext } from "../services/MusicContext";
import AddSongs from "../pages/Home/RightPart/AddSongs";
import User from "../pages/Home/RightPart/User";
import yt from "../assets/yt.png";
import soundcloud from "../assets/soundcloud.png";
import deezer from "../assets/deezer.png";
import spotify from "../assets/spotify.png";

function MainLayout({ children }) {
  const { currentMusic } = useMusicContext();

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Menu />
          <PlaylistList />
        </div>
        <div className={styles.centerSection}>{children}</div>
        <div className={styles.rightSection}>
          <User />
          <AddSongs
            title="Youtube"
            subtitle="Importer une musique via youtube"
            image={yt}
          />
          <AddSongs
            title="SoundCloud"
            subtitle="Importer une musique via soundcloud"
            image={soundcloud}
          />
          <AddSongs
            title="Deezer"
            subtitle="Importer une musique via deezer"
            image={deezer}
          />
          <AddSongs
            title="Spotify"
            subtitle="Importer une musique via spotify"
            image={spotify}
          />
        </div>
      </div>
      <div className={styles.bottomSection}>
        {/* Inclure le MusicPlayer ici pour qu'il soit toujours rendu */}
        {currentMusic && <MusicPlayer />}
      </div>
    </div>
  );
}

export default MainLayout;
