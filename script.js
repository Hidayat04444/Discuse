document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username && message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
      chatBox.appendChild(messageElement);

      messageInput.value = ""; // Kosongkan input pesan
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke bawah
    } else {
      alert("Nama dan pesan tidak boleh kosong!");
    }
  });
});
