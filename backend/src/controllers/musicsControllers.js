const models = require("../models");

const getAllMusics = (req, res) => {
  models.musics
    .getMusics(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addMusic = (req, res) => {
  models.musics
    .addMusic(req.body)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const removeMusic = (req, res) => {
  models.musics
    .removeMusic(req.params.id)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  getAllMusics,
  addMusic,
  removeMusic,
};
