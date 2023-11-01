const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

let pdfDoc;

async function loadPdf() {    
	// Fetch the template PDF document
	const url = './template/CMI_DECASA_2023.pdf';
	
    // Convert to byte buffer
    const templatePdfBytes = await fetch(url).then((res) =>
		res.arrayBuffer(),
	);

	// Load a PDFDocument object as 
	pdfDoc = await PDFDocument.load(templatePdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    console.log(firstPage);
    var { width, height } = firstPage.getSize();

    for(let i=0; i < 62; i++){
      firstPage.drawText(document.forms["form"][i].value, {
          x: width * positions[i][0],
          y: height * positions[i][1],
          size: 7,
          font: helveticaFont,
          color: rgb(1, 0, 0)
      })
    }

    const secondPage = pages[1];
    console.log(secondPage);
    var { width, height } = secondPage.getSize();
    
    for(let i=62; i < 72; i++){
      secondPage.drawText(document.forms["form"][i].value, {
          x: width * positions[i][0],
          y: height * positions[i][1],
          size: 7,
          font: helveticaFont,
          color: rgb(1, 0, 0)
      })
    }

    const pdfBytes = await pdfDoc.save();
    
    download(pdfBytes, "foo.pdf", "application/pdf");
}