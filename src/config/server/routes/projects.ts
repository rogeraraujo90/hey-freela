import express from "express";
import ProjectController from "@controllers/ProjectController";

const projectsRoutes = express.Router();

projectsRoutes.get("/", ProjectController.index);

export default projectsRoutes;
