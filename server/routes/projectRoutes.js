import express from "express";
import { addMember, createProject, deleteProject, updateProject } from "../controllers/projectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const projectRouter = express.Router();

projectRouter.post("/", createProject);
projectRouter.put("/", updateProject);
projectRouter.post("/:projectId/addMember", addMember);
projectRouter.delete("/:projectId", protect, deleteProject);


export default projectRouter;
