import express from "express";
import professionalProfilesRoutes from "./routes/professional-profiles";
import projectsRoutes from "./routes/projects";

const appRoutes = express.Router();

appRoutes.use("/projects", projectsRoutes);
appRoutes.use("/professional-profiles", professionalProfilesRoutes);

export default appRoutes;
