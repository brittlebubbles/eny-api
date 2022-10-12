import {
  createIncidientReport,
  getAllIncidentReports,
} from "./incidents.controller";

import { Router } from "express";
import incidentSchema from "../../utils/validators";
import validate from "../../middleware/validator";

const router = Router();

router.post("/", validate(incidentSchema), createIncidientReport);
router.get("/", getAllIncidentReports);

export default router;
