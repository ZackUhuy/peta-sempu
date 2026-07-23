/* ==========================================================================
   DATA SPASIAL & KEWILAYAHAN DUKUH SEMPU
   ========================================================================== */

const DUKUH_SEMPU_DATA = {

  // 1. PROFIL ADMINISTRASI & WILAYAH
  profile: {
    nama: "Dukuh Sempu",
    desa: "Desa Tlingsing",
    kecamatan: "Kecamatan Cawas",
    kabupaten: "Kabupaten Klaten",
    provinsi: "Jawa Tengah",
    kodePos: "57463",
    
    // Koordinat titik pusat awal peta [Latitude, Longitude]
    koordinatPusat: [-7.7745, 110.7305],
    zoomAwal: 16,
    
    luasTotalHektar: 0,
    jumlahRT: 0,
    jumlahRW: 0,
    komoditasUtama: [],
    deskripsi: "Peta Digital Interaktif Spasial GIS Dukuh Sempu, Desa Tlingsing, Kecamatan Cawas, Kabupaten Klaten."
  },

  // 2. BATAS ADMINISTRASI DUKUH / WILAYAH (GeoJSON Polygon)
  batasDukuhGeoJSON: {
    "type": "FeatureCollection",
    "features": []
  },

  // 3. ZONASI RT / RW (GeoJSON Polygon)
  zonasiRTGeoJSON: {
    "type": "FeatureCollection",
    "features": []
  },

  // 4. PENGGUNAAN LAHAN / LAND USE (GeoJSON Polygon)
  landUseGeoJSON: {
    "type": "FeatureCollection",
    "features": []
  },

  // 5. JARINGAN JALAN & IRIGASI (GeoJSON LineString)
  infrastrukturGeoJSON: {
    "type": "FeatureCollection",
    "features": []
  },

  // 6. DAFTAR TITIK LOKASI / POI (Point of Interest)
  pois: [],

  // 7. RINGKASAN STATISTIK DUKUH / WILAYAH
  statistik: {
    pendudukTotal: 0,
    luasTotalHektar: 0
  }

};
