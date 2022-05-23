import express, { Router } from "express";
import {
  createTemplate,
  createNotebook,
  createSection,
} from "../../requests.js";

const router = express.Router();

router.post("/:userId/section/:sectionId/create/template", async (req, res) => {
  const response = await createTemplate({
    userId: req.params.userId,
    sectionId: req.params.sectionId,
    requestBody:
      "<html><head><title>Test</title></head><body><h1>Test</h1></body></html>",
  });

  res.send("Hello world");
});

router.post("/:userId/create-notebook", async (req, res) => {
  if (!req.body) return;

  const displayName = req.body["template-title"];
  const response = await createNotebook({
    userId: req.params.userId,
    requestBody: {
      displayName,
    },
  });

  res.send(response);
});

router.post("/:userId/create-section", async (req, res) => {
  if (!req.body) return;

  const displayName = req.body["template-title"];
  const response = await createSection({
    notebookId: req.body.notebookId,
    userId: req.params.userId,
    requestBody: {
      displayName,
    },
  });

  res.send(response);
});

export default router;
