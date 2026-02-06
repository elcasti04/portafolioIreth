document.addEventListener('DOMContentLoaded', function () {
	/* -------------------- DESCARGAR CV -------------------- */
	const btnCV = document.getElementById('Descargar-Cv');
	if (btnCV) {
		btnCV.addEventListener('click', function () {
			const cvUrl = 'src/documents/curriculum.pdf';
			const link = document.createElement('a');
			link.href = cvUrl;
			link.download = 'Curriculum CV Ireth Franco.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	}

	/* -------------------------cambiar Idioma----------------------------*/
	const idiomabtn = document.getElementById('Idioma');
	if (idiomabtn) {
		idiomabtn.addEventListener('click', function (e) {
			e.preventDefault();
			const file = window.location.pathname.split('/').pop() || 'index.html';
			const newUrl = file.includes('index-en') ? 'index.html' : 'index-en.html';
			window.location.href = newUrl;
		});
	}

	/* -------------------------cambiar Modo----------------------------*/
	const modobtn = document.getElementById('modo');
	if (modobtn) {
		modobtn.addEventListener('click', function () {
			document.body.classList.toggle('light');
		});
	}
});
