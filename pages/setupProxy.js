const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );

  app.use(morgan('combined'));
};