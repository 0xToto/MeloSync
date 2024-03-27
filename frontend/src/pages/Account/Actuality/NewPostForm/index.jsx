// NewPostForm.js

import React, { useState } from "react";
import styles from "./index.module.scss";

function NewPostForm({ onAddPost }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleNotifs = async () => {
    // Send push notification through electron

    const { ipcRenderer } = window.require("electron");
    ipcRenderer.send("notification", {
      title: "Nouveau post",
      body: "Un nouveau post a été publié",
      silent: false,
    });

    console.info("Notification sent");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Créer un nouvel objet post avec les données du formulaire
    const newPost = {
      author: "John Doe", // Remplacez par le nom de l'utilisateur actuel
      profilePicture: "url_de_la_photo_de_profil", // Remplacez par l'URL de la photo de profil de l'utilisateur
      content,
      date: new Date().toISOString(),
      reactions: {
        like: 0,
        love: 0,
        laugh: 0,
      },
      image,
    };

    // Appeler la fonction onAddPost pour ajouter le nouveau post
    onAddPost(newPost);

    // Réinitialiser les champs du formulaire
    setContent("");
    setImage(null);
  };

  return (
    <div className={styles.newPostForm}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.contentInput}
          placeholder="Quoi de neuf ? 💭 (499 caractères max)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className={styles.bottomBtn}>
          <button
            className={styles.Btn}
            type="button"
            onChange={(e) => setImage(e.target.files[0])}
            onClick={handleNotifs}
          >
            <svg
              className={styles.svgIcon2}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
              width="24"
            >
              <path strokeLinecap="round" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
            </svg>
            <span className={styles.tooltip}>Envoyer</span>
          </button>
          <button
            className={styles.Btn}
            type="button"
            onChange={(e) => setImage(e.target.files[0])}
          >
            <svg
              className={styles.svgIcon2}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
              width="24"
            >
              <path
                fill="currentColor"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
            </svg>
            <span className={styles.tooltip}>Importer une image</span>
          </button>
          <button
            className={styles.Btn}
            type="button"
            onChange={(e) => setImage(e.target.files[0])}
          >
            <svg
              className={styles.svgIcon2}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              width="24"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            <span className={styles.tooltip}>Importer une image</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
