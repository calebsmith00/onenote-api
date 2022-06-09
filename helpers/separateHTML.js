function separateHTML(response, category) {
  if (!response || !category)
    return { error: true, message: "No HTML was supplied." };

  const collection = response.getElementsByTagName(category) || [];
  const collectionSize = collection.length;
  const elements = [];
  for (let i = 0; i < collectionSize; ++i) {
    if (!collection[i].text) continue;

    elements.push({
      id: i,
      category,
      value: collection[i].text,
    });
  }

  return elements;
}

export function fetchHTMLElements(response) {
  const tableElements = ["table", "thead", "th", "tbody", "tr", "td"];
  const parsedResponse = {};
  tableElements.forEach((element) => {
    parsedResponse[element] = separateHTML(response, element);
  });

  return parsedResponse;
}
