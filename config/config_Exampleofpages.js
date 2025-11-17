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
  modules: [
    {
      module: 'MMM-pages',
      config: {
        timings: {
          default: 5000,
          2: 20000
        },
        modules: [
          ['compliments'],
          ['clock'],
          ['newsfeed'],
        ]
      }
    },
    {
      module: 'compliments',
      position: 'top_bar',
      config: {
        compliments: {
          anytime: ['Test MMM-pages: Module name based configuration'],
        }
      }
    },
    {
      module: 'clock',
      position: 'top_bar'
    },
    {
      module: 'newsfeed',
      position: 'middle_center',
      config: {
        feeds: [
          {
            title: 'New York Times',
            url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'
          }
        ]
      }
    },
  ]
};

/** ************* DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') { module.exports = config; }



