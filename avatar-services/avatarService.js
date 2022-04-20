const Jimp = require("jimp");

class AvatarService {
  constructor(Storage, file, user) {
    this.storage = new Storage(file, user);
    this.pathFile = file.path;
  }

  async update() {
    await this.transform(this.pathFile);
    const transformedAvatar = await this.storage.save();
    return transformedAvatar;
  }

  async transform(avatarURL) {
    const pic = await Jimp.read(avatarURL);
    await pic
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(avatarURL);
  }
}

module.exports = AvatarService;
