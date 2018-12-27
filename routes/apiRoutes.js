const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      "key": "battery_1",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/batt_b.svg",
      "name": "Blue Battery",
    },
    {
      "key": "battery_2",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/batt_g.svg",
      "name": "Green Battery",
    },
    {
      "key": "battery_3",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/batt_p.svg",
      "name": "Pink Battery",
    },
    {
      "key": "coins",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/coins.svg",
      "name": "coins",
    },
    {
      "key": "default",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/default.svg",
      "name": "default",
    },
    {
      "key": "gift_p",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/gift_p.svg",
      "name": "Gift Box Pink",
    },
    {
      "key": "gift_b",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/gift_b.svg",
      "name": "Gift Box Blue",
    },
    {
      "key": "gift_r",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/gift_r.svg",
      "name": "Gift Box Red",
    },
    {
      "key": "heart_g",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/heart_g.svg",
      "name": "Heart Green",
    },
    {
      "key": "heart_p",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/heart_p.svg",
      "name": "Heart Pink",
    },
    {
      "key": "heart_r",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/heart_r.svg",
      "name": "Heart Red",
    },
    {
      "key": "star_b",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/star_b.svg",
      "name": "Blue Stars",
    },
    {
      "key": "star_p",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/star_p.svg",
      "name": "Pink Stars",
    },
    {
      "key": "star_y",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/star_y.svg",
      "name": "Yellow Stars",
    },
    {
      "key": "time_sand",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/time_sand.svg",
      "name": "Hourglass",
    },
    {
      "key": "time_watch",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/time_watch.svg",
      "name": "Watch",
    },
    {
      "key": "turn",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/turn.svg",
      "name": "Turn",
    },
    {
      "key": "unlock",
      "svgURL": "https://s3-us-west-2.amazonaws.com/icon-gallery/unlock.svg",
      "name": "Unlock",
    },
  ]);
});

module.exports = router;
