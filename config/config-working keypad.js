/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
  address: "localhost",
  port: 8080,
  basePath: "/",
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

  useHttps: false,
  httpsPrivateKey: "",
  httpsCertificate: "",

  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"],
  timeFormat: 12,
  units: "imperial",

  modules: [
  {
      module: "MMM-KeyBindings",
      config: {
 enableKeyboard: true,
    enableKeypad: false,
    enableJoystick: false,

    evdev: {}
      },
      notificationReceived: function (notification, payload, sender) {
        if (notification === "KEY_PRESSED") {
          console.log("KEY PRESSED: " + payload.keyName);

          switch (payload.keyName) {
            case "a":
              this.sendNotification("PAGE_SELECT", 2);
              break;
            case "k":
              this.sendNotification("PAGE_SELECT", 3);
              break;
            case "f":
              this.sendNotification("PAGE_SELECT", 0);
              break;
            case "ArrowRight":
              this.sendNotification("PAGE_INCREMENT");
              break;
            case "ArrowLeft":
              this.sendNotification("PAGE_DECREMENT");
              break;
          }
        }
      }
    },
    {
      module: "MMM-pages",
      config: {
        modules: [
          ["clock", "calendar"],   // Page 0
          ["weather"],             // Page 1
          ["newsfeed"],            // Page 2
          ["compliments"]          // Page 3
        ],
        fixed: ["alert"],
        animationTime: 1000,
        rotationTime: 0
      }
    },
    {
      module: "compliments",
      position: "top_bar"
    },
    {
      module: "weather",
      position: "top_right",
      config: {
        weatherProvider: "openmeteo",
        type: "current",
        lat: 39.1286407,
        lon: -94.3467165
      }
    },
    {
      module: "calendar",
      header: "Family",
      position: "top_left",
      classes: "day-family",
      config: {
        broadcastPastEvents: true,
        calendars: [
          {
            fetchInterval: 7 * 24 * 60 * 60 * 1000,
            symbol: "calendar-check",
            url: "https://calendar.google.com/calendar/ical/family04134277048364242440%40group.calendar.google.com/private-4a9d69ed7d4e0d027f2de2ffae39489a/basic.ics",
            name: "family"
          }
        ]
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
