import tabula from 'tabula-js';
const filePath = 'demo5.pdf';
const options = { pages: 'all', output: 'json' };

// tabula.extractPdfTable(filePath, options)
//   .then((tableData) => {
//     console.log(tableData);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


const t = tabula(filePath, { pages: "all"});
t.extractCsv((err, data) => console.log(data));

// const stream = tabula(filePath).streamCsv();
// stream
// .split()
// .doto(console.log)
// .done(() => console.log('ALL DONE!'));