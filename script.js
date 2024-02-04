const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sidebar = document.querySelector(".container .left-section");
const sidebarItems = document.querySelectorAll(
	".container .left-section .sidebar .item"
);

menuOpen.addEventListener("click", () => {
	sidebar.style.left = "0";
});

menuClose.addEventListener("click", () => {
	sidebar.style.left = "-80px";
});

sidebarItems.forEach((item) => {
	item.addEventListener("click", () => {
		let activeItem = document.querySelector(
			".container .left-section .sidebar .item.active"
		);
		activeItem.classList.remove("active");
		item.classList.add("active");
	});
});
