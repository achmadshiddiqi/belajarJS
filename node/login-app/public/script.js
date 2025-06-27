// Login API request
// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.querySelector(".login-form");
//   loginForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch("http://localhost:3000/login/auth", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();

//     localStorage.setItem("accessToken", data.accessToken);
//     localStorage.setItem("refreshToken", data.refreshToken);
//   });
// });

// Users Sort API
// const reloadPage = ()

// document.addEventListener("DOMContentLoaded", () => {
//   const sortValue = document.getElementById("sort");
//   sortValue.addEventListener("change", async () => {
//     const result = await fetch(
//       `http://localhost:3000/users/action?sort=${sortValue.value}`
//     );
//     const data = await result.json();
//     return console.log(data);
//   });
// });
