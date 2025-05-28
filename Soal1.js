//membuat function leader array dgn parameter arr dan n
function leaderArray(arr, N) {
  //buat variabel x
  let x = arr[N - 1];

  console.log(x + "");
  //lakukan looping
  for (let i = N - 2; i >= 0; i--) {
    //cek apakah array i lebih besar dari x
    if (arr[i] > x) {
      //jika iya tampilkan
      x = arr[i];
      console.log(x + "");
    }
  }
}

//membuat array
let arr = [9, 21, 8, 13, 3, 7, 5];
//menghitung panjang array
let n = arr.length;

leaderArray(arr, n);

//buat looping for dgn variabel i dan j
// for (let i = 0; i < N; i++) {
//   let j;
//   for (j = i + 1; j < N; j++) {
//     //lakukan if jika array i lebih kecil atau sama dengan array j
//     if (arr[i] <= arr[j]) {
//       break;
//     }
//   }
//   if (j == N) {
//     console.log(arr[i] + "");
//   }
// }
