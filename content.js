console.log("start: content.js");

chrome.runtime.onMessage.addListener(function(msg, sender) {
  console.log("recv: toggleWebLauncher");
  if (msg == "toggleWebLauncher") {
    toggleWebLauncher();
  }
});

var launcher = document.createElement("iframe");
launcher.style.background = "green";
launcher.style.height = "100%";
launcher.style.width = "0px";
launcher.style.position = "fixed";
launcher.style.top = "0px";
launcher.style.right = "0px";
launcher.style.zIndex = "9000000000000000000";
launcher.frameBorder = "none";
launcher.src = chrome.extension.getURL("launcher.html");

document.body.appendChild(launcher);

function toggleWebLauncher() {
  if (launcher.style.width == "0px") {
    launcher.style.width = "400px";
  } else {
    launcher.style.width = "0px";
  }
}
