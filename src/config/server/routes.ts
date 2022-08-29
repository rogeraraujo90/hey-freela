import express from "express";
import usersRoutes from "@config/server/routes/users";
import professionalProfilesRoutes from "@config/server/routes/professional-profiles";
import projectsRoutes from "@config/server/routes/projects";

const appRoutes = express.Router();

appRoutes.use("/projects", projectsRoutes);
appRoutes.use("/professional-profiles", professionalProfilesRoutes);
appRoutes.use("/users", usersRoutes);

export default appRoutes;
