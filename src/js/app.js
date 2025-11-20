export default class Validator {
  static validateUsername(nick) {
    const basicPattern = /^[A-Za-z](?:[A-Za-z0-9_-]*[A-Za-z])?$/;
    const hasLongDigits = /\d{4,}/;

    return basicPattern.test(nick) && !hasLongDigits.test(nick);
  }
}
