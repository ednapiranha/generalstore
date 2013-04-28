define([],
  function () {
  'use strict';

  return {
    "level": 1,
    "location": "Test",
    "background_image": "test.jpg",
    "audio": false,
    "description": "Test",
    "characters": {
      "1-bear": {
        "name": "bear",
        "image": "bear.png",
        "left": 100,
        "top": 400,
        "requires": "salmon",
        "first_says": "test",
        "finally_says": "...",
        "gives": "fur"
      }
    },
    "items": {
      "1-car": {
        "name": "car",
        "image": "car.png",
        "left": 500,
        "top": 400,
        "requires": "",
        "gives": "",
        "levels_up_to": 2
      }
    }
  };
});
