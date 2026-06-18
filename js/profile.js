/* Upload Profile Image */

const uploadBtn =
document.getElementById(
"uploadBtn"
);

const profileUpload =
document.getElementById(
"profileUpload"
);

uploadBtn.addEventListener(
"click",
()=>{

profileUpload.click();

}
);

profileUpload.addEventListener(
"change",
(e)=>{

const file =
e.target.files[0];

if(file){

const reader =
new FileReader();

reader.onload =
function(event){

document.getElementById(
"profileImage"
).src =
event.target.result;

localStorage.setItem(
"profileImage",
event.target.result
);

};

reader.readAsDataURL(file);

}

}
);

/* Load Image */

const savedImage =
localStorage.getItem(
"profileImage"
);

if(savedImage){

document.getElementById(
"profileImage"
).src =
savedImage;

}

/* Save Bio */

document
.getElementById(
"saveBio"
)
.addEventListener(
"click",
()=>{

const bio =
document.getElementById(
"bio"
).value;

localStorage.setItem(
"userBio",
bio
);

alert(
"Bio Saved"
);

}
);

/* Load Bio */

const savedBio =
localStorage.getItem(
"userBio"
);

if(savedBio){

document.getElementById(
"bio"
).value =
savedBio;

}

/* Save Links */

document
.getElementById(
"saveLinks"
)
.addEventListener(
"click",
()=>{

const github =
document.getElementById(
"github"
).value;

const linkedin =
document.getElementById(
"linkedin"
).value;

localStorage.setItem(
"github",
github
);

localStorage.setItem(
"linkedin",
linkedin
);

alert(
"Links Saved"
);

}
);

/* Load Links */

document.getElementById(
"github"
).value =
localStorage.getItem(
"github"
) || "";

document.getElementById(
"linkedin"
).value =
localStorage.getItem(
"linkedin"
) || "";


