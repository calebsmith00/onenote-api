import express from "express";
import {
  createTemplate,
  createNotebook,
  createSection,
  createPage,
} from "../../requests.js";
import { notebookExists, sectionExists } from "../../requests/exports.js";

const router = express.Router();

router.post("/:userId/create-notebook", async (req, res) => {
  if (!req.body) return;

  const { userId } = req.params;
  const foundNotebook = await notebookExists({
    userId,
    notebookName: "Templates",
  });

  if (foundNotebook) return res.send({ id: foundNotebook });

  const response = await createNotebook({
    userId: req.params.userId,
    requestBody: {
      displayName: "Templates",
    },
  });

  res.send(response);
});

router.post("/:userId/create-section", async (req, res) => {
  if (!req.body) return;

  const { userId } = req.params;
  const displayName = req.body["template-title"];
  const notebookId = req.body["notebookId"];
  const sectionName = req.body["sectionName"] || displayName;
  if (!displayName || !notebookId || !sectionName) return;

  const foundSection = await sectionExists({
    userId,
    sectionName,
  });
  if (foundSection) return res.send({ id: foundSection });

  const response = await createSection({
    notebookId,
    userId,
    sectionName,
  });

  res.send(response);
});

router.post("/:userId/section/:sectionId/create-page", async (req, res) => {
  if (!req.body) return;

  const response = await createPage({
    sectionId: req.params.sectionId,
    userId: req.params.userId,
    requestBody: req.body,
  });

  res.send(response);
});

export default router;
