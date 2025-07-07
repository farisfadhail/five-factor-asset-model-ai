const PptxGenJS = require("pptxgenjs");
const fs = require("fs");

async function generatePowerPoint(content, filename = "output.pptx") {
	const pptx = new PptxGenJS();

	const slide1 = pptx.addSlide();
	slide1.addText("Analisis Keuangan Berdasarkan Model 5-Factor", {
		x: 0.5,
		y: 0.5,
		fontSize: 24,
		bold: true,
	});

	const lines = content.split("\n");
	const chunkSize = 7;
	for (let i = 0; i < lines.length; i += chunkSize) {
		const slide = pptx.addSlide();
		const chunk = lines.slice(i, i + chunkSize).join("\n");
		slide.addText(chunk, { x: 0.5, y: 0.5, fontSize: 16 });
	}

	await pptx.writeFile({ fileName: filename });

	return filename;
}

module.exports = generatePowerPoint;
