const socket = io("/");

function handleMessageNoti(data) {
  const { message, nickname } = data;
  console.log(`${nickname}said ${message}`);
}

function sendMessage(message) {
  socket.emit("newMessage", { message });
}
socket.on("messageNoti");

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}
