// Login API request
// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.querySelector(".login-submit");
//   loginForm.addEventListener("click", async (e) => {
//     e.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch("http://localhost:3000/api/auth/login", {
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
