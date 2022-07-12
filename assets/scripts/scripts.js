const APIURL = "https://api.jikan.moe/v3/search/anime?q=naruto";

const gridImg = document.querySelector(".grid-img");
const range = document.getElementById("range");
const rangeNumber = document.getElementById("range-number");
const initialGrid = 4;

getImages(APIURL);

// Async function to fetch all images from APIURL
async function getImages(url) {
	const resp = await fetch(url);
	const respData = await resp.json();
	showImages(respData.results);
}

// Function to show all our images inside the gridImg
function showImages(imgs) {
	imgs.forEach((img) => {
		const { image_url } = img;
		gridImg.innerHTML += `
      <div class="img">
         <img src="${image_url}" />
       </div>
    `;
		//Show by default 4 images in the gridImg content
		gridImg.style.gridTemplateColumns = `repeat(${initialGrid}, 1fr)`;
		rangeNumber.innerText = initialGrid;
	});
}

//When range oninput the value of the gridtemplatecolumns will be the range value
range.oninput = () => {
	gridImg.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
	rangeNumber.innerText = range.value;
};
