/* ==========================================================================
   TEMPLATE KOSONG DATA SPASIAL & KEWILAYAHAN (GIS MAP BOILERPLATE)
   Petunjuk: Isi data di bawah ini sesuai wilayah & koordinat Anda sendiri.
   ========================================================================== */

const DUKUH_SEMPU_DATA = {

  // 1. PROFIL ADMINISTRASI & WILAYAH
  profile: {
    nama: "Dukuh / Wilayah Anda",                // Nama Wilayah / Dukuh
    desa: "Nama Desa",                          // Nama Desa / Kelurahan
    kecamatan: "Nama Kecamatan",                // Nama Kecamatan
    kabupaten: "Nama Kabupaten",                // Nama Kabupaten / Kota
    provinsi: "Nama Provinsi",                  // Nama Provinsi
    kodePos: "00000",                           // Kode Pos
    
    // Koordinat titik pusat awal peta [Latitude, Longitude]
    // Contoh: [-7.7745, 110.7305]
    koordinatPusat: [-7.7745, 110.7305],
    zoomAwal: 16,                               // Zoom level (1-19)
    
    luasTotalHektar: 0,                         // Luas total (Hektar)
    jumlahRT: 0,                                // Jumlah RT
    jumlahRW: 0,                                // Jumlah RW
    komoditasUtama: [],
    
    deskripsi: "Tuliskan profil atau deskripsi wilayah Anda di sini..."
  },


  // 2. BATAS ADMINISTRASI DUKUH / WILAYAH (GeoJSON Polygon)
  // Tempelkan GeoJSON Polygon batas luar wilayah Anda di bawah ini
  batasDukuhGeoJSON: {
    "type": "FeatureCollection",
    "features": [
      /* CONTOH CARA MENGISI:
      {
        "type": "Feature",
        "properties": { "name": "Batas Wilayah" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [[
            [110.7255, -7.7700],
            [110.7350, -7.7695],
            [110.7365, -7.7770],
            [110.7255, -7.7700]
          ]]
        }
      }
      */
    ]
  },


  // 3. ZONASI RT / RW (GeoJSON Polygon)
  zonasiRTGeoJSON: {
    "type": "FeatureCollection",
    "features": [
      /* Tempelkan GeoJSON RT/RW di sini */
    ]
  },


  // 4. PENGGUNAAN LAHAN / LAND USE (GeoJSON Polygon)
  // Contoh: Pemukiman, Pertanian, Industri, Fasum
  landUseGeoJSON: {
    "type": "FeatureCollection",
    "features": [
      /* Tempelkan GeoJSON Penggunaan Lahan di sini */
    ]
  },


  // 5. JARINGAN JALAN & IRIGASI (GeoJSON LineString)
  infrastrukturGeoJSON: {
    "type": "FeatureCollection",
    "features": [
      /* Tempelkan GeoJSON Jalan / Irigasi di sini */
    ]
  },


  // 6. DAFTAR TITIK LOKASI / POI (Point of Interest)
  // Tambahkan titik-titik lokasi penting Anda di array di bawah ini
  pois: [
    /* CONTOH CARA MENAMBAHKAN TITIK LOKASI:
    {
      id: "poi-1",
      nama: "Nama Tempat / Fasilitas",
      kategori: "Pendidikan",               // Pilihan: Pendidikan, Ibadah, UMKM, Fasilitas Umum, Pertanian, Kesehatan
      icon: "school",                       // Nama ikon FontAwesome (misal: mosque, school, house, store, water, heart-pulse)
      color: "#3b82f6",                    // Warna pin marker (hex)
      lat: -7.7730,                        // Latitude
      lng: 110.7302,                       // Longitude
      rt: "RT 01 / RW 01",
      alamat: "Alamat tempat...",
      jamOperasional: "08:00 - 16:00 WIB",
      kontak: "+62 812-3456-7890",
      deskripsi: "Deskripsi lokasi...",
      fasilitas: ["Fasilitas 1", "Fasilitas 2"],
      fotoBadge: "📍"
    }
    */
  ],


  // 7. RINGKASAN STATISTIK DUKUH / WILAYAH
  statistik: {
    pendudukTotal: 0,
    jumlahKK: 0,
    pria: 0,
    wanita: 0,
    pengrajinTenun: 0,
    petani: 0,
    luasPemukimanM2: 0,
    luasSawahM2: 0,
    luasFasumM2: 0
  }

};
