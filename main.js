const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPalette = 32;

const generatePalette = () => {
  container.innerHTML = ""; // clearing the container
  for (var i = 0; i < maxPalette; i++) {
    // generate a random hex color code "0*ffffff"
   let randomHex = Math.floor(Math.random() * 16777215).toString(16);
    randomHex = `#${randomHex.padStart(6,"0")}`;

    // creating anew "li" element and instriting it to the cntainer
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="rect-box" style = "background:${randomHex}">
     </div>
     <span class="hex-value">${randomHex}</span>`;
     //adding click to current li element to copy the color
     color.addEventListener("click", ()  => copyColor(color,randomHex));
     container.appendChild(color);
  }
}
generatePalette();

const copyColor = (ele , hexvalue) => {
  const colorElement = ele.querySelector(".hex-value");
  // copying the hex value, updating the text to Copied
  // and changing text back to original hex value after 1 second
  navigator.clipboard.writeText(hexvalue).then(() => {
    colorElement.innerText = "Copied";
    setTimeout(() => colorElement.innerText = hexvalue , 1000);
  }).catch(() => alert("failed to copy the color code!")); // showing alert if color can't be copied
}

refreshBtn.addEventListener("click", generatePalette);
