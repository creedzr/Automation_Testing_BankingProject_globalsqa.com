# 🏦 Banking XYZ – Cypress Automation  

End-to-end test suite untuk demo **Bank XYZ** ([globalsqa.com](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login)) menggunakan **Cypress**.

---

## ✅ Fitur yang Diuji  
| Modul             | Skenario yang tercover |
|-------------------|------------------------|
| Manager Login     | Login dengan kredensial manager |
| Customer Login    | Login sebagai customer |
| Add Customer      | Tambah customer baru |
| Open Account      | Membuka akun untuk customer |
| Deposit           | Setor dana |
| Withdraw          | Tarik dana |
| Transactions      | Sort & validasi daftar transaksi |
| Delete Customer   | Hapus customer |

---

## 🚀 Cara Menjalankan  
> Node.js ≥ 14 & npm sudah ter-install  

```bash
# 1. Clone repo
git clone https://github.com/creedzr/Automation_Testing_BankingProject_globalsqa.com.git
cd Bank_XYZ

# 2. Install dependensi
npm install

# 3. Mode interaktif
npx cypress open

# 4. Mode headless + laporan
npm run test:ci        # jalankan test
npm run report:html    # buka public/mochawesome.html

 Laporan Test
Hasil test otomatis tersedia di:
🔗 public/mochawesome.html

📁 Struktur Folder
Bank_XYZ/
├── cypress/
│   ├── e2e/          # test cases (*.cy.js)
│   ├── fixtures/     # data test
│   └── support/      # page-objects & commands
├── public/           # laporan HTML
├── package.json
└── README.md
