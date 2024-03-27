import React, { useState } from "react";
import styles from "./index.module.scss";
import ClassicPost from "../Posts/ClassicPost";
import NewMusicPost from "../Posts/NewMusicPost";
import GroupPost from "../Posts/GroupPost";
import SponsoredPost from "../Posts/SponsoredPost";
import BadgePost from "../Posts/BadgePost";
import GroupEndPost from "../Posts/GroupEndPost";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: "classic",
      author: "John Doe",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet mollis diam, at suscipit est. Curabitur facilisis tincidunt nisi molestie cursus. Suspendisse non tortor leo. Vestibulum accumsan dui a vulputate dapibus. Suspendisse ac ante et risus fringilla pretium. Nulla massa felis, consequat sit amet auctor nec, pharetra at ligula viverra.",
      date: "2023-07-20",
      reactions: {
        like: 5,
        love: 3,
        laugh: 2,
      },
    },
    {
      id: 2,
      type: "newMusic",
      author: "John Doe",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      musicTitle: "Sample Music",
      musicArtist: "Sample Artist",
      musicCover:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134987592765546606/6.png",
      image:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134987592765546606/6.png",
      date: "2023-07-20",
      reactions: {
        like: 2,
        love: 1,
        listen: 6,
      },
    },
    {
      id: 3,
      type: "group",
      author: "John Doe",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      content: "Join our music group!",
      groupCover:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134988844782075974/5.png",
      image:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134987592765546606/6.png",
      date: "2023-07-20",
      reactions: {
        like: 3,
        love: 2,
        join: 4,
      },
    },
    {
      id: 4,
      type: "sponsored",
      author: "Melosync",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      image:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134987592765546606/6.png",
      content: "Check out our latest features!",
      date: "2023-07-20",
      reactions: {
        like: 1,
        love: 0,
      },
    },
    {
      id: 5,
      type: "badge",
      author: "John Doe",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      image:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      badgeName: "Sample Badge",
      badgeExperience: "Intermediate",
      badgeImage:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134988865220919346/8.png",
      date: "2023-07-20",
      reactions: {
        like: 4,
        love: 2,
      },
    },
    {
      id: 6,
      type: "groupEnd",
      author: "John Doe",
      profilePicture:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png",
      image:
        "https://cdn.discordapp.com/attachments/1134304468532461630/1134987592765546606/6.png",
      groupDuration: "1 week",
      songsListened: 25,
      date: "2023-07-20",
      reactions: {
        like: 6,
        love: 3,
        clap: 10,
      },
    },
    // Add more posts here
  ]);

  return (
    <div className={styles.feed}>
      {posts.map((post) => {
        switch (post.type) {
          case "classic":
            return <ClassicPost key={post.id} post={post} />;
          case "newMusic":
            return <NewMusicPost key={post.id} post={post} />;
          case "group":
            return <GroupPost key={post.id} post={post} />;
          case "sponsored":
            return <SponsoredPost key={post.id} post={post} />;

          case "groupEnd":
            return <GroupEndPost key={post.id} post={post} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Feed;
