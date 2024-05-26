/* eslint-disable no-undef */
const path = require("path");
const httpGetCV = async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "assets",
      "PAING-SETT-KYAW.pdf"
    );
    res.download(filePath);
    console.log("succss downloaded");
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

module.exports = httpGetCV;
