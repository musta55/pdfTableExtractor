const { PdfDataParser } = require("pdf-data-parser"); 

let parser = new PdfDataParser({url: "MultiPageTable.pdf"});

async function myFunc() {
  var rows = await parser.parse();
  // process the rows
  console.log(rows);
}
