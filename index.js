function handleDrop(event) {
	event.preventDefault();
	document.getElementById("drop-area").classList.remove("highlight");

	const files = event.dataTransfer.files;
	if (files.length !== 2) {
		alert("Please drop exactly 2 image files.");
		return;
	}

	for (let i = 0; i < files.length; i++) {
		if (!files[i].type.startsWith("image/")) {
			alert("Please drop only image files.");
			return;
		}
		const reader = new FileReader();
		reader.onload = function (e) {
			const image = new Image();
			image.src = e.target.result;
			document.getElementById("image-preview").appendChild(image);
		};
		reader.readAsDataURL(files[i]);
	}
}

document.getElementById("drop-area").addEventListener("click", function () {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = "image/*";
	input.multiple = true;
	input.onchange = function (e) {
		const files = e.target.files;
		if (files.length !== 2) {
			alert("Please select exactly 2 image files.");
			return;
		}

		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader();
			reader.onload = function (event) {
				const image = new Image();
				image.src = event.target.result;
				document.getElementById("image-preview").appendChild(image);
			};
			reader.readAsDataURL(files[i]);
		}
	};
	input.click();
});
