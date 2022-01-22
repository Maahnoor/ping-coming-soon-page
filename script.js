const form = document.querySelector('#flex-container-2 form');
const input = document.querySelector('#flex-container-2 input');
const msg= document.getElementById('error-msg');

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	
		if(!input.value){
			input.parentElement.classList.add('error');
			msg.innerHTML="Whoops! It looks like you forgot to add your email";
		} else if(!validateEmail(input.value)){
			input.parentElement.classList.add('error');
			msg.innerHTML="Please provide a valid email address";
		} else{
			msg.innerHTML= "";
			input.parentElement.classList.remove('error')
			}
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

