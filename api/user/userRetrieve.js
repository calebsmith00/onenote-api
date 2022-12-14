import express, { Router } from "express";
import { getNotebooks, getPages, getSections } from "../../requests.js";
import { getPage } from "../../requests/exports.js";

const router = express.Router();

router.get("/:userId/retrieve-notebooks", async (req, res) => {
  const response = await getNotebooks({
    id: req.params.userId,
    expandQuery: true,
  });

  res.json(response);
});

router.get("/:userId/section/:sectionId/retrieve-pages", async (req, res) => {
  const response = await getPages({
    userId: req.params.userId,
    sectionId: req.params.sectionId,
    expandQuery: true,
  });

  res.json(response);
});

router.get(
  "/:userId/notebook/:notebookId/retrieve-sections",
  async (req, res) => {
    const response = await getSections({
      userId: req.params.userId,
      notebookId: req.params.notebookId,
      expandQuery: true,
    });

    res.send(response);
  }
);

router.get("/:userId/retrieve-page/:pid", async (req, res) => {
  if (!req.params.pid)
    return res.send({
      error: true,
      message: "[ERROR]: No page ID was supplied.",
    });

  const response = await getPage({
    userId: req.params.userId,
    pageId: req.params.pid,
  });

  res.send(response);
});

export default router;
