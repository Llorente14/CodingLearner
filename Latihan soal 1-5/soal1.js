// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
//1.Buat 2 variabel nama & peran
//2. pastikan variabel nama peran terisi jika tidak buatlah kondisi if , else
//3. jika tidak ada nama beri peringatan "nama wajib diisi"
//4. jika tidak ada peran beri peringatan "Pilih Peranmu untuk memulai game"
//5. game tidak akan di mulai jika peran belum di isi
//6. buatlah 3 peran yang dapat di isi (list)
//7. buat kondisi jika isi peran tidak ada dari list yang sudah di tentukan
//8. buat kondisi hasil ketika memilih dari 3 peran yang ada dan peran yang tidak ada
//9. DONE!!!!

let nama = "Chirgia",
  peran = "Habib";

if (nama === "") {
  console.log("nama wajib diisi");
} else if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game");
} else if (peran === "Ksatria") {
  console.log(
    "halo Ksatria" + nama + ", kamu dapat menyerang dengan senjatamu!"
  );
} else if (peran === "Tabib") {
  console.log(
    "halo Tabib" + nama + ", kamu akan membantu temanmu yang terluka!"
  );
} else if (peran === "Penyihir") {
  console.log(
    "halo Penyihir" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!"
  );
} else {
  console.log(
    "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
  );
}
