var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $removeBtn = document.querySelectorAll(".btn-delete");
var $createBtn = document.getElementById("create");

function updateSubtotal(product) {
  // Iteration 1.1
  const price = product.querySelector(".pu span").innerText;
  const quantity = product.querySelector(".qty input").value;
  const subtotalValue = price * quantity;
  product.querySelector(".subtot span").innerText = subtotalValue;
  console.log("Calculating subtotal, yey!");
  return subtotalValue;
}

function calculateAll() {
  // Iteration 1.2
  let total = 0;
  document
    .querySelectorAll(".product")
    .forEach(product => (total += updateSubtotal(product)));
  document.querySelector("#total h2 span").innerText = total;
}

function removeProduct(event) {
  const element = event.currentTarget;
  const child = element.parentNode.parentNode;
  const parent = child.parentNode;
  parent.removeChild(child);
}
function createProduct() {
  let name = document.querySelector(".new> td input").value;
  const priceNumber = document.querySelector(".new td:nth-child(2) input")
    .value;
  let price = Number.parseFloat(priceNumber).toFixed(2);
  const newRow = document.querySelector(".product").cloneNode(true);
  newRow.querySelector(".name span").innerText = name;
  newRow.querySelector(".pu span").innerText = price;
  const tbody = document.querySelector("tbody");
  tbody.appendChild(newRow);
  newRow.querySelector(".btn-delete").onclick = removeProduct;
  document.querySelector(".new> td input").value = "";
  document.querySelector(".new td:nth-child(2) input").value = "";
}

$calc.onclick = calculateAll;
$removeBtn.forEach(btn => (btn.onclick = removeProduct));
$createBtn.onclick = createProduct;