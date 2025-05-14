// Mengambil data film dari imdb dengan vanilla javascript
// function getDataMovie(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// }

// getDataMovie(
//   "http://www.omdbapi.com/?apikey=3a352860&s=avengers",
//   (result) => {
//     console.log(JSON.parse(result));
//   },
//   () => {
//     console.log("error");
//   }
// );

// Mengambil data film dari imbd api dengan fetch (ES6)
// Fetch mengembalikan promise
// fetch("http://www.omdbapi.com/?apikey=3a352860&s=avengers")
//   .then((response) => response.json())
//   .then((movies) => console.log(movies));

// Promise
// Objek yang merepresentasikan keberhasilan / kegagalan sebuah event asynchronous
// dimasa yang akan datang.
// perumpamaan janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)
// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji ditepati");
//   } else {
//     reject("Ingkar");
//   }
// });

// janji
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Ingkar");
    });
  }
});

console.log("mulai");
janji1
  .finally(() => console.log("selesai menunggu"))
  .then(() => console.log(janji1))
  .catch((response) => console.log(response));
console.log("selesai");
