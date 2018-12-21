const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      'name': 'Icon Name',
      'url': 'path/to/icon.svg',
    },
  ]);
});

module.exports = router;
