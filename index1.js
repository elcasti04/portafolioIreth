document.addEventListener('DOMContentLoaded', function () {
	/* -------------------- DESCARGAR CV -------------------- */
	const btnCV = document.getElementById('Descargar-Cv');
	if (btnCV) {
		btnCV.addEventListener('click', function () {
			const cvUrl = '../src/documents/curriculum.pdf';
			const link = document.createElement('a');
			link.href = cvUrl;
			link.download = 'Curriculum CV Ireth Franco.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
	}
});
/* -------------------------cambiar Idioma----------------------------*/
const idiomabtn = document.getElementById('Idioma');
if (idiomabtn) {
	idiomabtn.addEventListener('click', function (e) {
		e.preventDefault();
		const file = window.location.pathname.split('/').pop() || 'index.html';
		const newUrl =
			file === 'index.html' || file === '' ? 'index-en.html' : 'index.html';
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

//-------------------formulario--------------------

const form = document.querySelector('form');

function enviarFormulario(e) {
	e.preventDefault();

	const nombre = document.getElementById('nombre').value.trim();
	const mensaje = document.getElementById('mensaje').value.trim();

	if (!nombre || !mensaje) {
		alert('Por favor complete todos los campos.');
		return;
	}

	alert(`Gracias ${nombre}, tu mensaje fue enviado correctamente.`);

	form.reset();
}

form.addEventListener('submit', enviarFormulario);

function enviarCorreo(nombre, email, mensaje) {
	emailjs.init('YW60BJj-qlmuXfPxy');

	emailjs
		.send('service_eqg6w9p', 'template_djlbpld', {
			from_name: nombre,
			from_email: email,
			message: mensaje,
		})
		.then(
			function (response) {
				console.log('Correo enviado exitosamente');
				document.getElementById('nombre').value = '';
				document.getElementById('email').value = '';
				document.getElementById('mensaje').value = '';
			},
			function (error) {
				console.error('Error al enviar correo', error);
				alert('Hubo un problema al enviar el mensaje, intenta más tarde.');
			},
		);
}
