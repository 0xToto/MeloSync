const AbstractManager = require("./AbstractManager");

class SettingsManager extends AbstractManager {
  constructor() {
    super({ table: "settings" });
  }

  addUserSettings(userId) {
    return this.database.query(
      `insert into ${this.table} (userId) values (?)`,
      [userId]
    );
  }

  changeSettings(columns, value, userId) {
    return this.database.query(
      `update ${this.table} set ${columns} = ? where userId = ?`,
      [value, userId]
    );
  }

  getSettings(userId) {
    return this.database.query(`select * from ${this.table} where userId = ?`, [
      userId,
    ]);
  }

  getSettingsByColumns(columns, userId) {
    return this.database.query(
      `select ${columns} from ${this.table} where userId = ?`,
      [userId]
    );
  }

}

module.exports = SettingsManager;
