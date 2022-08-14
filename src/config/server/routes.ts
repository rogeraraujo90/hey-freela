import express from "express";
import projectsRoutes from "./routes/projects";

const appRoutes = express.Router();

appRoutes.use("/projects", projectsRoutes);

export default appRoutes;
