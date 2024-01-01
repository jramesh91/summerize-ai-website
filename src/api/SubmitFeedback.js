// /api/submitFeedback.js

const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { feedback, email } = req.body;
    try {
      await base('YourTableName').create({
        "YourFeedbackFieldName": feedback,
        "YourEmailFieldName": email
      });

      res.status(200).json({ message: 'Feedback submitted successfully.' });
    } catch (error) {
      console.error('Error submitting feedback to Airtable', error);
      res.status(500).json({ error: 'Failed to submit feedback.' });
    }
  } else {
    // Handle any other HTTP methods
    res.status(405).end();
  }
};
