const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
// server
const app = require(".");

// services
const {
  UserService,
  AuthService,
  StageService,
  TournamentService,
} = require("../services");

// controllers
const {
  UserController,
  AuthController,
  StageController,
  TournamentController,
} = require("../controllers");

// routes
const {
  UserRoutes,
  AuthRoutes,
  StageRoutes,
  TournamentRoutes,
} = require("../routes/index.routes");
// router
const Routes = require("../routes");

// models
const { User, Stage, Tournament } = require("../models");

// repositories
const {
  UserRepository,
  StageRepository,
  TournamentRepository,
} = require("../repositories");

const container = createContainer();

// register dependency injection
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    StageRoutes: asFunction(StageRoutes).singleton(),
    TournamentRoutes: asFunction(TournamentRoutes).singleton(),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    StageController: asClass(StageController.bind(StageController)).singleton(),
    TournamentController: asClass(
      TournamentController.bind(TournamentController)
    ).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    StageService: asClass(StageService).singleton(),
    TournamentService: asClass(TournamentService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    StageRepository: asClass(StageRepository).singleton(),
    TournamentRepository: asClass(TournamentRepository).singleton(),
  })
  .register({
    User: asValue(User),
    Stage: asValue(Stage),
    Tournament: asValue(Tournament),
  });

module.exports = container;
