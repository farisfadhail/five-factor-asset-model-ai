# Five-Factor Asset Pricing Model AI (Fama-French + Mistral AI)

Proyek ini menggabungkan model **Five-Factor Asset Pricing Model** dari Fama dan French dengan **AI dari Mistral** untuk memberikan **analisis cerdas dan naratif** terhadap permintaan pengguna yang berkaitan dengan saham dan kondisi pasar.

---

## Apa Itu Five-Factor Asset Pricing Model?

Model ini dikembangkan oleh **Eugene F. Fama dan Kenneth R. French** pada tahun 2015 sebagai perluasan dari model "three factor" sebelumnya.  
Tujuannya: menjelaskan **variasi return saham** dengan lebih baik menggunakan lima sumber risiko sistematis.

### Rumus Umum:

\[
E(R*i) - R_f = α + β₁*RMRF + β₂*SMB + β₃*HML + β₄*RMW + β₅*CMA
\]

Keterangan:

-   \( E(R_i) \): Expected return saham
-   \( R_f \): Risk-free rate
-   \( R_m \): Market return
-   \( α \): Intercept (bias)
-   \( β\_\* \): Sensitivitas saham terhadap faktor tertentu
-   **SMB**: Small Minus Big (ukuran perusahaan)
-   **HML**: High Minus Low (value stock)
-   **RMW**: Robust Minus Weak (profitabilitas)
-   **CMA**: Conservative Minus Aggressive (investasi perusahaan)

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
