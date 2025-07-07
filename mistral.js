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

                    Tugas Anda:

                    1. Lakukan analisis objektif terhadap kondisi pasar saat ini berdasarkan lima faktor utama:
                    - RMRF (Market Risk Premium)
                    - SMB (Size effect)
                    - HML (Value effect)
                    - RMW (Profitability effect)
                    - CMA (Investment effect)

                    2. Jika user menyebutkan **ticker saham tertentu**, analisis karakteristik saham tersebut (ukuran perusahaan, nilai, profitabilitas, strategi investasi) dan cocokkan dengan kondisi pasar saat ini.
                    - Jika informasi spesifik saham tidak tersedia, gunakan pendekatan umum berdasarkan kategori saham (misalnya: small-cap tech, blue chip, dsb).

                    3. **Jika user tidak menyebutkan ticker saham apapun**, berikan analisis pasar secara umum saja **tanpa menyebutkan atau merekomendasikan saham tertentu.**

                    4. Sajikan hasil analisis dalam bahasa yang **mudah dipahami oleh orang awam**, dengan nada yang **netral dan objektif**, tanpa memberikan opini pribadi atau saran investasi yang eksplisit.

                    Fokuskan pada **penjelasan risiko dan peluang secara menyeluruh**, bukan pada prediksi harga atau rekomendasi beli/jual.

                   `;

	const res = await mistral.chat.complete({
		model: "mistral-medium",
		messages: [{ role: "user", content: prompt }],
	});

	return res.choices[0].message.content;
}

module.exports = { analyzeWithAI };
