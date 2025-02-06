const frame = document.getElementById("Iframe");

frame.onload = function () {
  frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
};
frame.onload = function () {
  frame.style.heignt = frame.contentWindow.document.body.scrollWidth + "px";
};
