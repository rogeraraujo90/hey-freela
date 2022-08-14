import express from "express";
import ProjectsController from "../../../controllers/ProjectsController";

const projectsRoutes = express.Router();

projectsRoutes.get("/", ProjectsController.index);

export default projectsRoutes;
