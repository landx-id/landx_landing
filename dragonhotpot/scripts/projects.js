/* for button invest sekarang */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

dummyData = {
  "data": {
    "currencies": [
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": {
          "acquisitionCost": "220000000.0",
          "address": "KOMPLEK TAMAN MAHKOTA BLOK B3 NO. 51 BENDA, TANGERANG KOTA\n",
          "annualRentYield": "0.06",
          "annualRentYieldUpper": "0.08",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "Kamar Keluarga Taman Bandara Mahkota 2 terletak di Tangerang. Kostel ini dekat dengan Bandara Soekarno Hatta, Citra Garden, Lotte Mart, Pantai Indah Kapuk, dan Rumah Sakit PIK.\n\nTersedia 14 Kamar yang semuanya sudah dilengkapi dengan kamar mandi.\nLuas Tanah 93 m², Luas Bangunan 156 m² (2 lantai), tingkat tersewa selama ini 90%.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan.\nEstimasi imbal hasil berdasarkan penghasilan sewa dengan tingkat okupansi saat ini ditambah capital gain secara data historis._\n",
          "dividendSchedule": "Bulanan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDE=",
          "initialTokenPrice": "2720000.0",
          "issuerName": "Kamar Keluarga",
          "launchProgress": null,
          "mapImageUrl": "https://landx.id/images/JKT001/map.png",
          "mapUrl": "https://www.google.com/maps/place/Kamar+Keluarga+Taman+Bandara+Mahkota+Syariah/@-6.118074,106.6861648,17z/data=!4m5!3m4!1s0x0:0x655b0a947deb202c!8m2!3d-6.1188771!4d106.6867961",
          "name": "2 Unit Kost-Hotel di Jakarta & Tangerang",
          "previewImages": [
            "https://landx.id/images/JKT001/1.png",
            "https://landx.id/images/JKT001/2.png",
            "https://landx.id/images/JKT001/3.png",
            "https://landx.id/images/JKT001/4.png"
          ],
          "propertyPrice": "2500000000.0",
          "settlementDate": 1557316800000,
          "tokenSupply": "1000.0",
          "totalPurchasePrice": "2720000000.0"
        }
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": {
          "acquisitionCost": "260000000.0",
          "address": "JL. MANGGIS 2 NO. 2A, KEL. TANJUNG DUREN UTARA, KEC. GROGOL PETAMBURAN, JAKARTA 11470\n",
          "annualRentYield": "0.06",
          "annualRentYieldUpper": "0.08",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "Kamar Keluarga Tanjung Duren adalah penginapan yang tenang dan nyaman.\n\nSuasana ruangan yang bersih dan nyaman, cocok bagi yang akan berlibur atau mengadakan kunjungan bisnis. Lokasi yang strategis sehingga mudah untuk diakses, dan harga yang terjangkau menjadi pilihan akomodasi perjalanan.\n\nLokasi dekat KFC Tanjung Duren, Mall Taman Anggrek, Mall Central Park, Neo Soho, Universitas Esa Unggul, Universitas Kristen Krida Wacana (UKRIDA), SMAK 1 Penabur, dan Universitas Tarumanagara.\n\nTersedia 11 Kamar yang semuanya sudah dilengkapi dengan TV layar datar dan kamar mandi.\n\nLuas Tanah 55m², Luas Bangunan 140m² (3 lantai), tingkat tersewa kamar selama ini 91%.\n\nAppraisal: [http://bit.ly/jkt-002](http://bit.ly/jkt-002)\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan.\nEstimasi imbal hasil berdasarkan penghasilan sewa dengan tingkat okupansi saat ini ditambah capital gain secara data historis._\n",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDI=",
          "initialTokenPrice": "3260000.0",
          "issuerName": "PT. VICTORI DANA INVESTAMA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT002/map.png",
          "mapUrl": "https://www.google.com/maps/place/Kamar+Keluarga/@-6.1785699,106.783208,15z/data=!4m5!3m4!1s0x0:0xe4c8a787d4dd1ad6!8m2!3d-6.1785699!4d106.783208?sa=X&ved=2ahUKEwjw4q-wk47iAhWI63MBHSuTBLMQ_BIwCnoECA8QCA&shorturl=1",
          "name": "Kost-Hotel KK Tanjung Duren",
          "previewImages": [
            "https://landx.id/images/JKT002/1.png",
            "https://landx.id/images/JKT002/2.png",
            "https://landx.id/images/JKT002/3.png",
            "https://landx.id/images/JKT002/4.png",
            "https://landx.id/images/JKT002/5.png",
            "https://landx.id/images/JKT002/6.png",
            "https://landx.id/images/JKT002/7.png",
            "https://landx.id/images/JKT002/8.png"
          ],
          "propertyPrice": "3000000000.0",
          "settlementDate": 1561636800000,
          "tokenSupply": "1000.0",
          "totalPurchasePrice": "3260000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "230000000.0",
          "address": "Jalan Rawa Bokor, Kompleks Taman Mahkota Bandara Block B3/16A Kec Benda, Benda, Kota Tangerang, Banten 15125\n",
          "annualRentYield": "0.055",
          "annualRentYieldUpper": "0.075",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "Penginapan yang tenang, nyaman, dan dekat dengan Bandara Soekarno Hatta.\n\nSebuah hunian yang murah, bersih, dan nyaman. Kamar Keluarga menawarkan pelayanan yang istimewa dan fasilitas yang membuat pengalaman menginap tidak terlupakan. Tersedia Wi-Fi gratis di semua kamar, TV, AC, ruangan bebas rokok, layanan kebersihan.\n\nCocok bagi yang akan berlibur atau mengadakan kunjungan bisnis. Lokasi yang strategis sehingga mudah untuk diakses, dan harga yang terjangkau menjadi pilihan akomodasi perjalanan.\n\nLokasi dekat dengan Bandara Soekarno Hatta, Citra Garden, Lotte Mart, Pantai Indah Kapuk, dan Rumah Sakit PIK.\n\nTersedia 14 Kamar yang semuanya sudah dilengkapi dengan kamar mandi.\nLuas Tanah 60m², Luas Bangunan 300m² (5 lantai), tingkat tersewa selama ini 86-92%.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi imbal hasil berdasarkan penghasilan sewa dengan tingkat okupansi saat ini ditambah perkiraan capital gain secara data historis._\n",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDM=",
          "initialTokenPrice": "2730000.0",
          "issuerName": "PT. WIRA DANA SEJAHTERA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT003/map.png",
          "mapUrl": "https://www.google.com/maps/place/OYO+737+Kamar+Keluarga+Mahkota+8/@-6.119442,106.6828411,16.25z/data=!4m5!3m4!1s0x2e6a02f2c99b9ef7:0x655b0a947deb202c!8m2!3d-6.1188771!4d106.6867958",
          "name": "Kost-Hotel KK Taman Mahkota 8",
          "previewImages": [
            "https://landx.id/images/JKT003/1.png",
            "https://landx.id/images/JKT003/2.png",
            "https://landx.id/images/JKT003/3.png",
            "https://landx.id/images/JKT003/4.png",
            "https://landx.id/images/JKT003/5.png",
            "https://landx.id/images/JKT003/6.png",
            "https://landx.id/images/JKT003/7.png",
            "https://landx.id/images/JKT003/8.png",
            "https://landx.id/images/JKT003/9.png",
            "https://landx.id/images/JKT003/10.png"
          ],
          "propertyPrice": "2500000000.0",
          "settlementDate": 1561708011000,
          "tokenSupply": "1000.0",
          "totalPurchasePrice": "2730000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "330000000.0",
          "address": "Jl. Prof. Dr. Latumenten No.27 Blok B9, RT.1/RW.7, Jemb. Besi, Kec. Tambora, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11320\n",
          "annualRentYield": "0.055",
          "annualRentYieldUpper": "0.075",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "# Kamar Keluarga Latumenten 27\n\nPenginapan dengan kamar-kamar modern yang dirancang untuk memberikan kenyamanan bagi wisatawan.\nTersedia fasilitas gratis di semua kamar seperti Wi-Fi, AC, TV Layar datar, perlengkapan mandi, air mineral, ruangan bebas rokok, dan layanan kebersihan.\nKamar Keluarga Latumenten berada di lokasi yang strategis, berada di area Jalan Raya Prof. Dr. Latumenten. Lokasi dekat dengan Pusat Belanja Season City, RPTRA Kalijodo, Stasiun Duri, dan Stasiun Angke.\n\nTersedia 27 Kamar yang semuanya sudah dilengkapi dengan kamar mandi dalam.\nLuas Tanah 60m², Luas Bangunan 260m² (4.5 lantai), tingkat tersewa selama ini 79%.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi imbal hasil berdasarkan penghasilan sewa dengan tingkat okupansi saat ini ditambah perkiraan capital gain secara data historis._\n",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDQ=",
          "initialTokenPrice": "2520000.0",
          "issuerName": "PT. PENTA DANA SETIATAMA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT004/map.png",
          "mapUrl": "https://www.google.com/maps/place/Kamar+Keluarga+Latumenten/@-6.149944,106.7924513,17z/data=!3m1!4b1!4m8!3m7!1s0x2e69f6162f56468f:0x295f4ff4d4af99a0!5m2!4m1!1i2!8m2!3d-6.149944!4d106.79464",
          "name": "Ruko-Kost KK Latumenten 27",
          "previewImages": [
            "https://landx.id/images/JKT004/01.png",
            "https://landx.id/images/JKT004/02.png",
            "https://landx.id/images/JKT004/03.png",
            "https://landx.id/images/JKT004/04.png",
            "https://landx.id/images/JKT004/05.png",
            "https://landx.id/images/JKT004/06.png",
            "https://landx.id/images/JKT004/07.png",
            "https://landx.id/images/JKT004/08.png",
            "https://landx.id/images/JKT004/09.png"
          ],
          "propertyPrice": "4710000000.0",
          "settlementDate": 1568635200000,
          "tokenSupply": "2000.0",
          "totalPurchasePrice": "5040000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "0.0",
          "address": "Jl. Cendrawasih IV No.33, RT.9/RW.6, Cengkareng Bar., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730\n",
          "annualRentYield": "0.055",
          "annualRentYieldUpper": "0.075",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "# Kamar Keluarga Cengkareng Cendrawasih\n\nPilihan akomodasi yang ideal untuk Pasangan, Backpacker dan Liburan Keluarga. Suasana ruangan yang bersih dan nyaman, cocok bagi wisatawan yang akan berlibur atau mengadakan kunjungan bisnis. \n\nLokasi yang strategis sehingga mudah untuk diakses, dan harga yang terjangkau sehingga menjadi pilihan akomodasi perjalanan wisatawan.\n\nTersedia fasilitas gratis di semua kamar seperti Wi-Fi, AC, TV, perlengkapan mandi, ruangan bebas rokok, dan layanan kebersihan.\n\nTersedia 15 Kamar yang semuanya sudah dilengkapi dengan kamar mandi dalam.\nLuas Tanah 43m², Luas Bangunan 200m² (3 lantai), tingkat tersewa selama ini 80%.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen berdasarkan penghasilan sewa dengan tingkat okupansi secara data historis, dan belum termasuk potensi capital gain dari kenaikan harga properti._\n",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDU=",
          "initialTokenPrice": "7300000.0",
          "issuerName": "PT. OKTA DANA INVESTAMA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT005/map.png",
          "mapUrl": "https://www.google.com/maps/place/Kamar+Keluarga+Cengkareng+Cendrawasih/@-6.1408765,106.7215564,15z/data=!4m8!3m7!1s0x0:0x67b12f1c0d6ca227!5m2!4m1!1i2!8m2!3d-6.1443754!4d106.7263629",
          "name": "Rumah-Kost Kamar Keluarga Cengkareng Cendrawasih",
          "previewImages": [
            "https://landx.id/images/JKT005/JKT005-1.png",
            "https://landx.id/images/JKT005/JKT005-2.png",
            "https://landx.id/images/JKT005/JKT005-3.png",
            "https://landx.id/images/JKT005/JKT005-4.png"
          ],
          "propertyPrice": "2190000000.0",
          "settlementDate": 1614617999000,
          "tokenSupply": "300.0",
          "totalPurchasePrice": "2190000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "0.0",
          "address": "Jl. Bank III, Pela Mampang, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720",
          "annualRentYield": "0.06",
          "annualRentYieldUpper": "0.08",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "# Kamar Keluarga Mampang Prapatan\n\nPilihan akomodasi yang ideal untuk karyawan karena berada di area perkantoran. Cocok juga untuk pasangan, backpacker, dan liburan keluarga. Suasana ruangan yang bersih dan nyaman, cocok bagi wisatawan yang akan berlibur atau mengadakan kunjungan bisnis. \nKamar Keluarga Mampang Prapatan berada di lokasi yang strategis, dekat dengan Blok M, Kemang, dan Senopati.\n\nTersedia fasilitas gratis di semua kamar seperti Wi-Fi, AC, TV, perlengkapan mandi, ruangan bebas rokok, dan layanan kebersihan.\n\nTersedia 28 Kamar yang semuanya sudah dilengkapi dengan kamar mandi dalam.\nLuas Tanah 107m², Luas Bangunan 338m² (3 lantai), tingkat tersewa selama ini 90%.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen berdasarkan penghasilan sewa dengan tingkat okupansi secara data historis, dan belum termasuk potensi capital gain dari kenaikan harga properti._\n",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDY=",
          "initialTokenPrice": "5000000.0",
          "issuerName": "PT. RUMAH SEJAHTERA KEMILAU INVESTAMA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT006/map.png",
          "mapUrl": "https://www.google.com/maps/place/Kamar+Keluarga+Jalan+Bank/@-6.2512604,106.8102032,15z/data=!4m5!3m4!1s0x0:0x69a40dcd71184b34!8m2!3d-6.2512604!4d106.8102032",
          "name": "Rumah-Kost Kamar Keluarga Mampang Prapatan",
          "previewImages": [
            "https://landx.id/images/JKT006/JKT006-01.png",
            "https://landx.id/images/JKT006/JKT006-02.png",
            "https://landx.id/images/JKT006/JKT006-03.png",
            "https://landx.id/images/JKT006/JKT006-04.png"
          ],
          "propertyPrice": "4500000000.0",
          "settlementDate": 1614877199000,
          "tokenSupply": "900.0",
          "totalPurchasePrice": "4500000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "0.0",
          "address": "Jl. Kb. Jeruk I, RT.6/RW.2, Maphar, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11160",
          "annualRentYield": "0.1",
          "annualRentYieldUpper": "0.12",
          "cashReserved": "0.0",
          "category": "FOOD AND BEVERAGE",
          "description": "Foodstory menawarkan cloud kitchen, yang tidak menyediakan area tempat makan di tempat dan hanya melayani jasa pesan antar makan di tempat dan hanya melayani jasa pesan antar makanan dengan tujuan memangkas biaya operasional salah satunya biaya karyawan.\n\nDalam satu cloud kitchen Foodstory di isi beberapa merek restoran berbeda, sehingga bisa mendapatkan pendapatan tidak hanya dari 1 restoran.\n\n_Disclaimer: Kinerja masa lalu bukan merupakan indikasi kinerja masa depan.\nEstimasi imbal hasil berdasarkan proyeksi konservatif._",
          "dividendSchedule": "Per 6 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAARETUJJ",
          "initialTokenPrice": "1000000.0",
          "issuerName": "PT. DAPUR MASAK BERSAMA INDONESIA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/DMBI/map.png",
          "mapUrl": "https://www.google.co.id/maps/place/Foodstory+Cloud+Kitchen/@-6.1572157,106.8227605,15.88z/data=!4m5!3m4!1s0x2e69f57a29c23b61:0x90fb3e4cb50bbbc9!8m2!3d-6.1586169!4d106.823299",
          "name": "Foodstory",
          "previewImages": [
            "https://landx.id/images/DMBI/1.png",
            "https://landx.id/images/DMBI/2.png",
            "https://landx.id/images/DMBI/3.png",
            "https://landx.id/images/DMBI/4.png",
            "https://landx.id/images/DMBI/5.png"
          ],
          "propertyPrice": "3500000000.0",
          "settlementDate": 1616691599000,
          "tokenSupply": "3500.0",
          "totalPurchasePrice": "3500000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "0.0",
          "address": "Jl. Sentono Ngawonggo, Sentono, Ngawonggo, Kec. Ceper, Kabupaten Klaten, Jawa Tengah 57465",
          "annualRentYield": "0.02",
          "annualRentYieldUpper": "0.25",
          "cashReserved": "0.0",
          "category": "AGRIKULTUR",
          "description": "Gebrakan baru dalam agribisnis!\n\nPotensi dividen sampai 100-110% per tahun mulai tahun ketiga dari sektor dengan permintaan sangat tinggi.\n\nPenerbit selaku operator pabrik mendapatkan hak eksklusif untuk memproduksi pupuk batu bara dari pemilik paten.\n\nPenerbit juga telah bekerjasama dengan distributor pupuk terbesar yang membawahi 500 kios pupuk di lokasi untuk memastikan kelancaran distribusi produk.\n\nPupuk batu bara adalah jenis pupuk terbaru untuk memenuhi kebutuhan pasar dan memperbaiki unsur tanah yang selama ini terabaikan.\n\nPembangunan pabrik dilakukan oleh pihak yang memiliki pengalaman belasan tahun di bisnis agrikultur.",
          "dividendSchedule": "Per 12 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAARDQUZB",
          "initialTokenPrice": "1000000.0",
          "issuerName": "PT. CASAGRO FUTURA PRATAMA",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/CAFA/map.png",
          "mapUrl": "https://www.google.com/maps/place/7%C2%B039'54.3%22S+110%C2%B041'12.8%22E/@-7.6650923,110.6847114,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-7.6650923!4d110.6869001",
          "name": "Casagro",
          "previewImages": [
            "https://landx.id/images/CAFA/1.png",
            "https://landx.id/images/CAFA/2.png",
            "https://landx.id/images/CAFA/3.png",
            "https://landx.id/images/CAFA/4.png",
            "https://landx.id/images/CAFA/5.png",
            "https://landx.id/images/CAFA/7.png",
            "https://landx.id/images/CAFA/8.png",
            "https://landx.id/images/CAFA/9.png",
            "https://landx.id/images/CAFA/10.png"
          ],
          "propertyPrice": "7000000000.0",
          "settlementDate": 1617296399000,
          "tokenSupply": "7000.0",
          "totalPurchasePrice": "7000000000.0"
        }
      },
      {
        "landXProperty": {
          "acquisitionCost": "0.0",
          "address": "Jl. Latumenten III gg. 3 No.3, Jelambar, Kec. Grogol, Petamburan, Jakarta Barat, DKI Jakarta 11460",
          "annualRentYield": "0.06",
          "annualRentYieldUpper": "0.08",
          "cashReserved": "0.0",
          "category": "INDEKOS",
          "description": "# Indekos Latumenten\n\nPilihan akomodasi yang ideal untuk karyawan dan mahasiswa karena berada di area perkantoran, pusat belanja, dan universitas. Harga yang terjangkau dan suasana lingkungan serta ruangan yang bersih dan nyaman, cocok bagi karyawan dan mahasiswa yang akan tinggal dalam jangka waktu yang lama.\n\nIndekos Latumenten berada di lokasi yang strategis, dekat dengan Stasiun Kereta Grogol, Mal Ciputra - Citraland Mall, Universitas Trisakti, Universitas Tarumanegara, dan Central Park Mall.\n\nTersedia fasilitas di semua kamar seperti Wi-Fi, AC, Smart TV, ruangan bebas rokok, dan layanan kebersihan. Fasilitas di luar kamar seperti air minum RO, dapur bersama, dan garasi sepeda motor yang luas.\n\nTersedia 40 Kamar yang semuanya sudah dilengkapi dengan kamar mandi dalam.\n\nLuas Tanah 237m², Luas Bangunan 750m² (3,5 lantai), tingkat tersewa selama ini 80%.\n\n_Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan persetujuan Rapat Umum Pemegang Saham (RUPS)._\n\nEstimasi dividen belum termasuk potensi capital gain dari kenaikan harga saham.",
          "dividendSchedule": "Per 3 bulan",
          "id": "aAJkAA1MYW5kWFByb3BlcnR5bQAAAAZKS1QwMDc=",
          "initialTokenPrice": "1000000.0",
          "issuerName": "PT. DANA KELUARGA GOTONG ROYONG",
          "launchProgress": 1,
          "mapImageUrl": "https://landx.id/images/JKT007/map.png",
          "mapUrl": "https://www.google.com/maps/place/6%C2%B009'37.8%22S+106%C2%B047'21.3%22E/@-6.160501,106.7870643,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-6.160501!4d106.789253",
          "name": "JKT007",
          "previewImages": [
            "https://landx.id/images/JKT007/2.png",
            "https://landx.id/images/JKT007/3.png",
            "https://landx.id/images/JKT007/4.png",
            "https://landx.id/images/JKT007/5.png",
            "https://landx.id/images/JKT007/7.png",
            "https://landx.id/images/JKT007/8.png",
            "https://landx.id/images/JKT007/10.png",
            "https://landx.id/images/JKT007/11.png"
          ],
          "propertyPrice": "5750000000.0",
          "settlementDate": 1618246799000,
          "tokenSupply": "5750.0",
          "totalPurchasePrice": "5750000000.0"
        }
      },
      {
        "landXProperty": null
      },
      {
        "landXProperty": null
      }
    ]
  },
  "errors": [
    {
      "key": "internal_server_error",
      "message": "Internal Server Error",
      "path": [
        "ROOT",
        "currencies",
        11,
        "landXProperty",
        "launchProgress"
      ]
    },
    {
      "key": "internal_server_error",
      "message": "Internal Server Error",
      "path": [
        "ROOT",
        "currencies",
        12,
        "landXProperty"
      ]
    }
  ]
}

$.each(dummyData['data']['currencies'], function(key, value) {
    if (value['landXProperty'] == null || value['landXProperty'] == '') {
        delete dummyData["data"]["currencies"][key];
    }
});

var projects = [];

for (var key in dummyData['data']['currencies']) {
    projects.push(dummyData['data']['currencies'][key]);
}

console.log(projects);

var cardName = "carouselCards";
var base = document.getElementById("base-cards");

for (var i = 0; i < 3; i++) {
    var cardBase = document.createElement('div');
    cardBase.setAttribute('class', 'col-auto mt-3');

    /* for easier management */
    var currentProject = projects[i]['landXProperty'];
    var projectDirectory = currentProject['mapImageUrl'].split('/')[4];
    var projectName = currentProject['name'];
    var projectCategory = currentProject['category'];
    var fundingProgress = numeral(currentProject['propertyPrice']).format('0,0');
    var totalFunding = numeral(currentProject['totalPurchasePrice']).format('0,0');
    /* calculate the remaining days */
    const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
    const today = new Date().getTime();
    var remainingDays = (currentProject['settlementDate'] - today) / oneDay;
    /*------------------------------*/
    var progress = parseFloat(currentProject['launchProgress'] * 100);
    var lotPrice = numeral(currentProject['initialTokenPrice']).format('0,0');
    var totalLot = parseInt(currentProject['tokenSupply'], 10);
    var dividendSchedule = currentProject['dividendSchedule'];
    var annualRentYield = parseFloat(currentProject['annualRentYield']) * 100;
    var annualRentYieldUpper = parseFloat(currentProject['annualRentYieldUpper']) * 100;

    var dividendPeriodDesc = "Periode dividen aktual akan tetap mengacu pada laporan keuangan dan " +
                            "persetujuan Rapat Umum Pemegang Saham (RUPS).";
    var dividendEstimates = "Disclaimer: kinerja masa lalu bukan merupakan indikasi kinerja masa depan. Estimasi dividen adalah " + 
                            "ilustrasi berdasarkan proyeksi konservatif, dividen aktual akan tetap mengacu pada kinerja penerbit dan " +
                            "persetujuan Rapat Umum Pemegang Saham (RUPS). Estimasi dividen belum termasuk potensi capital gain dari " +
                            "kenaikan harga saham";

    if (remainingDays < 0) {
        remainingDays = 0;
    }

    var slide = document.createElement('div');

    slide.setAttribute('class', 'carousel slide');
    slide.setAttribute('id', `${cardName}${i}`);
    slide.setAttribute('data-interval', 'false');

    var listImages = document.createElement('ol');
    listImages.setAttribute('class','carousel-indicators carousel-bottom');

    for (var j = 0; j < currentProject['previewImages'].length; j++) {
        var images = document.createElement('li');
        images.setAttribute('data-target', `#${cardName}${i}`);
        images.setAttribute('data-slide-to', `${j}`);

        if (j == 0) {
            images.setAttribute('class', 'active')
        }

        listImages.append(images);
    }

    var inner = document.createElement('div');
    inner.setAttribute('class', 'carousel-inner');

    /* first active class */
    for (var j = 0; j < currentProject['previewImages'].length; j++) {
        var item = document.createElement('div');
        if (j == 0) {
            item.setAttribute('class', 'carousel-item active');
        } else {
            item.setAttribute('class', 'carousel-item');
        }

        /* start of each card */
        var itemCard = document.createElement('div');
        itemCard.setAttribute('class', 'carousel-card');

        /* preview image */
        var image = document.createElement('img');
        image.setAttribute('class', 'img-fluid carousel-img');
        image.setAttribute('src', currentProject['previewImages'][j]);

        var itemCardBody = document.createElement('div');
        itemCardBody.setAttribute('class', 'card-body');

        var itemCardBodyRow1 = document.createElement('div');
        itemCardBodyRow1.setAttribute('class', 'row')
        itemCardBodyRow1.innerHTML = `
            <div class="col">
                <div class="text-left">
                    <span class="text-secondary region-code">${projectDirectory}</span>
                </div>
                <div class="btn-buy">
                    <a href="#" class="btn btn-sm btn-primary rounded-pill" id="btnBuy" role="button">
                        <span>BELI</span>
                    </a>
                </div>
                <span class="card-title text-primary">${projectName}</span>
            </div>
        `;

        var itemCardBodyRow2 = document.createElement('div');
        itemCardBodyRow2.setAttribute('class', 'row');
        itemCardBodyRow2.innerHTML = `
            <div class="col">
                <button class="btn btn-sm rounded-pill semi-transparent-button" style="font-size: x-small;">${projectCategory}</button>
            </div>
            <!-- padding -->
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        `;

        var itemCardBodyRow3 = document.createElement('div');
        itemCardBodyRow3.setAttribute('class', 'row');
        itemCardBodyRow3.innerHTML = `
            <div class="col-8">
                <div class="text-left">
                    <span style="font-size: small;" class="text-secondary">Rp ${fundingProgress}</span>
                    <p class="small-text">dari Rp ${totalFunding} Total Pendanaan</p>
                </div>
            </div>
            <div class="col-4">
                <div class="text-left">
                    <span style="font-size: small;" class="text-secondary">${remainingDays}</span>
                    <p class="small-text">Hari lagi</p>
                </div>
            </div>
        `;

        var itemCardBodyProgress = document.createElement('div');
        itemCardBodyProgress.setAttribute('class', 'progress xs');
        itemCardBodyProgress.innerHTML = `
            <div class="progress-bar progress-bar-aqua" style="width: ${progress}%" role="progressbar"
                aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                <span class="sr-only">${progress}% Complete</span>
            </div>
        `;

        var itemCardBodyRow4 = document.createElement('div');
        itemCardBodyRow4.setAttribute('class', 'row');
        itemCardBodyRow4.innerHTML = `
            <div class="col">
                <div class="text-left">
                    <span class="small-text">Harga Per Lot</span>
                    <p class="text-primary" style="font-weight: bold;">Rp ${lotPrice}</p>
                </div>
            </div>
            <div class="col">
                <div class="text-left">
                    <span class="small-text">Jumlah Lot</span>
                    <p class="text-primary" style="font-weight: bold;">${totalLot}</p>
                </div>
            </div>
        `;

        var itemCardBodyRow5 = document.createElement('div')
        itemCardBodyRow5.setAttribute('class', 'row');
        itemCardBodyRow5.innerHTML = `
        <div class="col">
            <div class="text-left">
                <span class="small-text">Periode Dividen</span>
                <i class="fa fa-info-circle" style="font-size: 9px; color:seagreen;" data-toggle="tooltip" title="${dividendPeriodDesc}"></i>
                <p class="text-primary" style="font-weight: bold;">${dividendSchedule}</p>
            </div>
        </div>
        <div class="col mt-2">
            <div class="text-left text-primary">
                <span class="small-text" style="display: block;">
                    Estimasi Dividen
                    <i class="fa fa-info-circle" style="font-size: 9px; color:seagreen;" data-toggle="tooltip" title="${dividendEstimates}"></i>
                </span>
                <span style="display: inline-block; font-size: medium; font-weight: bold;">${annualRentYield}-${annualRentYieldUpper}%</span>
                <span style="font-size: x-small;"> Per Tahun</span>
            </div>
        </div>
        `;

        /* details */
        itemCardBody.append(itemCardBodyRow1);
        itemCardBody.append(itemCardBodyRow2);
        itemCardBody.append(itemCardBodyRow3);
        itemCardBody.append(itemCardBodyProgress);
        itemCardBody.append(itemCardBodyRow4);
        itemCardBody.append(itemCardBodyRow5);
        
        /* base body */
        itemCard.append(image);
        itemCard.append(itemCardBody);
        item.append(itemCard);
        inner.append(item);

        /* each slide */
        slide.append(listImages);
        slide.append(inner);
        cardBase.append(slide);
    }
    base.append(cardBase);
}

console.log(cardBase);

if (getMobileOperatingSystem() == "iOS") {
  btnInvest = document.getElementById("btn-invest");
  btnInvest.href = "https://apps.apple.com/id/app/landx/id1453823676";
} else {
  btnInvest = document.getElementById("btn-invest");
  btnInvest.href = "https://play.google.com/store/apps/details?id=store.numoney.landxapp&hl=en&gl=US";
}