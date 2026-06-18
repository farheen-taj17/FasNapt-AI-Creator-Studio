/* ==========================
   FASNAPT AI CREATOR STUDIO
   script.js
========================== */

/* --------------------------
   Animated Counters
-------------------------- */

function animateCounter(id, target) {

    let count = 0;

    const increment = target / 100;

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        document.getElementById(id).innerText =
            Math.floor(count).toLocaleString();

    }, 20);

}

animateCounter("views", 125000);
animateCounter("followers", 12000);
animateCounter("likes", 45000);
animateCounter("videos", 250);

/* --------------------------
   AI Caption Generator
-------------------------- */

function generateCaption() {

    const topic =
        document.getElementById("topicInput").value.trim();

    if (!topic) {

        document.getElementById(
            "captionResult"
        ).innerText =
            "Please enter a topic.";

        return;

    }

    const captions = [

        `🔥 Exploring ${topic} today! Don't miss it.`,

        `🚀 New ${topic} content is here. Check it out!`,

        `✨ Discover amazing ${topic} ideas with FasNapt.`,

        `🎯 Everything you need to know about ${topic}.`,

        `🌟 Trending now: ${topic}. Join the journey.`

    ];

    const randomCaption =
        captions[
            Math.floor(
                Math.random() * captions.length
            )
        ];

    document.getElementById(
        "captionResult"
    ).innerText =
        randomCaption;

}

/* --------------------------
   AI Hashtag Generator
-------------------------- */

function generateHashtags() {

    const topic =
        document.getElementById("topicInput").value.trim();

    if (!topic) {

        document.getElementById(
            "hashtagResult"
        ).innerText =
            "Enter a topic first.";

        return;

    }

    const cleanTopic =
        topic.replace(/\s+/g, "");

    const hashtags = [

        `#${cleanTopic}`,
        "#viral",
        "#trending",
        "#creator",
        "#explore",
        "#foryou",
        "#contentcreator",
        "#innovation",
        "#creative",
        "#FasNapt"

    ];

    document.getElementById(
        "hashtagResult"
    ).innerText =
        hashtags.join(" ");

}

/* --------------------------
   Content Planner
-------------------------- */

function savePlan() {

    const date =
        document.getElementById(
            "plannerDate"
        ).value;

    if (!date) {

        document.getElementById(
            "plannerResult"
        ).innerText =
            "Select a date.";

        return;

    }

    localStorage.setItem(
        "fasnapt_plan",
        date
    );

    document.getElementById(
        "plannerResult"
    ).innerText =
        `✅ Plan saved for ${date}`;

}

window.addEventListener("load", () => {

    const savedDate =
        localStorage.getItem(
            "fasnapt_plan"
        );

    if (savedDate) {

        document.getElementById(
            "plannerDate"
        ).value = savedDate;

        document.getElementById(
            "plannerResult"
        ).innerText =
            `📅 Saved Plan: ${savedDate}`;

    }

});

/* --------------------------
   Task Manager
-------------------------- */

let tasks =
    JSON.parse(
        localStorage.getItem("fasnapt_tasks")
    ) || [];

function renderTasks() {

    const taskList =
        document.getElementById(
            "taskList"
        );

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li =
            document.createElement("li");

        li.innerHTML = `
            ${task}
            <button
                onclick="deleteTask(${index})"
                style="
                    float:right;
                    padding:5px 10px;
                    border:none;
                    border-radius:6px;
                    cursor:pointer;
                "
            >
                ❌
            </button>
        `;

        taskList.appendChild(li);

    });

}

function addTask() {

    const input =
        document.getElementById(
            "taskInput"
        );

    const task =
        input.value.trim();

    if (!task) return;

    tasks.push(task);

    localStorage.setItem(
        "fasnapt_tasks",
        JSON.stringify(tasks)
    );

    renderTasks();

    input.value = "";

}

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem(
        "fasnapt_tasks",
        JSON.stringify(tasks)
    );

    renderTasks();

}

renderTasks();

/* --------------------------
   Live Clock
-------------------------- */

function updateClock() {

    const now =
        new Date();

    const time =
        now.toLocaleTimeString();

    document.getElementById(
        "clock"
    ).innerText =
        time;

}

setInterval(updateClock, 1000);

updateClock();

/* --------------------------
   Theme Switcher
-------------------------- */

const themeSelector =
    document.getElementById(
        "themeSelector"
    );

const themes = {

    aurora: {
        primary: "#7B2FF7",
        secondary: "#F107A3",
        accent: "#00D4FF"
    },

    cyber: {
        primary: "#00D4FF",
        secondary: "#7B2FF7",
        accent: "#00FF88"
    },

    sunset: {
        primary: "#FF6B35",
        secondary: "#FFD166",
        accent: "#FFFFFF"
    },

    ocean: {
        primary: "#0077B6",
        secondary: "#00B4D8",
        accent: "#90E0EF"
    }

};

function applyTheme(themeName) {

    const theme =
        themes[themeName];

    document.documentElement
        .style
        .setProperty(
            "--primary",
            theme.primary
        );

    document.documentElement
        .style
        .setProperty(
            "--secondary",
            theme.secondary
        );

    document.documentElement
        .style
        .setProperty(
            "--accent",
            theme.accent
        );

    localStorage.setItem(
        "fasnapt_theme",
        themeName
    );

}

themeSelector.addEventListener(
    "change",
    (e) => {

        applyTheme(
            e.target.value
        );

    }
);

const savedTheme =
    localStorage.getItem(
        "fasnapt_theme"
    );

if (savedTheme) {

    themeSelector.value =
        savedTheme;

    applyTheme(savedTheme);

}

/* --------------------------
   Welcome Message
-------------------------- */

console.log(
    "🚀 FasNapt AI Creator Studio Loaded Successfully"
);



window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader")
.style.display = "none";

},2000);

});


