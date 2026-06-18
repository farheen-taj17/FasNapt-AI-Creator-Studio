/* AI Caption Generator */

function generateCaption(){

const topic =
document.getElementById(
"topicInput"
).value;

if(!topic){

alert("Enter a topic");

return;

}

const captions = [

`🔥 Exploring ${topic} today!`,

`🚀 New ${topic} content is live.`,

`✨ Discover the future of ${topic}.`,

`🌟 Trending insights about ${topic}.`

];

document.getElementById(
"captionResult"
).innerText =

captions[
Math.floor(
Math.random()*
captions.length
)
];

}

/* Hashtags */

function generateHashtags(){

const topic =
document.getElementById(
"topicInput"
).value;

const clean =
topic.replace(/\s/g,"");

document.getElementById(
"hashtagResult"
).innerText =

`#${clean}
#viral
#creator
#explore
#trending
#fasnapt`;

}

/* Viral Score */

function calculateScore(){

const likes =
parseInt(
document.getElementById(
"likes"
).value
) || 0;

const comments =
parseInt(
document.getElementById(
"comments"
).value
) || 0;

const score =
(likes * 2) +
(comments * 5);

document.getElementById(
"viralResult"
).innerText =

`🔥 Viral Score: ${score}`;

}

/* Content Ideas */

function generateIdea(){

const ideas = [

"🎬 30 Day Creator Challenge",

"🤖 AI Tools For Students",

"📚 Study With Me",

"💻 Coding Productivity Tips",

"🚀 Future Technology Trends",

"🎯 Resume Building Guide",

"🌍 Travel Vlog Ideas",

"📱 Best Creator Apps"

];

document.getElementById(
"ideaResult"
).innerText =

ideas[
Math.floor(
Math.random()*
ideas.length
)
];

}

/* Content Planner */

function savePlan(){

const date =
document.getElementById(
"planner"
).value;

localStorage.setItem(
"creatorPlan",
date
);

document.getElementById(
"plannerResult"
).innerText =

`📅 Plan Saved For ${date}`;

}

/* Achievement Badge */

function showBadge(){

const badges = [

"🥉 Beginner Creator",

"🥈 Rising Creator",

"🥇 Pro Creator",

"🏆 Viral Creator",

"👑 Elite Creator"

];

document.getElementById(
"badgeResult"
).innerText =

badges[
Math.floor(
Math.random()*
badges.length
)
];

}

/* Daily Tips */

const tips = [

"Post consistently every day.",

"Use engaging thumbnails.",

"Reply to comments quickly.",

"Focus on one niche.",

"Use trending hashtags wisely.",

"Create short-form content regularly."

];

document.getElementById(
"dailyTip"
).innerText =

tips[
Math.floor(
Math.random()*
tips.length
)
];

