const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  createAccount(user) {
    // Générer un timestamp pour la date d'inscription
    const registerDate = new Date().getTime();

    return this.database.query(
      `insert into ${this.table} (email, username, password, isVerified, token, isAdmin, registerDate, lastConnection, songsAdded, songsPlayed) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.email,
        user.username,
        user.password,
        false,
        user.secretToken,
        false,
        registerDate,
        registerDate,
        0,
        0,
      ]
    );
  }

  deleteAccount(user) {
    return this.database.query(`delete from ${this.table} where id = ?`, [
      user.id,
    ]);
  }

  checkAccount(user) {
    return this.database.query(
      `select * from ${this.table} where username = ? and password = ?`,
      [user.username, user.password]
    );
  }

  verifyAccount(user) {
    return this.database.query(
      `update ${this.table} set isVerified = ? where id = ?`,
      [true, user.id]
    );
  }

  login(user) {
    return this.database.query(
      `select * from ${this.table} where username = ? and password = ?`,
      [user.username, user.password]
    );
  }

  setBio(user) {
    return this.database.query(
      `update ${this.table} set bio = ? where id = ?`,
      [user.bio, user.id]
    );
  }

  setLastConnection(user) {
    const lastConnection = new Date().getTime();

    console.info("lastConnection :", lastConnection);
    console.info("user.id :", user.id);
    return this.database.query(
      `update ${this.table} set lastConnection = ? where id = ?`,
      [lastConnection, user.id]
    );
  }

  addOneMoreSongAdded(user) {
    return this.database.query(
      `UPDATE ${this.table} SET songsAdded = songsAdded + 1 WHERE id = ?`,
      [user.id]
    );
  }

  addOneMoreSongPlayed(user) {
    return this.database.query(
      `UPDATE ${this.table} SET songsPlayed = songsPlayed + 1 WHERE id = ?`,
      [user.id]
    );
  }

  update(user, stuff) {
    return this.database.query(
      `update ${this.table} set ${stuff} = ? where id = ?`,
      [user.title, user.id]
    );
  }

  getAllUsers() {
    return this.database.query(`select * from ${this.table}`);
  }

  getUserByMail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }

  getUserByUserName(username) {
    const columns = [
      "id",
      "email",
      "username",
      "bio",
      "isVerified",
      "isAdmin",
      "registerDate",
      "lastConnection",
      "songsAdded",
      "songsPlayed",
    ].join(", ");
    return this.database.query(
      `SELECT ${columns} FROM ${this.table} WHERE username = ?`,
      [username]
    );
  }

  getUserStats(username) {
    return this.database.query(
      `select songsAdded, songsPlayed from ${this.table} where username = ?`,
      [username]
    );
  }

  // RPC Content
  /*

  discordState, discordDetails, discordStartTimestamp, discordLargeImageText, discordSmallImageText, discordPartyId

  */

  sendRpc(user) {
    return this.database.query(
      `update ${this.table} set discordState = ?, discordDetails = ?, discordStartTimestamp = ?, discordLargeImageText = ?, discordSmallImageText = ?, discordPartyId = ? where id = ?`,
      [
        user.discordState,
        user.discordDetails,
        user.discordStartTimestamp,
        user.discordLargeImageText,
        user.discordSmallImageText,
        user.discordPartyId,
        user.id,
      ]
    );
  }

  // getRpc(username) {
  //   return this.database.query(
  //     `select discordState, discordDetails, discordStartTimestamp, discordLargeImageText, discordSmallImageText, discordPartyId FROM ${this.table} where username = ?`,
  //     [username]
  //   );
  // }

  async getRpc(username) {
    const columns = [
      "id",
      "discordState",
      "discordDetails",
      "discordStartTimestamp",
      "discordLargeImageText",
      "discordSmallImageText",
      "discordPartyId",
    ].join(", ");

    return this.database.query(
      `SELECT ${columns} FROM ${this.table} WHERE username = ?`,
      [username.username]
    );
  }

}

module.exports = UsersManager;
