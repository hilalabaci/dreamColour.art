var label = document.getElementsByClassName("label")[0];
var text = document.getElementsByClassName("text")[0];

text.onclick = function () {
  label.style.marginTop = -15 + "px";
  label.style.fontSize = 13 + "px";
};
text.onmouseout = function () {
  if (text.value && text.value.length > 0) {
    text.onclick = function () {
      label.style.marginTop = -15 + "px";
      label.style.fontSize = 13 + "px";
    };
  } else {
    label.style.marginTop = 0 + "px";
    label.style.fontSize = 16 + "px";
  }
};
var label1 = document.getElementsByClassName("label")[1];
var text1 = document.getElementsByClassName("text")[1];
text1.onclick = function () {
  label1.style.marginTop = -15 + "px";
  label1.style.fontSize = 13 + "px";
};
text1.onmouseout = function () {
    if (text1.value && text1.value.length > 0) {
        text1.onclick = function () {
          label1.style.marginTop = -15 + "px";
          label1.style.fontSize = 13 + "px";
        };
      } else {
        label1.style.marginTop = 0 + "px";
        label1.style.fontSize = 16 + "px";
      }
};
