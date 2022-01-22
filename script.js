const form = document.querySelector('#flex-container-2 form');
const input = document.querySelector('#flex-container-2 input');
const msg= document.getElementById('error-msg');

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	
		if(!input.value){
			input.style.border= ' 2px solid var(--light-red)';
			input.style.outline = 'none';
			msg.innerHTML="Whoops! It looks like you forgot to add your email";
		} else if(!validateEmail(input.value)){
			input.style.border= ' 2px solid var(--light-red)';
			input.style.outline = 'none';
			msg.innerHTML="Please provide a valid email address";
		} else{
			msg.innerHTML= "";
			input.style.border= 'none';
			input.style.outline= '1px solid hsl(0, 0%, 59%)';
			}
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

