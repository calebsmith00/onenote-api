import { callAPI } from "../../callMsGraph.js";

export async function sectionExists({ userId, sectionName }) {
  if (!sectionName) return;

  const filterClause = `$filter=startswith(displayName,'${sectionName}')`;
  const response = await callAPI({
    url: `${userId}/onenote/sections?${filterClause}`,
  });

  if (response.value.length > 0) return response.value[0].id;
  return false;
}
