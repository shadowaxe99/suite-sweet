
const express = require('express');
const router = express.Router();
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const sessionId = uuid.v4();

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(process.env.GOOGLE_PROJECT_ID, sessionId);

router.post('/dialog', async (req, res) => {
  const { text, lang } = req.body;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: lang,
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
