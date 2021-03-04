const path = require("path");

const stubs = {
  economy_stub: require('./__stubs__/economy.json'),
  mcmmo_stub: require('./__stubs__/mcmmo.json'),
};

module.exports = {
  port: 3000,
  contentBase: path.join(__dirname, "public"),
  historyApiFallback: true,
  watchContentBase: true,
  hot: true,

  proxy: {
    '/api/': {
      bypass: (req, res) => {
        console.debug(`>> ${req.url}`);
        switch (req.url) {
          case '/api/v1/economy': {
            res.send(stubs.economy_stub);
            break;
          }
          case '/api/v1/mcmmo': {
            res.send(stubs.mcmmo_stub);
            break;
          }
          default: {
            res.send('{}');
            break;
          }
        }
        return '';
      }
    },
  },
};
