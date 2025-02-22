function removeChatContainer() {
    const chatElement = document.querySelector(".my-container.custom-bg.chat-container");
    if (chatElement) {
      chatElement.remove();
      console.log("Chat container removed.");
    }
  }
  
removeChatContainer();

const observer = new MutationObserver(() => removeChatContainer());
observer.observe(document.body, { childList: true, subtree: true });
