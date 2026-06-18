/* Register */

function register(){

const username =

document.getElementById(
"username"
).value;

const email =

document.getElementById(
"registerEmail"
).value;

const password =

document.getElementById(
"registerPassword"
).value;

if(
!username ||
!email ||
!password
){

alert(
"Fill all fields"
);

return;

}

const user = {

username,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Registration Successful"
);

window.location.href =
"login.html";

}

/* Login */

function login(){

const email =

document.getElementById(
"loginEmail"
).value;

const password =

document.getElementById(
"loginPassword"
).value;

const user =

JSON.parse(
localStorage.getItem(
"user"
)
);

if(
!user
){

alert(
"No account found"
);

return;

}

if(
email === user.email &&
password === user.password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

alert(
"Login Successful"
);

window.location.href =
"index.html";

}
else{

alert(
"Invalid Credentials"
);

}

}

/* Logout */

function logout(){

localStorage.removeItem(
"isLoggedIn"
);

window.location.href =
"login.html";

}

