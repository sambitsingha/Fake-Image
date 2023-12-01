ScrollReveal({
	reset: true,
	distance: "60px",
	duration: 2500,
	delay: 400,
});

ScrollReveal().reveal("#heading , #sub-heading ,#image,#upload", {
	delay: 500,
	origin: "top",
});
ScrollReveal().reveal(".image-drop", {
	delay: 500,
	origin: "left",
});
ScrollReveal().reveal(".sub-footer", {
	delay: 500,
	origin: "bottom",
});
ScrollReveal().reveal(".footer", {
	delay: 600,
	origin: "bottom",
});
