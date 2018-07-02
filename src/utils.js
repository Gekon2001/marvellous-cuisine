module.exports = {
  encrypt(buf) {
    function randomInt(low, high) {
      return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    function randomChar(str) {
      return str.charAt(randomInt(0, str.length - 1));
    }

    function randomAlphabet(len) {
      var i, seq = "";
      for (i = 1; i <= len; i = i + 1) {
        seq += randomChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURTUVWXYZ");
      }
      return seq;
    }

    var result = [];
    var maskPos = 0;
    for (var i = 0; i < buf.length; ++i) {
      maskPos = buf.charCodeAt(i);
      maskPos += 6;
      maskPos += randomAlphabet(3);
      result.push(maskPos);
    }

    return result.join("%");
  },
}