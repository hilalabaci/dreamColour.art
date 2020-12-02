var productList = [
  {
    imgSrc: "assets/img/lillyColinsDrawing1.jpg",
    title: "Product 1",
    descriptopn: "Description 1",
    price: 15,
  },
  {
    imgSrc: "assets/img/lillyColinsDrawing2.jpg",
    title: "Product 2",
    descriptopn: "Description 2",
    price: 10,
  },
  {
    imgSrc: "assets/img/lillyColinsDrawing3.jpg",
    title: "Product 3",
    descriptopn: "Description 3",
    price: 12,
  },
];

var product = document.getElementsByClassName("productContainer")[0];
var container = document.getElementsByClassName("container")[0];

for (var i = 0; i < productList.length; i++) {
  var cloneProduct = product.cloneNode(true);
  container.appendChild(cloneProduct);
}

function clickDetail() {
  window.location.href = "productDetail.html";
}

function onMouseOver(x) {
  x.src = "assets/img/lillyColinsDrawing3.jpg";
}

function onMouseLeave(x) {
  x.src = "assets/img/lillyColinsDrawing1.jpg";
}
