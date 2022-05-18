const form = document.querySelector('#subscribe-form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
	// regex for email format
	const pattern = '/^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$/';

	if (email.value === '' || email.value == null || !pattern.test(email.value)) {
		e.preventDefault();
		email.style.borderColor = 'hsl(0, 93%, 68%)';
		form.querySelector('.icon-error').style.display = 'block';
		form.querySelector('.error-msg').style.display = 'block';
	}
});
