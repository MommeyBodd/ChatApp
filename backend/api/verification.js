const axios = require("axios");

const verifyGoogleAccessToken = token =>
  axios.get(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`
  );

module.exports = { verifyGoogleAccessToken };
