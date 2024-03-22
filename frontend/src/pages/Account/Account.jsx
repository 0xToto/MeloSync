import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";

import { UserContext } from "../../services/UserContext";
import { useMusicContext } from "../../services/MusicContext";
import MainLayout from "../../layouts/MainLayout";
import HeaderAccount from "./Header";
import Selector from "./Selector";
import Content from "./Selector/Content";
import Feed from "./Actuality/Feed";
import NewPostForm from "./Actuality/NewPostForm";
import Stats from "./Stats";
import MusicChannels from "./Actuality/MusicChannels";

function Account() {
  const {
    currentMusic,
    currentMusicObject,
    updateCurrentMusic,
    updateCurrentMusicObject,
    updateLastMusic,
    updateLastMusicObject,
    updateIsPlaying,
  } = useMusicContext();

  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [playlists, setPlaylists] = useState([]);
  const { user } = useContext(UserContext);

  const [userId, setUserId] = useState(null);
  const [showFeed, setShowFeed] = useState(false);
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showChannels, setShowChannels] = useState(false);
  const [showStats, setShowStats] = useState(true); // Par défaut, afficher le composant Stats

  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Channel 1",
      description: "This is Channel 1 description",
      users: 20,
      currentTrack: {
        title: "Song Title",
        artist: "Artist Name",
      },
    },
    {
      id: 2,
      name: "Channel 2",
      description: "This is Channel 2 description",
      users: 15,
      currentTrack: {
        title: "Another Song",
        artist: "Another Artist",
      },
    },
  ]);

  const handleClick = (e) => {
    const target = e.target.textContent;

    setShowFeed(target === "Fil d'actualité");
    setShowNewPostForm(target === "Fil d'actualité");
    setShowContent(target === "Paramètres");
    setShowChannels(target === "En direct");
    setShowStats(target !== "Fil d'actualité" && target !== "Paramètres");
  };

  return (
    <MainLayout>
      <div className={styles.centerSection}>
        <div className={styles.centerSlider}>
          <HeaderAccount />
          <Selector onClick={handleClick} />

          {showNewPostForm && <NewPostForm />}
          {showFeed && <Feed />}

          {showChannels && <MusicChannels channels={channels} />}

          {showContent && <Content />}
          {showStats && <Stats />}
        </div>
      </div>
    </MainLayout>
  );
}

export default Account;
