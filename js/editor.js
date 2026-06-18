const videoUpload =
document.getElementById(
"videoUpload"
);

const videoPlayer =
document.getElementById(
"videoPlayer"
);

let rotation = 0;
let flipped = false;

/* Upload Video */

videoUpload.addEventListener(
"change",
(event)=>{

const file =
event.target.files[0];

if(file){

videoPlayer.src =
URL.createObjectURL(file);

}

}
);

/* Rotate */

document
.getElementById(
"rotateBtn"
)
.onclick = ()=>{

rotation += 90;

videoPlayer.style.transform =

`rotate(${rotation}deg)
scaleX(${flipped ? -1 : 1})`;

};

/* Flip */

document
.getElementById(
"flipBtn"
)
.onclick = ()=>{

flipped = !flipped;

videoPlayer.style.transform =

`rotate(${rotation}deg)
scaleX(${flipped ? -1 : 1})`;

};

/* Playback Speed */

document
.getElementById(
"speedControl"
)
.addEventListener(
"change",
e=>{

videoPlayer.playbackRate =
e.target.value;

}
);

/* Text Overlay */

document
.getElementById(
"addTextBtn"
)
.onclick = ()=>{

const text =
document.getElementById(
"textInput"
).value;

const overlay =
document.getElementById(
"textOverlay"
);

overlay.innerText = text;

overlay.style.display =
"block";

};

/* Sticker */

document
.getElementById(
"addStickerBtn"
)
.onclick = ()=>{

const sticker =
document.getElementById(
"stickerSelect"
).value;

const overlay =
document.getElementById(
"stickerOverlay"
);

overlay.innerText = sticker;

overlay.style.display =
"block";

};

/* Music Upload */

document
.getElementById(
"musicUpload"
)
.addEventListener(
"change",
e=>{

const file =
e.target.files[0];

if(file){

document
.getElementById(
"musicPlayer"
)
.src =
URL.createObjectURL(file);

}

}
);

/* Creator Presets */

const presets =
document.querySelectorAll(
".preset"
);

presets.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

const filter =
btn.dataset.filter;

switch(filter){

case "cinematic":

videoPlayer.style.filter =
"contrast(120%) brightness(90%)";

break;

case "vibrant":

videoPlayer.style.filter =
"saturate(180%)";

break;

case "retro":

videoPlayer.style.filter =
"sepia(60%)";

break;

default:

videoPlayer.style.filter =
"none";

}

});

});

