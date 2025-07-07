# Five-Factor Asset Pricing Model AI (Fama-French + Mistral AI)

Proyek ini menggabungkan model **Five-Factor Asset Pricing Model** dari Fama dan French dengan **AI dari Mistral** untuk memberikan **analisis cerdas dan naratif** terhadap permintaan pengguna yang berkaitan dengan saham dan kondisi pasar.

---

## Apa Itu Five-Factor Asset Pricing Model?

Model ini dikembangkan oleh **Eugene F. Fama dan Kenneth R. French** pada tahun 2015 sebagai perluasan dari model "three factor" sebelumnya.  
Tujuannya: menjelaskan **variasi return saham** dengan lebih baik menggunakan lima sumber risiko sistematis.

### Rumus Umum:

$$
E(R_i) - R_f = \alpha + \beta_1 \cdot \text{RMRF} + \beta_2 \cdot \text{SMB} + \beta_3 \cdot \text{HML} + \beta_4 \cdot \text{RMW} + \beta_5 \cdot \text{CMA}
$$

Keterangan:

| Simbol             | Deskripsi                                                                 |
|--------------------|---------------------------------------------------------------------------|
| $\( E(R_i) \)$       | Expected return dari saham atau aset \(i\)                                |
| $\( R_f \)$          | Risk-free rate (tingkat pengembalian bebas risiko)                       |
| $\( \alpha \)$       | Intercept atau abnormal return (jika ada deviasi dari model)              |
| $\( \beta_1 \ldots \ _5 \)$ | Koefisien sensitivitas terhadap masing-masing faktor risiko             |
| **RMRF**           | Market Risk Premium (selisih return pasar dan risk-free rate)             |
| **SMB**            | Size factor: return saham kecil dikurangi return saham besar              |
| **HML**            | Value factor: return saham dengan nilai tinggi dikurangi yang rendah      |
| **RMW**            | Profitability factor: perusahaan dengan profit tinggi vs rendah           |
| **CMA**            | Investment factor: perusahaan konservatif vs agresif dalam berinvestasi   |

---

## Fitur Utama

✅ Mengambil dan membaca data 5 Faktor Fama-French dari file `.txt`  
✅ Menganalisis tren pasar 12 bulan terakhir  
✅ Menyelaraskan dengan **permintaan user**, termasuk jika menyebut **ticker saham tertentu**  
✅ Menghasilkan **analisis naratif** dalam bahasa natural via **Mistral AI**

---

## Cara Menjalankan

### 1. Clone Repo

```bash
git clone https://github.com/farisfadhail/five-factor-asset-model-ai.git
cd five-factor-asset-model-ai
```

### 2. Jalankan di Local

```bash
npm run start
```
