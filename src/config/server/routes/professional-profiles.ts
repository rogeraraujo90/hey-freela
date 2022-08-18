import express from "express";
import ProfessionalProfileController from "@controllers/ProfessionalProfileController";

const professionalProfilesRoutes = express.Router();

professionalProfilesRoutes.get("/", ProfessionalProfileController.index);
professionalProfilesRoutes.get("/:id", ProfessionalProfileController.find);

export default professionalProfilesRoutes;
