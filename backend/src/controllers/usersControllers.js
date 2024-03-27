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

const addUser = (req, res) => {
  models.users
    .createAccount(req.body)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating user");
    });
};

const removeUser = (req, res) => {
  models.users
    .deleteAccount(req.body)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const checkAccount = (req, res) => {
  models.users
    .checkAccount(req.body)
    .then(([rows]) => {
      console.info(req.body);

      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        delete req.body.password;
        const token = jsonwebtoken.sign(req.body, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).send({
          ...req.body,
          token,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByMail = (req, res) => {
  models.users
    .getUserByMail(req.body.email)
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

const getUserByUserName = (req, res) => {
  models.users
    .getUserByUserName(req.params.username)
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

const addOneMoreSongAdded = (req, res) => {
  models.users
    .addOneMoreSongAdded(req.params)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addOneMoreSongPlayed = (req, res) => {
  models.users
    .addOneMoreSongPlayed(req.params)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const setLastConnection = (req, res) => {
  models.users
    .setLastConnection(req.params)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserStats = (req, res) => {
  models.users
    .getUserStats(req.params)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const sendRpc = (req, res) => {
  console.info(req.body);
  models.users
    .sendRpc(req.body)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getRpc = (req, res) => {
  models.users
    .getRpc(req.params)
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  addUser,
  removeUser,
  checkAccount,
  getUserByMail,
  getUserByUserName,
  addOneMoreSongAdded,
  addOneMoreSongPlayed,
  setLastConnection,
  getUserStats,
  sendRpc,
  getRpc,
};
