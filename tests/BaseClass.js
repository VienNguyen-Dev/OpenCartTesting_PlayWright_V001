
exports.BaseClass = class BaseClass {

  randomString(length = 5) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  randomNumber(length = 10) {
    const digits = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
  }

  randomStringAndNumber() {
    const randomAlphabetic = this.randomString(4);
    const randomNumeric = this.randomNumber(4);
    return `${randomAlphabetic}@${randomNumeric}`.toLowerCase();
  }
}
