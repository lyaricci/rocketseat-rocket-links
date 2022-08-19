let btn = document.getElementById('btn-toggle');

let currentTheme = localStorage.getItem('theme-mode');

if (currentTheme == 'dark') {
	document.body.classList.toggle('dark-mode');
} else if (currentTheme == 'light') {
	document.body.classList.toggle('light-mode');
}

btn.addEventListener('click', function () {
	document.body.classList.toggle('dark-mode');
	let theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
	localStorage.setItem('theme-mode', theme);
});
