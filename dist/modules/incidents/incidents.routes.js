"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const incidents_controller_1 = require("./incidents.controller");
const express_1 = require("express");
const validators_1 = __importDefault(require("../../utils/validators"));
const validator_1 = __importDefault(require("../../middleware/validator"));
const router = (0, express_1.Router)();
router.post("/", (0, validator_1.default)(validators_1.default), incidents_controller_1.createIncidientReport);
router.get("/", incidents_controller_1.getAllIncidentReports);
exports.default = router;
//# sourceMappingURL=incidents.routes.js.map