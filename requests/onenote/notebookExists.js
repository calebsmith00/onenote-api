import { callAPI } from "../../callMsGraph.js";

export async function notebookExists({ userId, notebookName }) {
  if (!notebookName) return;

  const filterClause = `$filter=startswith(displayName,'${notebookName}')`;
  const response = await callAPI({
    url: `${userId}/onenote/notebooks?${filterClause}`,
  });
  const values = response.value || [];

  if (values.length > 0) return response.value[0].id;
  return false;
}
