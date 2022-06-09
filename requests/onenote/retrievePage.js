import { callAPI } from "../exports.js";
import { fetchHTMLElements } from "../exports.js";
import { parse } from "node-html-parser";

export async function getPage({
  userId,
  pageId,
  includeIDs = true,
  properties,
}) {
  if (!userId || !pageId) return;
  const expandPageId = includeIDs ? "content?includeIDs=true" : "/content";
  const response = await callAPI({
    url: `${userId}/onenote/pages/${pageId}/${expandPageId}`,
  });
  if (!response) return;
  const dom = parse(response);

  return fetchHTMLElements(dom);
}
