const axios = require("axios");
const router = require("express").Router();
const AWS = require("aws-sdk");

const translate = new AWS.Translate({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2"
});

router.get('/translate/:text/:lang', (req, res) => {

  var queryText = req.params.text
  var queryLang = req.params.lang
  const params = {
    SourceLanguageCode: 'auto',
    TargetLanguageCode: queryLang,
    Text: queryText,
  };

  translate.translateText(params, (err, data) => {
    if (err) {
      return res.send(err);
    };
    console.log(data)
    res.json(data);
  });
});


module.exports = router;
