import express from "express";
import ProfessionalProfileController from "@controllers/ProfessionalProfileController";

const professionalProfilesRoutes = express.Router();

professionalProfilesRoutes.get("/", ProfessionalProfileController.index);

export default professionalProfilesRoutes;
