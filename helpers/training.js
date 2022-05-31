export function getTrainingTable(template) {
  const trainings = template["trainings"];
  const title = template["template-title"];
  if (!trainings || !title) return;

  let html = "";
  trainings.map((training) => {
    html += `<tr>
      <td>${training["training-request"]}</td>
      <td>${training["requestDate"]}</td>
      <td>${training["requestCompletionDate"]}</td>
      <td>${training["training-mentor"]}</td>
      <td>${training["training-prereq"]}</td>
      <td>${training["training-notes"]}</td>
      </tr>`;
  });

  return `<!DOCTYPE html>
  <html>
  <head><title>Training List</title></head>
  <body>
  <table>
  ${html}
  </table>
  </body>
  </html>`;
}
