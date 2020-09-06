const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    const mail = email.value.trim();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(mail == ''){
        errorFunc( email, 'Email cannot be empty');
    } else if(!mail.match(pattern)){
        errorFunc( email, 'Looks like this is not an email');
    } else{
        successFunc(mail);
    }
})

function errorFunc(main, message) {
    const formControl = main.parentElement;
	const span = formControl.querySelector('span');
	main.className += 'error';
    span.innerText = message;
    span.className += 'error-text';
}

function successFunc(){
    alert('Thanking You!!');
}



// if (!validateEmail(emailVal)) {
//     form.classList.add('error');
// } else {
//     form.classList.remove('error');
//     document.body.innerHTML = `Thank you!`;
// }

// function validateEmail(email) {
// 	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }