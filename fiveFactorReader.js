const fs = require("fs");
const path = require("path");

function parseFiveFactorData(filePath, latestN = 12) {
	const raw = fs.readFileSync(filePath, "utf8");
	const lines = raw.split("\n");

	const data = [];

	for (const line of lines) {
		const match = line.match(/^(\d{6})\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)/);
		if (match) {
			const [, date, mktRf, smb, hml, rmw, cma] = match;
			data.push({
				date,
				RMRF: parseFloat(mktRf),
				SMB: parseFloat(smb),
				HML: parseFloat(hml),
				RMW: parseFloat(rmw),
				CMA: parseFloat(cma),
			});
		}
	}

	return data.slice(-latestN);
}

module.exports = { parseFiveFactorData };
