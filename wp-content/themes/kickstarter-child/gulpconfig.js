module.exports = {
  "theme": {
    "production": "London Hearing Specialist",
    "description": "Child theme for the Kickstarter/Red Frog Studio",
    "name": "London Hearing Specialist",
    "url": "http://londonhearingspecialist.co.uk",
    "version": "1.0.2"
  },
  "project": {
    "name": "londonhearingspecialist",
    "parent": "redfrogstudio"
  },
  "paths": {
    "node_modules": "./node_modules/"
  },
  "modernizr": {
    "options": [
      "setClasses",
      "addTest",
      "html5printshiv",
      "testProp",
      "fnBind"
    ],
    "tests": [
      "webworkers",
      [
        "cssgrid",
        "cssgridlegacy"
      ]
    ]
  },
  "settings": {
    "useGulpSassGraph": false
  },
  "autoprefixer": {
    "overrideBrowserslist": [
      "last 2 versions",
      "> 1%"
    ],
    "remove": true,
    "grid": "autoplace",
    "cascade": false
  }
};