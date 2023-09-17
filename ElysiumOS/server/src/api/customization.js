
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Customization = require('../models/Customization');

// @route   GET api/customization
// @desc    Get user customization
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const customization = await Customization.findOne({ user: req.user.id });
    res.json(customization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/customization
// @desc    Create or update user customization
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('personality', 'Personality is required').not().isEmpty(),
      check('accent', 'Accent is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, personality, accent } = req.body;

    try {
      let customization = await Customization.findOne({ user: req.user.id });

      if (customization) {
        // Update
        customization = await Customization.findOneAndUpdate(
          { user: req.user.id },
          { $set: { name, personality, accent } },
          { new: true }
        );

        return res.json(customization);
      }

      // Create
      customization = new Customization({
        user: req.user.id,
        name,
        personality,
        accent,
      });

      await customization.save();

      res.json(customization);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
