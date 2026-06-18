const video =
document.getElementById("video");

const canvas =
document.getElementById("canvas");

const photoPreview =
document.getElementById("photoPreview");

let stream;
let recorder;
let chunks = [];

let mirrored = false;

/* Start Camera */

async function startCamera(){

try{

stream = await navigator
.mediaDevices
.getUserMedia({

video:true,
audio:true

});

video.srcObject = stream;

}
catch(error){

alert(
"Camera Permission Denied"
);

}

}

document
.getElementById("startBtn")
.onclick = startCamera;

/* Stop Camera */

function stopCamera(){

if(stream){

stream
.getTracks()
.forEach(track=>{

track.stop();

});

}

}

document
.getElementById("stopBtn")
.onclick = stopCamera;

/* Capture Photo */

document
.getElementById("captureBtn")
.onclick = ()=>{

canvas.width =
video.videoWidth;

canvas.height =
video.videoHeight;

const ctx =
canvas.getContext("2d");

ctx.drawImage(
video,
0,
0,
canvas.width,
canvas.height
);

const image =
canvas.toDataURL("image/png");

photoPreview.src = image;

const download =
document.getElementById(
"downloadPhoto"
);

download.href = image;

download.download =
"fasnapt-photo.png";

download.style.display =
"inline-block";

};

/* Record Video */

document
.getElementById("recordBtn")
.onclick = ()=>{

chunks=[];

recorder =
new MediaRecorder(stream);

recorder.start();

recorder.ondataavailable =
e=>{

chunks.push(
e.data
);

};

alert(
"Recording Started"
);

};

/* Stop Recording */

document
.getElementById("stopRecordBtn")
.onclick = ()=>{

recorder.stop();

recorder.onstop = ()=>{

const blob =
new Blob(
chunks,
{
type:"video/webm"
}
);

const url =
URL.createObjectURL(
blob
);

const download =
document.getElementById(
"downloadVideo"
);

download.href = url;

download.download =
"fasnapt-video.webm";

download.style.display =
"inline-block";

};

};

/* Beauty Filter */

document
.getElementById("beautyBtn")
.onclick = ()=>{

video.classList.toggle(
"beauty"
);

};

/* Mirror Mode */

document
.getElementById("mirrorBtn")
.onclick = ()=>{

mirrored = !mirrored;

if(mirrored){

video.style.transform =
"scaleX(-1)";

}
else{

video.style.transform =
"scaleX(1)";

}

};

/* Filters */

const brightness =
document.getElementById(
"brightness"
);

const contrast =
document.getElementById(
"contrast"
);

const saturation =
document.getElementById(
"saturation"
);

const zoom =
document.getElementById(
"zoom"
);

function updateFilters(){

video.style.filter =

`brightness(${brightness.value}%)
contrast(${contrast.value}%)
saturate(${saturation.value}%)`;

video.style.scale =
zoom.value;

}

brightness.oninput =
updateFilters;

contrast.oninput =
updateFilters;

saturation.oninput =
updateFilters;

zoom.oninput =
updateFilters;


