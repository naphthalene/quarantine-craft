module.exports = {
  scripts: {
    build: {
      // learn more about Webpack here: https://webpack.js.org/
      default: "webpack serve",
      prod: "NODE_ENV=production webpack",
      analyze: "NODE_ENV=production WEBPACK_BUNDLE_ANALYZER_MODE=server webpack"
    },
    lint: "eslint src/**/*.{ts,tsx}",
    api: {
      default: "json2ts -i ../api/scraper/schemas/**/*.json -o src/components/qcraft/api/"
    }
  }
};
