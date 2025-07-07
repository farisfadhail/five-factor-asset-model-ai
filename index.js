const express = require("express");
const { parseFiveFactorData } = require("./fiveFactorReader");
const { analyzeWithAI } = require("./mistral");
const path = require("path");

const app = express();
app.use(express.json());

app.post("/analyze", async (req, res) => {
	const { request } = req.body;

	if (!request) {
		return res.status(400).json({ error: "Request tidak boleh kosong." });
	}

	try {
		const filePath = path.join(__dirname, "source/F-F_Research_Data_5_Factors_2x3.txt");
		const parsedData = parseFiveFactorData(filePath, 12); // ambil 12 bulan terakhir

		const result = await analyzeWithAI(request, parsedData);

		res.json({ response: result });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Terjadi kesalahan saat memproses analisis." });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`✅ Server listening on port ${PORT}`);
});
