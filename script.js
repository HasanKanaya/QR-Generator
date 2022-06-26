// Variables
let mainShape = document.querySelector(".shape");
let genBtn = mainShape.querySelector(".form button");
let qrInput = mainShape.querySelector(".form input");
let qrImg = mainShape.querySelector(".qr-gen img");
// Variables

// Generat QR
genBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  genBtn.innerText = "Generating QR Code";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    mainShape.classList.add("active");
    genBtn.innerText = "Generate QR Code";
  });
});
// Generat QR

// When Removing Text Remove QR
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    mainShape.classList.remove("active");
  }
});
// When Removing Text Remove QR
