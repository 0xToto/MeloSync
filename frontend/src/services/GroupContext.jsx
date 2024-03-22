import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GroupContext = createContext();

export function useGroupContext() {
  return useContext(GroupContext);
}

export function GroupProvider({ children }) {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [currentMusicObject, setCurrentMusicObject] = useState(new Audio());
  const [lastMusic, setLastMusic] = useState(null);
  const [lastMusicObject, setLastMusicObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [nextMusic, setNextMusic] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [users, setUsers] = useState([]); // [ { id: 1, username: "toto" }, { id: 2, username: "titi" }
  const [groupAdmin, setGroupAdmin] = useState(null); // { id: 1, username: "toto" }
  const [playlist, setPlaylist] = useState([]); // [ { id: 1, title: "toto" }, { id: 2, title: "titi" } ]

  async function getGroupUsers(groupAdminId) {
    await fetch(`http://localhost:443/group/${groupAdminId}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function getGroupAdmin(groupAdminId) {
    await fetch(`http://localhost:443/user/${groupAdminId}`)
      .then((response) => response.json())
      .then((data) => {
        setGroupAdmin(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function getPlaylist(groupAdminId) {
    await fetch(`http://localhost:443/playlist/${groupAdminId}`)
      .then((response) => response.json())
      .then((data) => {
        setPlaylist(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function addSongToPlaylist(song) {
    await fetch(`http://localhost:443/playlist/${groupAdmin.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const contextValue = useMemo(
    () => ({
      currentMusic,
      currentMusicObject,
      lastMusic,
      lastMusicObject,
      isPlaying,
      currentTime,
      nextMusic,
      volume,
      users,
      groupAdmin,
      playlist,
      updateCurrentMusic: setCurrentMusic,
      updateCurrentMusicObject: setCurrentMusicObject,
      updateLastMusic: setLastMusic,
      updateLastMusicObject: setLastMusicObject,
      updateIsPlaying: setIsPlaying,
      updateCurrentTime: setCurrentTime,
      updateNextMusic: setNextMusic,
      updateVolume: setVolume,
      updateUsers: setUsers,
      updateGroupAdmin: setGroupAdmin,
      updatePlaylist: setPlaylist,
    }),
    [
      currentMusic,
      currentMusicObject,
      lastMusic,
      lastMusicObject,
      isPlaying,
      currentTime,
      nextMusic,
      volume,
      users,
      groupAdmin,
      playlist,
    ]
  );

  return (
    <GroupContext.Provider value={contextValue}>
      {children}
    </GroupContext.Provider>
  );
}

GroupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
