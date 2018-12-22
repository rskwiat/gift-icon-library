const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      "key": "battery_1",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/batt_b.svg",
      "name": "Blue Battery",
    },
    {
      "key": "battery_2",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/batt_g.svg",
      "name": "Green Battery",
    },
    {
      "key": "battery_3",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/batt_p.svg",
      "name": "Pink Battery",
    },
    {
      "key": "coins",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/coins.svg",
      "name": "coins",
    },
    {
      "key": "default",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/default.svg",
      "name": "default",
    },
    {
      "key": "gift_p",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/gift_p.svg",
      "name": "Gift Box Pink",
    },
    {
      "key": "gift_b",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/gift_b.svg",
      "name": "Gift Box Blue",
    },
    {
      "key": "gift_r",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/gift_r.svg",
      "name": "Gift Box Red",
    },
    {
      "key": "heart_g",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/heart_g.svg",
      "name": "Heart Green",
    },
    {
      "key": "heart_p",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/heart_p.svg",
      "name": "Heart Pink",
    },
    {
      "key": "heart_r",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/heart_r.svg",
      "name": "Heart Red",
    },
    {
      "key": "star_b",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/star_b.svg",
      "name": "Blue Stars",
    },
    {
      "key": "star_p",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/star_p.svg",
      "name": "Pink Stars",
    },
    {
      "key": "star_y",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/star_y.svg",
      "name": "Yellow Stars",
    },
    {
      "key": "time_sand",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/time_sand.svg",
      "name": "Hourglass",
    },
    {
      "key": "time_watch",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/time_watch.svg",
      "name": "Watch",
    },
    {
      "key": "turn",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/turn.svg",
      "name": "Turn",
    },
    {
      "key": "unlock",
      "svgURL": "http://cdn.mediabrix.com/creative/pubgifts/unlock.svg",
      "name": "Unlock",
    }
  ]);
});

module.exports = router;
