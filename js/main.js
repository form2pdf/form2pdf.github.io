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
    const { width, height } = firstPage.getSize();

    firstPage.drawText(document.forms["form"]["name"].value, {
        x: width * positions["name"][0],
        y: height * positions["name"][1],
        size: 7,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      })
    
    const pdfBytes = await pdfDoc.save();
    
    download(pdfBytes, "foo.pdf", "application/pdf");
}