import express from "express";
import ProfessionalProfileController from "@controllers/ProfessionalProfileController";
import listProfessionalProfilesValidations from "../middlewares/professional-profile/list-validations";
import showValidations from "../middlewares/professional-profile/show-validations";

const professionalProfilesRoutes = express.Router();

professionalProfilesRoutes.get(
  "/",
  listProfessionalProfilesValidations,
  ProfessionalProfileController.index
);
professionalProfilesRoutes.get(
  "/:id",
  showValidations,
  ProfessionalProfileController.show
);

export default professionalProfilesRoutes;
