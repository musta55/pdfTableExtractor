// const pdfParse = require('pdf-parse');
// const fs = require('fs');

// const filePath = 'demo5.pdf';

// const options = {
//   pagerender: render_page
// };

// function render_page(pageData) {
//   let lines = pageData.text.split('\n');
//   let tableLines = [];
//   let tableStart = false;

//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i].includes('Table') && !tableStart) {
//       tableStart = true;
//       tableLines.push(lines[i]);
//     } else if (tableStart) {
//       tableLines.push(lines[i]);
//     }
//   }

//   if (tableLines.length > 0) {
//     console.log('Table found on page', pageData.pageNumber);
//     console.log(tableLines);
//   }
// }

// fs.readFile(filePath, (err, pdfData) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   pdfParse(pdfData, options);
// });

const fs = require("fs");
const pdf = require("pdf-extraction");
 
// let dataBuffer = fs.readFileSync("demo5.pdf");
 
// pdf(dataBuffer).then(function (data) {
//     // // number of pages
//     // console.log(data.numpages);
//     // // number of rendered pages
//     // console.log(data.numrender);
//     // // PDF info
//     // console.log(data.info);
//     // // PDF metadata
//     // console.log(data.metadata);
//     // // PDF.js version
//     // // check https://mozilla.github.io/pdf.js/getting_started/
//     // console.log(data.version);
//     // // PDF text
//     console.log(data.text);
// });


function render_page(pageData) {
  //check documents https://mozilla.github.io/pdf.js/
  let render_options = {
      //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
      normalizeWhitespace: false,
      //do not attempt to combine same line TextItem's. The default value is `false`.
      disableCombineTextItems: false,
  };

  return pageData.getTextContent(render_options).then(function (textContent) {
      let lastY,
          text = "";
      for (let item of textContent.items) {
          if (lastY == item.transform[5] || !lastY) {
              text += item.str;
          } else {
              text += "\n" + item.str;
          }
          lastY = item.transform[5];
      }
      return text;
  });
}

let options = {
  pagerender: render_page,
};

let dataBuffer = fs.readFileSync("");

pdf(dataBuffer, options).then(function (data) {
  //use new format
});