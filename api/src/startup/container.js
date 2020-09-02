const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
// server
const app = require(".");

// services
const {} = require("../services");

// controllers
const {} = require("../controllers");

// routes
const {} = require("../routes/index.routes");
// router
const Routes = require("../routes");

// repositories
const {} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({})
  .register({})
  .register({})
  .register({})
  .register({});

module.exports = container;
