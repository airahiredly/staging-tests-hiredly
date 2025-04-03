const fs = require('fs');
const data = JSON.parse(fs.readFileSync('cypress/reports/mochawesome.json'));

let html = `<table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
<thead><tr><th>Spec File</th><th>Passing</th><th>Failing</th></tr></thead><tbody>`;

for (const result of data.results) {
  const file = result.file;
  let pass = 0, fail = 0;
  for (const suite of result.suites) {
    for (const test of suite.tests) {
      if (test.pass) pass++;
      if (test.fail) fail++;
    }
  }
  html += `<tr><td>${file}</td><td>${pass}</td><td>${fail}</td></tr>`;
}

html += `</tbody></table>`;
fs.writeFileSync('cypress/reports/summary.html', html);
