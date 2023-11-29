const dropZone = document.getElementById("drop-zone");
const dropZoneText = document.getElementById("drop-zone-text");
const uploadedImage = document.getElementById("uploaded-image");
const fileInput = document.getElementById("file-input");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
	dropZone.addEventListener(eventName, preventDefaults, false);
	document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when item is dragged over it
["dragenter", "dragover"].forEach((eventName) => {
	dropZone.addEventListener(eventName, highlight, false);
});

// Remove highlight when item is dragged out of drop zone
["dragleave", "drop"].forEach((eventName) => {
	dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener("drop", handleDrop, false);

// Click event on drop zone triggers file input
dropZone.addEventListener("click", function () {
	fileInput.click();
});

// Handle file input change
fileInput.addEventListener("change", function () {
	const files = fileInput.files;
	handleFiles(files);
});

// Prevent default actions
function preventDefaults(e) {
	e.preventDefault();
	e.stopPropagation();
}

// Highlight drop zone when item is dragged over it
function highlight() {
	dropZone.classList.add("highlight");
}

// Remove highlight when item is dragged out of drop zone
function unhighlight() {
	dropZone.classList.remove("highlight");
}

// Handle dropped files
function handleDrop(e) {
	const dt = e.dataTransfer;
	const files = dt.files;

	handleFiles(files);
}

// Handle files after they're dropped or selected
function handleFiles(files) {
	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		// Check if the file is an image
		if (file.type.startsWith("image/")) {
			const reader = new FileReader();

			reader.onload = function (e) {
				uploadedImage.style.display = "block";
				uploadedImage.src = e.target.result;
			};

			reader.readAsDataURL(file);
		} else {
			alert("Please drop only image files.");
		}
	}
}
