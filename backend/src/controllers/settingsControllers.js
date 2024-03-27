const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
const models = require("../models");

dotenv.config();

const getUsers = (req, res) => {
  models.users
    .getAllUsers()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserSettings = (req, res) => {
  models.settings
    .getSettings(req.params.userId)
    .then(([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addUserSettings = (req, res) => {
  models.settings
    .addUserSettings(req.params.userId)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const changeSettings = (req, res) => {
  models.settings
    .changeSettings(req.params.columns, req.params.value, req.params.userId)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getSettingsByColumns = (req, res) => {
  models.settings
    .getSettingsByColumns(req.params.columns, req.params.userId)
    .then(([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(rows).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  getUserSettings,
  addUserSettings,
  changeSettings,
  getSettingsByColumns,
};
