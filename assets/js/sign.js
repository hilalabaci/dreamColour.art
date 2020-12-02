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
var label2 = document.getElementsByClassName("label")[2];
var text2 = document.getElementsByClassName("text")[2];
text2.onclick = function () {
  label2.style.marginTop = -15 + "px";
  label2.style.fontSize = 13 + "px";
};
text2.onmouseout = function () {
    if (text2.value && text2.value.length > 0) {
        text2.onclick = function () {
          label2.style.marginTop = -15 + "px";
          label2.style.fontSize = 13 + "px";
        };
      } else {
        label2.style.marginTop = 0 + "px";
        label2.style.fontSize = 16 + "px";
      }
};
var label3 = document.getElementsByClassName("label")[3];
var text3 = document.getElementsByClassName("text")[3];
text3.onclick = function () {
  label3.style.marginTop = -15 + "px";
  label3.style.fontSize = 13 + "px";
};
text3.onmouseout = function () {
    if (text3.value && text3.value.length > 0) {
        text3.onclick = function () {
          label3.style.marginTop = -15 + "px";
          label3.style.fontSize = 13 + "px";
        };
      } else {
        label3.style.marginTop = 0 + "px";
        label3.style.fontSize = 16 + "px";
      }
};


