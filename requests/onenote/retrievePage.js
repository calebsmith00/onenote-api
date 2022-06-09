import { callAPI } from "../exports.js";
import { fetchHTMLElements } from "../exports.js";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

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
  //fetchHTMLElements(response);
  const dom = new JSDOM(`${response}`, {
    includeNodeLocations: true,
    resources: "usable",
  });
  console.log(dom.window.document.getElementsByTagName("td")[0].innerText);

  return "Function finished.";
}
