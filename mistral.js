const { Mistral } = require("@mistralai/mistralai");
require("dotenv").config();

const mistral = new Mistral({ apiKey: process.env.MISTRAL_API_KEY });

async function analyzeWithAI(userPrompt, parsedData) {
	const lastData = parsedData.map((d) => `${d.date} → RMRF=${d.RMRF}, SMB=${d.SMB}, HML=${d.HML}, RMW=${d.RMW}, CMA=${d.CMA}`).join("\n");

	const prompt = `
                    Saya adalah AI analis keuangan. Berikut adalah data faktor pasar berdasarkan Model Lima Faktor Fama-French untuk 12 bulan terakhir:

                    ${lastData}

                    User mengirimkan permintaan berikut:
                    "${userPrompt}"

                    Tugas Anda adalah:
                    1. **Analisis kecenderungan pasar secara umum** berdasarkan lima faktor (RMRF, SMB, HML, RMW, CMA).
                    2. **Cocokkan karakteristik saham yang disebutkan (berdasarkan ticker)** dengan tren data tersebut.
                    - Jika user menyebut saham tertentu (misalnya AAPL, GOTO, atau BBCA), berikan analisis **bagaimana kinerja historis dan profil saham tersebut (ukuran, profitabilitas, nilai, investasi, dsb.)** dapat disesuaikan dengan data pasar saat ini.
                    - Jika informasi fundamental saham **tidak tersedia**, jelaskan **kemungkinan dampaknya secara umum** berdasarkan profil perusahaan sejenis.
                    3. **Berikan rekomendasi atau perhatian** terkait risiko dan peluang investasi berdasarkan hasil pencocokan tersebut.

                    Gunakan bahasa yang **jelas dan mudah dipahami orang awam** (non-keuangan).
                    Gunakan sudut pandang yang **netral dan objektif**, hindari opini pribadi
                   `;

	const res = await mistral.chat.complete({
		model: "mistral-medium",
		messages: [{ role: "user", content: prompt }],
	});

	return res.choices[0].message.content;
}

module.exports = { analyzeWithAI };
