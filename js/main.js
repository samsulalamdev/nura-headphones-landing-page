// Colour picker, email check and footer year. Bootstrap handles the menu and the FAQ.

var productImage = document.getElementById("product-image");
var colourName = document.getElementById("colour-name");
var picker = document.getElementById("colour-picker");

picker.addEventListener("click", function (event) {
  var swatch = event.target.closest(".swatch");
  if (!swatch) {
    return;
  }

  // Move the "active" ring to the clicked swatch
  picker.querySelectorAll(".swatch").forEach(function (item) {
    item.classList.remove("active");
  });
  swatch.classList.add("active");

  var colour = swatch.dataset.colour;
  var name = swatch.dataset.name;

  colourName.textContent = name;
  productImage.src = "images/product-" + colour + ".jpg";
  productImage.alt = "Nura One in " + name;
  productImage.style.display = ""; // show again if an earlier image was missing
});

// Email form
var form = document.getElementById("buy-form");
var emailInput = document.getElementById("email");
var success = document.getElementById("buy-success");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

  emailInput.classList.toggle("is-invalid", !looksValid);
  success.hidden = !looksValid;

  if (looksValid) {
    form.reset();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
