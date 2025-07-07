const express = require("express");
const { parseFiveFactorData } = require("./fiveFactorReader");
const { analyzeWithAI } = require("./mistral");
const path = require("path");
const generatePowerPoint = require("./generatePPT");

const app = express();
app.use(express.json());

app.post("/analyze", async (req, res) => {
	const { request } = req.body;

	if (!request) {
		return res.status(400).json({ error: "Request tidak boleh kosong." });
	}

	try {
		const filePath = path.join(__dirname, "source/F-F_Research_Data_5_Factors_2x3.txt");
		const parsedData = parseFiveFactorData(filePath, 12);

		const result = await analyzeWithAI(request, parsedData);

		res.json({ response: result });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Terjadi kesalahan saat memproses analisis." });
	}
});

app.post("/analyze/pptx", async (req, res) => {
	const { request } = req.body;
	if (!request) return res.status(400).json({ error: "Request kosong." });

	try {
		const parsedData = parseFiveFactorData(filePath, 12);
		const aiResponse = await analyzeWithAI(request, parsedData);

		const pptxFile = await generatePowerPoint(aiResponse, "hasil-analisa.pptx");
		res.download(pptxFile);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Gagal menghasilkan PowerPoint." });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✅ Server listening on port ${PORT}`);
});
