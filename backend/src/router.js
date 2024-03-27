/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const ytdl = require("ytdl-core");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const upload = multer();

const musicFolderPath = path.join(__dirname, "../uploads");
router.use(express.static(musicFolderPath));

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const SettingsControllers = require("./controllers/settingsControllers");

router.get("/settings/:userId", SettingsControllers.getUserSettings);
router.post("/settings/:userId", SettingsControllers.addUserSettings);
router.put(
  "/settings/:columns/:value/:userId",
  SettingsControllers.changeSettings
);
router.get(
  "/settings/:columns/:userId",
  SettingsControllers.getSettingsByColumns
);

const userControllers = require("./controllers/usersControllers");

router.get("/users", userControllers.getUsers);
router.post("/users", userControllers.addUser);
router.delete("/users", userControllers.removeUser);
router.post("/users/login", userControllers.checkAccount);
router.get("/user/:username", userControllers.getUserByUserName);
router.post("/user/rpc", userControllers.sendRpc);
router.get("/user/rpc/get/:username", userControllers.getRpc);
// router.get("/user/stats/:user", userControllers.getUserStats);

router.post("/users/played/:id", userControllers.addOneMoreSongPlayed);
router.post("/users/added/:id", userControllers.addOneMoreSongAdded);
router.post("/users/lastlog/:id", userControllers.setLastConnection);

const musicsControllers = require("./controllers/musicsControllers");

router.get("/musics/:id", musicsControllers.getAllMusics);
router.post("/musics", musicsControllers.addMusic);
router.delete("/musics/:id", musicsControllers.removeMusic);

router.post("/upload", upload.none(), async (req, res) => {
  const { username, url, musicName } = req.body;

  try {
    // Récupérer l'utilisateur par son nom d'utilisateur
    const userResponse = await fetch(`http://localhost:443/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.info("userResponse :", userResponse.status);

    if (userResponse.status === 500) {
      console.error(`Erreur avec l'utilisateur ${username}.`);
      return res.status(404).json({
        error: `Erreur avec l'utilisateur ${username}.`,
      });
    }

    if (userResponse.status === 404) {
      console.error(
        `Utilisateur avec le nom d'utilisateur ${username} introuvable.`
      );
      return res.status(404).json({
        error: `Utilisateur avec le nom d'utilisateur ${username} introuvable.`,
      });
    }

    const userData = await userResponse.json();
    console.info("userData :", userData[0]);
    const userId = userData[0].id;

    // Téléchargement de la musique YouTube en format MP3
    const musicInfo = await ytdl.getBasicInfo(url);
    const downloadOptions = {
      filter: "audioonly",
      quality: "highestaudio",
    };
    const musicReadableStream = ytdl(url, downloadOptions);

    // Création du dossier pour l'utilisateur s'il n'existe pas
    const userFolder = `../uploads/${username}`;
    fs.mkdirSync(userFolder, { recursive: true }); // Utilisation de l'option recursive pour créer les dossiers parents si nécessaire

    // Enregistrement du fichier MP3 dans le dossier de l'utilisateur
    const filePath = `${userFolder}/${musicName}.mp3`;
    const musicWriteableStream = fs.createWriteStream(filePath);
    musicReadableStream.pipe(musicWriteableStream);

    musicWriteableStream.on("finish", () => {
      console.info("Musique téléchargée et enregistrée :", filePath);
      res.json({ success: true });

      const musicDetails = {
        name: musicName,
        subtitle: username,
        music: filePath.replace("../uploads/", ""),
        id: userId,
      };

      fetch("http://localhost:443/musics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(musicDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          console.info("Musique ajoutée avec succès :", data);
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout de la musique :", error);
        });
    });
  } catch (error) {
    console.error("Erreur lors du téléchargement :", error);
    return res.status(500).json({
      error: "Une erreur est survenue lors du téléchargement de la musique.",
    });
  }
});

// Définition de la route pour la lecture de la musique

router.get("/play/:username/:musicName", async (req, res) => {
  const { username, musicName } = req.params;

  try {
    // Obtenir le chemin complet du fichier audio
    const musicFilePath = path.join(
      __dirname,
      "../../uploads",
      username,
      `${musicName.replace(" ", "%")}`
    );

    console.info("musicFilePath :", musicFilePath);

    // Vérifier si le fichier audio existe
    if (!fs.existsSync(musicFilePath)) {
      console.error(
        `Fichier audio non trouvé pour l'utilisateur ${username} avec le nom de musique ${musicName}.`
      );
      return res.status(404).json({
        error: `Fichier audio non trouvé pour l'utilisateur ${username} avec le nom de musique ${musicName}.`,
      });
    }

    // Renvoyer le fichier audio
    res.sendFile(musicFilePath);
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier audio :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du fichier audio." });
  }
});

module.exports = router;
