import pdf2table from 'pdf2table';
import fs from 'fs';
 
fs.readFile('./supplyChainIEEE.pdf', function (err, buffer) {
    if (err) return console.log(err);
 
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
 
        console.log(rows);
    });
});
 

