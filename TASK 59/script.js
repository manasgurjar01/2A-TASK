let image = document.querySelector("#image");
let preview = document.querySelector("#preview");

image.addEventListener("change", () => {
  let file = image.files[0];
  let imageURL = URL.createObjectURL(file);
  preview.src = imageURL;
});
