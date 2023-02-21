import  pdfTableExtractor  from '@florpor/pdf-table-extractor';

pdfTableExtractor('demo5.pdf').then(res => {
   console.log(JSON.stringify(res.pageTables));
 // console.log((res));
});

