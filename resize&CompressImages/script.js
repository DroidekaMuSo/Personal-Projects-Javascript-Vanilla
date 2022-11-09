const uploadBox = document.querySelector(".upload-box"),
  previewImg = document.querySelector("img"),
  fileInput = document.querySelector("input"),
  widthInput = document.querySelector(".width input"),
  heigInput = document.querySelector(".height input");

const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    widthInput.value = previewImg.naturalWidth;
    heightInput.value = previewImg.naturalHeight;
    document.querySelector(".wrapper").classList.add("active");
  });
};

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
