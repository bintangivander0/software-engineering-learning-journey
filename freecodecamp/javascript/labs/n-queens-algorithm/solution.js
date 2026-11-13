function dfsNQueens (n, barisKini = 0, formasiRatu = [], semuaSolusi = []) {
  let spasi = "  ".repeat(barisKini);

  if (n < 1) return [];

  if (barisKini === n) {
    console.log(`${spasi} GOAL! Formasi lengkap ditemukan : ${formasiRatu}`);
    semuaSolusi.push([...formasiRatu]);
    return semuaSolusi;
  }

  console.log(`${spasi} → MASUK ke baris ${barisKini} | Formasi saat ini: ${formasiRatu}`);

  for (let kolomKini = 0; kolomKini < n; kolomKini++) {
    console.log(`${spasi}   ? Mencoba menaruh Ratu di Baris ${barisKini}, Kolom ${kolomKini}`)
    
    let apakahAman = true;

    for (let barisLama = 0; barisLama < barisKini; barisLama++) {
      let kolomLama = formasiRatu[barisLama];

      let bentrokAtasBawah = (kolomLama === kolomKini);

      let jarakBaris = barisKini - barisLama;
      let jarakKolom = Math.abs(kolomKini - kolomLama);
      let bentrokDiagonal = (jarakBaris === jarakKolom);

      if (bentrokAtasBawah) {
        console.log(`${spasi}    ❌ Bentrok VERTIKAL dengan Ratu di Baris ${barisLama}, Kolom ${kolomLama}`);
        apakahAman = false;
        break;
      }
      if (bentrokDiagonal) {
        console.log(`${spasi}    ❌ Bentrok DIAGONAL dengan Ratu di Baris ${barisLama}, Kolom ${kolomLama}`);
        apakahAman = false;
        break;
      }
    }

    if (apakahAman) {
      formasiRatu.push(kolomKini);
      dfsNQueens(n, barisKini + 1, formasiRatu, semuaSolusi);
      formasiRatu.pop();
    }
  }
  return semuaSolusi;
}

console.log(dfsNQueens(4));
