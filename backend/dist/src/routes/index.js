"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var questions_routes_1 = __importDefault(require("./questions.routes"));
var answers_routes_1 = __importDefault(require("./answers.routes"));
//import * as specs from '../swagger.json';
var routes = express_1.Router();
routes.use('/questions', questions_routes_1.default);
routes.use('/answers', answers_routes_1.default);
// routes.use('/api-docs', swaggerUi.serve);
// routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
exports.default = routes;
//# sourceMappingURL=index.js.map