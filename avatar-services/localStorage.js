const path = require("path");
const fs = require("fs/promises");

const {users} = require('../controllers')
console.log(users)


class LocalStorage {
  constructor(file, user) {
    this.file = file;
    this.user = user;
    this.static = process.env.STATIC_FOLDER;

  }

  async save() {
    await fs.mkdir(this.static, { recursive: true });
    await fs.rename(
      this.file.path,
      path.join(this.static, this.file.filename)
    );
    const avatarURL = path.normalize(path.join(this.static, this.file.filename));

    await users.avatarUpdate(this.user.id, avatarURL);
    return avatarURL;
  }
}

module.exports = LocalStorage;
