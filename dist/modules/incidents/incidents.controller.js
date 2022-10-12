"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllIncidentReports = exports.createIncidientReport = void 0;
const axios_1 = __importDefault(require("axios"));
const database_1 = __importDefault(require("../../utils/database"));
const API_KEY = process.env.API_KEY;
const createIncidientReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Validations
        const { client_id, incident_desc, city, country } = req.body;
        if (!client_id || !incident_desc || !city || !country) {
            res.send("Cannot be empty");
        }
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
        let weatherReport;
        yield axios_1.default
            .get(url)
            .then((response) => {
            weatherReport = response.data;
        })
            .catch((err) => {
            console.log(err.message);
        });
        const newIncident = yield database_1.default.incidentReport.create({
            data: {
                client_id: client_id,
                country,
                incident_desc,
                city,
                weather_report: weatherReport,
            },
        });
        res.json(newIncident);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createIncidientReport = createIncidientReport;
const getAllIncidentReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reports = yield database_1.default.incidentReport.findMany();
        if (reports.length > 0) {
            res.json(reports);
        }
        else {
            res.send("Reports are Empty");
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllIncidentReports = getAllIncidentReports;
//# sourceMappingURL=incidents.controller.js.map