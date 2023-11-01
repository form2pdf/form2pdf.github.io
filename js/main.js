const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

let pdfDoc;


async function loadPdf() {    
    // Fetch the template PDF document
    const url = './template/CMI_DECASA_2023.pdf';
        // Convert to byte buffer
        const templatePdfBytes = await fetch(url).then((res) => res.arrayBuffer(),
    );

	// Load a PDFDocument object as 
	pdfDoc = await PDFDocument.load(templatePdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
	// get pages from PDF
    const pages = pdfDoc.getPages();
    
	var label, field;
	var fields = getFieldsInfo();

	for(var i in labels){
		label = labels[i];
		field = fields[label];

		// get right page of placeholder
		var currentPage = pages[field["page"]];
		var { width, height } = currentPage.getSize();

		// draw text on the correct field
		currentPage.drawText(field["value"], {
			x: width * field["width"],
			y: height * field["height"],
			size: 7,
			font: helveticaFont,
			color: rgb(1, 0, 0)
		})
	}

  	const pdfBytes = await pdfDoc.save();
  
	download(pdfBytes, "declaracao.pdf", "application/pdf");
}

function getFieldsInfo() {
	var label;
	var fields = {};

	for(var i in labels) {
		label = labels[i];
		fields[label] = {
			"value" : document.getElementById(label).value,
			"page" : positions[label][0],
			"width" : positions[label][1],
			"height": positions[label][2],
		}
	}

	return fields;
}