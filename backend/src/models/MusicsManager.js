const AbstractManager = require("./AbstractManager");

class MusicsManager extends AbstractManager {
  constructor() {
    super({ table: "musics" });
  }

  addMusic(music) {
    return this.database.query(
      `insert into ${this.table} (userId, music, name, subtitle, inPlaylist, likes) values (?, ?, ?, ?, ?, ?)`,
      [music.id, music.music, music.name, music.subtitle, false, true]
    );
  }

  removeMusic(music) {
    console.info(music);
    return this.database.query(`delete from ${this.table} where id = ?`, [
      music,
    ]);
  }

  addLike(music, user) {
    return this.database.query(
      `insert into ${this.table} (userId, music, name, subtitle, image, inPlaylist, likes) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.id,
        music.link,
        music.name,
        music.subtitle,
        music.image,
        false,
        true,
      ]
    );
  }

  removeLike(music, user) {
    return this.database.query(
      `insert into ${this.table} (userId, music, name, subtitle, image, inPlaylist, likes) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.id,
        music.link,
        music.name,
        music.subtitle,
        music.image,
        false,
        false,
      ]
    );
  }

  getMusics(userId) {
    return this.database.query(`select * from ${this.table} where userId = ?`, [
      userId,
    ]);
  }

  getLikes(user) {
    return this.database.query(
      `select * from ${this.table} where userId = ? and likes = true`,
      [user.id]
    );
  }
}

module.exports = MusicsManager;
