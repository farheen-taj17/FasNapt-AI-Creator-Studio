/* Animated Counters */

function animateCounter(id,target){

let count = 0;

const increment =
target / 100;

const timer =
setInterval(()=>{

count += increment;

if(count >= target){

count = target;

clearInterval(timer);

}

document.getElementById(id)
.innerText =
Math.floor(count);

},20);

}

animateCounter(
"views",
125000
);

animateCounter(
"followers",
12000
);

animateCounter(
"watchTime",
4500
);

/* Engagement */

document
.getElementById(
"engagement"
)
.innerText = "87%";

/* Achievement Progress */

const progress = 78;

document
.getElementById(
"progressBar"
)
.style.width =
progress + "%";

document
.getElementById(
"progressText"
)
.innerText =

`🚀 Creator Growth Progress: ${progress}%`;

/* Download Report */

function downloadReport(){

const report =

`
FASNAPT ANALYTICS REPORT

Views: 125000

Followers: 12000

Engagement: 87%

Watch Time: 4500 Hours

Progress: 78%
`;

const blob =
new Blob(
[report],
{
type:"text/plain"
}
);

const url =
URL.createObjectURL(
blob
);

const a =
document.createElement(
"a"
);

a.href = url;

a.download =
"FasNapt_Report.txt";

a.click();

}


