const socket = io(
"http://localhost:5000"
);

const input =
document.getElementById(
"messageInput"
);

const messages =
document.getElementById(
"messages"
);

document
.getElementById(
"sendBtn"
)
.onclick = ()=>{

const message =
input.value;

socket.emit(
"send_message",
message
);

input.value = "";

};

socket.on(
"receive_message",
(data)=>{

const div =
document.createElement(
"div"
);

div.classList.add(
"message"
);

div.innerText = data;

messages.appendChild(
div
);

});


